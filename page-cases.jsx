/* Case studies index — three featured cases as magazine-style covers */

function PageCases() {
  const { setPage } = useRouter();

  return (
    <main className="cases-page">
      <PageHeader
        eyebrow="Case studies"
        title={<>Real systems.<br/><em>Real</em> production.</>}
        lede="Three featured engagements across EdTech, AgriTech, and Personal AI. Different domains, different hardware, different stakes — same engineering bar. Names are real where the client consented, screenshots are from the live products."
      />

      <section className="cases-stats hairline-b">
        <div className="page cases-stats-grid">
          {[
            { v: 3, s: '', l: 'Featured engagements, on this page' },
            { v: 38, s: '', l: 'Total production engagements shipped' },
            { v: 14, s: ' wk', l: 'Median time to first deployment' },
            { v: 100, s: '%', l: 'Engagements meeting SLA at handover' },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80} className="stat">
              <div className="stat-val"><Counter to={s.v} suffix={s.s} decimals={s.d || 0} /></div>
              <div className="stat-l mono">{s.l}</div>
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
                  style={{ '--case-accent': c.accent, '--case-accent-soft': c.accentSoft }}
                >
                  <div className="cover-meta">
                    <div className="mono cover-n">CASE 0{i + 1}</div>
                    <div className="cover-domain mono">{c.domain}</div>

                    <h2 className="cover-name h-display">{c.name}</h2>
                    <div className="cover-name-full mono">{c.nameFull}</div>

                    <p className="cover-position">{c.positioning}</p>

                    <div className="cover-metrics">
                      {c.outcomes.slice(0, 2).map(o => (
                        <div key={o.l} className="cover-metric">
                          <div className="cover-metric-v">{o.v}</div>
                          <div className="mono cover-metric-l">{o.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="cover-bottom">
                      <div className="cover-rail mono">
                        <span><span className="dim">YEAR · </span>{c.year}</span>
                        <span className="dim">·</span>
                        <span><span className="dim">DUR · </span>{c.duration}</span>
                        <span className="dim">·</span>
                        <span><span className="dim">SCALE · </span>{c.scale}</span>
                      </div>
                      <Button
                        kind="primary"
                        onClick={() => setPage('case', c.slug)}
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
                      <img src={c.heroImage} alt={`${c.name} product screenshot`} />
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
    .cases-stats { padding: 60px 0; background: oklch(0.13 0.012 250 / 0.6); }
    .cases-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .stat-val { font-size: clamp(36px, 4vw, 56px); font-weight: 400; letter-spacing: -0.04em; line-height: 1; }
    .stat-l { font-size: 11px; letter-spacing: 0.14em; color: var(--text-dim); text-transform: uppercase; margin-top: 14px; max-width: 22ch; }
    @media (max-width: 880px) { .cases-stats-grid { grid-template-columns: repeat(2, 1fr); } }

    .cases-featured { padding: 100px 0; }
    .cases-featured-list { display: flex; flex-direction: column; gap: 40px; }

    .cover { display: grid; grid-template-columns: 1fr 1.1fr; gap: 56px; align-items: center; padding: 56px; border: 1px solid var(--border); border-radius: var(--radius-lg); background: linear-gradient(180deg, oklch(0.17 0.014 250 / 0.6), oklch(0.14 0.01 250 / 0.4)); position: relative; overflow: hidden; }
    .cover::before { content: ""; position: absolute; top: -50%; right: -10%; width: 60%; height: 200%; background: radial-gradient(ellipse, var(--case-accent-soft), transparent 60%); filter: blur(60px); pointer-events: none; z-index: 0; }
    .cover-flip { grid-template-columns: 1.1fr 1fr; }
    .cover-flip .cover-meta { order: 2; }
    .cover-flip .cover-visual { order: 1; }
    .cover-flip::before { right: auto; left: -10%; }

    .cover-meta { position: relative; z-index: 2; }
    .cover-n { font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint); }
    .cover-domain { font-size: 10.5px; letter-spacing: 0.16em; color: var(--case-accent); text-transform: uppercase; margin-top: 8px; padding-bottom: 24px; border-bottom: 1px solid var(--border); }
    .cover-name { font-size: clamp(48px, 6vw, 80px); margin-top: 28px; line-height: 0.95; }
    .cover-name-full { font-size: 12px; color: var(--text-muted); margin-top: 8px; letter-spacing: 0.06em; }
    .cover-position { font-size: clamp(17px, 1.6vw, 21px); line-height: 1.4; color: var(--text-muted); margin-top: 32px; max-width: 40ch; font-family: var(--font-serif); font-style: italic; letter-spacing: -0.005em; }
    .cover-metrics { display: flex; gap: 36px; margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--border); }
    .cover-metric-v { font-size: clamp(28px, 3vw, 38px); font-weight: 400; letter-spacing: -0.03em; line-height: 1; color: var(--case-accent); }
    .cover-metric-l { font-size: 10.5px; letter-spacing: 0.14em; color: var(--text-dim); text-transform: uppercase; margin-top: 10px; max-width: 22ch; }
    .cover-bottom { margin-top: 40px; padding-top: 28px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 24px; }
    .cover-rail { font-size: 10.5px; letter-spacing: 0.14em; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 12px; }

    .cover-visual { position: relative; z-index: 2; cursor: pointer; }
    .cover-frame { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; background: oklch(0.13 0.012 250); box-shadow: 0 30px 60px -20px oklch(0.05 0.02 250 / 0.6); transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .cover-visual:hover .cover-frame { transform: translateY(-6px); box-shadow: 0 40px 80px -20px oklch(0.05 0.02 250 / 0.7); }
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
