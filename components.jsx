/* Shared UI components */
const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } = React;

// Router-ish context
const RouterCtx = createContext({ page: 'home', setPage: () => {} });
const useRouter = () => useContext(RouterCtx);

// ─── URL routing helpers ────────────────────────────────────────────────
// Every page gets a real, shareable, bookmarkable hash URL (e.g. #/case-studies/amanah).
const ROUTES = [
  { page: 'home', path: '/' },
  { page: 'services', path: '/services' },
  { page: 'industries', path: '/industries' },
  { page: 'cases', path: '/case-studies' },
  { page: 'about', path: '/about' },
  { page: 'contact', path: '/contact' },
  { page: 'privacy', path: '/privacy' },
  { page: 'terms', path: '/terms' },
  { page: '404', path: '/not-found' },
];

function pathFor(page, slug) {
  if (page === 'case' && slug) return `#/case-studies/${slug}`;
  const route = ROUTES.find(r => r.page === page);
  return `#${route ? route.path : '/'}`;
}

function parseHash(hash) {
  const clean = String(hash || '').replace(/^#/, '');
  const segments = clean.split('/').filter(Boolean);
  if (segments.length === 0) return { page: 'home', slug: null };
  if (segments[0] === 'case-studies') {
    return segments[1] ? { page: 'case', slug: segments[1] } : { page: 'cases', slug: null };
  }
  const known = ROUTES.find(r => r.page === segments[0] || r.path === `/${segments[0]}`);
  // An unrecognised URL gets the real not-found page, not a silent redirect home.
  return known ? { page: known.page, slug: null } : { page: '404', slug: null };
}

// True for a plain left-click with no modifier keys — i.e. a click that should be
// intercepted for SPA navigation rather than left to the browser's default (new tab, etc.)
function isPlainClick(e) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

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
  const isInternal = href && href.startsWith('#') && !href.startsWith('#/');
  const resolvedHref = isInternal ? pathFor(href.slice(1)) : href;
  const handle = (e) => {
    if (isInternal && isPlainClick(e)) {
      e.preventDefault();
      setPage(href.slice(1));
    }
    if (onClick) onClick(e);
  };
  return (
    <a className={cls} href={resolvedHref || '#'} onClick={handle} style={style}>{inner}</a>
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

// The delivery loop, drawn plainly. The stage names are the ones used in the
// surrounding copy — "data / train / deploy / monitor" was engineering shorthand
// that a founder reading this page would not recognise.
function PipelineDiagram({ height = 220 }) {
  const stages = ['Build', 'Launch', 'Measure', 'Improve'];
  const xs = [86, 262, 438, 614];
  const y = 96;
  return (
    <svg viewBox="0 0 700 200" width="100%" height={height} role="img"
         aria-label="A four-stage loop: build, launch, measure, improve — then back to build."
         style={{ display: 'block' }}>
      {/* the forward line */}
      <line x1={xs[0]} y1={y} x2={xs[3]} y2={y} stroke="var(--border-strong)" strokeWidth="1.5" />

      {/* the feedback arc, back to the start */}
      <path d={`M ${xs[3]} ${y + 26} Q ${xs[3]} ${y + 76} ${(xs[0] + xs[3]) / 2} ${y + 76} Q ${xs[0]} ${y + 76} ${xs[0]} ${y + 26}`}
            fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.7" />
      <text x={(xs[0] + xs[3]) / 2} y={y + 94} textAnchor="middle"
            fontFamily="Geist, system-ui, sans-serif" fontSize="12.5" fill="var(--accent)">
        every month, not just at launch
      </text>

      {stages.map((label, i) => (
        <g key={label} transform={`translate(${xs[i]}, ${y})`}>
          <rect x="-13" y="-13" width="26" height="26" rx="5"
                fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
          <text textAnchor="middle" y="4.5"
                fontFamily="Geist Mono, ui-monospace, monospace" fontSize="11" fontWeight="500"
                fill="var(--accent)">{i + 1}</text>
          <text textAnchor="middle" y="-28"
                fontFamily="Geist, system-ui, sans-serif" fontSize="15" fontWeight="500"
                letterSpacing="-0.2" fill="var(--text)">{label}</text>
        </g>
      ))}

      {/* a single mark travelling the loop */}
      <circle r="4" fill="var(--accent)">
        <animateMotion dur="7s" repeatCount="indefinite"
          path={`M ${xs[0]} ${y} L ${xs[3]} ${y} Q ${xs[3]} ${y + 76} ${(xs[0] + xs[3]) / 2} ${y + 76} Q ${xs[0]} ${y + 76} ${xs[0]} ${y}`} />
      </circle>
    </svg>
  );
}

// Footer — three navigational paths plus the legal row, not a link farm.
function Footer() {
  const { setPage } = useRouter();
  const go = (page) => (e) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    setPage(page);
    window.scrollTo({ top: 0 });
  };
  const cols = [
    { h: 'Work', items: [['Case studies', 'cases'], ['Industries', 'industries'], ['Services', 'services']] },
    { h: 'Company', items: [['About', 'about'], ['Contact', 'contact']] },
  ];
  return (
    <footer className="footer on-inverse">
      <div className="page footer-inner">
        <div className="footer-brand">
          <Logo size={30} />
          <p className="footer-line">
            AI products, built end to end. Working software in four weeks,
            production platforms after that.
          </p>
          <a className="footer-mail" href="mailto:info@corelogics.co">info@corelogics.co</a>
        </div>

        <nav className="footer-cols" aria-label="Footer">
          {cols.map(c => (
            <div key={c.h} className="footer-col">
              <h2 className="mono footer-h">{c.h}</h2>
              {c.items.map(([label, page]) => (
                <a key={label} href={pathFor(page)} onClick={go(page)}>{label}</a>
              ))}
            </div>
          ))}
          <div className="footer-col">
            <h2 className="mono footer-h">Elsewhere</h2>
            <a href="https://www.linkedin.com/company/corelogics-ai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.corelogics.co">corelogics.co</a>
          </div>
        </nav>
      </div>

      <div className="page footer-rail">
        <span className="footer-legal-note">
          © 2026 Corelogics Technologies FZ-LLC · Established 2022 · Ajman, UAE
        </span>
        <span className="footer-legal-links">
          <a href={pathFor('privacy')} onClick={go('privacy')}>Privacy</a>
          <a href={pathFor('terms')} onClick={go('terms')}>Terms</a>
          <span className="footer-status">
            <span className="pulse-dot"></span> Available for new projects
          </span>
        </span>
      </div>
    </footer>
  );
}

// Both artworks render; CSS shows the one that suits the surface.
// Only one carries the alt text so screen readers announce the brand once.
function Logo({ size = 26, as: As = 'span' }) {
  const h = Math.round(size * 1.5);
  return (
    <As className="logo-a">
      <img src="assets/logo-dark.png" alt="Corelogics"
           className="logo-img on-paper" style={{ height: h }} width="556" height="176" />
      <img src="assets/logo-light.png" alt="" aria-hidden="true"
           className="logo-img on-dark" style={{ height: h }} width="556" height="176" />
    </As>
  );
}

// The standalone brace mark, for tight spots (mobile nav, avatars, favicons).
function LogoMark({ size = 28 }) {
  return (
    <span className="logo-a">
      <img src="assets/logo-mark-dark.png" alt="Corelogics"
           className="logo-img on-paper" style={{ height: size }} />
      <img src="assets/logo-mark.png" alt="" aria-hidden="true"
           className="logo-img on-dark" style={{ height: size }} />
    </span>
  );
}

// ─── Auxiliary CSS injected ─────────────────────────────────────────────
const componentsCss = `
/* ── Corner-bracket card — a quiet technical signal, not a bordered box ── */
.corner-card {
  position: relative;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  box-shadow: var(--shadow-2);
  transition: box-shadow 0.25s var(--ease), border-color 0.25s var(--ease), transform 0.25s var(--ease);
}
.corner-card .corner { position: absolute; width: 9px; height: 9px; pointer-events: none; }
.corner-card .corner::before, .corner-card .corner::after { content: ""; position: absolute; background: var(--border-strong); transition: background 0.25s var(--ease); }
.corner-card .corner.tl { top: -1px; left: -1px; } .corner-card .corner.tr { top: -1px; right: -1px; } .corner-card .corner.bl { bottom: -1px; left: -1px; } .corner-card .corner.br { bottom: -1px; right: -1px; }
.corner-card .corner.tl::before, .corner-card .corner.bl::before { width: 1px; height: 9px; left: 4px; top: 0; }
.corner-card .corner.tr::before, .corner-card .corner.br::before { width: 1px; height: 9px; right: 4px; top: 0; }
.corner-card .corner.tl::after, .corner-card .corner.tr::after { width: 9px; height: 1px; top: 4px; left: 0; }
.corner-card .corner.bl::after, .corner-card .corner.br::after { width: 9px; height: 1px; bottom: 4px; left: 0; }
.corner-card:hover .corner::before, .corner-card:hover .corner::after { background: var(--accent); }

/* ── Placeholder slot ──────────────────────────────────────────────────── */
.ph-slot { position: relative; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: var(--bg-2); }
.ph-stripes { position: absolute; inset: 0; background-image: repeating-linear-gradient(135deg, var(--surface-3) 0 14px, var(--bg-2) 14px 28px); opacity: 0.6; }
.ph-meta { position: absolute; left: 14px; top: 14px; }

/* ── Footer ────────────────────────────────────────────────────────────── */
.footer { padding: clamp(64px, 7vw, 96px) 0 28px; position: relative; }
.footer-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1.6fr);
  gap: clamp(40px, 6vw, 88px);
  align-items: start;
}
.footer-line {
  margin-top: 22px;
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--inverse-text-muted);
  max-width: 34ch;
}
.footer-mail {
  display: inline-block;
  margin-top: 18px;
  font-size: 14.5px;
  color: var(--inverse-text);
  border-bottom: 1px solid var(--inverse-border);
  padding-bottom: 2px;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}
.footer-mail:hover { color: var(--accent); border-color: var(--accent); }

.footer-cols { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; }
.footer-col a {
  display: block;
  color: var(--inverse-text-muted);
  margin-top: 11px;
  font-size: 14.5px;
  width: fit-content;
  transition: color 0.18s var(--ease), transform 0.18s var(--ease);
}
.footer-col a:hover { color: var(--inverse-text); transform: translateX(2px); }
.footer-h {
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--inverse-text-dim);
  margin-bottom: 4px;
}

.footer-rail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px 28px;
  flex-wrap: wrap;
  margin-top: clamp(48px, 6vw, 76px);
  padding-top: 20px;
  border-top: 1px solid var(--inverse-border);
  font-size: 12.5px;
  color: var(--inverse-text-dim);
}
.footer-legal-links { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
.footer-legal-links a { transition: color 0.18s var(--ease); }
.footer-legal-links a:hover { color: var(--inverse-text); }
.footer-status { display: inline-flex; align-items: center; gap: 7px; }

/* ── Live status dot ───────────────────────────────────────────────────── */
.pulse-dot {
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 999px;
  background: var(--green);
  box-shadow: 0 0 0 0 var(--green-wash);
  animation: pulse 2.4s infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 var(--green-wash); }
  70%  { box-shadow: 0 0 0 7px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

@media (max-width: 880px) {
  .footer-inner { grid-template-columns: 1fr; gap: 44px; }
  .footer-cols { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 32px; }
}
@media (max-width: 520px) {
  .footer-rail { flex-direction: column; align-items: flex-start; }
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
  RouterCtx, useRouter, pathFor, parseHash, isPlainClick,
  Eyebrow, Button, CornerCard, Reveal, Counter, PlaceholderSlot, PipelineDiagram, Footer, Logo, LogoMark,
});
