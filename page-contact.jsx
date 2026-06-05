/* Contact page — working form with validation */

function PageContact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', role: '',
    services: [],
    stage: 'scoping',
    timeline: 'q3',
    detail: '',
    nda: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleService = (key) => setForm(f => ({
    ...f,
    services: f.services.includes(key)
      ? f.services.filter(s => s !== key)
      : [...f.services, key],
  }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.detail.trim() || form.detail.trim().length < 20) e.detail = 'A sentence or two — at least 20 characters';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  if (submitted) {
    return (
      <main className="contact-page">
        <section className="contact-thanks">
          <div className="page thanks-inner">
            <Reveal><Eyebrow>Received</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h1 className="h-display" style={{ marginTop: 22, maxWidth: '16ch' }}>
                Thank you, <em>{form.name.split(' ')[0]}</em>.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="lede" style={{ marginTop: 22 }}>
                A founding engineer will read your brief in the next 24 hours and reply directly. No funnel, no SDR.
                If we&rsquo;re the right partner, we&rsquo;ll suggest a 30-minute discovery call. If we aren&rsquo;t, we&rsquo;ll tell you who is.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="hero-ctas" style={{ marginTop: 28 }}>
                <Button kind="ghost" onClick={() => { setSubmitted(false); setForm({ ...form, detail: '' }); }}>Send another</Button>
                <Button kind="primary" href="#home">Back to home</Button>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <CornerCard className="thanks-receipt">
                <div className="mono receipt-h">SUBMISSION · RECEIPT</div>
                <div className="receipt-grid">
                  <div><span className="dim mono">REF</span> <span className="mono">CL-{Math.floor(Math.random() * 90000 + 10000)}</span></div>
                  <div><span className="dim mono">FROM</span> <span>{form.name}</span></div>
                  <div><span className="dim mono">CO</span> <span>{form.company}</span></div>
                  <div><span className="dim mono">SCOPE</span> <span>{
                    form.services.length === 0 ? 'To be scoped'
                    : form.services.length === 1 ? '1 service area'
                    : form.services.length + ' service areas'
                  }</span></div>
                  <div><span className="dim mono">STAGE</span> <span>{form.stage}</span></div>
                  <div><span className="dim mono">RESPONSE</span> <span className="gold">&lt; 24h</span></div>
                </div>
              </CornerCard>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <PageHeader
        eyebrow="Contact"
        title={<>Start a conversation,<br/>not a <em>funnel</em>.</>}
        lede="The fastest way in is the form below. A founding engineer reads every submission. We reply within 24 hours — usually with a question, sometimes with a referral to someone better suited."
      />

      <section className="contact-body hairline-b">
        <div className="page contact-grid">
          <aside className="contact-aside">
            <Reveal>
              <CornerCard className="aside-card">
                <div className="mono aside-h">Direct</div>
                <div className="aside-block">
                  <div className="dim mono aside-l">EMAIL</div>
                  <a href="mailto:info@corelogics.ae" className="aside-v">info@corelogics.ae</a>
                </div>
                <div className="aside-block">
                  <div className="dim mono aside-l">WEB</div>
                  <a href="https://www.corelogics.ae" className="aside-v">www.corelogics.ae</a>
                </div>
                <div className="aside-block">
                  <div className="dim mono aside-l">OFFICE</div>
                  <div className="aside-v">
                    Office C1-1F<br/>
                    Ajman Free Zone<br/>
                    Ajman, United Arab Emirates
                  </div>
                </div>
                <div className="aside-block">
                  <div className="dim mono aside-l">RESPONSE TIME</div>
                  <div className="aside-v">
                    <span className="pulse-dot"></span>&nbsp;
                    <span>&lt; 24 hours, weekdays</span>
                  </div>
                </div>
              </CornerCard>
            </Reveal>

            <Reveal delay={160}>
              <CornerCard className="aside-card aside-card-honest">
                <div className="mono aside-h gold">Worth knowing</div>
                <ul className="honest-list">
                  <li><span className="bullet"></span><span>We take a product from concept to deployment — AI, design, engineering, and data — as one team, no vendor relay.</span></li>
                  <li><span className="bullet"></span><span>AI is our flagship: Computer Vision and Generative AI. The product layers around it are how we make it matter.</span></li>
                  <li><span className="bullet"></span><span>NDAs are standard. We&rsquo;ll countersign yours, or send ours — whichever is faster.</span></li>
                  <li><span className="bullet"></span><span>Q3 2026 has capacity. Q4 is filling.</span></li>
                </ul>
              </CornerCard>
            </Reveal>
          </aside>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-section">
              <div className="mono form-section-h">01 · About you</div>
              <div className="form-row">
                <Field label="Name" required err={errors.name}>
                  <input type="text" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Jane Engineer" />
                </Field>
                <Field label="Work email" required err={errors.email}>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="jane@company.com" />
                </Field>
              </div>
              <div className="form-row">
                <Field label="Company" required err={errors.company}>
                  <input type="text" value={form.company} onChange={e => set('company', e.target.value)} placeholder="Company name" />
                </Field>
                <Field label="Role">
                  <input type="text" value={form.role} onChange={e => set('role', e.target.value)} placeholder="e.g. CTO, VP Eng, PM" />
                </Field>
              </div>
            </div>

            <div className="form-section">
              <div className="mono form-section-h">02 · About the project</div>

              <Field label="What can we help with?" err={errors.services}>
                <div className="svc-pick">
                  <div className="svc-pick-group mono">AI &amp; Intelligent Systems</div>
                  <div className="seg">
                    {[
                      ['cv', 'Computer Vision'],
                      ['genai', 'Generative AI'],
                      ['aidata', 'AI Data Services'],
                      ['mlops', 'MLOps & Infrastructure'],
                      ['edge', 'Edge & Cloud AI'],
                    ].map(([v, l]) => (
                      <button type="button" key={v} className={`seg-btn chip-multi ${form.services.includes(v) ? 'on' : ''}`} onClick={() => toggleService(v)}>
                        {form.services.includes(v) && <span className="chip-check">✓</span>}{l}
                      </button>
                    ))}
                  </div>
                  <div className="svc-pick-group mono">Product &amp; Engineering</div>
                  <div className="seg">
                    {[
                      ['uiux', 'UI/UX Design'],
                      ['web', 'Web Development'],
                      ['mobile', 'Mobile Apps'],
                      ['dataeng', 'Data Engineering'],
                      ['bi', 'Business Intelligence'],
                      ['fintech', 'Fintech Dashboards'],
                    ].map(([v, l]) => (
                      <button type="button" key={v} className={`seg-btn chip-multi ${form.services.includes(v) ? 'on' : ''}`} onClick={() => toggleService(v)}>
                        {form.services.includes(v) && <span className="chip-check">✓</span>}{l}
                      </button>
                    ))}
                  </div>
                  <div className="seg" style={{ marginTop: 10 }}>
                    {[['unsure', 'Not sure yet — help me scope it']].map(([v, l]) => (
                      <button type="button" key={v} className={`seg-btn chip-multi ${form.services.includes(v) ? 'on' : ''}`} onClick={() => toggleService(v)}>
                        {form.services.includes(v) && <span className="chip-check">✓</span>}{l}
                      </button>
                    ))}
                  </div>
                </div>
              </Field>

              <Field label="Where are you?">
                <div className="seg">
                  {[['idea', 'Idea / pre-prototype'], ['scoping', 'Scoping'], ['piloting', 'Piloting'], ['scaling', 'Scaling existing product']].map(([v, l]) => (
                    <button type="button" key={v} className={`seg-btn ${form.stage === v ? 'on' : ''}`} onClick={() => set('stage', v)}>{l}</button>
                  ))}
                </div>
              </Field>

              <Field label="Timeline">
                <div className="seg">
                  {[['now', 'Starting now'], ['q3', 'Q3 2026'], ['q4', 'Q4 2026'], ['2027', '2027'], ['exploring', 'Exploring']].map(([v, l]) => (
                    <button type="button" key={v} className={`seg-btn ${form.timeline === v ? 'on' : ''}`} onClick={() => set('timeline', v)}>{l}</button>
                  ))}
                </div>
              </Field>
            </div>

            <div className="form-section">
              <div className="mono form-section-h">03 · What you&rsquo;d like to build</div>
              <Field label="A sentence or two" required err={errors.detail}>
                <textarea
                  rows="5"
                  value={form.detail}
                  onChange={e => set('detail', e.target.value)}
                  placeholder="The shorter and sharper, the better. What problem are you solving, and what does success look like?"
                ></textarea>
                <div className="field-counter mono">
                  <span className={form.detail.length < 20 ? 'dim' : 'gold'}>{form.detail.length}</span>
                  <span className="dim"> / 20 minimum</span>
                </div>
              </Field>

              <label className="check">
                <input type="checkbox" checked={form.nda} onChange={e => set('nda', e.target.checked)} />
                <span className="check-box"><span className="check-mark"></span></span>
                <span>Send NDA before we discuss specifics. <span className="dim">We&rsquo;ll send ours within an hour.</span></span>
              </label>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn-gold" disabled={submitting}>
                {submitting ? <span>Submitting…</span> : <React.Fragment><span>Send to founding team</span><span className="arrow">→</span></React.Fragment>}
              </button>
              <div className="mono submit-note">
                <span className="dim">EXPECTED REPLY · </span>
                <span className="gold">&lt; 24 hours</span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, required, err, children }) {
  return (
    <div className={`field ${err ? 'has-err' : ''}`}>
      <label className="field-label">
        <span>{label}</span>
        {required && <span className="req">*</span>}
        {err && <span className="err-msg">{err}</span>}
      </label>
      {children}
    </div>
  );
}

(function injectContactCss() {
  if (document.getElementById('contact-css')) return;
  const s = document.createElement('style');
  s.id = 'contact-css';
  s.textContent = `
    .contact-body { padding: 60px 0 120px; }
    .contact-grid { display: grid; grid-template-columns: 360px 1fr; gap: 60px; align-items: start; }
    @media (max-width: 1000px) { .contact-grid { grid-template-columns: 1fr; gap: 32px; } }

    .contact-aside { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 100px; }
    .aside-card { padding: 28px; }
    .aside-h { font-size: 11px; letter-spacing: 0.2em; color: var(--text-faint); text-transform: uppercase; padding-bottom: 16px; border-bottom: 1px solid var(--border); margin-bottom: 18px; }
    .aside-block { padding: 14px 0; border-bottom: 1px dashed var(--border); }
    .aside-block:last-child { border-bottom: none; }
    .aside-l { font-size: 10.5px; letter-spacing: 0.14em; margin-bottom: 6px; }
    .aside-v { font-size: 14px; line-height: 1.5; color: var(--text); }
    a.aside-v { transition: color 0.2s ease; }
    a.aside-v:hover { color: var(--gold); }
    .honest-list { list-style: none; margin-top: 4px; }
    .honest-list li { display: flex; gap: 12px; padding: 10px 0; font-size: 13.5px; color: var(--text-muted); line-height: 1.55; border-bottom: 1px dashed var(--border); }
    .honest-list li:last-child { border-bottom: none; }
    .honest-list .bullet { width: 5px; height: 5px; border-radius: 999px; background: var(--gold); margin-top: 8px; flex-shrink: 0; }
    @media (max-width: 1000px) { .contact-aside { position: static; } }

    .contact-form { border: 1px solid var(--border); border-radius: var(--radius); padding: 40px; background: linear-gradient(180deg, oklch(0.16 0.012 250 / 0.6), oklch(0.14 0.01 250 / 0.4)); }
    .form-section { padding: 24px 0; border-bottom: 1px solid var(--border); }
    .form-section:first-child { padding-top: 0; }
    .form-section:last-of-type { border-bottom: none; }
    .form-section-h { font-size: 11px; letter-spacing: 0.18em; color: var(--gold); text-transform: uppercase; margin-bottom: 22px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
    .field { margin-bottom: 18px; }
    .field-label { display: flex; gap: 8px; align-items: baseline; font-size: 11px; letter-spacing: 0.14em; color: var(--text-dim); text-transform: uppercase; margin-bottom: 8px; }
    .field-label .req { color: var(--gold); }
    .field-label .err-msg { color: var(--red); margin-left: auto; letter-spacing: 0.06em; text-transform: none; font-size: 12px; }
    .field input[type="text"], .field input[type="email"], .field select, .field textarea {
      width: 100%; background: oklch(0.13 0.012 250); border: 1px solid var(--border); color: var(--text);
      border-radius: var(--radius-sm); padding: 14px 16px; font: inherit; font-size: 14.5px; transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-glow); }
    .field.has-err input, .field.has-err select, .field.has-err textarea { border-color: var(--red); }
    .field textarea { resize: vertical; line-height: 1.55; }
    .field-counter { margin-top: 8px; font-size: 11px; letter-spacing: 0.1em; text-align: right; }

    .seg { display: flex; flex-wrap: wrap; gap: 6px; }
    .seg-btn { padding: 10px 14px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: oklch(0.14 0.01 250); color: var(--text-muted); font-size: 13px; transition: all 0.2s ease; cursor: pointer; }
    .seg-btn:hover { color: var(--text); border-color: var(--border-strong); transform: translateY(-1px); }
    .seg-btn.on { background: var(--text); color: var(--bg); border-color: var(--text); }

    .svc-pick { display: flex; flex-direction: column; gap: 10px; }
    .svc-pick-group { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-faint); margin-top: 8px; }
    .svc-pick-group:first-child { margin-top: 0; }
    .chip-multi { display: inline-flex; align-items: center; gap: 7px; }
    .chip-multi.on { background: var(--gold); color: oklch(0.18 0.02 80); border-color: var(--gold); }
    .chip-multi.on:hover { filter: brightness(1.04); }
    .chip-check { font-size: 11px; font-weight: 700; line-height: 1; }

    .check { display: flex; gap: 12px; align-items: flex-start; cursor: pointer; font-size: 14px; padding: 12px 0; }
    .check input { position: absolute; opacity: 0; pointer-events: none; }
    .check-box { width: 18px; height: 18px; border-radius: 4px; border: 1px solid var(--border-strong); background: oklch(0.13 0.012 250); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; transition: all 0.2s ease; }
    .check input:checked + .check-box { background: var(--gold); border-color: var(--gold); }
    .check-mark { width: 10px; height: 6px; border-left: 2px solid var(--bg); border-bottom: 2px solid var(--bg); transform: rotate(-45deg) scale(0); transition: transform 0.2s ease; margin-top: -2px; }
    .check input:checked + .check-box .check-mark { transform: rotate(-45deg) scale(1); }

    .form-submit { display: flex; justify-content: space-between; align-items: center; padding-top: 28px; gap: 20px; flex-wrap: wrap; }
    .form-submit .btn:disabled { opacity: 0.6; cursor: wait; }
    .submit-note { font-size: 11px; letter-spacing: 0.14em; }

    /* Thanks state */
    .contact-thanks { padding: 120px 0; min-height: 70vh; }
    .thanks-inner { max-width: 760px; }
    .thanks-receipt { margin-top: 64px; padding: 28px 32px; }
    .receipt-h { font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint); padding-bottom: 16px; border-bottom: 1px solid var(--border); margin-bottom: 18px; }
    .receipt-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px 32px; font-size: 13px; }
    .receipt-grid > div { display: flex; flex-direction: column; gap: 6px; }
    .receipt-grid .mono { font-size: 10.5px; letter-spacing: 0.14em; }
    @media (max-width: 600px) { .receipt-grid { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageContact, Field });
