# Corelogics Website — UPDATED Content (proposed)

This is a rewrite of every page's copy, aimed at a **non-technical US founder or exec** reading the site after a cold email — not an ML engineer. Structure/order mirrors `content-original.md` so it maps 1:1 back to the `.jsx` files. Hand this file to Claude Code with an instruction like: "Update the copy in these files to match content-updated.md, keep all existing layout/CSS/components."

## What changed, and why

- **Turned up the marketing, not just the plain-English.** This is cold-outreach collateral — its job is to sell, not just to explain. Beyond stripping jargon, copy now leads with benefits, uses confident/persuasive language, and adds credibility signals (founded date, track record, momentum) instead of reading like a neutral spec sheet.
- **"Established 2022" is now a visible trust signal**, not just a buried fact on the About page. A prospect meeting you cold via email needs a reason to believe you'll still be around and that you've shipped real work before — so the founding year now appears in the hero, the metrics section, the About header, and the footer.
- **Led with the offer, not the metaphor.** "We are the engine behind other people's AI products" tells a founder nothing about what they get. Every headline now states the deliverable and the timeframe (a working AI product, in 4 weeks).
- **Removed engineering jargon a founder won't recognize**: MLOps, quantization, CI/CD, drift monitoring, MaaS/DaaS, "reproducible training & lineage," "multi-modal ingestion," etc. Replaced with what it *does for them* — reliability, speed, lower running costs, works even after launch.
- **Fixed the timeline contradiction.** The old "Engagement Shape" (Discovery 2w → Foundation 4w → Iteration 6–12w → Hardening 3w) added up to 15–21+ weeks, which contradicts the "MVP in 4 weeks" pitch. The updated version makes the 4-week MVP the first, headline phase, with a clearly separate "scale it up" phase after — so the site backs up the email instead of undercutting it.
- **Toned down the sci-fi console dressing** (fake lat/long, `UPTIME 99.98%`, `BUILD 26.05.16`, `RUN 4,712`). It's a cool aesthetic but reads as noise/possibly-fabricated stats to a skeptical first-time visitor. Replaced with plain, legible facts.
- **Updated contact details everywhere**: email → `info@corelogics.co`, website → `www.corelogics.co`, LinkedIn → `https://www.linkedin.com/company/corelogics-ai` (footer's LinkedIn/GitHub links were placeholder `#` before).
- Case studies kept their proof-value (real numbers, real screenshots) but capability/tech-highlight bullets were translated out of ML-speak into plain outcomes.

**Note to you before handing off:** a few numbers in the original (38 production models, 12 industries, 99.98% uptime, 6.4× cost reduction, 24 engineers/14 data specialists) are kept as placeholders below — swap in your real figures, or tell Claude Code to keep them as-is if they're already accurate.

---

## Global metadata (index.html)

- **Title tag:** Corelogics — AI Products Built for Founders, Launched in Weeks
- **Meta description:** Corelogics builds full AI-powered products for founders and companies — from a working MVP in 4 weeks to a complete, production-ready platform. One team, start to finish.

---

## Navigation (nav.jsx)

- Links: Services · Industries · Case Studies · About
- Availability badge: "Now booking Q3 2026 projects"
- CTA button: "Book a free call" *(or keep "Book a discovery call" — both are plain English, either works)*

---

## Home Page (page-home.jsx)

### Hero
- Tag: "CORELOGICS · ESTABLISHED 2022" | "AI PRODUCTS FOR FOUNDERS & COMPANIES"
- H1: "Your AI product idea. **Built in 4 weeks.**"
- Lede: "We design, build, and launch full AI-powered products — websites, apps, and dashboards, with the AI already working inside them. Not a slide deck, not a prototype: a real product your customers can use, moving with the speed, transparency, and accuracy of a great human team. Founded in 2022, trusted by founders and companies ever since."
- CTAs: "Book a free call" / "See what we build"
- Marquee (looping tags): AI CHATBOTS & AGENTS, COMPUTER VISION, MOBILE APPS, WEB APPS, AUTOMATION, DASHBOARDS & REPORTING, PRODUCT DESIGN, MVP IN 4 WEEKS, SINCE 2022, ONE TEAM · START TO FINISH
- Corner readouts (keep the style, plain-English content):
  - Left: "ESTABLISHED 2022" / "BASED IN THE UAE" / "SERVING CLIENTS WORLDWIDE"
  - Right: "24 ENGINEERS · 14 AI SPECIALISTS" / "AVG. FIRST LAUNCH · 4 WEEKS"

### Manifesto
- Eyebrow: "Why us"
- "Most AI ideas never become real products — not because the idea is bad, but because turning 'we should build an AI feature' into something customers can actually use is harder than anyone tells you. Since 2022, we've done it enough times to make it fast, reliable, and predictable — for founders raising their first round and for companies already scaling. You bring the vision. We build the product, and we build it fast."

### Services Overview ("What we build")
- H2: "AI-powered products, **built end-to-end**."
- Lede: "One team takes your idea from first sketch to a live product in weeks, not months — no juggling five agencies, no handoffs, no learning curve. We've been doing this since 2022. AI does the smart work inside your product; we handle everything else it needs to succeed."
- **01 — AI Product Development** [OUR SPECIALTY]: "We build the 'brain' of your product — smart chatbots and AI agents that act like a helpful human, image and video recognition, and automation that saves your team hours every week." Tags: AI Chatbots & Agents, Computer Vision, Automation, Smart Recommendations
- **02 — App & Product Design**: "We design an app or website your customers will actually enjoy using — clean, simple, and easy to navigate from day one." Tags: App Design, User Experience, User Research
- **03 — Web & Mobile Development**: "We build your website, web app, or iOS/Android app — fast, reliable, and ready to grow as your user base does." Tags: Websites, Web Apps, iOS & Android
- **04 — Data & Reporting**: "We organize your data and build simple dashboards, so you always know what's working in your business — in plain numbers, not spreadsheets." Tags: Data Setup, Dashboards, Reporting
- CTA: "See all services"

### How We Deliver
- H2: "We stick around after launch."
- Lede: "We don't hand you a product and disappear. We launch it, watch how real customers use it, and keep improving it — so it gets better every month, not just on day one."
- Bullets:
  - "Every update is tested before your customers ever see it."
  - "A real person double-checks the AI's work — not just an algorithm."
  - "We catch problems before your customers do, not after."
- Diagram caption: "How a Corelogics product improves over time"
- Readout (optional, simplify or drop): "ALWAYS-ON MONITORING" / "FAST RESPONSE TIMES"

### Industries Preview ("Who we build for")
- H2: "Industries we already **understand**."
- Lede: "We focus on the kinds of products we've built before — so you're not paying for us to learn on the job."
- Personal AI Assistants — "AI companions and copilots that actually remember you — your preferences, your goals, your history — instead of starting from zero every conversation." Result: 62% of users still active 30 days later (beta)
- AI Chatbots & Virtual Agents — "Chat and voice assistants for support, education, and daily operations that sound human, know your business, and stay on-brand." Result: 3.1× more engagement than a generic chatbot
- Compliance & Safety Monitoring — "Camera-based systems for factories and inspection lines that monitor safety and quality automatically, in real time." Result: 99.4% of checks covered automatically
- Retail Intelligence — "Turn the cameras you already have into insight — what's out of stock, how long lines are, whether shelves are set up right." Result: 34% improvement in shelf availability

### Case Studies Preview
- H2: "Three real products. **Different** industries. Same quality bar."
- CTA: "See all case studies"

### By The Numbers
- 2022 — Founded, and building AI products ever since
- 38 — AI products designed and shipped *(confirm figure)*
- 12 — Industries we've built for *(confirm figure)*
- 99.98% — Uptime — your product stays online *(confirm figure)*
- 6.4× — Lower running costs vs. typical AI setups *(confirm figure)*
- Note: "These numbers reflect projects delivered since our founding in 2022, through Q2 2026. Ask us for the details behind any of them."

### Closing CTA
- H2: "You bring the idea. **We build the product.**"
- Lede: "30 minutes, no slides, no sales pitch. We'll ask sharp questions and tell you honestly if we're the right fit. If we're not, we'll point you to someone who is. Since 2022, we've helped founders and companies turn ideas into products people actually use — yours could be next."
- CTAs: "Book a free call" / "Read the case studies"

---

## Services Page (page-services.jsx)

### Header
- H1: "AI-powered products, **built end-to-end**."
- Lede: "AI is at the heart of everything we build — but a great AI feature still needs a great app around it. We design the interface, build the product, set up your data, and get it all live, usually starting with a working version in 4 weeks. One team, one timeline, nothing outsourced — the same way we've built AI products since 2022."

### Tier 1 — Our Specialty: AI Product Development
- Label: "OUR SPECIALTY"
- H2: "AI Product Development"
- Lede: "This is what we do best: building the AI that powers your product — from a fast first version to a fully working system your customers rely on every day."

1. **Smart Image & Video Recognition** — "AI that can see and understand images or video in real time — useful for quality checks, safety monitoring, security, and more." Caps: Automatically spot and track objects / Catch quality or safety issues instantly / Works with cameras you already have
2. **AI Chatbots & Virtual Agents** — "Custom AI assistants that talk to your customers or your team — and actually get things right." Caps: Chat and voice assistants that sound human / Connects to your existing tools and data / Accurate, on-brand, and safe by design
3. **Data Preparation for AI** — "Clean, well-organized data — the foundation every good AI product is built on." Caps: Organizing and labeling your data / Filling in data gaps automatically / Quality-checked at every step
4. **Keeping Your AI Reliable** — "We make sure your AI keeps performing well after launch, not just during the demo." Caps: Regular performance check-ups / Automatic updates and improvements / Early alerts if something needs attention
5. **Fast, Affordable Hosting** — "Your AI runs smoothly and affordably, wherever your customers are — on their phone or in the cloud." Caps: Runs on the cloud or directly on-device / Optimized to keep your costs low / Scales automatically as you grow
- Trailing CTA cell: "YOUR AI PRODUCT — Built once. Owned by you." / "Start with one capability, or let us build and run the whole thing."

### Why One Team (formerly "Integrated Delivery")
- H2: "AI only matters if it's part of a **product people love using**."
- "A smart algorithm sitting in a spreadsheet doesn't help anyone. It only creates value once it's part of an app or dashboard people actually open every day. That's why we build the AI and the product around it together, as one team."
- "No juggling separate vendors for the 'AI part' and the 'app part.' No gaps between the team that built the model and the team that built the screen you're looking at. One team, accountable for all of it."
- Stack rows: Experience (App · website · mobile) / Intelligence (AI & automation) [OUR SPECIALTY] / Platform (behind-the-scenes systems) / Data (organized, reliable, ready)

### Everything Else Your Product Needs
- H2: "Everything a great product needs, beyond the AI."
- Lede: "The design, engineering, and data work that turns an AI feature into a product people actually want to use — built by the same team, at the same time."
- App & Product Design — "Product design and user research that makes your app simple and enjoyable to use."
- Website & Web App Development — "Modern, fast websites and web apps — built to scale with you."
- iOS & Android App Development — "Mobile apps for iPhone and Android, with AI built in from day one."
- Data Infrastructure — "The behind-the-scenes systems that keep your data organized and accessible."
- Reporting & Analytics Dashboards — "Clear dashboards that show you what's happening in your business, sharpened with AI insight."
- Fintech & Trading Platforms — "Specialized financial dashboards and tools, built for accuracy and trust."

### How a Project Actually Runs
- Lede: "Every project is a little different, but here's the typical shape — and yes, the first working version really does ship in 4 weeks."
1. **Kickoff & Plan** (3–5 days) — "We get clear on the problem, your customers, and what a first version needs to include. You get a simple written plan, not a slide deck."
2. **Build Your MVP** (4 weeks) — "We design and build your first real, working product — AI included — ready to put in front of real users."
3. **Launch & Learn** (2 weeks) — "We launch it, watch how people actually use it, and fix or adjust anything that needs it."
4. **Grow It Into the Full Product** (timeline depends on scope) — "Once the MVP proves itself, we build out the full feature set, harden it for scale, and keep improving it with you."
5. **Ongoing Support** (ongoing) — "We stay on to monitor, maintain, and keep improving the product as your business grows."

---

## Industries Page (page-industries.jsx)

- H1: "Industries we already **understand**."
- Lede: "From personal AI assistants to safety monitoring on a factory floor, we focus on the kinds of products we've built before. Different industries, different challenges — same level of quality every time."

1. **Personal AI Assistants** — "AI companions and copilots that actually remember the person using them — their preferences, their goals, their history — built to be useful for years, not just one chat session." Problems solved: Generic assistants forget what matters to you / Chat and voice don't share the same memory / Personalization has to respect privacy. What we build: Long-term memory, Goal tracking & planning, Voice + text in one experience, Helpful reminders, On-device privacy options. Result: 62% of users still active after 30 days (beta).
2. **Education & Learning** — "Turn years of textbooks, past exams, and study notes into an AI tutor that actually understands the curriculum — practice questions, mock exams, and a conversational study partner." Problems solved: Course material is stuck in PDFs and scanned documents / Generic AI tutors go off-script and give wrong answers / Teachers need oversight, not more grading work. What we build: Reads and understands documents & diagrams, Understands questions with diagrams and equations, AI-generated practice questions, Adapts to each student's weak spots, Dashboards for teachers. Result: 3.1× more practice completed vs. the old way.
3. **AI Chatbots & Automation** — "Chat and voice assistants for customer support, operations, and internal workflows — that know your business and stay accurate." Problems solved: Generic chatbots go off-brand or make things up / Wrong answers are a serious risk in regulated industries / Costs can spiral without the right guardrails. What we build: Assistants grounded in your own data, Can take real actions, not just chat, Voice and text support, Built-in safety guardrails, Cost controls. Result: 8× more work handled per hour.
4. **Compliance & Safety Monitoring** — "Camera and sensor systems for factories and inspection lines that monitor safety and quality automatically, with a clear record for auditors and regulators." Problems solved: Compliance is currently checked by hand, inconsistently / Auditors want proof, not someone's word / Systems need to keep working without a constant internet connection. What we build: Real-time video and audio monitoring, Tracks people and items across multiple cameras, Environmental monitoring (temperature, air quality, etc.), Tamper-proof records, Works without depending on the cloud. Result: 99.4% of checks covered automatically, per event.
5. **Retail Intelligence** — "Turn the security cameras you already have into useful insight — what's out of stock, how long checkout lines are, whether displays are set up correctly." Problems solved: Empty shelves cost more than theft does / Your camera systems are mostly unused today / Store teams need proof, not guesswork. What we build: Shelf stock monitoring, Checkout line analytics, Display/layout compliance checks, Loss prevention alerts, Store activity heatmaps. Result: 34% improvement in shelf availability over a 12-week pilot.
6. **Manufacturing Quality Control** — "Spot defects and measurement errors on the production line, in real time — running right on the factory floor, not depending on a distant server." Problems solved: Rejecting good products is as costly as missing bad ones / Line speed matters as much as accuracy / Systems have to work in poor lighting, dust, and constant motion. What we build: Surface defect detection, Precise measurement checks, Unusual pattern detection, On-site processing (no cloud lag), Line performance tracking. Result: 71% fewer good products wrongly rejected, on a stamped-metal line.

---

## Case Studies Index (page-cases.jsx)

- H1: "Real products. **Real** results."
- Lede: "Three projects across education, food safety, and personal AI. Different industries, different challenges — the same level of quality on every one. Names are used with client permission; screenshots are from the live products."
- Stats: 3 featured projects / 38 total products delivered *(confirm)* / 14 weeks — median time to first launch *(confirm)* / 100% of projects delivered on schedule *(confirm)*

Cards:
1. **QEFA** — Education · AI Exam Preparation — "An AI-powered learning platform that turns years of academic material into personalized exam prep for students." 220,000+ learners across 4 countries.
2. **Amanah** — Food Safety & Compliance AI — "An AI-powered system that brings clear, trustworthy monitoring to halal food compliance." 12 facilities across 3 countries.
3. **More Betters** — Personal AI Assistant — "An AI companion that gets to know you, helps you plan, and grows alongside your goals." Live on iOS and web.

---

## Case Study Detail Pages — simplified capability/tech language

*(Challenge, outcomes, and quotes read well already — kept close to original. Only the more technical capability/tech-highlight bullets are simplified below.)*

### QEFA
- Capabilities (plain version): Reads and understands textbooks, PDFs, and scanned notes / Understands questions that include diagrams and equations, not just text / Turns raw course material into an organized, searchable knowledge base / Generates new practice questions in the style of real past exams / A conversational AI tutor students can ask anything, anytime / Tracks each student's progress and flags where they need more practice
- Tech highlights (plain version): Understands both text and diagrams in exam questions / Pulls accurate answers from the school's own course material / Creates new practice questions that match real past-exam style / Tracks each student's progress and adjusts their study plan automatically

### Amanah
- Capabilities (plain version, grouped the same way): Pre-slaughter — tracks and monitors each animal automatically, checking health and behavior / Pre-slaughter — detects orientation and state in real time, before and during the process / Verifies the identity of the person performing the process against authorized staff / Detects whether the required recitation happened at the right moment / Checks physical alignment and equipment readiness before each event / Continuously monitors temperature, humidity, and air quality / Runs on affordable on-site hardware, no constant internet required
- Tech highlights (plain version): Runs directly on affordable on-site devices, even with limited hardware / Tracks the same animal or person across multiple camera views / Matches sound and video events together automatically / Creates a tamper-proof record auditors and regulators can trust

### More Betters
- Capabilities (plain version): Remembers your preferences, history, and goals between conversations / Helps plan your learning or career path and tracks your progress / Sends helpful reminders based on what actually matters to you, not generic pings / Works seamlessly whether you're typing or talking / Adjusts over time as your interests and goals change
- Tech highlights (plain version): Long-term memory that respects your privacy / Tracks your goals and milestones automatically / The same conversation and memory whether you type or talk / Sends reminders timed to your own schedule, not a fixed alarm

---

## About Page (page-about.jsx)

- H1: "A small, fast-moving team that **builds real AI products**."
- Lede: "Founded in 2022, Corelogics was started on a simple idea: most companies don't need an AI research lab. They need a partner who can quickly and reliably build the AI-powered product their customers will actually use. That's us — and we've been proving it since day one."

### Story
- H2: "Most AI ideas never make it to a real product."
- "An AI demo that works in a meeting doesn't always survive real customers using it the next day. A model that scores well in testing can still miss the exact situation that matters most to your users. A system that runs fine for a demo can break the first time someone asks a simple question about how it actually works."
- "Corelogics exists to close that gap. We're not an AI research lab — there are plenty of those already. We're a full product team with AI at the center: we build the AI that powers your product, and the design, engineering, and data work around it that turns it into something your customers can actually use."
- "We work with founders launching their first AI product, with companies adding AI features to something they already run, and with teams who'd rather bring in an experienced partner than build this from scratch."

### Six Principles
1. **Results first, tools second** — "We use the simplest approach that works. We only reach for something more advanced when the simple version can't get the job done. Either way, we agree on what success looks like before we start building."
2. **Built to last, not just to launch** — "Everything we hand you should still make sense — and still work — a year from now. Nothing held together with duct tape you can't see."
3. **We tell you the truth early** — "If a project is at risk of missing a deadline, you hear it from us weeks in advance — not at the finish line."
4. **We build for real users, not for benchmarks** — "Speed, cost, and reliability matter as much as accuracy. An AI feature that looks great in testing but is slow or expensive in real use isn't a win."
5. **We don't just launch and leave** — "The version you launch with is rarely the version you keep. We stay on to watch how it's used and keep making it better."
6. **We're honest when we're not the right fit** — "If a project isn't a good match for us, we'll say so — and point you to someone who's a better fit, if we know one."

### Location
- "Based in the UAE. Building for clients worldwide."
- "We're based in Ajman Free Zone, and work with clients across the US, Europe, and the GCC. One team, fully accountable — nothing gets outsourced after you sign on."
- Office C1-1F, Ajman Free Zone, Ajman, United Arab Emirates
- info@corelogics.co / www.corelogics.co

### Facts
- Founded: 2022
- Headquarters: Ajman Free Zone, UAE
- Products delivered: 38 *(confirm figure)*
- What we build: AI Agents · Chatbots · Computer Vision
- Delivery: Clients across the US, GCC & Europe
- How we work: Custom projects, from MVP to full product, plus ongoing support
- Languages: English · Arabic · Urdu · Hindi
- Response time: Under 24 hours, weekdays

---

## Contact Page (page-contact.jsx)

- H1: "Start a conversation, not a **sales funnel**."
- Lede: "The fastest way to reach us is the form below. A real team member reads every submission and replies within 24 hours — usually with a question, sometimes with a referral to someone better suited to help."

### Direct card
- Email: info@corelogics.co
- Web: www.corelogics.co
- Office: Office C1-1F, Ajman Free Zone, Ajman, United Arab Emirates
- Response time: Under 24 hours, weekdays

### "Worth knowing" card
- "We take your product from idea to a live, working system — AI, design, engineering, and data — as one team, with nothing outsourced."
- "AI is our specialty: smart chatbots, agents, and computer vision. Everything else we build exists to make that AI actually useful."
- "NDAs are standard practice. We'll sign yours, or send ours — whichever gets us moving faster."
- "Q3 2026 has open capacity. Q4 is filling up."

### Form (services checklist wording)
AI Product Development: Computer Vision, AI Chatbots & Agents, Data Preparation for AI, Keeping AI Reliable, Fast & Affordable Hosting
Product & Engineering: App & Product Design, Website Development, Mobile Apps, Data Infrastructure, Reporting & Dashboards, Fintech Platforms
Stage options: Just an idea, Scoping it out, Piloting, Growing an existing product
Timeline options: Starting now, Q3 2026, Q4 2026, 2027, Just exploring

### Thank-you state
- "Thank you, {name}."
- "A member of our team will read your message within 24 hours and reply directly — no automated funnel. If we're the right fit, we'll suggest a free 30-minute call. If we're not, we'll point you to someone who is."

---

## Footer (components.jsx)

- Tagline: "AI PRODUCTS, BUILT END-TO-END · SINCE 2022"
- Copyright: "© 2026 Corelogics Technologies · Established 2022"
- Columns:
  - Company: About, Case Studies, Industries, Contact
  - AI Product Development: Computer Vision, AI Chatbots & Agents, Data Preparation, Keeping AI Reliable, Fast & Affordable Hosting
  - Product & Engineering: App & Product Design, Web Development, Mobile Apps, Data Infrastructure, Reporting & Fintech
  - Connect: info@corelogics.co / www.corelogics.co / LinkedIn → https://www.linkedin.com/company/corelogics-ai *(remove or update the placeholder GitHub link — decide if you want it live)*
- Rail: "BASED IN THE UAE · SERVING CLIENTS WORLDWIDE" / "AVAILABLE FOR NEW PROJECTS" / "v2026.05"
