/* Curated stock imagery (Unsplash) + on-brand image frame.
   Each photo is hotlinked with width=1200 q=80 for crisp rendering. */

// Curated photo URLs — stable Unsplash photo IDs, royalty-free.
const IMG = {
  // Industries
  personal:       'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&auto=format&fit=crop',
  edtech:         'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
  agents:         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  compliance:     'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&q=80&auto=format&fit=crop',
  retail:         'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80&auto=format&fit=crop',
  manufacturing:  'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop',

  // Services
  svcData:        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  svcModels:      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop',
  svcMlops:       'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
  svcDeploy:      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
  svcOptimize:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',

  // Team (professional portraits — diverse)
  team0:          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
  team1:          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop',
  team2:          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop',
  team3:          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop',
};

// Image frame — on-brand chrome around a photograph.
function PhotoFrame({ src, alt, label, height = 420, accent = 'var(--accent)', style, objectPosition = 'center center' }) {
  return (
    <div className="pfx" style={{ height, ...style }}>
      <div className="pfx-frame">
        <div className="pfx-bar">
          <span className="pfx-dot" style={{ background: '#ff5f57' }}></span>
          <span className="pfx-dot" style={{ background: '#febc2e' }}></span>
          <span className="pfx-dot" style={{ background: '#28c840' }}></span>
          <span className="pfx-label mono">{label}</span>
        </div>
        <div className="pfx-body" style={{ '--pfx-accent': accent }}>
          <div
            className="pfx-img"
            role="img"
            aria-label={alt}
            style={{ backgroundImage: `url("${src}")`, backgroundPosition: objectPosition }}
          ></div>
          <div className="pfx-overlay"></div>
          <div className="pfx-grain"></div>
        </div>
      </div>
    </div>
  );
}

// Convenience wrappers per surface
function IndustryPhoto({ industryKey, accent }) {
  const meta = {
    personal:      { src: IMG.personal,      label: 'personal-intelligence',    alt: 'Person interacting with personal AI assistant' },
    edtech:        { src: IMG.edtech,        label: 'education-and-learning',   alt: 'Student studying' },
    agents:        { src: IMG.agents,        label: 'agentic-workflows',        alt: 'Developer at workstation' },
    compliance:    { src: IMG.compliance,    label: 'quality-and-compliance',   alt: 'Industrial inspection environment' },
    retail:        { src: IMG.retail,        label: 'retail-operations',        alt: 'Retail store aisle' },
    manufacturing: { src: IMG.manufacturing, label: 'manufacturing-qc',         alt: 'Manufacturing line' },
  }[industryKey];
  if (!meta) return null;
  return <PhotoFrame src={meta.src} label={meta.label} alt={meta.alt} height={420} accent={accent} />;
}

function ServicePhoto({ slug }) {
  const meta = {
    data:     { src: IMG.svcData,     label: 'data-services',        alt: 'Data and annotation work' },
    models:   { src: IMG.svcModels,   label: 'model-development',    alt: 'Model development workstation' },
    mlops:    { src: IMG.svcMlops,    label: 'mlops-and-pipelines',  alt: 'ML infrastructure' },
    deploy:   { src: IMG.svcDeploy,   label: 'deployment',           alt: 'Deployment hardware' },
    optimize: { src: IMG.svcOptimize, label: 'monitoring-and-optimization', alt: 'Performance analytics' },
  }[slug];
  if (!meta) return null;
  return <PhotoFrame src={meta.src} label={meta.label} alt={meta.alt} height={200} />;
}

function TeamPhoto({ index, accent }) {
  const src = [IMG.team0, IMG.team1, IMG.team2, IMG.team3][index % 4];
  return (
    <div className="team-photo" style={{ '--team-accent': accent }}>
      <div className="team-photo-img" role="img" aria-label="" style={{ backgroundImage: `url("${src}")` }}></div>
      <div className="team-photo-overlay"></div>
    </div>
  );
}


// Small wrapper for SVG-content frames (no img inside)
function PhotoFrameWrap({ children, label, height = 360, accent = 'var(--accent)', style }) {
  return (
    <div className="pfx" style={{ height, ...style }}>
      <div className="pfx-frame">
        <div className="pfx-bar">
          <span className="pfx-dot" style={{ background: '#ff5f57' }}></span>
          <span className="pfx-dot" style={{ background: '#febc2e' }}></span>
          <span className="pfx-dot" style={{ background: '#28c840' }}></span>
          <span className="pfx-label mono">{label}</span>
        </div>
        <div className="pfx-body" style={{ '--pfx-accent': accent, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

(function injectPhotoCss() {
  if (document.getElementById('photo-css')) return;
  const s = document.createElement('style');
  s.id = 'photo-css';
  s.textContent = `
    /* Photo frame — a light browser-style chrome around the image. On paper
       the picture stays close to natural; the old dark treatment (brightness
       0.78 plus a multiply overlay) turned every photo to mud against white. */
    .pfx { width: 100%; overflow: hidden; }
    .pfx-frame {
      width: 100%; height: 100%;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: var(--surface);
      display: flex; flex-direction: column;
      box-shadow: var(--shadow-3);
      transition: box-shadow 0.35s var(--ease), border-color 0.35s var(--ease);
    }
    .pfx-frame:hover { box-shadow: var(--shadow-4); }
    .pfx-bar {
      display: flex; align-items: center; gap: 7px;
      padding: 10px 14px;
      background: var(--surface-2);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
    }
    .pfx-dot { width: 9px; height: 9px; border-radius: 999px; }
    .pfx-label { margin-left: 12px; font-size: 10.5px; letter-spacing: 0.05em; color: var(--text-dim); }
    .pfx-body { flex: 1; overflow: hidden; position: relative; min-height: 0; background: var(--surface-3); }
    .pfx-img {
      display: block; width: 100%; height: 100%;
      background-size: cover; background-position: center center; background-repeat: no-repeat;
      filter: saturate(0.92) contrast(1.02);
      transition: filter 0.4s var(--ease), transform 0.6s var(--ease);
    }
    .pfx-frame:hover .pfx-img { transform: scale(1.025); filter: saturate(1) contrast(1.03); }
    /* A whisper of accent from the bottom edge, enough to tie the photo to the
       palette without staining it. */
    .pfx-overlay {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 70% 45% at 50% 108%, var(--pfx-accent, transparent), transparent 72%);
      opacity: 0.18;
    }
    .pfx-grain {
      position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJz48ZmlsdGVyIGlkPSduJz48ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC45JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDEgIDAgMCAwIDAgMSAgMCAwIDAgMCAxICAwIDAgMCAwLjA3IDAnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbiknLz48L3N2Zz4=");
      mix-blend-mode: soft-light; opacity: 0.5;
    }

    /* Portraits — squircles rather than the default circle avatar. */
    .team-photo {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--border);
      aspect-ratio: 10 / 7;
      background: var(--surface-3);
      box-shadow: var(--shadow-2);
    }
    .team-photo img, .team-photo-img {
      display: block; width: 100%; height: 100%;
      background-size: cover; background-position: center center; object-fit: cover;
      filter: saturate(0.9) contrast(1.02);
      transition: transform 0.6s var(--ease), filter 0.4s var(--ease);
    }
    .team-photo:hover img, .team-photo:hover .team-photo-img { transform: scale(1.03); filter: saturate(1); }
    .team-photo-overlay {
      position: absolute; inset: 0; pointer-events: none;
      background: linear-gradient(180deg, transparent 62%, var(--team-accent, transparent));
      opacity: 0.22;
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  IMG, PhotoFrame, PhotoFrameWrap, IndustryPhoto, ServicePhoto, TeamPhoto,
});
