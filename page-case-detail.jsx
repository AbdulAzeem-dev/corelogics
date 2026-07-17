/* Case study detail page — consistent template across all 3 cases */

function PageCaseDetail({ slug }) {
  const c = CASE_BY_SLUG[slug];
  const { setPage } = useRouter();
  if (!c) {
    return (
      <main style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="page">
          <Eyebrow>Not found</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 22 }}>Case study not found.</h1>
          <div style={{ marginTop: 28 }}>
            <Button kind="ghost" onClick={() => setPage('cases')}>Back to all case studies</Button>
          </div>
        </div>
      </main>
    );
  }

  // Inject case-specific accent
  const styleVars = {
    '--case-accent': c.accent,
    '--case-accent-soft': c.accentSoft,
  };

  // Group capabilities if grouped
  const grouped = useMemo(() => {
    const map = {};
    let hasGroups = false;
    c.capabilities.forEach(cap => {
      const g = cap.group || '';
      if (cap.group) hasGroups = true;
      (map[g] = map[g] || []).push(cap);
    });
    return { map, hasGroups };
  }, [c]);

  // Find prev/next case for the cross-link
  const idx = CASE_STUDIES.findIndex(x => x.slug === slug);
  const nextCase = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <main className="case-detail" style={styleVars}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="case-hero">
        <div className="case-hero-bg" aria-hidden>
          <div className="case-hero-glow"></div>
        </div>
        <div className="page case-hero-inner">
          <div className="case-hero-meta">
            <Reveal>
              <button
                className="case-back mono"
                onClick={() => setPage('cases')}
              >
                <span>←</span>
                <span>All case studies</span>
              </button>
            </Reveal>
            <Reveal delay={80}>
              <div className="case-domain mono">{c.domain.toUpperCase()}</div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <h1 className="h-display case-hero-name">{c.name}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="case-hero-position">{c.positioning}</p>
          </Reveal>

          <div className="case-hero-rail">
            {[
              { k: 'Year', v: c.year },
              { k: 'Duration', v: c.duration },
              { k: 'Scale', v: c.scale },
              { k: 'Engagement', v: 'Full-stack delivery' },
            ].map((it, i) => (
              <Reveal key={it.k} delay={280 + i * 60} className="case-hero-rail-cell">
                <div className="mono case-rail-k">{it.k}</div>
                <div className="case-rail-v">{it.v}</div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={520}>
            <div className="case-hero-image-wrap">
              <div className="case-hero-frame">
                <div className="case-frame-bar">
                  <span className="dot" style={{ background: '#ff5f57' }}></span>
                  <span className="dot" style={{ background: '#febc2e' }}></span>
                  <span className="dot" style={{ background: '#28c840' }}></span>
                  <span className="case-frame-url mono">{c.slug}.corelogics.app</span>
                </div>
                <img src={c.heroImage} alt={`${c.name} interface`} className="case-hero-image" />
              </div>
              <div className="case-hero-image-glow"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What we delivered ────────────────────────────────────────── */}
      {c.delivered && (
        <section className="case-delivered hairline-b">
          <div className="page case-delivered-inner">
            <Reveal className="case-delivered-label">
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--text-faint)', textTransform: 'uppercase' }}>What we delivered</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 8, maxWidth: '26ch' }}>One team, every layer of this product.</div>
            </Reveal>
            <Reveal delay={120} className="case-delivered-tags">
              {c.delivered.map((d, i) => (
                <span key={d} className="delivered-chip mono" style={{ '--i': i }}>{d}</span>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Challenge ────────────────────────────────────────────────── */}
      <section className="case-section">
        <div className="page case-two-col">
          <Reveal>
            <Eyebrow>The challenge</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <div className="case-prose">
              {c.challenge.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Solution + capabilities ──────────────────────────────────── */}
      <section className="case-section case-section-dark hairline-b hairline">
        <div className="page">
          <div className="case-two-col" style={{ marginBottom: 64 }}>
            <Reveal>
              <Eyebrow>Our solution</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-section case-solution-h">
                {c.solutionLede.split('. ').map((s, i, arr) => (
                  <React.Fragment key={i}>
                    {s}{i < arr.length - 1 ? '. ' : ''}
                  </React.Fragment>
                ))}
              </h2>
            </Reveal>
          </div>

          {grouped.hasGroups ? (
            Object.entries(grouped.map).map(([group, items]) => (
              <div key={group} className="cap-group">
                {group && (
                  <Reveal>
                    <div className="cap-group-label mono">{group}</div>
                  </Reveal>
                )}
                <div className="cap-grid">
                  {items.map((cap, i) => (
                    <Reveal key={cap.t} delay={i * 60}>
                      <CornerCard className="cap-card">
                        <div className="cap-mark"></div>
                        <h3 className="cap-t">{cap.t}</h3>
                        <p className="cap-d">{cap.d}</p>
                      </CornerCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="cap-grid">
              {c.capabilities.map((cap, i) => (
                <Reveal key={cap.t} delay={i * 60}>
                  <CornerCard className="cap-card">
                    <div className="cap-mark"></div>
                    <h3 className="cap-t">{cap.t}</h3>
                    <p className="cap-d">{cap.d}</p>
                  </CornerCard>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Architecture / dashboards ────────────────────────────────── */}
      <section className="case-section">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>Architecture &amp; capabilities</Eyebrow></Reveal>
              <Reveal delay={120}>
                <h2 className="h-section" style={{ marginTop: 16, maxWidth: '20ch' }}>{c.architecture.title}</h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>{c.architecture.lede}</p>
            </Reveal>
          </div>

          {/* Pipeline strip */}
          <Reveal>
            <CornerCard className="case-pipeline-card">
              <div className="case-pipeline-row">
                {c.architecture.pipeline.map((stage, i) => (
                  <React.Fragment key={stage}>
                    <div className="case-pipeline-node">
                      <div className="case-pipeline-num mono">{String(i + 1).padStart(2, '0')}</div>
                      <div className="case-pipeline-name">{stage}</div>
                    </div>
                    {i < c.architecture.pipeline.length - 1 && (
                      <div className="case-pipeline-line"><div className="case-pipeline-dash"></div></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </CornerCard>
          </Reveal>

          {/* Roles */}
          <div className="case-roles">
            {c.architecture.roles.map((r, i) => (
              <Reveal key={r.n} delay={i * 80}>
                <div className="role-card">
                  <div className="mono role-n">{r.n}</div>
                  <h3 className="role-t">{r.t}</h3>
                  <p className="role-d">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────── */}
      <section className="case-section case-outcomes hairline-b hairline">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>Outcomes &amp; impact</Eyebrow></Reveal>
              <Reveal delay={120}>
                <h2 className="h-section" style={{ marginTop: 16 }}>The numbers our partners <em>trust</em>.</h2>
              </Reveal>
            </div>
          </div>

          <div className="outcomes-grid">
            {c.outcomes.map((o, i) => (
              <Reveal key={o.l} delay={i * 80} className="outcome">
                <div className="outcome-v">{o.v}</div>
                <div className="mono outcome-l">{o.l}</div>
              </Reveal>
            ))}
          </div>

          {c.quote && (
            <Reveal delay={400}>
              <blockquote className="case-quote case-quote-big">
                <div className="quote-mark">&ldquo;</div>
                <p>{c.quote.text}</p>
                <cite className="mono">— {c.quote.who}, {c.name}</cite>
              </blockquote>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Visual gallery ───────────────────────────────────────────── */}
      <section className="case-section">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>Visual gallery</Eyebrow></Reveal>
              <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>The system, in production.</h2></Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                Screenshots from the live product. Names redacted where the client requested.
              </p>
            </Reveal>
          </div>

          <div className="gallery">
            {c.gallery.map((g, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="gallery-fig">
                  <div className="gallery-frame">
                    <div className="case-frame-bar">
                      <span className="dot" style={{ background: '#ff5f57' }}></span>
                      <span className="dot" style={{ background: '#febc2e' }}></span>
                      <span className="dot" style={{ background: '#28c840' }}></span>
                      <span className="case-frame-url mono">{g.label}</span>
                    </div>
                    <img src={g.img} alt={g.label} />
                  </div>
                  <figcaption className="muted">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}

            {/* Additional system-topology visual */}
            <Reveal delay={200}>
              <figure className="gallery-fig">
                <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <CaseExtraVisual caseStudy={c} />
                </div>
                <figcaption className="muted">A schematic view of the {c.name} system — pipeline stages and outcomes at a glance.</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tech highlights ──────────────────────────────────────────── */}
      <section className="case-section case-section-dark hairline-b hairline">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>Tech highlights</Eyebrow></Reveal>
              <Reveal delay={120}>
                <h2 className="h-section" style={{ marginTop: 16, maxWidth: '20ch' }}>
                  In the language of <em>capabilities</em>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                We describe systems by what they do, not by what they’re built with. Stack details available under NDA.
              </p>
            </Reveal>
          </div>

          <div className="tech-list">
            {c.techHighlights.map((t, i) => (
              <Reveal key={t} delay={i * 60} className="tech-row">
                <div className="mono tech-n">{String(i + 1).padStart(2, '0')}</div>
                <div className="tech-t">{t}</div>
                <div className="tech-line"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next case + CTA ──────────────────────────────────────────── */}
      <section className="case-cross">
        <div className="page case-cross-inner">
          <Reveal>
            <div className="case-cross-cta">
              <Eyebrow>Have a similar challenge?</Eyebrow>
              <h2 className="h-display" style={{ marginTop: 18, maxWidth: '18ch' }}>
                Let&rsquo;s <em>talk</em>.
              </h2>
              <p className="lede" style={{ marginTop: 20 }}>
                30 minutes, no slides, no pitch. If we&rsquo;re the right partner, we&rsquo;ll tell you.
                If we aren&rsquo;t, we&rsquo;ll tell you who is.
              </p>
              <div className="hero-ctas" style={{ marginTop: 28 }}>
                <Button kind="gold" onClick={() => setPage('contact')}>Book a discovery call</Button>
                <Button kind="ghost" onClick={() => setPage('cases')}>All case studies</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <a
              className="case-next"
              href={pathFor('case', nextCase.slug)}
              onClick={(e) => { if (isPlainClick(e)) { e.preventDefault(); setPage('case', nextCase.slug); } }}
            >
              <div className="mono case-next-l">Next case study</div>
              <div className="case-next-name">{nextCase.name}</div>
              <div className="mono case-next-domain">{nextCase.domain}</div>
              <div className="case-next-arrow">→</div>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

(function injectCaseDetailCss() {
  if (document.getElementById('case-detail-css')) return;
  const s = document.createElement('style');
  s.id = 'case-detail-css';
  s.textContent = `
    .case-detail { --case-accent: var(--accent); --case-accent-soft: var(--accent-glow); }

    .case-section { padding: 100px 0; position: relative; }
    .case-section-dark { background: oklch(0.13 0.012 250); }

    .case-delivered { padding: 44px 0; background: oklch(0.13 0.012 250); }
    .case-delivered-inner { display: grid; grid-template-columns: 220px 1fr; gap: 40px; align-items: center; }
    .case-delivered-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .delivered-chip { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; padding: 9px 14px; border-radius: 999px; border: 1px solid var(--case-accent); color: var(--text); background: linear-gradient(180deg, oklch(0.20 0.014 250 / 0.6), oklch(0.16 0.012 250 / 0.4)); position: relative; transition: transform 0.2s ease, background 0.2s ease; }
    .delivered-chip::before { content: ""; display: inline-block; width: 5px; height: 5px; border-radius: 999px; background: var(--case-accent); margin-right: 9px; vertical-align: middle; box-shadow: 0 0 8px var(--case-accent); }
    .delivered-chip:hover { transform: translateY(-2px); background: linear-gradient(180deg, oklch(0.24 0.016 250 / 0.7), oklch(0.18 0.012 250 / 0.5)); }
    @media (max-width: 760px) { .case-delivered-inner { grid-template-columns: 1fr; gap: 20px; } }

    .case-two-col { display: grid; grid-template-columns: 240px 1fr; gap: 60px; align-items: start; }
    @media (max-width: 880px) { .case-two-col { grid-template-columns: 1fr; gap: 24px; } }

    .case-prose { display: flex; flex-direction: column; gap: 22px; }
    .case-prose p { font-size: clamp(18px, 1.6vw, 22px); line-height: 1.55; color: var(--text); max-width: 60ch; letter-spacing: -0.01em; }
    .case-prose p:first-child { color: var(--text); font-weight: 400; }
    .case-prose p:not(:first-child) { color: var(--text-muted); }

    /* ── Hero ── */
    .case-hero { padding: 100px 0 60px; position: relative; overflow: hidden; }
    .case-hero-bg { position: absolute; inset: 0; pointer-events: none; }
    .case-hero-glow { position: absolute; top: -20%; left: 50%; transform: translateX(-50%); width: 80%; height: 80%; background: radial-gradient(ellipse, var(--case-accent-soft), transparent 60%); filter: blur(60px); }
    .case-hero-inner { position: relative; z-index: 2; }
    .case-hero-meta { display: flex; justify-content: space-between; align-items: center; padding-bottom: 28px; border-bottom: 1px solid var(--border); flex-wrap: wrap; gap: 12px; }
    .case-back { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; color: var(--text-muted); letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; transition: color 0.2s ease; padding: 8px 0; }
    .case-back:hover { color: var(--text); }
    .case-domain { font-size: 11px; letter-spacing: 0.18em; color: var(--case-accent); padding: 6px 12px; border: 1px solid currentColor; border-radius: 999px; background: var(--case-accent-soft); }

    .case-hero-name { margin-top: 48px; max-width: 16ch; }
    .case-hero-position { font-size: clamp(20px, 2.2vw, 28px); line-height: 1.3; color: var(--text-muted); margin-top: 28px; max-width: 36ch; font-family: var(--font-serif); font-style: italic; letter-spacing: -0.01em; font-weight: 400; }

    .case-hero-rail { margin-top: 60px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .case-hero-rail-cell { background: var(--bg); padding: 24px 20px; }
    .case-rail-k { font-size: 10.5px; letter-spacing: 0.16em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 10px; }
    .case-rail-v { font-size: 15px; color: var(--text); }
    @media (max-width: 880px) { .case-hero-rail { grid-template-columns: repeat(2, 1fr); } }

    .case-hero-image-wrap { margin-top: 80px; position: relative; }
    .case-hero-frame { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; background: oklch(0.13 0.012 250); position: relative; z-index: 2; box-shadow: 0 30px 80px -20px oklch(0.05 0.02 250 / 0.7), 0 0 0 1px var(--border); }
    .case-frame-bar { display: flex; align-items: center; gap: 8px; padding: 12px 18px; background: oklch(0.18 0.014 250); border-bottom: 1px solid var(--border); }
    .case-frame-bar .dot { width: 11px; height: 11px; border-radius: 999px; }
    .case-frame-url { margin-left: 18px; font-size: 11px; letter-spacing: 0.06em; color: var(--text-dim); }
    .case-hero-image { display: block; width: 100%; height: auto; }
    .case-hero-image-glow { position: absolute; left: 0; right: 0; bottom: -40px; height: 100px; background: radial-gradient(ellipse, var(--case-accent-soft), transparent 70%); filter: blur(50px); z-index: 1; }

    /* ── Solution ── */
    .case-solution-h { font-size: clamp(28px, 3.4vw, 44px); line-height: 1.15; max-width: 30ch; letter-spacing: -0.025em; }

    .cap-group { margin-top: 48px; }
    .cap-group:first-of-type { margin-top: 0; }
    .cap-group-label { font-size: 11px; letter-spacing: 0.18em; color: var(--gold); text-transform: uppercase; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }

    .cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .cap-card { padding: 28px; position: relative; transition: border-color 0.2s ease, transform 0.2s ease; }
    .cap-card:hover { border-color: var(--case-accent); transform: translateY(-2px); }
    .cap-mark { width: 8px; height: 8px; background: var(--case-accent); border-radius: 999px; margin-bottom: 24px; box-shadow: 0 0 16px var(--case-accent-soft); }
    .cap-t { font-size: 18px; font-weight: 500; line-height: 1.25; letter-spacing: -0.015em; margin-bottom: 12px; }
    .cap-d { font-size: 14px; line-height: 1.55; color: var(--text-muted); }
    @media (max-width: 980px) { .cap-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .cap-grid { grid-template-columns: 1fr; } }

    /* ── Pipeline strip ── */
    .case-pipeline-card { padding: 36px 28px; margin-top: 48px; margin-bottom: 56px; }
    .case-pipeline-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: space-between; }
    .case-pipeline-node { display: flex; flex-direction: column; align-items: center; gap: 12px; min-width: 70px; }
    .case-pipeline-num { font-size: 10.5px; letter-spacing: 0.14em; color: var(--text-faint); }
    .case-pipeline-name { font-size: 14px; font-weight: 500; color: var(--text); letter-spacing: -0.01em; }
    .case-pipeline-line { flex: 1; height: 1px; position: relative; min-width: 30px; }
    .case-pipeline-dash { position: absolute; inset: 0; background-image: linear-gradient(to right, var(--case-accent) 50%, transparent 50%); background-size: 8px 1px; background-repeat: repeat-x; opacity: 0.4; }

    .case-roles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .role-card { padding: 32px; border: 1px solid var(--border); border-radius: var(--radius); background: linear-gradient(180deg, oklch(0.18 0.014 250 / 0.5), oklch(0.16 0.012 250 / 0.3)); transition: border-color 0.2s ease; }
    .role-card:hover { border-color: var(--case-accent); }
    .role-n { font-size: 11px; letter-spacing: 0.18em; color: var(--case-accent); margin-bottom: 18px; }
    .role-t { font-size: 22px; font-weight: 500; letter-spacing: -0.015em; margin-bottom: 14px; }
    .role-d { font-size: 14px; color: var(--text-muted); line-height: 1.55; }
    @media (max-width: 980px) { .case-roles { grid-template-columns: 1fr; } }

    /* ── Outcomes ── */
    .case-outcomes { background: oklch(0.13 0.012 250); }
    .outcomes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
    .outcome { padding: 36px 28px; background: oklch(0.15 0.012 250); }
    .outcome-v { font-size: clamp(36px, 4vw, 56px); font-weight: 400; letter-spacing: -0.04em; line-height: 1; color: var(--case-accent); }
    .outcome-l { font-size: 11px; letter-spacing: 0.14em; color: var(--text-dim); text-transform: uppercase; margin-top: 16px; max-width: 22ch; }
    @media (max-width: 880px) { .outcomes-grid { grid-template-columns: repeat(2, 1fr); } }

    .case-quote-big { margin-top: 56px; padding: 48px; border-left: 2px solid var(--gold); background: oklch(0.16 0.012 250 / 0.6); position: relative; }
    .case-quote-big .quote-mark { position: absolute; top: 18px; left: 28px; font-size: 80px; line-height: 1; font-family: var(--font-serif); color: var(--gold); }
    .case-quote-big p { font-size: clamp(20px, 1.8vw, 26px); line-height: 1.4; font-family: var(--font-serif); font-style: italic; padding-left: 60px; max-width: 64ch; }
    .case-quote-big cite { display: block; margin-top: 24px; font-size: 11px; letter-spacing: 0.16em; color: var(--text-dim); font-style: normal; text-transform: uppercase; padding-left: 60px; }

    /* ── Gallery ── */
    .gallery { display: flex; flex-direction: column; gap: 60px; }
    .gallery-fig { margin: 0; }
    .gallery-frame { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; background: oklch(0.13 0.012 250); box-shadow: 0 20px 50px -10px oklch(0.05 0.02 250 / 0.5); }
    .gallery-frame img { display: block; width: 100%; height: auto; }
    .gallery-fig figcaption { margin-top: 18px; font-size: 14px; max-width: 60ch; }

    /* ── Tech highlights ── */
    .tech-list { display: flex; flex-direction: column; }
    .tech-row { display: grid; grid-template-columns: 60px 1fr 80px; align-items: center; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--border); transition: padding 0.3s ease; }
    .tech-row:hover { padding-left: 12px; }
    .tech-row:hover .tech-line { background: var(--case-accent); }
    .tech-n { font-size: 11px; letter-spacing: 0.16em; color: var(--text-faint); }
    .tech-t { font-size: clamp(18px, 1.6vw, 24px); line-height: 1.3; letter-spacing: -0.01em; }
    .tech-line { height: 1px; background: var(--border-strong); transition: background 0.3s ease; }

    /* ── Cross-link ── */
    .case-cross { padding: 120px 0; position: relative; overflow: hidden; }
    .case-cross::before { content: ""; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, var(--case-accent-soft), transparent 70%); filter: blur(60px); pointer-events: none; }
    .case-cross-inner { display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; position: relative; }
    .case-cross-cta { max-width: 540px; }
    .case-next { display: flex; flex-direction: column; padding: 36px; border: 1px solid var(--border); border-radius: var(--radius); background: linear-gradient(180deg, oklch(0.18 0.014 250 / 0.5), oklch(0.14 0.01 250 / 0.3)); transition: border-color 0.25s ease, transform 0.25s ease; cursor: pointer; position: relative; }
    .case-next:hover { border-color: var(--case-accent); transform: translateY(-4px); }
    .case-next-l { font-size: 10.5px; letter-spacing: 0.18em; color: var(--text-faint); text-transform: uppercase; }
    .case-next-name { font-size: clamp(32px, 4vw, 44px); font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-top: 20px; }
    .case-next-domain { font-size: 11px; letter-spacing: 0.14em; color: var(--text-muted); text-transform: uppercase; margin-top: 16px; }
    .case-next-arrow { position: absolute; right: 28px; bottom: 28px; font-size: 28px; color: var(--case-accent); transition: transform 0.25s ease; }
    .case-next:hover .case-next-arrow { transform: translateX(6px); }
    @media (max-width: 980px) { .case-cross-inner { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageCaseDetail });
