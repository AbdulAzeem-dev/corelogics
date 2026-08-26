/* Animated hero canvas.

   Two variants, both driven off the CSS custom properties so they follow the
   theme and the accent tweak without a second source of truth:

   - "particles" — a slow drifting node field over a faint measured grid. It is
     deliberately sparse: on paper a dense connection web reads as noise, and
     the point is a sense of structure, not a screensaver.
   - "aurora"    — soft ambient light, used behind the closing CTA.

   Colours are re-read once a second rather than every frame; the theme only
   changes on a click, and getComputedStyle in a rAF loop is not free.
   Honours prefers-reduced-motion by drawing a single static frame. */

function HeroCanvas({ variant = 'particles' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w, h, dpr;
    let particles = [];
    let sweeps = [];
    const mouse = { x: -9999, y: -9999 };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Theme colours ────────────────────────────────────────────────────
    const root = document.documentElement;
    let palette = null;
    let paletteAt = 0;

    // Both oklch() and hex/rgb can land in the custom property depending on
    // the accent tweak, so alpha is applied in whichever syntax is present.
    const withAlpha = (color, a) => {
      const c = color.trim();
      if (c.startsWith('oklch(')) {
        const inner = c.slice(6, -1).split('/')[0].trim();
        return `oklch(${inner} / ${a})`;
      }
      if (c.startsWith('#')) {
        const hex = c.length === 4
          ? c.slice(1).split('').map(x => x + x).join('')
          : c.slice(1, 7);
        const n = parseInt(hex, 16);
        return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
      }
      return c;
    };

    const readPalette = () => {
      // Read from the canvas, not the root: the hero is an ink band that
      // re-points these tokens, and root's paper-weight border drew a hard
      // light grid straight across the dark plate.
      const css = getComputedStyle(canvas);
      const accent = css.getPropertyValue('--accent') || 'oklch(0.565 0.116 238)';
      const faint = css.getPropertyValue('--border') || 'oklch(0.912 0.004 250)';
      const dark = !!canvas.closest('.on-inverse') || root.getAttribute('data-theme') === 'dark';
      return {
        accent,
        grid: withAlpha(faint, dark ? 0.45 : 1),
        // On paper the marks need to be firmer to register at all; on dark
        // they need to be softer so they don't glare.
        dotAlpha: dark ? 0.55 : 0.42,
        nodeAlpha: dark ? 0.95 : 0.85,
        linkAlpha: dark ? 0.22 : 0.16,
        sweepAlpha: dark ? 0.16 : 0.10,
      };
    };

    const palettes = (now) => {
      if (!palette || now - paletteAt > 1000) {
        palette = readPalette();
        paletteAt = now;
      }
      return palette;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
      if (reduced) draw(performance.now());
    };

    const init = () => {
      // Sparse on purpose — roughly one node per 34,000px² rather than the
      // 18,000 the first pass used, which crowded the headline.
      const count = Math.min(90, Math.floor((w * h) / 34000));
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.1 + 0.5,
        node: Math.random() < 0.14,   // a few emphasised nodes
      }));
      sweeps = Array.from({ length: 3 }).map(() => ({
        y: Math.random() * h,
        speed: 0.12 + Math.random() * 0.18,
      }));
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = (now) => {
      const p = palettes(now);
      ctx.clearRect(0, 0, w, h);

      // Measured grid — the drafting-paper layer under everything else.
      ctx.strokeStyle = p.grid;
      ctx.lineWidth = 1;
      const gs = 72;
      for (let x = gs; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); ctx.stroke(); }
      for (let y = gs; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); ctx.stroke(); }

      // Slow horizontal sweeps, fading at both ends.
      for (const l of sweeps) {
        if (!reduced) {
          l.y += l.speed;
          if (l.y > h + 10) l.y = -10;
        }
        const grad = ctx.createLinearGradient(0, l.y, w, l.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, withAlpha(p.accent, p.sweepAlpha));
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.beginPath(); ctx.moveTo(0, l.y); ctx.lineTo(w, l.y); ctx.stroke();
      }

      if (!reduced) {
        for (const pt of particles) {
          pt.x += pt.vx;
          pt.y += pt.vy;
          if (pt.x < 0) pt.x = w; else if (pt.x > w) pt.x = 0;
          if (pt.y < 0) pt.y = h; else if (pt.y > h) pt.y = 0;

          // Mild repulsion so the field parts around the cursor.
          const dx = pt.x - mouse.x, dy = pt.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150) {
            const d = Math.sqrt(d2) || 0.01;
            const f = 1 - d / 150;
            pt.x += (dx / d) * f * 0.9;
            pt.y += (dy / d) * f * 0.9;
          }
        }
      }

      // Links between close nodes.
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 128) {
            ctx.strokeStyle = withAlpha(p.accent, (1 - d / 128) * p.linkAlpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes. The emphasised ones get a square, echoing the logo's chip.
      for (const pt of particles) {
        if (pt.node) {
          const s = pt.r * 2.6;
          ctx.fillStyle = withAlpha(p.accent, p.nodeAlpha);
          ctx.fillRect(pt.x - s / 2, pt.y - s / 2, s, s);
          ctx.strokeStyle = withAlpha(p.accent, p.nodeAlpha * 0.28);
          ctx.lineWidth = 1;
          ctx.strokeRect(pt.x - s * 1.6, pt.y - s * 1.6, s * 3.2, s * 3.2);
        } else {
          ctx.fillStyle = withAlpha(p.accent, p.dotAlpha);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now) => {
      draw(now);
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reduced) {
      window.addEventListener('mousemove', onMouse);
      raf = requestAnimationFrame(tick);
    }

    // Repaint immediately on a theme or accent switch rather than waiting out
    // the one-second colour cache.
    const themeObserver = new MutationObserver(() => {
      palette = null;
      if (reduced) draw(performance.now());
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ['data-theme', 'data-accent'] });

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [variant]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true"></canvas>;
}

// Ambient light wash — used behind the closing CTA.
function HeroAurora() {
  return (
    <div className="hero-aurora" aria-hidden="true">
      <div className="aurora-a"></div>
      <div className="aurora-b"></div>
      <div className="aurora-c"></div>
    </div>
  );
}

(function injectHeroCss() {
  if (document.getElementById('hero-css')) return;
  const s = document.createElement('style');
  s.id = 'hero-css';
  s.textContent = `
    .hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.9; }
    .hero-aurora { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .hero-aurora > div {
      position: absolute; border-radius: 50%;
      filter: blur(90px); opacity: 0.35;
      animation: aur 20s ease-in-out infinite alternate;
    }
    .aurora-a { width: 58%; height: 58%; left: -8%; top: -18%; background: var(--accent); }
    .aurora-b { width: 48%; height: 48%; right: -8%; top: 12%; background: var(--accent-soft); animation-delay: -6s; }
    .aurora-c { width: 38%; height: 38%; left: 32%; bottom: -12%; background: var(--accent); opacity: 0.14; animation-delay: -12s; }
    @keyframes aur { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(7%, -5%) scale(1.12); } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { HeroCanvas, HeroAurora });
