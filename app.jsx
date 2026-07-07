/* App root + router + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "blue",
  "hero": "particles",
  "density": "comfortable"
}/*EDITMODE-END*/;

const ACCENT_SWATCHES = {
  blue: '#6aa3ff',
  gold: '#e6b86a',
  cyan: '#74d3e0',
  violet: '#b18cf0',
};

function App() {
  const [page, setPageRaw] = useState('home');
  const [slug, setSlug] = useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('cl-theme') || 'dark'; } catch (e) { return 'dark'; }
  });

  // Two-arg navigation: setPage('case', 'qefa') or setPage('about')
  const setPage = useCallback((next, nextSlug = null) => {
    setPageRaw(next);
    setSlug(nextSlug);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (t.accent === 'blue') root.removeAttribute('data-accent');
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
      default:           return <PageHome heroVariant={t.hero} />;
    }
  };

  // Accent color value for TweakColor — pass mapped hex
  const accentValue = ACCENT_SWATCHES[t.accent] || ACCENT_SWATCHES.blue;
  const handleAccent = (hex) => {
    const entry = Object.entries(ACCENT_SWATCHES).find(([, v]) => v === hex);
    setTweak('accent', entry ? entry[0] : 'blue');
  };

  return (
    <RouterCtx.Provider value={router}>
      <Nav />
      <div key={`${page}-${slug || ''}`} className="page-transition">
        {renderPage()}
      </div>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Appearance" />
        <TweakRadio
          label="Mode"
          value={theme}
          options={['dark', 'light']}
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
