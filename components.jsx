/* Shared UI components */
const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

// Router-ish context
const RouterCtx = createContext({ page: 'home', setPage: () => {} });
const useRouter = () => useContext(RouterCtx);

// ─── Pieces ─────────────────────────────────────────────────────────────

function Eyebrow({ children, dot = true, style }) {
  return (
    <div className="eyebrow" style={style}>
      {dot && <span className="dot"></span>}
      <span>{children}</span>
    </div>
  );
}

function Button({ kind = 'primary', children, onClick, href, arrow = true, style }) {
  const cls = `btn btn-${kind}`;
  const inner = (
    <React.Fragment>
      <span>{children}</span>
      {arrow && <span className="arrow">→</span>}
    </React.Fragment>
  );
  const { setPage } = useRouter();
  const handle = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setPage(href.slice(1));
    }
    if (onClick) onClick(e);
  };
  return (
    <a className={cls} href={href || '#'} onClick={handle} style={style}>{inner}</a>
  );
}

// Plus-corner card frame (subtle technical signal)
function CornerCard({ children, className = '', style, glow = false }) {
  return (
    <div className={`corner-card ${className}`} style={style}>
      <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>
      {glow && <span className="corner-glow"></span>}
      {children}
    </div>
  );
}

// Subtle reveal-on-scroll wrapper
function Reveal({ children, delay = 0, as: As = 'div', className = '', style }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const show = () => { if (!cancelled) setTimeout(() => setSeen(true), delay); };

    // Already in viewport on mount? Reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh - 40 && rect.bottom > 0) {
      show();
      return () => { cancelled = true; };
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          show();
          io.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);

    // Safety net: if for any reason the IO doesn't fire within 1.5s, reveal anyway
    const safety = setTimeout(() => { show(); io.disconnect(); }, 1500);

    return () => {
      cancelled = true;
      io.disconnect();
      clearTimeout(safety);
    };
  }, [delay]);
  return (
    <As
      ref={ref}
      className={`reveal ${seen ? 'in' : ''} ${className}`}
      style={seen ? { ...style, opacity: 1, transform: 'none', transition: 'none' } : style}
    >
      {children}
    </As>
  );
}

// Animated metric counter
function Counter({ to, suffix = '', prefix = '', duration = 1600, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setActive(true); io.unobserve(el); } });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}

// Placeholder image slot — striped, monospace label
function PlaceholderSlot({ label = 'image', height = 280, hint, className = '', style }) {
  return (
    <div className={`ph-slot ${className}`} style={{ height, ...style }}>
      <div className="ph-stripes"></div>
      <div className="ph-meta">
        <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{label}</div>
        {hint && <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 6 }}>{hint}</div>}
      </div>
    </div>
  );
}

// SVG: stylized pipeline diagram (data → model → deploy)
function PipelineDiagram({ height = 220 }) {
  return (
    <svg viewBox="0 0 600 220" width="100%" height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id="pl-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.0" />
          <stop offset="0.3" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="0.7" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.0" />
        </linearGradient>
        <radialGradient id="pl-node" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* horizontal flow line */}
      <line x1="40" y1="110" x2="560" y2="110" stroke="url(#pl-line)" strokeWidth="1" />
      {/* dashed feedback line */}
      <path d="M 540 110 Q 540 30 300 30 Q 60 30 60 110" fill="none" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 4" />
      {/* nodes */}
      {[80, 220, 380, 520].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={110} r="22" fill="url(#pl-node)" />
          <circle cx={x} cy={110} r="6" fill="var(--bg-2)" stroke="var(--accent)" strokeWidth="1.2" />
        </g>
      ))}
      {/* labels */}
      {[
        { x: 80, t: 'DATA' },
        { x: 220, t: 'TRAIN' },
        { x: 380, t: 'DEPLOY' },
        { x: 520, t: 'MONITOR' },
      ].map(({ x, t }, i) => (
        <text key={i} x={x} y={170} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2" fill="var(--text-dim)">{t}</text>
      ))}
      {/* moving pulse */}
      <circle r="3" fill="var(--gold)">
        <animateMotion dur="6s" repeatCount="indefinite" path="M 40 110 L 560 110" />
      </circle>
    </svg>
  );
}

// Footer
function Footer() {
  const { setPage } = useRouter();
  const cols = [
    { h: 'Company', items: [['About', 'about'], ['Case Studies', 'cases'], ['Industries', 'industries'], ['Contact', 'contact']] },
    { h: 'AI & Intelligent Systems', items: [['Computer Vision', 'services'], ['Generative AI', 'services'], ['AI Data Services', 'services'], ['MLOps & Infrastructure', 'services'], ['Edge & Cloud AI', 'services']] },
    { h: 'Product & Engineering', items: [['UI/UX Design', 'services'], ['Web Development', 'services'], ['Mobile Apps', 'services'], ['Data Engineering', 'services'], ['BI & Fintech', 'services']] },
  ];
  return (
    <footer className="footer hairline">
      <div className="page footer-inner">
        <div className="footer-brand">
          <Logo size={28} />
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 18, letterSpacing: '0.14em' }}>
            AI AT THE CORE · FULL-STACK DELIVERY
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 12 }}>
            © 2026 Corelogics Technologies
          </div>
        </div>
        <div className="footer-cols">
          {cols.map(c => (
            <div key={c.h} className="footer-col">
              <div className="mono footer-h">{c.h}</div>
              {c.items.map(([label, page]) => (
                <a key={label} href={`#${page}`} onClick={(e) => { e.preventDefault(); setPage(page); window.scrollTo({ top: 0 }); }}>{label}</a>
              ))}
            </div>
          ))}
          <div className="footer-col">
            <div className="mono footer-h">Connect</div>
            <a href="mailto:info@corelogics.ae">info@corelogics.ae</a>
            <a href="https://www.corelogics.ae">www.corelogics.ae</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-rule"></div>
      <div className="page footer-rail">
        <span className="mono">UAE · 25.4052° N, 55.5136° E</span>
        <span className="mono">STATUS · <span className="pulse-dot"></span> ALL SYSTEMS NOMINAL</span>
        <span className="mono">v2026.05</span>
      </div>
    </footer>
  );
}

function Logo({ size = 26 }) {
  return (
    <a href="#home" onClick={(e) => { e.preventDefault(); }} className="logo-a">
      <img
        src="assets/corelogics-logo.png"
        alt="Corelogics"
        className="logo-img"
        style={{ height: size * 1.1, width: 'auto' }}
      />
    </a>
  );
}

// ─── Auxiliary CSS injected ─────────────────────────────────────────────
const componentsCss = `
.corner-card { position: relative; border: 1px solid var(--border); border-radius: var(--radius); background: linear-gradient(180deg, oklch(0.20 0.014 250 / 0.55), oklch(0.16 0.012 250 / 0.45)); }
.corner-card .corner { position: absolute; width: 9px; height: 9px; pointer-events: none; }
.corner-card .corner::before, .corner-card .corner::after { content: ""; position: absolute; background: var(--text-faint); }
.corner-card .corner.tl { top: -1px; left: -1px; } .corner-card .corner.tr { top: -1px; right: -1px; } .corner-card .corner.bl { bottom: -1px; left: -1px; } .corner-card .corner.br { bottom: -1px; right: -1px; }
.corner-card .corner.tl::before, .corner-card .corner.bl::before { width: 1px; height: 9px; left: 4px; top: 0; }
.corner-card .corner.tr::before, .corner-card .corner.br::before { width: 1px; height: 9px; right: 4px; top: 0; }
.corner-card .corner.tl::after, .corner-card .corner.tr::after { width: 9px; height: 1px; top: 4px; left: 0; }
.corner-card .corner.bl::after, .corner-card .corner.br::after { width: 9px; height: 1px; bottom: 4px; left: 0; }

.ph-slot { position: relative; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: var(--bg-2); }
.ph-stripes { position: absolute; inset: 0; background-image: repeating-linear-gradient(135deg, oklch(0.22 0.015 250 / 1) 0 14px, oklch(0.17 0.012 250 / 1) 14px 28px); opacity: 0.45; }
.ph-meta { position: absolute; left: 14px; top: 14px; }

.footer { padding: 80px 0 32px; background: oklch(0.12 0.01 250); position: relative; }
.footer-inner { display: grid; grid-template-columns: 1.1fr 3fr; gap: 60px; }
.footer-cols { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
.footer-col a { display: block; color: var(--text-muted); margin-top: 10px; font-size: 14px; transition: color 0.15s ease; }
.footer-col a:hover { color: var(--text); }
.footer-h { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 6px; }
.footer-rule { height: 1px; background: var(--border); margin: 56px 0 18px; }
.footer-rail { display: flex; justify-content: space-between; font-size: 11px; color: var(--text-faint); letter-spacing: 0.12em; text-transform: uppercase; flex-wrap: wrap; gap: 12px; }
.pulse-dot { display: inline-block; width: 6px; height: 6px; border-radius: 999px; background: var(--green); box-shadow: 0 0 0 0 oklch(0.78 0.15 152 / 0.6); animation: pulse 2s infinite; vertical-align: middle; margin-right: 4px; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 oklch(0.78 0.15 152 / 0.6); } 70% { box-shadow: 0 0 0 8px oklch(0.78 0.15 152 / 0); } 100% { box-shadow: 0 0 0 0 oklch(0.78 0.15 152 / 0); } }

.logo-a { display: inline-flex; align-items: center; gap: 10px; }
.logo-wm { font-size: 17px; font-weight: 500; letter-spacing: -0.02em; }
.logo-img { display: block; width: auto; object-fit: contain; }

@media (max-width: 880px) {
  .footer-inner { grid-template-columns: 1fr; gap: 40px; }
  .footer-cols { grid-template-columns: repeat(2, 1fr); }
}
`;

// Inject once
(function injectComponentsCss() {
  if (document.getElementById('components-css')) return;
  const s = document.createElement('style');
  s.id = 'components-css';
  s.textContent = componentsCss;
  document.head.appendChild(s);
})();

// Expose React hooks globally so other Babel scripts can use them without redeclaring
Object.assign(window, {
  React,
  useState, useEffect, useRef, useMemo, useCallback, createContext, useContext,
  RouterCtx, useRouter,
  Eyebrow, Button, CornerCard, Reveal, Counter, PlaceholderSlot, PipelineDiagram, Footer, Logo,
});
