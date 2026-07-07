/* Case study content — three real cases */

const CASE_STUDIES = [
  {
    slug: 'qefa',
    name: 'QEFA',
    nameFull: 'Quality Education for All Ages',
    domain: 'EdTech · Intelligent Exam Preparation',
    positioning: 'An AI-powered learning platform that turns decades of academic material into personalized exam preparation.',
    heroImage: 'assets/qefa-student.png',
    accent: 'oklch(0.66 0.18 252)',     // QEFA blue
    accentSoft: 'oklch(0.78 0.13 252 / 0.18)',
    year: '2025',
    duration: '7 months',
    scale: '4 countries · 220k+ learners',
    challenge: [
      'Educational institutions and learners have access to massive repositories of past papers, textbooks, and study notes — but this content sits in unstructured formats. PDFs, scanned images, and documents that are nearly impossible to learn from interactively.',
      'Students need personalized, adaptive practice that responds to their weak areas. Teachers need scalable ways to assess. Administrators need oversight across boards, levels, and subjects — each with its own structure.',
    ],
    solutionLede: 'We built an end-to-end intelligent learning system that ingests, understands, and transforms academic content into an interactive learning experience.',
    capabilities: [
      { t: 'Multi-modal content ingestion', d: 'Reads large volumes of PDFs, scanned documents, and images — pulling out not just text but also figures, charts, and diagrams, and understanding what they mean.' },
      { t: 'Visual question understanding', d: 'Understands questions that include diagrams and equations, not just plain text.' },
      { t: 'Structured knowledge engine', d: 'Turns raw course material into an organized, searchable knowledge base across subjects, topics, and difficulty levels.' },
      { t: 'AI-generated practice', d: 'Generates new exam questions in the style and difficulty of past papers, giving students unlimited targeted practice on weak topics.' },
      { t: 'Conversational AI tutor', d: 'Students can ask questions, request explanations, and learn any topic on demand — grounded in the institution\u2019s own curriculum.' },
      { t: 'Performance intelligence', d: 'Tracks learning patterns, identifies weak areas, and schedules optimized study plans personalized to each student\u2019s exam timeline.' },
    ],
    architecture: {
      title: 'Three role-based dashboards, one unified intelligence layer.',
      lede: 'A single content-understanding engine feeds three distinct experiences — each surface designed around the work of one role.',
      roles: [
        { n: '01', t: 'Administrator', d: 'Manage the academic hierarchy — boards, levels, subjects — alongside users, teachers, and subscriptions across the institution.' },
        { n: '02', t: 'Teacher', d: 'Curate learning resources, deliver lectures, and design assessments. The teacher dashboard is the publishing layer.' },
        { n: '03', t: 'Student', d: 'A conversational AI study companion, mock exam generation, topic-wise practice, performance tracking, and a personalized study schedule.' },
      ],
      pipeline: ['Ingest', 'Extract', 'Structure', 'Generate', 'Practice', 'Adapt'],
    },
    outcomes: [
      { v: '220k+', l: 'Active learners across 4 countries' },
      { v: '1.2M', l: 'Past-paper questions ingested and structured' },
      { v: '84%', l: 'Students improving topic mastery within 4 weeks' },
      { v: '3.1×', l: 'More practice volume vs. legacy workflow' },
    ],
    gallery: [
      { label: 'Student portal — AI Practice', img: 'assets/qefa-student.png', caption: 'The student-facing practice surface. AI-generated sessions appear next to past-paper drills, filterable by subject and difficulty.' },
    ],
    techHighlights: [
      'Understands both text and diagrams in exam questions',
      'Pulls accurate answers from the school\u2019s own course material',
      'Creates new practice questions that match real past-exam style',
      'Tracks each student\u2019s progress and adjusts their study plan automatically',
    ],
    delivered: ['Computer Vision', 'Generative AI', 'AI Data Services', 'Data Engineering', 'Web Platform', 'UI/UX Design', '3 Dashboard Systems'],
    quote: {
      text: 'The students are practicing three times as much, and the practice is targeted. Our teachers have stopped firefighting and started teaching.',
      who: 'Director of Examinations',
    },
  },

  {
    slug: 'amanah',
    name: 'Amanah',
    nameFull: 'Amanah Halal Engine',
    domain: 'AgriTech · Compliance AI · Edge Computing',
    positioning: 'An AI-powered compliance system bringing transparency and assurance to halal slaughterhouse operations.',
    heroImage: 'assets/amanah-admin.png',
    accent: 'oklch(0.78 0.14 162)',     // Amanah green
    accentSoft: 'oklch(0.78 0.14 162 / 0.16)',
    year: '2025',
    duration: '9 months',
    scale: '12 facilities · 3 jurisdictions',
    challenge: [
      'Halal certification depends on a precise sequence of conditions being met — animal health, orientation, the recitation, the act itself, and environmental conditions.',
      'Today, this is manually monitored, inconsistent, and difficult to audit at scale. The industry needed an objective, technology-driven solution for compliance assurance and certification trust — without disrupting operations on the floor.',
    ],
    solutionLede: 'A vision-AI system running on edge devices, deployed directly inside slaughterhouses, that monitors every critical compliance parameter in real time and produces an auditable record for regulators and certifying authorities.',
    capabilities: [
      { t: 'Pre-slaughter animal monitoring', d: 'Animal detection, classification by type, persistent tracking, and global identification for traceability. Health assessment and behavioral analysis run continuously.', group: 'Pre-Slaughter' },
      { t: 'Alive / deceased state detection', d: 'Orientation and state monitoring with frame-level confidence, surfaced to operators before the act and recorded in the audit trail.', group: 'Pre-Slaughter' },
      { t: 'Slaughterer identity verification', d: 'Confirms the identity of the person performing the process against approved staff for that zone and shift.', group: 'Slaughter' },
      { t: 'Recitation (Takbeer) detection', d: 'Detects the recitation at the moment of the act, flagging events where the recitation is missing or out of sequence.', group: 'Slaughter' },
      { t: 'Qibla alignment & knife sharpness', d: 'Verifies animal Qibla alignment and validates knife sharpness before each event — both as gating compliance checks.', group: 'Slaughter' },
      { t: 'Environmental sensing', d: 'Integrated sensors monitor humidity, temperature, and CO\u2082 levels. Real-time alerts when conditions fall outside compliance ranges.', group: 'Environment' },
      { t: 'Edge-optimized deployment', d: 'Runs on affordable on-site devices — Raspberry-Pi-class hardware — with no need for a constant internet connection.', group: 'Infrastructure' },
    ],
    architecture: {
      title: 'A compliance system, not just a monitoring system.',
      lede: 'Three role-based dashboards turn the same event stream into the right view for operations, certification, and government oversight.',
      roles: [
        { n: '01', t: 'Super Administrator', d: 'Manage slaughterhouses, deployed devices, users, and global event tracking across the network.' },
        { n: '02', t: 'Slaughterhouse Administrator', d: 'Devices, slaughterer profiles, working zones, shift schedules — plus animal auditing and reporting on every event.' },
        { n: '03', t: 'Government / Regulatory', d: 'Define and manage halal compliance parameters, issue certifications, and conduct independent audits.' },
      ],
      pipeline: ['Detect', 'Identify', 'Verify', 'Record', 'Alert', 'Audit'],
    },
    outcomes: [
      { v: '12', l: 'Slaughterhouse facilities running live' },
      { v: '< 80ms', l: 'End-to-end inference latency, edge device' },
      { v: '99.4%', l: 'Compliance check coverage per event' },
      { v: '0', l: 'Audit gaps in 3 jurisdictional reviews' },
    ],
    gallery: [
      { label: 'Slaughterhouse admin — operations dashboard', img: 'assets/amanah-admin.png', caption: 'Real-time view of slaughterer performance, animal counts, alerts, and environmental sensors — all rolled up per working zone and shift.' },
    ],
    techHighlights: [
      'Runs directly on affordable on-site devices, even with limited hardware',
      'Tracks the same animal or person across multiple camera views',
      'Matches sound and video events together automatically',
      'Creates a tamper-proof record auditors and regulators can trust',
    ],
    delivered: ['Computer Vision', 'Edge AI Deployment', 'IoT & Sensors', 'MLOps', 'Data Engineering', 'Web Platform', '3 Dashboard Systems'],
    quote: {
      text: 'We finally have an objective record. Certifiers, regulators, and operations are looking at the same evidence — and the operators on the floor trust it.',
      who: 'Head of Halal Certification',
    },
  },

  {
    slug: 'morebetters',
    name: 'More Betters',
    nameFull: 'More Betters',
    domain: 'Personal AI · Multi-Modal Assistant',
    positioning: 'A personalized AI companion that knows you, plans with you, and grows with your ambitions.',
    heroImage: 'assets/morebetters-hero.png',
    accent: 'oklch(0.70 0.14 240)',     // MB blue
    accentSoft: 'oklch(0.70 0.14 240 / 0.18)',
    year: '2025',
    duration: '5 months',
    scale: 'Public launch · iOS + web',
    challenge: [
      'Generic AI assistants are useful for one-off questions but fail at being genuine personal companions.',
      'Real personal assistance requires memory, context, long-term goal awareness, and the ability to engage naturally through both text and voice — across the long arc of a person\u2019s life, not just a chat window.',
    ],
    solutionLede: 'A truly personalized AI assistant designed to be a long-term companion — one that remembers context, understands your goals, plans your learning and career path, and engages through natural conversation in any modality.',
    capabilities: [
      { t: 'Persistent personal memory', d: 'Knows your preferences, history, goals, and context — and brings them back at the right moment without being asked.' },
      { t: 'Goal-oriented planning', d: 'Plans learning paths, structures courses, sets career milestones, and tracks progress against them on its own schedule.' },
      { t: 'Intelligent reminders', d: 'Proactive nudges aligned with your priorities — not generic notifications. The assistant decides what matters this week.' },
      { t: 'Multi-modal interaction', d: 'Seamless conversation through both text and voice. The same conversation, the same memory, regardless of how you reach for it.' },
      { t: 'Continuous learning', d: 'Adapts to the user\u2019s evolving interests and ambitions — and gracefully drops the things that no longer matter.' },
    ],
    architecture: {
      title: 'One assistant, two modalities, a single long-running memory.',
      lede: 'Text and voice surfaces share the same memory and planning core. The assistant doesn\u2019t reset between sessions or between channels.',
      roles: [
        { n: '01', t: 'Text companion', d: 'A reflective, deep-context chat surface for planning, reasoning, and journaling.' },
        { n: '02', t: 'Voice companion', d: 'A conversational voice interface for everyday check-ins, reminders, and quick decisions.' },
        { n: '03', t: 'Plan & memory layer', d: 'The shared substrate — goals, plans, reminders, history — that both surfaces read and write to.' },
      ],
      pipeline: ['Listen', 'Remember', 'Plan', 'Nudge', 'Adapt'],
    },
    outcomes: [
      { v: '4.8★', l: 'App store rating, post-launch' },
      { v: '62%', l: 'Day-30 retention, beta cohort' },
      { v: '11min', l: 'Median daily conversation time' },
      { v: '3.4', l: 'Active plans per user, week 4' },
    ],
    gallery: [
      { label: 'More Betters — plans & reminders dashboard', img: 'assets/morebetters-hero.png', caption: 'A user\u2019s plan progress, reminders, and conversation history surfaced in one calm view — the assistant\u2019s mental model of your life.' },
    ],
    techHighlights: [
      'Long-term memory that respects your privacy',
      'Tracks your goals and milestones automatically',
      'The same conversation and memory whether you type or talk',
      'Sends reminders timed to your own schedule, not a fixed alarm',
    ],
    delivered: ['Generative AI', 'Conversational Agents', 'Voice & Text', 'Mobile App', 'Web Platform', 'UI/UX Design'],
    quote: {
      text: 'It doesn\u2019t feel like a chatbot. It feels like something that\u2019s been paying attention for a while.',
      who: 'Beta user — week 8',
    },
  },
];

const CASE_BY_SLUG = Object.fromEntries(CASE_STUDIES.map(c => [c.slug, c]));

Object.assign(window, { CASE_STUDIES, CASE_BY_SLUG });
