/* Animated hero canvas — particle/data-flow effect with theme support */

function HeroCanvas({ variant = 'particles' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf, w, h, dpr;
    let particles = [];
    let lines = [];
    let mouse = { x: -1000, y: -1000, t: 0 };

    const css = getComputedStyle(document.documentElement);
    const getAccent = () => css.getPropertyValue('--accent').trim() || 'oklch(0.66 0.18 252)';
    const getGold = () => css.getPropertyValue('--gold').trim() || 'oklch(0.83 0.13 86)';

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const init = () => {
      const count = Math.floor((w * h) / 18000);
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.4,
        gold: Math.random() < 0.06,
      }));
      // Flowing lines (top → bottom diagonal sweeps for variety)
      lines = Array.from({ length: 6 }).map(() => ({
        y: Math.random() * h,
        speed: 0.15 + Math.random() * 0.25,
        alpha: 0.05 + Math.random() * 0.1,
      }));
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.t = performance.now();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // grid (subtle)
      ctx.strokeStyle = 'oklch(0.30 0.018 250 / 0.18)';
      ctx.lineWidth = 1;
      const gs = 64;
      for (let x = 0; x < w; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

      // sweeping horizontal lines
      for (const l of lines) {
        l.y += l.speed;
        if (l.y > h + 10) l.y = -10;
        const grad = ctx.createLinearGradient(0, l.y, w, l.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, getAccent().replace(/^oklch\((.+)\)$/, (m, inner) => `oklch(${inner} / ${l.alpha})`));
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, l.y); ctx.lineTo(w, l.y); ctx.stroke();
      }

      // particles + connections
      const accent = getAccent();
      const gold = getGold();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

        // mouse attraction (mild)
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d2 = dx*dx + dy*dy;
        if (d2 < 140 * 140) {
          const f = 1 - Math.sqrt(d2) / 140;
          p.x += (dx / Math.sqrt(d2 + 0.01)) * f * 0.8;
          p.y += (dy / Math.sqrt(d2 + 0.01)) * f * 0.8;
        }
      }

      // Lines between close points
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.20;
            ctx.strokeStyle = accent.replace(/^oklch\((.+)\)$/, (m, inner) => `oklch(${inner} / ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const color = p.gold ? gold : accent;
        ctx.fillStyle = color.replace(/^oklch\((.+)\)$/, (m, inner) => `oklch(${inner} / ${p.gold ? 0.95 : 0.7})`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        if (p.gold) {
          ctx.fillStyle = color.replace(/^oklch\((.+)\)$/, (m, inner) => `oklch(${inner} / 0.18)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [variant]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true"></canvas>;
}

// alt static glow variant
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
    .hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.85; }
    .hero-aurora { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
    .hero-aurora > div { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.45; animation: aur 16s ease-in-out infinite alternate; }
    .aurora-a { width: 60%; height: 60%; left: -10%; top: -20%; background: var(--accent); }
    .aurora-b { width: 50%; height: 50%; right: -10%; top: 10%; background: oklch(0.45 0.16 260); animation-delay: -4s; }
    .aurora-c { width: 40%; height: 40%; left: 30%; bottom: -10%; background: var(--gold); opacity: 0.18; animation-delay: -8s; }
    @keyframes aur { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(8%, -6%) scale(1.15); } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { HeroCanvas, HeroAurora });
