/* Services page — two-tier: AI flagship + full-spectrum digital suite */

// ── Consistent line-icon set (24px, currentColor) ───────────────────────
const SvcIcon = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  generative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
  ),
  mlops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8a4 4 0 1 0 0 8c2.5 0 3.5-2 5-4s2.5-4 5-4a4 4 0 1 1 0 8c-2.5 0-3.5-2-5-4"/></svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c3 2.5 4.5 6 4.5 10L12 18l-4.5-6C7.5 8 9 4.5 12 2Z"/><circle cx="12" cy="9" r="1.6"/><path d="M7.5 14 5 17l3 .5M16.5 14 19 17l-3 .5"/></svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/></svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4" width="19" height="15" rx="2"/><path d="M2.5 8h19M6 6h.01M8.5 6h.01"/></svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18h2"/></svg>
  ),
  dataeng: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z"/></svg>
  ),
  bi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M20 20H4M8 16v-4M12 16V8M16 16v-6"/></svg>
  ),
  fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9.5h19M6 15h4"/></svg>
  ),
};

function PageServices() {
  const { setPage } = useRouter();

  // ── Tier 1 — Flagship AI & Intelligent Systems ──
  const aiServices = [
    {
      slug: 'vision',
      icon: 'vision',
      t: 'Computer Vision Solutions',
      value: 'Vision intelligence that performs in the real world — not just the dataset.',
      caps: ['Detection, segmentation & tracking', 'Quality, safety & compliance', 'Edge-grade real-time inference'],
    },
    {
      slug: 'generative',
      icon: 'generative',
      t: 'Generative AI Solutions',
      value: 'Custom GenAI products, agents, and workflows your team actually trusts.',
      caps: ['Conversational & voice agents', 'Tool-use & retrieval pipelines', 'Guardrails & brand governance'],
    },
    {
      slug: 'data',
      icon: 'data',
      t: 'AI Data Services',
      value: 'The data foundation your model is only ever as good as.',
      caps: ['Curation, annotation & QA', 'Synthetic & edge-case generation', 'Provenance & quality scorecards'],
    },
    {
      slug: 'mlops',
      icon: 'mlops',
      t: 'MLOps & AI Infrastructure',
      value: 'Training and deployment pipelines built for audit, scale, and sleep.',
      caps: ['Reproducible training & lineage', 'CI/CD & evaluation gates', 'Drift monitoring & retraining'],
    },
    {
      slug: 'deploy',
      icon: 'deploy',
      t: 'Edge & Cloud AI Deployment',
      value: 'Cost-optimized inference, wherever your customer happens to be.',
      caps: ['Quantization & compilation', 'Edge runtimes (ARM, Jetson, Hailo)', 'Multi-region cloud serving'],
    },
  ];

  // ── Tier 2 — Full-spectrum digital ──
  const suiteServices = [
    { icon: 'uiux', t: 'UI/UX Design', value: 'Product design, design systems, and research that make intelligence usable.', tags: ['Product design', 'Design systems', 'Research'] },
    { icon: 'web', t: 'Web Development', value: 'Modern, performant web applications and platforms — built to scale.', tags: ['Web apps', 'Platforms', 'Performance'], ai: true },
    { icon: 'mobile', t: 'Mobile App Development', value: 'iOS, Android, and cross-platform apps with intelligence built in.', tags: ['iOS', 'Android', 'Cross-platform'], ai: true },
    { icon: 'dataeng', t: 'Data Engineering', value: 'Pipelines, warehouses, and the data infrastructure everything else stands on.', tags: ['Pipelines', 'Warehouses', 'Infra'] },
    { icon: 'bi', t: 'Business Intelligence', value: 'Analytics, reporting, and decision dashboards — sharpened with AI insight.', tags: ['Analytics', 'Reporting', 'Dashboards'], ai: true },
    { icon: 'fintech', t: 'Fintech Dashboards & Platforms', value: 'Specialized financial product interfaces and tooling, built for trust.', tags: ['Trading UIs', 'Fintech', 'Compliance'] },
  ];

  return (
    <main className="services-page">
      <PageHeader
        eyebrow="Services"
        title={<>Intelligence at the core.<br/>The <em>full stack</em> around it.</>}
        lede="AI is at the heart of what we do — but a great AI system needs a great product around it. We design the interfaces, engineer the platforms, build the dashboards, and architect the data foundations that turn intelligence into impact. One team, end-to-end."
      />

      {/* ── TIER 1 — AI FLAGSHIP ──────────────────────────────────────── */}
      <section className="ai-tier">
        <div className="ai-tier-glow" aria-hidden></div>
        <div className="page">
          <div className="tier-head">
            <Reveal>
              <div className="tier-label">
                <span className="tier-star">✦</span>
                <span className="mono">FLAGSHIP CAPABILITY</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-section tier-title">AI &amp; Intelligent Systems</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lede tier-lede">
                Our defining strength. Computer Vision and Generative AI, end-to-end — from the first
                labeled frame to a system running in front of your customers.
              </p>
            </Reveal>
          </div>

          <div className="ai-grid">
            {aiServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <CornerCard className="ai-card" glow>
                  <div className="ai-card-top">
                    <div className="ai-badge">{SvcIcon[s.icon]}</div>
                    <span className="mono ai-card-n">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="ai-card-t">{s.t}</h3>
                  <p className="ai-card-value">{s.value}</p>
                  <ul className="ai-card-caps">
                    {s.caps.map(c => <li key={c}><span className="cap-tick"></span><span>{c}</span></li>)}
                  </ul>
                  <button className="ai-learn" onClick={() => setPage('contact')}>
                    <span>Discuss your project</span>
                    <span className="ai-learn-arrow">→</span>
                  </button>
                </CornerCard>
              </Reveal>
            ))}

            {/* Trailing emphasis cell */}
            <Reveal delay={aiServices.length * 70}>
              <div className="ai-card ai-card-cta">
                <div className="mono ai-cta-eyebrow">YOUR AI ENGINE</div>
                <h3 className="ai-cta-h">Built once.<br/>Owned by you.</h3>
                <p className="ai-cta-p">Take any one capability as a retainer — or let us own the full data-to-deployment loop.</p>
                <Button kind="gold" onClick={() => setPage('contact')}>Book a discovery call</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── INTEGRATED DELIVERY ───────────────────────────────────────── */}
      <section className="integrated hairline-b hairline">
        <div className="page integrated-inner">
          <Reveal className="integrated-text">
            <Eyebrow>Why one partner</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, maxWidth: '22ch' }}>
              AI is only as valuable as the <em>product</em> that delivers it.
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              A model in a notebook earns nothing. Value shows up when intelligence is wrapped in a
              product people can actually use — the dashboard, the app, the data pipeline feeding it.
              That&rsquo;s why we master the layers around the model too, and ship them as one engagement.
            </p>
            <p className="lede" style={{ marginTop: 18 }}>
              No vendor relay race. No integration gaps between the team that built the model and the
              team that built the UI. One team, accountable for the whole stack.
            </p>
          </Reveal>

          <Reveal delay={160} className="integrated-stack">
            <div className="stack-label mono">A SINGLE ENGAGEMENT, EVERY LAYER</div>
            {[
              { l: 'Experience', s: 'UI/UX · web · mobile', accent: 'oklch(0.68 0.18 300)' },
              { l: 'Intelligence', s: 'vision · generative · agents', accent: 'oklch(0.83 0.13 86)', flag: true },
              { l: 'Platform', s: 'APIs · services · MLOps', accent: 'oklch(0.66 0.18 252)' },
              { l: 'Data', s: 'pipelines · warehouses · QA', accent: 'oklch(0.78 0.13 200)' },
            ].map((layer, i) => (
              <div key={layer.l} className={`stack-row ${layer.flag ? 'flag' : ''}`} style={{ '--row-accent': layer.accent }}>
                <div className="stack-dot"></div>
                <div className="stack-l">{layer.l}{layer.flag && <span className="stack-flag mono">FLAGSHIP</span>}</div>
                <div className="stack-s mono">{layer.s}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── TIER 2 — FULL-SPECTRUM SUITE ──────────────────────────────── */}
      <section className="suite-tier">
        <div className="page">
          <div className="tier-head">
            <Reveal><div className="tier-label"><span className="mono">FULL-SPECTRUM DIGITAL</span></div></Reveal>
            <Reveal delay={120}><h2 className="h-section tier-title">The product around the intelligence.</h2></Reveal>
            <Reveal delay={200}>
              <p className="lede tier-lede">
                The complementary capabilities that turn an AI engine into a shipped product —
                designed, engineered, and delivered by the same team.
              </p>
            </Reveal>
          </div>

          <div className="suite-grid">
            {suiteServices.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="suite-card">
                  <div className="suite-top">
                    <div className="suite-icon">{SvcIcon[s.icon]}</div>
                    {s.ai && <span className="suite-ai mono">AI-ENABLED</span>}
                  </div>
                  <h3 className="suite-t">{s.t}</h3>
                  <p className="suite-value">{s.value}</p>
                  <div className="suite-tags">
                    {s.tags.map(t => <span key={t} className="tag mono">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngagementShape />
      <ClosingCtaSection />
    </main>
  );
}

function EngagementShape() {
  const phases = [
    { w: '01', t: 'Discovery', d: '2 weeks. We map the problem, the data, the product, and the deployment surface. End state: a written scope you could hand to anyone.', dur: '2w' },
    { w: '02', t: 'Foundation', d: 'Data pipelines, baselines, the eval harness, and the product skeleton that everything else hangs on.', dur: '4w' },
    { w: '03', t: 'Iteration', d: 'Model rounds against the harness, in lockstep with the UI and platform. Weekly reviews. No surprise demos.', dur: '6–12w' },
    { w: '04', t: 'Hardening', d: 'Production deployment, monitoring, and the runbooks your on-call will actually read.', dur: '3w' },
    { w: '05', t: 'Operation', d: 'Continuous monitoring, retraining, and product iteration on the cadence your business needs.', dur: 'ongoing' },
  ];
  return (
    <section className="engagement hairline-b hairline">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Engagement shape</Eyebrow></Reveal>
            <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>How a typical project flows.</h2></Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              Every engagement is bespoke, but the shape is consistent — discovery, foundation, iteration, hardening, operation. Each phase has a deliverable you can hold.
            </p>
          </Reveal>
        </div>

        <div className="engagement-timeline">
          {phases.map((p, i) => (
            <Reveal key={p.w} delay={i * 100} className="phase">
              <div className="phase-marker mono">{p.w}</div>
              <div className="phase-line"></div>
              <div className="phase-body">
                <div className="phase-head">
                  <h3 className="h-card">{p.t}</h3>
                  <span className="mono phase-dur">{p.dur}</span>
                </div>
                <p className="muted phase-d">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Shared page header
function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="page-header hairline-b">
      <div className="page page-header-inner">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h1 className="h-display page-header-title">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={240}>
            <p className="lede page-header-lede">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

(function injectServicesCss() {
  if (document.getElementById('services-css')) return;
  const s = document.createElement('style');
  s.id = 'services-css';
  s.textContent = `
    .page-header { padding: 100px 0 80px; }
    .page-header-inner { max-width: 1100px; }
    .page-header-title { margin-top: 28px; max-width: 20ch; }
    .page-header-lede { margin-top: 28px; max-width: 64ch; }

    /* Tier heads */
    .tier-head { max-width: 880px; margin-bottom: 56px; }
    .tier-label { display: inline-flex; align-items: center; gap: 10px; padding: 7px 14px; border-radius: 999px; border: 1px solid oklch(0.83 0.13 86 / 0.35); background: var(--gold-glow); font-size: 11px; letter-spacing: 0.18em; color: var(--gold); }
    .tier-star { color: var(--gold); }
    .tier-title { margin-top: 18px; }
    .tier-lede { margin-top: 18px; }

    /* ── AI FLAGSHIP TIER ── */
    .ai-tier { padding: 110px 0; position: relative; overflow: hidden; background: linear-gradient(180deg, oklch(0.155 0.014 250), oklch(0.135 0.012 250)); }
    .ai-tier-glow { position: absolute; top: -10%; right: -5%; width: 50%; height: 70%; background: radial-gradient(ellipse, var(--gold-glow), transparent 65%); filter: blur(70px); pointer-events: none; }
    .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; position: relative; }
    .ai-card { padding: 32px; display: flex; flex-direction: column; min-height: 300px; }
    .ai-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 26px; }
    .ai-badge { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; color: var(--gold); background: var(--gold-glow); border: 1px solid oklch(0.83 0.13 86 / 0.3); }
    .ai-badge svg { width: 24px; height: 24px; }
    .ai-card-n { font-size: 11px; color: var(--text-faint); letter-spacing: 0.16em; }
    .ai-card-t { font-size: 21px; font-weight: 500; letter-spacing: -0.02em; line-height: 1.2; }
    .ai-card-value { font-size: 14.5px; color: var(--text-muted); line-height: 1.5; margin-top: 12px; }
    .ai-card-caps { list-style: none; margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 10px; }
    .ai-card-caps li { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: var(--text); }
    .cap-tick { width: 5px; height: 5px; border-radius: 999px; background: var(--gold); margin-top: 7px; flex-shrink: 0; }
    .ai-learn { margin-top: auto; padding-top: 22px; display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: var(--gold); letter-spacing: -0.005em; align-self: flex-start; }
    .ai-learn-arrow { transition: transform 0.2s ease; }
    .ai-card:hover .ai-learn-arrow { transform: translateX(4px); }

    .ai-card-cta { background: linear-gradient(160deg, oklch(0.83 0.13 86 / 0.16), oklch(0.16 0.012 250 / 0.4)); border: 1px solid oklch(0.83 0.13 86 / 0.3); border-radius: var(--radius); justify-content: center; }
    .ai-cta-eyebrow { font-size: 11px; letter-spacing: 0.18em; color: var(--gold); }
    .ai-cta-h { font-size: 28px; font-weight: 500; letter-spacing: -0.03em; line-height: 1.05; margin: 16px 0 14px; }
    .ai-cta-p { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin-bottom: 24px; }
    @media (max-width: 980px) { .ai-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .ai-grid { grid-template-columns: 1fr; } }

    /* ── INTEGRATED ── */
    .integrated { padding: 120px 0; }
    .integrated-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
    .integrated-text em { font-family: var(--font-serif); font-style: italic; color: var(--gold); }
    .integrated-stack { display: flex; flex-direction: column; gap: 10px; }
    .stack-label { font-size: 10.5px; letter-spacing: 0.18em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 10px; }
    .stack-row { display: grid; grid-template-columns: 16px 1fr auto; align-items: center; gap: 16px; padding: 20px 22px; border: 1px solid var(--border); border-radius: var(--radius); background: linear-gradient(180deg, oklch(0.18 0.014 250 / 0.5), oklch(0.15 0.012 250 / 0.3)); transition: border-color 0.3s ease, transform 0.3s ease; }
    .stack-row:hover { transform: translateX(4px); border-color: var(--row-accent); }
    .stack-row.flag { border-color: oklch(0.83 0.13 86 / 0.4); background: linear-gradient(180deg, oklch(0.83 0.13 86 / 0.12), oklch(0.15 0.012 250 / 0.3)); }
    .stack-dot { width: 10px; height: 10px; border-radius: 999px; background: var(--row-accent); box-shadow: 0 0 12px var(--row-accent); }
    .stack-l { font-size: 17px; font-weight: 500; letter-spacing: -0.01em; display: flex; align-items: center; gap: 12px; }
    .stack-flag { font-size: 9px; letter-spacing: 0.14em; color: var(--gold); border: 1px solid oklch(0.83 0.13 86 / 0.4); padding: 3px 7px; border-radius: 999px; }
    .stack-s { font-size: 11px; letter-spacing: 0.08em; color: var(--text-dim); text-transform: uppercase; }
    @media (max-width: 980px) { .integrated-inner { grid-template-columns: 1fr; gap: 48px; } }

    /* ── SUITE TIER ── */
    .suite-tier { padding: 110px 0; background: oklch(0.13 0.012 250); }
    .suite-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .suite-card { padding: 28px; border: 1px solid var(--border); border-radius: var(--radius); background: linear-gradient(180deg, oklch(0.17 0.014 250 / 0.5), oklch(0.15 0.012 250 / 0.3)); display: flex; flex-direction: column; min-height: 220px; }
    .suite-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; }
    .suite-icon { width: 42px; height: 42px; border-radius: 10px; display: grid; place-items: center; color: var(--accent); background: oklch(0.66 0.18 252 / 0.12); border: 1px solid oklch(0.66 0.18 252 / 0.25); }
    .suite-icon svg { width: 22px; height: 22px; }
    .suite-ai { font-size: 9px; letter-spacing: 0.14em; color: var(--gold); border: 1px solid oklch(0.83 0.13 86 / 0.35); padding: 4px 8px; border-radius: 999px; background: var(--gold-glow); }
    .suite-t { font-size: 18px; font-weight: 500; letter-spacing: -0.015em; line-height: 1.2; }
    .suite-value { font-size: 13.5px; color: var(--text-muted); line-height: 1.5; margin-top: 10px; flex: 1; }
    .suite-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--border); }
    @media (max-width: 980px) { .suite-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .suite-grid { grid-template-columns: 1fr; } }

    /* ── ENGAGEMENT ── */
    .engagement { padding: 120px 0; }
    .engagement-timeline { position: relative; }
    .phase { display: grid; grid-template-columns: 80px 60px 1fr; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--border); gap: 24px; }
    .phase:last-child { border-bottom: none; }
    .phase-marker { font-size: 11px; letter-spacing: 0.16em; color: var(--text-faint); padding-top: 6px; }
    .phase-line { width: 8px; height: 8px; border-radius: 999px; background: var(--accent); margin-top: 8px; position: relative; }
    .phase-line::after { content: ""; position: absolute; left: 50%; top: 100%; width: 1px; height: 80px; background: var(--border); transform: translateX(-50%); }
    .phase:last-child .phase-line::after { display: none; }
    .phase-head { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; }
    .phase-dur { font-size: 11px; color: var(--text-faint); letter-spacing: 0.14em; text-transform: uppercase; }
    .phase-d { margin-top: 8px; max-width: 64ch; font-size: 14.5px; }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageServices, PageHeader });
