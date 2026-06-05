/* Industries page */

function PageIndustries() {
  const industries = [
    {
      key: 'personal',
      t: 'Personal Intelligence',
      lede: 'Long-running AI companions and copilots that know the person — memory, goals, voice and text — engineered for years of use, not a single session.',
      problems: ['Generic assistants forget what matters.', 'Voice and text don\u2019t share the same brain.', 'Personalization eventually collides with privacy.'],
      capabilities: ['Long-horizon memory', 'Goal & plan modeling', 'Voice + text continuity', 'Proactive nudging', 'On-device options'],
      metric: { v: '62%', l: 'day-30 retention, beta cohort' },
      img: 'personal AI — voice + chat interface',
    },
    {
      key: 'edtech',
      t: 'Education & Learning',
      lede: 'Ingest decades of academic material; produce a tutor that actually understands the curriculum. Mock exams, adaptive practice, and conversational learning grounded in the institution\u2019s own content.',
      problems: ['Past papers and notes are locked in PDFs and scans.', 'Generic tutors hallucinate outside the syllabus.', 'Teachers need oversight, not another grading queue.'],
      capabilities: ['Multi-modal ingestion', 'Question + diagram understanding', 'AI mock-exam generation', 'Adaptive practice', 'Teacher dashboards'],
      metric: { v: '3.1×', l: 'practice volume vs. legacy workflow' },
      img: 'learning portal — practice session',
    },
    {
      key: 'agents',
      t: 'Conversational & Agentic Workflows',
      lede: 'Domain-grounded chat and voice agents for support, operations, and internal workflows — with retrieval, tools, and guardrails that hold up in regulated channels.',
      problems: ['Generic models break brand and policy.', 'Hallucinations are a P0 in regulated workflows.', 'Cost spirals without orchestration governance.'],
      capabilities: ['Retrieval-grounded agents', 'Tool use & orchestration', 'Voice + text channels', 'Guardrails & policy', 'Cost governance'],
      metric: { v: '8×', l: 'workflow throughput uplift' },
      img: 'agent console — tools + retrieval',
    },
    {
      key: 'compliance',
      t: 'Quality, Safety & Compliance',
      lede: 'Vision and sensor systems for slaughterhouses, factories, and inspection lines — real-time monitoring with auditable evidence for regulators and certifiers.',
      problems: ['Compliance is monitored manually and inconsistently.', 'Audits demand evidence, not anecdote.', 'Edge deployment can\u2019t depend on the cloud.'],
      capabilities: ['Vision + audio events', 'Multi-camera identity tracking', 'Environmental sensing', 'Tamper-evident audit trail', 'Edge inference'],
      metric: { v: '99.4%', l: 'compliance check coverage per event' },
      img: 'control room — multi-camera dashboard',
    },
    {
      key: 'retail',
      t: 'Retail Operations',
      lede: 'Operational intelligence from cameras you already own — shelf availability, queue analytics, planogram compliance, and loss prevention.',
      problems: ['Shelf gaps cost more than shrink.', 'Existing camera infrastructure is under-used.', 'Store ops needs evidence, not anecdote.'],
      capabilities: ['Shelf availability', 'Queue analytics', 'Planogram compliance', 'Loss prevention', 'Heatmaps'],
      metric: { v: '34%', l: 'shelf availability lift, 12-week pilot' },
      img: 'in-store overhead camera frame',
    },
    {
      key: 'manufacturing',
      t: 'Manufacturing QC',
      lede: 'Surface-defect detection and dimensional verification at line speed — running on the line, not in the cloud.',
      problems: ['False rejects are as expensive as misses.', 'Cycle time is the constraint, not accuracy alone.', 'Models must work in poor light, dust, and motion.'],
      capabilities: ['Surface defect', 'Dimensional QC', 'Anomaly detection', 'Edge inference', 'Line analytics'],
      metric: { v: '71%', l: 'false-reject reduction, stamped metal' },
      img: 'press line — stamped panel close-up',
    },
  ];

  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? industries : industries.filter(i => i.key === filter);

  return (
    <main className="industries-page">
      <PageHeader
        eyebrow="Industries"
        title={<>Where the work <em>compounds</em>.</>}
        lede="From a personal AI companion to a slaughterhouse compliance system, we focus where we&rsquo;ve shipped before. Different surfaces, different stakes — but the same engineering bar across agentic, conversational, and vision systems."
      />

      <section className="industry-filter-bar hairline-b">
        <div className="page filter-row">
          <span className="mono filter-label">FILTER</span>
          <div className="filter-chips">
            <button className={`chip mono ${filter === 'all' ? 'on' : ''}`} onClick={() => setFilter('all')}>All</button>
            {industries.map(i => (
              <button key={i.key} className={`chip mono ${filter === i.key ? 'on' : ''}`} onClick={() => setFilter(i.key)}>{i.t}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-list">
        <div className="page">
          {shown.map((it, idx) => (
            <Reveal key={it.key}>
              <article className={`industry-block ${idx % 2 ? 'flip' : ''}`}>
                <div className="industry-visual">
                  {(() => {
                    return <IndustryPhoto industryKey={it.key} accent="var(--accent)" />;
                  })()}
                  <CornerCard className="industry-metric-card">
                    <div className="metric-val gold" style={{ fontSize: 48, letterSpacing: '-0.04em', lineHeight: 1 }}>{it.metric.v}</div>
                    <div className="mono" style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: 10, maxWidth: '22ch' }}>{it.metric.l}</div>
                  </CornerCard>
                </div>
                <div className="industry-content">
                  <Eyebrow>Industry · {it.t}</Eyebrow>
                  <h2 className="h-section" style={{ marginTop: 14 }}>{it.t}</h2>
                  <p className="lede" style={{ marginTop: 20 }}>{it.lede}</p>

                  <div className="industry-sub-h mono">PROBLEMS WE SOLVE</div>
                  <ul className="industry-problems">
                    {it.problems.map(p => <li key={p}><span className="bullet"></span><span>{p}</span></li>)}
                  </ul>

                  <div className="industry-sub-h mono">CAPABILITIES</div>
                  <div className="pillar-tags">
                    {it.capabilities.map(c => <span key={c} className="tag mono">{c}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCtaSection />
    </main>
  );
}

(function injectIndustriesCss() {
  if (document.getElementById('industries-css')) return;
  const s = document.createElement('style');
  s.id = 'industries-css';
  s.textContent = `
    .industry-filter-bar { padding: 18px 0; position: sticky; top: 64px; z-index: 20; background: oklch(0.14 0.01 250 / 0.85); backdrop-filter: blur(12px); }
    .filter-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
    .filter-label { font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint); }
    .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { font-size: 11px; padding: 6px 12px; border: 1px solid var(--border); border-radius: 999px; color: var(--text-muted); letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s ease; }
    .chip:hover { color: var(--text); border-color: var(--border-strong); }
    .chip.on { color: var(--bg); background: var(--text); border-color: var(--text); }

    .industries-list { padding: 80px 0; }
    .industry-block { display: grid; grid-template-columns: 1.05fr 1fr; gap: 80px; align-items: center; padding: 64px 0; border-bottom: 1px solid var(--border); }
    .industry-block:last-child { border-bottom: none; }
    .industry-block.flip { direction: rtl; }
    .industry-block.flip > * { direction: ltr; }
    .industry-visual { position: relative; }
    .industry-metric-card { position: absolute; bottom: -24px; right: -24px; padding: 24px; background: var(--bg); min-width: 220px; }
    .industry-sub-h { font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint); text-transform: uppercase; margin-top: 36px; padding-bottom: 14px; border-bottom: 1px solid var(--border); margin-bottom: 16px; }
    .industry-problems { list-style: none; }
    .industry-problems li { display: flex; gap: 14px; padding: 10px 0; font-size: 14.5px; color: var(--text); line-height: 1.55; }
    .industry-problems .bullet { width: 6px; height: 6px; border-radius: 0; background: var(--gold); margin-top: 9px; flex-shrink: 0; transform: rotate(45deg); }

    @media (max-width: 980px) {
      .industry-block { grid-template-columns: 1fr; gap: 48px; }
      .industry-block.flip { direction: ltr; }
      .industry-metric-card { right: 16px; bottom: 16px; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageIndustries });
