/* Industries page */

function PageIndustries() {
  const industries = [
    {
      key: 'personal',
      t: 'Personal AI Assistants',
      lede: 'AI companions and copilots that actually remember the person using them — their preferences, their goals, their history — built to be useful for years, not just one chat session.',
      problems: ['Generic assistants forget what matters to you.', 'Chat and voice don\u2019t share the same memory.', 'Personalization has to respect privacy.'],
      capabilities: ['Long-term memory', 'Goal tracking & planning', 'Voice + text in one experience', 'Helpful reminders', 'On-device privacy options'],
      metric: { v: '62%', l: 'still active after 30 days, beta' },
      img: 'personal AI — voice + chat interface',
    },
    {
      key: 'edtech',
      t: 'Education & Learning',
      lede: 'Turn years of textbooks, past exams, and study notes into an AI tutor that actually understands the curriculum — practice questions, mock exams, and a conversational study partner.',
      problems: ['Course material is stuck in PDFs and scanned documents.', 'Generic AI tutors go off-script and give wrong answers.', 'Teachers need oversight, not more grading work.'],
      capabilities: ['Reads and understands documents & diagrams', 'Understands questions with diagrams and equations', 'AI-generated practice questions', 'Adapts to each student’s weak spots', 'Dashboards for teachers'],
      metric: { v: '3.1×', l: 'more practice completed vs. the old way' },
      img: 'learning portal — practice session',
    },
    {
      key: 'agents',
      t: 'AI Chatbots & Automation',
      lede: 'Chat and voice assistants for customer support, operations, and internal workflows — that know your business and stay accurate.',
      problems: ['Generic chatbots go off-brand or make things up.', 'Wrong answers are a serious risk in regulated industries.', 'Costs can spiral without the right guardrails.'],
      capabilities: ['Assistants grounded in your own data', 'Can take real actions, not just chat', 'Voice and text support', 'Built-in safety guardrails', 'Cost controls'],
      metric: { v: '8×', l: 'more work handled per hour' },
      img: 'agent console — tools + retrieval',
    },
    {
      key: 'compliance',
      t: 'Compliance & Safety Monitoring',
      lede: 'Camera and sensor systems for factories and inspection lines that monitor safety and quality automatically, with a clear record for auditors and regulators.',
      problems: ['Compliance is currently checked by hand, inconsistently.', 'Auditors want proof, not someone\u2019s word.', 'Systems need to keep working without a constant internet connection.'],
      capabilities: ['Real-time video and audio monitoring', 'Tracks people and items across multiple cameras', 'Environmental monitoring (temperature, air quality)', 'Tamper-proof records', 'Works without depending on the cloud'],
      metric: { v: '99.4%', l: 'of checks covered automatically, per event' },
      img: 'control room — multi-camera dashboard',
    },
    {
      key: 'retail',
      t: 'Retail Intelligence',
      lede: 'Turn the security cameras you already have into useful insight — what’s out of stock, how long checkout lines are, whether displays are set up correctly.',
      problems: ['Empty shelves cost more than theft does.', 'Your camera systems are mostly unused today.', 'Store teams need proof, not guesswork.'],
      capabilities: ['Shelf stock monitoring', 'Checkout line analytics', 'Display/layout compliance checks', 'Loss prevention alerts', 'Store activity heatmaps'],
      metric: { v: '34%', l: 'improvement in shelf availability, 12-week pilot' },
      img: 'in-store overhead camera frame',
    },
    {
      key: 'manufacturing',
      t: 'Manufacturing Quality Control',
      lede: 'Spot defects and measurement errors on the production line, in real time — running right on the factory floor, not depending on a distant server.',
      problems: ['Rejecting good products is as costly as missing bad ones.', 'Line speed matters as much as accuracy.', 'Systems have to work in poor lighting, dust, and constant motion.'],
      capabilities: ['Surface defect detection', 'Precise measurement checks', 'Unusual pattern detection', 'On-site processing (no cloud lag)', 'Line performance tracking'],
      metric: { v: '71%', l: 'fewer good products wrongly rejected' },
      img: 'press line — stamped panel close-up',
    },
  ];

  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? industries : industries.filter(i => i.key === filter);

  return (
    <main className="industries-page">
      <PageHeader
        eyebrow="Industries"
        title={<>Industries we already <em>understand</em>.</>}
        lede="From personal AI assistants to safety monitoring on a factory floor, we focus on the kinds of products we&rsquo;ve built before. Different industries, different challenges — same level of quality every time."
      />

      <section className="industry-filter-bar hairline-b">
        <div className="page filter-row">
          <span className="mono filter-label">FILTER</span>
          <div className="filter-chips">
            <button className={`chip ${filter === 'all' ? 'on' : ''}`} onClick={() => setFilter('all')}>All</button>
            {industries.map(i => (
              <button key={i.key} className={`chip ${filter === i.key ? 'on' : ''}`} onClick={() => setFilter(i.key)}>{i.t}</button>
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
                    <div className="metric-val accent-text" style={{ fontSize: 48, letterSpacing: '-0.04em', lineHeight: 1 }}>{it.metric.v}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.4, color: 'var(--text-muted)', marginTop: 10, maxWidth: '22ch' }}>{it.metric.l}</div>
                  </CornerCard>
                </div>
                <div className="industry-content">
                  <Eyebrow>Industry · {it.t}</Eyebrow>
                  <h2 className="h-section" style={{ marginTop: 14 }}>{it.t}</h2>
                  <p className="lede" style={{ marginTop: 20 }}>{it.lede}</p>

                  <div className="industry-sub-h">Problems we solve</div>
                  <ul className="industry-problems">
                    {it.problems.map(p => <li key={p}><span className="bullet"></span><span>{p}</span></li>)}
                  </ul>

                  <div className="industry-sub-h">Capabilities</div>
                  <div className="pillar-tags">
                    {it.capabilities.map(c => <span key={c} className="tag">{c}</span>)}
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
    .industry-filter-bar { padding: 16px 0; position: sticky; top: var(--nav-h, 76px); z-index: var(--z-sticky); background: color-mix(in oklab, var(--bg) 86%, transparent); backdrop-filter: blur(14px) saturate(1.4); -webkit-backdrop-filter: blur(14px) saturate(1.4); border-bottom: 1px solid var(--border); }
    .filter-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
    .filter-label { font-size: 11.5px; letter-spacing: 0.14em; color: var(--text-faint); }
    .filter-chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { font-size: 13px; padding: 6px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--surface); color: var(--text-muted); transition: color 0.2s var(--ease), border-color 0.2s var(--ease), background-color 0.2s var(--ease); }
    .chip:hover { color: var(--text); border-color: var(--border-strong); background: var(--surface-2); }
    .chip.on { color: var(--bg); background: var(--text); border-color: var(--text); }

    .industries-list { padding: clamp(56px, 7vw, 88px) 0; }
    .industry-block { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: clamp(40px, 6vw, 80px); align-items: center; padding: clamp(44px, 5vw, 68px) 0; border-bottom: 1px solid var(--border); }
    .industry-block:last-child { border-bottom: none; }
    .industry-block.flip { direction: rtl; }
    .industry-block.flip > * { direction: ltr; }
    .industry-visual { position: relative; }
    .industry-metric-card { position: absolute; bottom: -24px; right: -24px; padding: 24px; background: var(--surface); box-shadow: var(--shadow-3); min-width: 220px; }
    .industry-sub-h { font-size: 11px; font-weight: 500; letter-spacing: 0.15em; color: var(--text-faint); text-transform: uppercase; margin-top: 34px; padding-bottom: 13px; border-bottom: 1px solid var(--border); margin-bottom: 14px; }
    .industry-problems { list-style: none; }
    .industry-problems li { display: flex; gap: 14px; padding: 10px 0; font-size: 14.5px; color: var(--text); line-height: 1.55; }
    .industry-problems .bullet { width: 6px; height: 6px; border-radius: 1px; background: var(--accent); margin-top: 9px; flex-shrink: 0; transform: rotate(45deg); }

    @media (max-width: 980px) {
      .industry-block { grid-template-columns: 1fr; gap: 48px; }
      .industry-block.flip { direction: ltr; }
      .industry-metric-card { right: 16px; bottom: 16px; }
    }

    /* A second sticky bar stacked under the sticky nav is a tight, glitchy
       fit on phones (the two can visually collide during momentum scroll,
       and it eats scarce vertical space) — just let it scroll with the page. */
    @media (max-width: 700px) {
      .industry-filter-bar { position: static; top: auto; backdrop-filter: none; -webkit-backdrop-filter: none; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageIndustries });
