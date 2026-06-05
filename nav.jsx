/* Top navigation bar */

function Nav() {
  const { page, setPage } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Services', 'services'],
    ['Industries', 'industries'],
    ['Case Studies', 'cases'],
    ['About', 'about'],
  ];
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); };
  // Highlight "Case Studies" link on detail pages too
  const activePage = page === 'case' ? 'cases' : page;
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="page nav-inner">
        <div onClick={() => go('home')} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <div className="nav-links">
          {links.map(([label, p]) => (
            <a key={p}
               href={`#${p}`}
               className={activePage === p ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); go(p); }}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <span className="mono nav-availability">
            <span className="pulse-dot"></span>
            <span>Q3 ENGAGEMENTS · OPEN</span>
          </span>
          <Button kind="gold" arrow={true} href="#contact">Book a discovery call</Button>
        </div>
      </div>
    </nav>
  );
}

(function injectNavCss() {
  if (document.getElementById('nav-css')) return;
  const s = document.createElement('style');
  s.id = 'nav-css';
  s.textContent = `
    .nav { position: sticky; top: 0; z-index: 50; transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease; }
    .nav.scrolled { background: oklch(0.14 0.01 250 / 0.78); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; gap: 24px; }
    .nav-links { display: flex; gap: 28px; }
    .nav-links a { font-size: 14px; color: var(--text-muted); transition: color 0.2s ease; position: relative; padding: 4px 0; }
    .nav-links a:hover { color: var(--text); }
    .nav-links a.active { color: var(--text); }
    .nav-links a.active::after { content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 1px; background: var(--gold); }
    .nav-right { display: flex; align-items: center; gap: 18px; }
    .nav-availability { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; color: var(--text-dim); letter-spacing: 0.14em; text-transform: uppercase; }
    @media (max-width: 920px) {
      .nav-links { display: none; }
      .nav-availability { display: none; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { Nav });
