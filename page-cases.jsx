/* Case studies index — four featured cases as magazine-style covers */

function PageCases() {
  const { setPage, theme } = useRouter();

  return (
    <main className="cases-page">
      <PageHeader
        eyebrow="Case studies"
        title={<>Real products. <em>Real</em> results.</>}
        lede="Four projects across education, food safety, media measurement, and personal AI. Different industries, different challenges — the same level of quality on every one. Names are used with client permission; screenshots are from the live products."
      />

      <section className="cases-stats on-accent">
        <div className="page cases-stats-grid">
          {[
            { v: 4, s: '', l: 'Featured projects, on this page' },
            { v: 38, s: '', l: 'Total products delivered' },
            { v: 14, s: ' wk', l: 'Median time to first launch' },
            { v: 100, s: '%', l: 'Projects delivered on schedule' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80} className="stat">
              <div className="stat-val"><Counter to={s.v} suffix={s.s} decimals={s.d || 0} /></div>
              <div className="stat-l">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cases-featured">
        <div className="page">
          <div className="cases-featured-list">
            {CASE_STUDIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <article
                  className={`cover ${i % 2 ? 'cover-flip' : ''}`}
                  style={{ '--case-accent': theme === 'dark' ? c.accentDark : c.accent, '--case-accent-dark': c.accentDark, '--case-accent-soft': c.accentSoft }}
                >
                  <div className="cover-meta">
                    <div className="mono cover-n">Case 0{i + 1}</div>
                    <div className="cover-domain mono">{c.domain}</div>

                    <h2 className="cover-name h-display">{c.name}</h2>
                    <div className="cover-name-full mono">{c.nameFull}</div>

                    <p className="cover-position">{c.positioning}</p>

                    <div className="cover-metrics">
                      {c.outcomes.slice(0, 2).map(o => (
                        <div key={o.l} className="cover-metric">
                          <div className="cover-metric-v">{o.v}</div>
                          <div className="cover-metric-l">{o.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="cover-bottom">
                      <div className="cover-rail">
                        <span><span className="dim">Year </span>{c.year}</span>
                        <span className="dim" aria-hidden="true">·</span>
                        <span><span className="dim">Duration </span>{c.duration}</span>
                        <span className="dim" aria-hidden="true">·</span>
                        <span><span className="dim">Scale </span>{c.scale}</span>
                      </div>
                      <Button
                        kind="primary"
                        href={pathFor('case', c.slug)}
                        onClick={(e) => { if (isPlainClick(e)) { e.preventDefault(); setPage('case', c.slug); } }}
                        arrow
                      >
                        Read the case study
                      </Button>
                    </div>
                  </div>

                  <div
                    className="cover-visual"
                    onClick={() => setPage('case', c.slug)}
                  >
                    <div className="cover-frame">
                      <div className="case-frame-bar">
                        <span className="dot" style={{ background: '#ff5f57' }}></span>
                        <span className="dot" style={{ background: '#febc2e' }}></span>
                        <span className="dot" style={{ background: '#28c840' }}></span>
                        <span className="case-frame-url mono">{c.slug}.corelogics.app</span>
                      </div>
                      <img src={c.heroImage} alt={`${c.name} product screenshot`} loading="lazy" decoding="async" />
                    </div>
                    <div className="cover-glow"></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCtaSection />
    </main>
  );
}

(function injectCasesIndexCss() {
  if (document.getElementById('cases-index-css')) return;
  const s = document.createElement('style');
  s.id = 'cases-index-css';
  s.textContent = `
    .cases-stats { padding: clamp(48px, 6vw, 72px) 0; border-block: 1px solid var(--border-accent); }
    .cases-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .stat-val { font-size: clamp(34px, 3.8vw, 52px); font-weight: 600; letter-spacing: -0.045em; line-height: 1; color: var(--accent); }
    .stat-l { font-size: 13px; color: var(--text-muted); line-height: 1.45; margin-top: 13px; max-width: 22ch; }
    @media (max-width: 880px) { .cases-stats-grid { grid-template-columns: repeat(2, 1fr); } }

    .cases-featured { padding: var(--section-y) 0; }
    .cases-featured-list { display: flex; flex-direction: column; gap: clamp(28px, 4vw, 44px); }

    .cover { display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: center; padding: 56px; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); box-shadow: var(--shadow-2); position: relative; overflow: hidden; }
    .cover::before { content: ""; position: absolute; top: -50%; right: -10%; width: 60%; height: 200%; background: radial-gradient(ellipse, var(--case-accent-soft), transparent 62%); filter: blur(70px); pointer-events: none; z-index: 0; opacity: 0.9; }
    .cover-flip { grid-template-columns: 1.1fr 1fr; }
    .cover-flip .cover-meta { order: 2; }
    .cover-flip .cover-visual { order: 1; }
    .cover-flip::before { right: auto; left: -10%; }

    .cover-meta { position: relative; z-index: 2; }
    .cover-n { font-size: 11.5px; letter-spacing: 0.14em; color: var(--text-faint); }
    .cover-domain { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; color: var(--case-accent); text-transform: uppercase; margin-top: 8px; padding-bottom: 22px; border-bottom: 1px solid var(--border); }
    .cover-name { font-size: clamp(42px, 5.4vw, 72px); font-weight: 600; letter-spacing: -0.042em; margin-top: 26px; line-height: 0.95; }
    .cover-name-full { font-size: 12.5px; color: var(--text-dim); margin-top: 9px; letter-spacing: 0.04em; }
    .cover-position { font-size: clamp(17px, 1.6vw, 21px); line-height: 1.4; color: var(--text-muted); margin-top: 32px; max-width: 40ch; font-family: var(--font-serif); font-style: italic; letter-spacing: -0.005em; }
    .cover-metrics { display: flex; gap: 36px; margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--border); }
    .cover-metric-v { font-size: clamp(28px, 3vw, 38px); font-weight: 600; letter-spacing: -0.038em; line-height: 1; color: var(--case-accent); font-variant-numeric: tabular-nums; }
    .cover-metric-l { font-size: 12.5px; color: var(--text-muted); line-height: 1.4; margin-top: 10px; max-width: 22ch; }
    .cover-bottom { margin-top: 40px; padding-top: 28px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 24px; }
    .cover-rail { font-size: 12px; color: var(--text-dim); display: flex; flex-wrap: wrap; gap: 8px 14px; }

    .cover-visual { position: relative; z-index: 2; cursor: pointer; }
    .cover-frame { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; background: var(--surface-3); box-shadow: var(--shadow-3); transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease); }
    .cover-visual:hover .cover-frame { transform: translateY(-6px); box-shadow: var(--shadow-4); }
    .cover-frame img { display: block; width: 100%; height: auto; }
    .cover-glow { position: absolute; left: 10%; right: 10%; bottom: -20px; height: 60px; background: radial-gradient(ellipse, var(--case-accent-soft), transparent 70%); filter: blur(40px); }

    @media (max-width: 1100px) {
      .cover { grid-template-columns: 1fr; padding: 40px; gap: 40px; }
      .cover-flip { grid-template-columns: 1fr; }
      .cover-flip .cover-meta { order: 1; }
      .cover-flip .cover-visual { order: 2; }
    }
    @media (max-width: 600px) {
      .cover { padding: 28px; }
      .cover-metrics { flex-direction: column; gap: 20px; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageCases });
