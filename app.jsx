/* App root + router + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "brand",
  "hero": "particles",
  "density": "comfortable"
}/*EDITMODE-END*/;

// The default is the brand azure sampled from the logotype. The rest are
// desaturated neighbours, offered for comparison — none of them shout.
const ACCENT_SWATCHES = {
  brand: '#0080ba',
  deep: '#2d4fa8',
  teal: '#2b7f92',
  ink: '#3d4249',
};

const PAGE_TITLES = {
  home: 'Corelogics — AI products built for founders, launched in weeks',
  services: 'Services — Corelogics',
  industries: 'Industries — Corelogics',
  cases: 'Case studies — Corelogics',
  about: 'About — Corelogics',
  contact: 'Contact — Corelogics',
  privacy: 'Privacy policy — Corelogics',
  terms: 'Terms of service — Corelogics',
};

function titleFor(page, slug) {
  if (page === 'case') {
    const c = (window.CASE_BY_SLUG || {})[slug];
    return c ? `${c.name} — Case Study — Corelogics` : 'Case Study Not Found — Corelogics';
  }
  if (page === '404') return 'Page not found — Corelogics';
  return PAGE_TITLES[page] || PAGE_TITLES.home;
}

function App() {
  // Read the initial page/slug straight from the URL so deep links (e.g. a shared
  // case-study link) load directly into the right page instead of always landing on home.
  const [page, setPageRaw] = useState(() => parseHash(window.location.hash).page);
  const [slug, setSlug] = useState(() => parseHash(window.location.hash).slug);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = useState(() => {
    // Light is the design's default; the pre-render script in index.html has
    // already painted this same value onto <html>.
    try { return localStorage.getItem('cl-theme') || 'light'; } catch (e) { return 'light'; }
  });

  // Two-arg navigation: setPage('case', 'qefa') or setPage('about')
  // Pushes a real URL for the destination so every page (and every case study) is
  // independently bookmarkable, shareable, and reload-safe.
  const setPage = useCallback((next, nextSlug = null) => {
    const target = pathFor(next, nextSlug);
    if (window.location.hash !== target) {
      window.history.pushState(null, '', target);
    }
    setPageRaw(next);
    setSlug(nextSlug);
  }, []);

  // Keep state in sync with the URL for browser back/forward and manual hash edits.
  useEffect(() => {
    const syncFromHash = () => {
      const parsed = parseHash(window.location.hash);
      setPageRaw(parsed.page);
      setSlug(parsed.slug);
    };
    window.addEventListener('popstate', syncFromHash);
    window.addEventListener('hashchange', syncFromHash);
    if (!window.location.hash) {
      window.history.replaceState(null, '', pathFor(page, slug));
    }
    return () => {
      window.removeEventListener('popstate', syncFromHash);
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, []);

  useEffect(() => {
    document.title = titleFor(page, slug);
  }, [page, slug]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (t.accent === 'brand') root.removeAttribute('data-accent');
    else root.setAttribute('data-accent', t.accent);
    if (t.density === 'comfortable') root.removeAttribute('data-density');
    else root.setAttribute('data-density', t.density);
  }, [t.accent, t.density]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('cl-theme', theme); } catch (e) {}
  }, [theme]);

  // Reset scroll on page change
  useEffect(() => { window.scrollTo({ top: 0 }); }, [page, slug]);

  const router = { page, slug, setPage, theme, toggleTheme };

  const renderPage = () => {
    switch (page) {
      case 'services':   return <PageServices />;
      case 'industries': return <PageIndustries />;
      case 'cases':      return <PageCases />;
      case 'case':       return <PageCaseDetail slug={slug} />;
      case 'about':      return <PageAbout />;
      case 'contact':    return <PageContact />;
      case 'privacy':    return <PageLegal doc="privacy" />;
      case 'terms':      return <PageLegal doc="terms" />;
      case '404':        return <PageNotFound />;
      default:           return <PageHome heroVariant={t.hero} />;
    }
  };

  // Accent color value for TweakColor — pass mapped hex
  const accentValue = ACCENT_SWATCHES[t.accent] || ACCENT_SWATCHES.brand;
  const handleAccent = (hex) => {
    const entry = Object.entries(ACCENT_SWATCHES).find(([, v]) => v === hex);
    setTweak('accent', entry ? entry[0] : 'brand');
  };

  return (
    <RouterCtx.Provider value={router}>
      <Nav />
      <div id="main" tabIndex={-1} key={`${page}-${slug || ''}`} className="page-transition">
        {renderPage()}
      </div>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Appearance" />
        <TweakRadio
          label="Mode"
          value={theme}
          options={['light', 'dark']}
          onChange={(v) => setTheme(v)}
        />
        <TweakColor
          label="Accent"
          value={accentValue}
          options={Object.values(ACCENT_SWATCHES)}
          onChange={handleAccent}
        />
        <TweakRadio
          label="Density"
          value={t.density}
          options={['comfortable', 'compact']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSection label="Hero" />
        <TweakRadio
          label="Visual"
          value={t.hero}
          options={['particles', 'aurora']}
          onChange={(v) => setTweak('hero', v)}
        />
        <TweakSection label="Navigation" />
        <TweakSelect
          label="Page"
          value={page}
          options={[
            { value: 'home', label: 'Home' },
            { value: 'services', label: 'Services' },
            { value: 'industries', label: 'Industries' },
            { value: 'cases', label: 'Cases' },
            { value: 'about', label: 'About' },
            { value: 'contact', label: 'Contact' },
            { value: 'privacy', label: 'Privacy' },
            { value: 'terms', label: 'Terms' },
            { value: '404', label: 'Not found' },
          ]}
          onChange={(v) => setPage(v)}
        />
      </TweaksPanel>
    </RouterCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Page transition fade
(function injectAppCss() {
  if (document.getElementById('app-css')) return;
  const s = document.createElement('style');
  s.id = 'app-css';
  s.textContent = `
    .page-transition { opacity: 1; }
  `;
  document.head.appendChild(s);
})();
