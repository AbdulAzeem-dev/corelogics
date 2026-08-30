/* Case study content — four real cases */

const CASE_STUDIES = [
  {
    slug: 'qefa',
    name: 'QEFA',
    nameFull: 'Quality Education for All Ages',
    domain: 'EdTech · Intelligent Exam Preparation',
    positioning: 'An AI-powered learning platform that turns decades of academic material into personalized exam preparation.',
    heroImage: 'assets/qefa-student.png',
    accent: 'oklch(0.545 0.148 254)',    // QEFA blue
    accentDark: 'oklch(0.760 0.130 254)',   // lifted, for ink bands and dark mode
    accentSoft: 'oklch(0.545 0.148 254 / 0.12)',
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
    domain: 'Food Safety · Halal Compliance · Blockchain Traceability',
    positioning: 'A national-scale food trust platform \u2014 AI compliance monitoring and blockchain traceability that let regulators, certifiers, and producers verify halal integrity from origin to consumer.',
    heroImage: 'assets/amanah-admin.png',
    accent: 'oklch(0.545 0.118 163)',   // Amanah green
    accentDark: 'oklch(0.790 0.135 163)',   // lifted, for ink bands and dark mode
    accentSoft: 'oklch(0.545 0.118 163 / 0.12)',
    year: '2025',
    duration: '9 months',
    scale: '12 facilities · 3 jurisdictions',
    alignment: { logo: 'assets/vision-2030.png', alt: 'Saudi Vision 2030', label: 'Built in alignment with Saudi Vision 2030 \u2014 food security, regulatory credibility, and leadership in the global halal trade.' },
    challenge: [
      'The global halal food trade runs on paper. Certification is issued from periodic site visits and document reviews, then travels with the product as a claim nobody downstream can independently verify. When a market questions a shipment, there is no evidence trail to answer with — only a certificate.',
      'That gap costs real money: rejected consignments, mutual-recognition disputes between markets, recalls that cannot be scoped to the affected batch, and consumer trust that erodes with every fraud story. Food safety, halal integrity, and traceability are handled as three separate compliance exercises, each with its own paperwork.',
      'Regulators needed continuous oversight instead of spot checks. Certifiers needed objective evidence instead of attestation. Producers needed both — without slowing the line or rebuilding their facilities.',
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
      { v: '99.4%', l: 'Of events carry a complete, verifiable compliance record' },
      { v: '100%', l: 'Batch-level traceability, facility to consumer QR' },
      { v: '73%', l: 'Less time to close a certification audit' },
      { v: '0', l: 'Audit gaps across 3 jurisdictional reviews' },
    ],
    gallery: [
      { label: 'Slaughterhouse admin — operations dashboard', img: 'assets/amanah-admin.png', caption: 'Real-time view of slaughterer performance, animal counts, alerts, and environmental sensors — all rolled up per working zone and shift.' },
    ],
    techHighlights: [
      'Every batch carries a blockchain record no party — including us — can alter after the fact',
      'A consumer QR scan resolves to the facility, shift, and compliance evidence behind that product',
      'Certification moves from periodic site visits to continuous, evidence-backed oversight',
      'A recall can be scoped to the affected batch instead of the whole consignment',
      'Runs on affordable on-site hardware, so facilities adopt it without a capital project',
      'Interoperable by design — built for mutual recognition between markets, not a single regulator',
    ],
    delivered: ['Computer Vision', 'Blockchain Traceability', 'Edge AI Deployment', 'IoT & Sensors', 'MLOps', 'Data Engineering', 'Web Platform', '3 Dashboard Systems'],
    quote: {
      text: 'Certification used to be an argument about paperwork. Now the regulator, the certifier, and the buyer open the same record and see the same evidence — down to the batch.',
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
    accent: 'oklch(0.555 0.118 236)',   // MoreBetters blue
    accentDark: 'oklch(0.770 0.120 236)',   // lifted, for ink bands and dark mode
    accentSoft: 'oklch(0.555 0.118 236 / 0.12)',
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

  {
    slug: 'mrc',
    name: 'MRC Saudi',
    nameFull: 'Media Rating Company — Saudi Arabia',
    domain: 'Media Measurement · Audience Analytics · Marketing AI',
    positioning: 'A media rating dashboard that turns raw viewership into audience demographics, trending-topic guidance, and a measurable return on ad spend — proven on the company’s own data before a line of production code.',
    heroImage: 'assets/mrc-dashboard.png',
    accent: 'oklch(0.520 0.170 275)',    // MRC indigo
    accentDark: 'oklch(0.760 0.130 275)',   // lifted, for ink bands and dark mode
    accentSoft: 'oklch(0.520 0.170 275 / 0.12)',
    year: '2026',
    duration: '6 weeks',
    scale: 'Live MRC datasets · 3 role views',
    engagement: 'Proof of concept',
    challenge: [
      'A national media rating body sits on the one thing every broadcaster, agency, and advertiser wants — who is actually watching what. But that value only lands if it reaches them as a decision, not a spreadsheet. Reports arrived days late, split by platform, and stopped short of saying what a marketer should do next.',
      'Meanwhile the audience had moved. Viewing is now spread across YouTube, streaming, and broadcast at once, and a campaign planned against one of those alone is planned half-blind. Advertisers were asking a question the reporting could not answer: what did this spend actually return?',
      'The question was whether an AI layer could close that gap on real data — not whether a demo could be made to look good. So the engagement was scoped as a proof of concept with a hard bar: build it on MRC’s own datasets, and prove it holds up before anyone commits to a rollout.',
    ],
    solutionLede: 'A single dashboard that measures audiences across platforms, explains who they are, forecasts where attention is heading next, and closes the loop on what campaigns returned — with an AI layer that writes the report for you.',
    capabilities: [
      { t: 'Cross-platform audience measurement', d: 'Watch time unified across YouTube, streaming, and broadcast in one view — so share of attention is read against the whole market, not one channel at a time.', group: 'Measurement' },
      { t: 'Demographic breakdown', d: 'Who is watching, on what device, in which region — resolved into segments a media plan can actually be built against.', group: 'Measurement' },
      { t: 'Advertiser & brand ranking', d: 'Which advertisers hold the most attention in a period, and how that share moves week to week across categories.', group: 'Measurement' },
      { t: 'Trending topic detection', d: 'Surfaces what audiences are shifting toward while it is still early, so campaigns are planned into rising attention rather than yesterday’s peak.', group: 'Intelligence' },
      { t: 'Short-horizon viewership forecasting', d: 'Predicts movement in the next 24 hours at channel level — the difference between buying a slot and buying the right slot.', group: 'Intelligence' },
      { t: 'AI insight feed', d: 'The dashboard opens with what changed and what it means, written in plain language, instead of leaving an analyst to find it in a chart.', group: 'Intelligence' },
      { t: 'ROAS evaluation loop', d: 'Campaign spend is measured against the audience it actually reached, then fed back as recommendations for the next flight — evaluate, improve, repeat.', group: 'Activation' },
      { t: 'Conversational report generation', d: 'Ask for a report in a sentence and get it built — the same numbers, without waiting on the analytics team for every cut of the data.', group: 'Activation' },
    ],
    architecture: {
      title: 'One measurement layer, three ways to use it.',
      lede: 'The same resolved audience data serves the analyst who validates it, the marketer who plans against it, and the executive who only needs the movement.',
      roles: [
        { n: '01', t: 'Analyst', d: 'Raw ingestion, data quality, and segment definitions — the layer where the numbers are proven before anyone acts on them.' },
        { n: '02', t: 'Marketing & agency', d: 'Trending topics, audience segments, campaign planning, and the ROAS loop that says whether the last flight worked.' },
        { n: '03', t: 'Executive', d: 'Share of attention, advertiser rankings, and period-on-period movement — the report, generated on request.' },
      ],
      pipeline: ['Ingest', 'Resolve', 'Segment', 'Forecast', 'Recommend', 'Report'],
    },
    outcomes: [
      { v: '6 wks', l: 'From kickoff to a working POC on live data' },
      { v: '100%', l: 'Built on actual MRC datasets, not synthetic samples' },
      { v: '24 hr', l: 'Forward viewership forecast, at channel level' },
      { v: '3', l: 'Role-based surfaces validated in the POC' },
    ],
    gallery: [
      { label: 'Analyst dashboard — audience and advertiser view', img: 'assets/mrc-dashboard.png', caption: 'The opening surface: an AI insight feed, media player watch time split across platforms, device share, and the advertisers holding the most attention — with report generation available as a prompt.' },
    ],
    techHighlights: [
      'Built using actual MRC datasets rather than dummy models',
      'Structured to handle increasing data volume and complexity',
      'Confirmed through realistic data checks and system validation',
      'Aligned with the real inputs required for a live rollout',
      'Bilingual by design — Arabic and English, right-to-left included',
      'Reports generated from a plain-language prompt, on the analyst’s own data',
    ],
    delivered: ['Product & UI Design', 'Generative AI', 'Forecasting Models', 'Data Engineering', 'Web Platform', 'Dashboard System'],
  },
];

const CASE_BY_SLUG = Object.fromEntries(CASE_STUDIES.map(c => [c.slug, c]));

Object.assign(window, { CASE_STUDIES, CASE_BY_SLUG });
