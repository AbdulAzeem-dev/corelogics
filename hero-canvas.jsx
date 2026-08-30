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
    // The pointer is tracked as a target the drawn position eases toward, so
    // the field answers the cursor with the same damped feel as the rest of
    // the motion design rather than snapping to it. `power` fades the whole
    // interaction in and out as the pointer enters and leaves the hero.
    const pointer = { tx: -9999, ty: -9999, x: -9999, y: -9999, power: 0, inside: false };
    let ripples = [];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const REACH = 190;   // px — how far the cursor's influence carries

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
      // Paint one frame straight away rather than waiting on the first rAF —
      // a background or throttled tab would otherwise show an empty plate.
      draw(performance.now());
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

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (pointer.inside) {
        // First contact places the eased position rather than easing in from
        // the far corner, which otherwise reads as a stray dart across frame.
        if (pointer.power === 0) { pointer.x = x; pointer.y = y; }
        pointer.tx = x; pointer.ty = y;
      }
    };

    const onLeave = () => { pointer.inside = false; };

    // A click drops a ring that expands and pushes the field outward as it
    // passes — the one moment the background answers back directly.
    const onPress = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      ripples.push({ x, y, r: 0 });
      if (ripples.length > 4) ripples.shift();
    };

    const draw = (now) => {
      const p = palettes(now);
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        pointer.x += (pointer.tx - pointer.x) * 0.12;
        pointer.y += (pointer.ty - pointer.y) * 0.12;
        const want = pointer.inside ? 1 : 0;
        pointer.power += (want - pointer.power) * (pointer.inside ? 0.08 : 0.05);
        if (pointer.power < 0.002) pointer.power = 0;
      }
      const px = pointer.x, py = pointer.y, pw = pointer.power;

      // Measured grid — the drafting-paper layer under everything else. It
      // shifts a few pixels against the cursor, which is what sells the plate
      // as having depth rather than being a flat backdrop.
      const parX = pw ? (px - w / 2) * -0.014 : 0;
      const parY = pw ? (py - h / 2) * -0.014 : 0;
      ctx.strokeStyle = p.grid;
      ctx.lineWidth = 1;
      const gs = 72;
      for (let x = gs; x < w + gs; x += gs) { const gx = Math.round(x + parX) + 0.5; ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke(); }
      for (let y = gs; y < h + gs; y += gs) { const gy = Math.round(y + parY) + 0.5; ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke(); }

      // Soft halo under the cursor, so the pointer reads as a light source
      // the field is responding to.
      if (pw > 0.01) {
        const halo = ctx.createRadialGradient(px, py, 0, px, py, REACH * 1.35);
        halo.addColorStop(0, withAlpha(p.accent, 0.13 * pw));
        halo.addColorStop(1, withAlpha(p.accent, 0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(px, py, REACH * 1.35, 0, Math.PI * 2);
        ctx.fill();
      }

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

          // Mild repulsion so the field parts around the cursor, then drifts
          // back once it leaves — the displacement is applied to position, not
          // velocity, so nothing accumulates into a runaway.
          if (pw > 0.01) {
            const dx = pt.x - px, dy = pt.y - py;
            const d2 = dx * dx + dy * dy;
            if (d2 < REACH * REACH) {
              const d = Math.sqrt(d2) || 0.01;
              const f = 1 - d / REACH;
              pt.x += (dx / d) * f * f * 1.5 * pw;
              pt.y += (dy / d) * f * f * 1.5 * pw;
            }
          }

          // A passing ripple front carries the field with it.
          for (const rp of ripples) {
            const dx = pt.x - rp.x, dy = pt.y - rp.y;
            const d = Math.hypot(dx, dy) || 0.01;
            const band = Math.abs(d - rp.r);
            if (band < 46) {
              const f = (1 - band / 46) * Math.max(0, 1 - rp.r / (Math.max(w, h) * 0.7));
              pt.x += (dx / d) * f * 1.7;
              pt.y += (dy / d) * f * 1.7;
            }
          }
        }

        // Advance and retire the rings themselves.
        for (const rp of ripples) rp.r += 5.5;
        ripples = ripples.filter(rp => rp.r < Math.max(w, h) * 0.7);
      }

      // Expanding rings from a click.
      for (const rp of ripples) {
        const fade = 1 - rp.r / (Math.max(w, h) * 0.7);
        ctx.strokeStyle = withAlpha(p.accent, 0.30 * fade * fade);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.stroke();
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

      // The cursor behaves as one more node: everything close enough wires
      // itself to it, so moving across the plate pulls a constellation along.
      if (pw > 0.01) {
        ctx.lineWidth = 1;
        for (const pt of particles) {
          const d = Math.hypot(pt.x - px, pt.y - py);
          if (d < REACH) {
            const f = 1 - d / REACH;
            ctx.strokeStyle = withAlpha(p.accent, f * f * 0.42 * pw);
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(pt.x, pt.y);
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
      // Pointer events rather than mouse events, so a stylus or touch drag
      // drives the same interaction.
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('pointerdown', onPress, { passive: true });
      window.addEventListener('pointerleave', onLeave, { passive: true });
      window.addEventListener('blur', onLeave);
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
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerdown', onPress);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
    };
  }, [variant]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true"></canvas>;
}


// ── Hero object — animated mesh gradient, opposite the headline ────────
//
// Whatamesh (github.com/jordienr/whatamesh, MIT) — the open port of the mesh
// gradient Stripe ships on its own marketing site. It is loaded from CDN at a
// pinned version, takes its four colours from CSS custom properties so the
// brand palette drives it, and is masked into a soft orb so it reads as light
// in the room rather than a rectangle of video.
//
// Desktop and motion-allowed only: there is no reason to hand a phone a WebGL
// shader for a decoration it never sees.
const MESH_SRC = 'https://cdn.jsdelivr.net/npm/whatamesh@0.2.0/+esm';

let meshPromise = null;
const loadMesh = () => {
  if (meshPromise) return meshPromise;
  meshPromise = new Promise((resolve, reject) => {
    // A module script, because the package ships ESM only.
    const el = document.createElement('script');
    el.type = 'module';
    el.textContent = `import { Gradient } from '${MESH_SRC}';
      window.__WhatameshGradient = Gradient;
      window.dispatchEvent(new Event('whatamesh:ready'));`;
    window.addEventListener('whatamesh:ready', () => resolve(window.__WhatameshGradient), { once: true });
    el.addEventListener('error', reject);
    document.head.appendChild(el);
    setTimeout(() => reject(new Error('mesh gradient timed out')), 8000);
  });
  return meshPromise;
};

function HeroObject() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(min-width: 1041px)').matches) return;

    let gradient = null, cancelled = false;

    loadMesh().then((Gradient) => {
      if (cancelled || !Gradient) return;
      gradient = new Gradient();
      gradient.initGradient('#hero-mesh');
      // The library sizes its buffer off a resize event; without one it stays
      // at the canvas default of 300×150 and renders a smeared thumbnail.
      window.dispatchEvent(new Event('resize'));
      canvas.classList.add('is-live');
    }).catch(() => { /* CDN blocked or offline — the hero simply stays plain. */ });

    return () => {
      cancelled = true;
      if (gradient && gradient.pause) gradient.pause();
    };
  }, []);

  return (
    <div className="hero-object" aria-hidden="true">
      <canvas id="hero-mesh" className="hero-mesh" ref={ref}></canvas>
    </div>
  );
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

    /* ── Hero object — mesh gradient orb ─────────────────────────────── */
    .hero-object {
      position: relative;
      min-height: clamp(340px, 36vw, 520px);
      display: grid; place-items: center;
    }
    .hero-mesh {
      width: 100%; height: 100%;
      /* The four stops the shader mixes — brand azure, kept off pure white so
         the orb glows rather than glares against the ink plate. */
      --gradient-color-1: #071a2b;
      --gradient-color-2: #0f5f96;
      --gradient-color-3: #2f9fd6;
      --gradient-color-4: #8fd3f4;
      opacity: 0;
      transition: opacity 1.4s var(--ease);
      /* Feathered to an orb, so the canvas edge never shows. */
      -webkit-mask-image: radial-gradient(circle at 52% 50%, #000 34%, transparent 70%);
      mask-image: radial-gradient(circle at 52% 50%, #000 34%, transparent 70%);
    }
    /* The library stamps .isLoaded once it has actually painted; fading on
       that rather than on init avoids a flash of unpainted canvas. */
    .hero-mesh.isLoaded, .hero-mesh.is-live { opacity: 0.92; }

  `;
  document.head.appendChild(s);
})();

Object.assign(window, { HeroCanvas, HeroAurora, HeroObject });
