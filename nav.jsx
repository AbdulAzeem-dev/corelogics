/* Top navigation bar */

function Nav() {
  const { page, setPage, theme, toggleTheme } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Measure the visible nav bar height so the mobile drawer can sit flush beneath it
  useEffect(() => {
    const inner = navRef.current && navRef.current.querySelector('.nav-inner');
    if (!inner) return;
    const setH = () => document.documentElement.style.setProperty('--nav-h', `${inner.offsetHeight}px`);
    setH();
    window.addEventListener('resize', setH);
    return () => window.removeEventListener('resize', setH);
  }, []);
  const links = [
    ['Services', 'services'],
    ['Industries', 'industries'],
    ['Case Studies', 'cases'],
    ['About', 'about'],
  ];
  const go = (p, e) => {
    if (e && !isPlainClick(e)) return;
    if (e) e.preventDefault();
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  // Highlight "Case Studies" link on detail pages too
  const activePage = page === 'case' ? 'cases' : page;

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  // Close the mobile menu if the viewport grows back past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 921px)');
    const onChange = () => setMenuOpen(false);
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange);
    };
  }, []);

  return (
    <nav ref={navRef} className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="page nav-inner">
        <a
          href={pathFor('home')}
          onClick={(e) => go('home', e)}
          className="nav-logo"
          aria-label="Corelogics — home"
          aria-current={activePage === 'home' ? 'page' : undefined}
        >
          <Logo size={26} />
        </a>
        <div className="nav-links">
          {links.map(([label, p]) => (
            <a key={p}
               href={pathFor(p)}
               className={activePage === p ? 'active' : ''}
               aria-current={activePage === p ? 'page' : undefined}
               onClick={(e) => go(p, e)}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <span className="nav-availability">
            <span className="pulse-dot"></span>
            <span>Booking Q3 2026</span>
          </span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>
            </svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
            </svg>
          </button>
          <Button kind="accent" arrow={true} href="#contact">Book a free call</Button>
          <button
            className={`nav-burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {ReactDOM.createPortal(
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
          <div className="nav-mobile-links">
            {links.map(([label, p]) => (
              <a key={p}
                 href={pathFor(p)}
                 className={activePage === p ? 'active' : ''}
                 aria-current={activePage === p ? 'page' : undefined}
                 onClick={(e) => go(p, e)}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-mobile-foot">
            <span className="nav-availability">
              <span className="pulse-dot"></span>
              <span>Booking Q3 2026</span>
            </span>
            <Button kind="accent" arrow={true} href="#contact" onClick={() => setMenuOpen(false)} style={{ width: '100%', justifyContent: 'center' }}>Book a free call</Button>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}

(function injectNavCss() {
  if (document.getElementById('nav-css')) return;
  const s = document.createElement('style');
  s.id = 'nav-css';
  s.textContent = `
    .nav {
      position: sticky; top: 0; z-index: var(--z-nav);
      background: transparent;
      border-bottom: 1px solid transparent;
      transition: background-color 0.3s var(--ease), border-color 0.3s var(--ease),
                  backdrop-filter 0.3s var(--ease), box-shadow 0.3s var(--ease);
    }
    .nav.scrolled {
      background: color-mix(in oklab, var(--bg) 82%, transparent);
      backdrop-filter: blur(16px) saturate(1.4);
      -webkit-backdrop-filter: blur(16px) saturate(1.4);
      border-bottom-color: var(--border);
      box-shadow: var(--shadow-1);
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; gap: 24px; }
    .nav-logo { display: inline-flex; border-radius: var(--radius-xs); }

    .nav-links { display: flex; gap: 4px; }
    .nav-links a {
      font-size: 14.5px; font-weight: 450;
      color: var(--text-muted);
      padding: 7px 12px;
      border-radius: var(--radius-sm);
      position: relative;
      transition: color 0.2s var(--ease), background-color 0.2s var(--ease);
    }
    .nav-links a:hover { color: var(--text); background: var(--surface-2); }
    .nav-links a.active { color: var(--text); font-weight: 500; }
    .nav-links a.active::after {
      content: ""; position: absolute;
      left: 12px; right: 12px; bottom: 1px;
      height: 2px; border-radius: 2px;
      background: var(--accent);
    }

    .nav-right { display: flex; align-items: center; gap: 14px; }
    .nav-availability {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 13px; color: var(--text-dim);
      padding-right: 4px;
    }

    .nav-burger { display: none; width: 38px; height: 38px; border-radius: var(--radius-sm); align-items: center; justify-content: center; flex-shrink: 0; flex-direction: column; gap: 5px; border: 1px solid var(--border); background: var(--surface); }
    .nav-burger span { display: block; width: 17px; height: 1.5px; border-radius: 2px; background: var(--text); transition: transform 0.25s var(--ease), opacity 0.2s var(--ease); }
    .nav-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; }
    .nav-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

    .nav-mobile-menu { display: none; }

    @media (max-width: 920px) {
      .nav-links { display: none; }
      .nav-right > .nav-availability { display: none; }
      .nav-right .btn-accent { display: none; }
      .nav-burger { display: inline-flex; }

      .nav-mobile-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: fixed;
        top: var(--nav-h, 76px);
        left: 0; right: 0; bottom: 0;
        z-index: var(--z-drawer);
        padding: 8px var(--page-pad) calc(24px + env(safe-area-inset-bottom));
        background: var(--bg);
        border-top: 1px solid var(--border);
        overflow-y: auto;
        transform: translateY(-8px);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.22s var(--ease), transform 0.22s var(--ease);
      }
      .nav-mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
      .nav-mobile-links { display: flex; flex-direction: column; padding-top: 12px; }
      .nav-mobile-links a {
        font-size: 26px; font-weight: 500; letter-spacing: -0.028em;
        padding: 16px 0; border-bottom: 1px solid var(--border); color: var(--text);
        transition: color 0.2s var(--ease), padding-left 0.2s var(--ease);
      }
      .nav-mobile-links a:hover { padding-left: 6px; }
      .nav-mobile-links a.active { color: var(--accent); }
      .nav-mobile-foot { display: flex; flex-direction: column; align-items: stretch; gap: 20px; padding-top: 28px; }
      .nav-mobile-foot .nav-availability { display: inline-flex; justify-content: center; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { Nav });
