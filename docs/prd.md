# Requirements Document

## 1. Application Overview

- **Application Name:** Mourique Naskar — The Chronicle
- **Description:** A visually immersive, medieval-themed personal portfolio website for Mourique Naskar, a Data Scientist and Full Stack Developer. The site draws aesthetic inspiration from Game of Thrones and battlefield imagery — iron, stone, fire, parchment, swords, shields, and crests. Every section is anchored by a continuously animating, interactive 3D background rendered in real time, making the entire experience feel alive and cinematic. The 3D backgrounds are high-resolution, spatially deep environments — each section features a distinct, purposefully color-graded 3D scene that establishes mood, creates contrast, and ensures visual harmony across the full narrative. Scroll-driven transitions, parallax layers, and live 3D scene changes per section transform this portfolio into a living, breathing chronicle.

---

## 2. Users & Use Cases

- **Target Users:** Recruiters, hiring managers, tech leads, and collaborators who visit the portfolio to evaluate Mourique's capabilities.
- **Core Use Case:** A visitor lands on the site and is drawn into an immersive medieval narrative. Each section features a distinct, continuously animating live 3D background environment that reacts to scroll position and mouse interaction, progressively revealing Mourique's background, skills, experience, and projects — each styled as a chapter of an epic story, culminating in a call-to-action to connect.

---

## 3. Page Structure & Core Features

### 3.1 Page Overview (Tree Structure)

```
The Chronicle — Mourique Naskar
├── Hero / Opening Scroll (Landing)
├── The Warrior's Oath (Career Objective)
├── The Armory (Technical Skills)
├── Campaigns & Battles (Professional Experience)
├── The Great Works (Projects)
├── Scrolls of Honor (Certifications)
├── The Scholar's Path (Education)
├── Achievements & Lore (Extracurriculars)
└── The Raven's Call (Contact)
```

---

### 3.2 Global Visual & Animation System

All sections share a unified medieval aesthetic. The defining visual system across the entire site is the **Live 3D Background Layer**: every section features a dedicated, high-resolution, spatially deep 3D background environment rendered via Three.js / @react-three/fiber. These backgrounds are not floating foreground objects — they fill the full section viewport as immersive environmental backdrops, continuously animated, and purposefully color-graded per section to establish mood, create contrast, and ensure visual harmony.

**3D Background System — Global Design Principles:**

- Each section owns a primary 3D background environment (detailed per section below).
- Backgrounds must be high resolution with a strong sense of spatial depth — they may be abstract, geometric, or photorealistic, but must always be aesthetically pleasing and professional. Overly chaotic or distracting patterns are prohibited.
- Color grading is intentional per section: each 3D background is color-adjusted to serve a clear purpose — establishing the emotional tone of that section, creating visual contrast with adjacent sections, and contributing to a cohesive, polished final color palette across the full page.
- Backgrounds are always in motion: idle animations (slow camera drift, atmospheric particle movement, light flicker, fog shift, ember float) run in a continuous loop — they never freeze or remain static.
- On scroll between sections, the active 3D background transitions (cross-fade, cinematic wipe, or fire-burn dissolve) into the next section's background — creating a continuous 3D environmental narrative.
- Mouse movement within any section causes the active 3D background to respond: subtle camera orbit, tilt, or depth-parallax shift follows the cursor, reinforcing the sense of spatial depth.
- On mobile, 3D backgrounds are simplified (reduced polygon count, disabled shadows, reduced particle counts) but remain animated and present — the immersive feel is preserved.
- If WebGL is unavailable, a high-quality static image fallback replaces the 3D background per section.
- All foreground content (text, cards, UI elements) is layered above the 3D background with sufficient contrast — semi-transparent parchment or dark iron overlay panels are used where needed to ensure readability without obscuring the background.

**Global Color Palette & Rationale:**
The overall palette is built around deep, rich medieval tones that enhance the 3D depth of each scene:
- **Deep Charcoal Black** (#0d0d0d – #1a1a1a): primary background base, maximizes depth contrast.
- **Aged Parchment Gold** (#c9a84c – #e8c96a): primary accent, warmth, and highlight — used for glows, borders, and active states.
- **Blood Crimson** (#8b0000 – #c0392b): danger, power, and drama — used in battle and achievement sections.
- **Iron Grey** (#3a3a3a – #6b6b6b): structural elements, stone surfaces, UI panels.
- **Ember Orange** (#e05c00 – #ff8c42): fire, energy, and scroll progress — used in fire-lit scenes.
- **Dark Forest Green** (#1a3a2a – #2d6a4f): nature, growth, and the scholar's path — used in education and outdoor scenes.
- **Midnight Indigo** (#0f0f2e – #1a1a4e): night sky and tower scenes — used in the contact section for depth and mystery.
- **Warm Amber** (#7a4f1a – #b8732a): torch-lit interiors — used in armory and great hall scenes.

Each section's 3D background is color-graded using a dominant hue from this palette, ensuring every section feels visually distinct while remaining cohesive within the overall medieval world.

**Typography:** Serif or gothic-style display fonts for headings (cinzel / uncial antiqua style); clean sans-serif for body text.

**Cursor:** Custom medieval cursor — a sword or quill replacing the default pointer on desktop.

**Scroll Behavior:** Smooth scroll with scroll-triggered reveal animations (fade-in from mist, rise from below, unfurl like a scroll). Scroll position drives 3D background transitions globally.

**Parallax:** Multi-layer parallax on hero and section backgrounds (foreground elements, mid-layer fog, background sky/stone depth layers).

**Section Transitions:** Each section transition uses a cinematic wipe or fire-burn reveal effect, synchronized with the outgoing and incoming 3D background swap.

**Scroll Progress Indicator:** A thin ember-colored progress bar at the top of the viewport fills as the user scrolls.

**Ambient Sound Toggle:** A mute/unmute icon for optional ambient medieval background audio — no autoplay, muted by default.

---

### 3.3 Hero / Opening Scroll

**3D Background — Design & Color Rationale:**
- A full-viewport, high-resolution 3D battlefield scene at dusk: dark terrain with strong spatial depth, a stone floor receding into the distance, volumetric fog rolling across the ground plane, a lone sword embedded in the ground with embers floating upward, a shield bearing a personal crest in the mid-ground.
- **Color Grade:** Deep charcoal black ground fading to blood crimson and ember orange on the horizon — a dusk sky that bleeds into darkness. This establishes immediate dramatic impact and signals the epic tone of the entire portfolio. The ember orange glow around the sword creates a natural focal point.
- The scene is continuously animated: embers drift upward in a loop, fog particles shift laterally, the sword subtly pulses with a warm amber glow, distant fire sources flicker on the horizon.
- Mouse movement causes the 3D camera to tilt and orbit slightly, reinforcing the spatial depth of the battlefield environment.
- The 3D background fills the full viewport.

**Content:**
- Dramatic title unfurls letter by letter as if carved into stone: large display text 「MOURIQUE NASKAR」
- Subtitle typewriter effect: 「Data Scientist · Full Stack Developer · Builder of Worlds」
- A glowing scroll-down indicator (animated feather quill or downward arrow with ember glow).

**Navigation Bar:**
- Fixed/sticky at top, styled as a dark iron banner.
- Links: The Oath · The Armory · Campaigns · Great Works · Scrolls · The Scholar · The Raven
- On scroll, the nav bar gains a frosted stone/dark glass background.
- Active section highlighted with a glowing gold underline.
- Hamburger menu on mobile styled as crossed swords icon.

---

### 3.4 The Warrior's Oath (Career Objective + Professional Summary)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D interior stone chamber: aged stone walls with strong depth and perspective, 3D torch sconces mounted on the walls with live 3D particle fire simulations (not CSS) — flames and embers continuously animate. A large arched window in the background reveals a dark night sky with drifting cloud particles.
- A 3D animated parchment scroll floats in the mid-ground of the scene, continuously unfurling and re-furling in a slow loop. A 3D wax seal rotates gently beside the scroll, stamping down with a satisfying animation on section entry.
- **Color Grade:** Warm amber and aged parchment gold dominate — torch-lit stone walls cast a golden-orange glow across the chamber. The background stone is deep charcoal, creating strong depth contrast. This warm, intimate palette signals reflection and personal narrative, contrasting with the dramatic crimson of the hero section.
- Mouse movement causes the scroll to tilt in 3D perspective and the camera to drift slightly, responding to cursor position.

**Content:**
- Section heading: 「The Warrior's Oath」 with a decorative medieval divider (crossed swords SVG).
- Career Objective text displayed as parchment inscription.
- Professional Summary displayed below as a second paragraph on the same scroll.
- Highlighted keywords (Python, Machine Learning, Full Stack, Data Analytics) glow subtly in gold on hover.

---

### 3.5 The Armory (Technical Skills)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D armory hall environment as the full-section background: deep stone walls with strong spatial depth, iron racks and shelves rendered in 3D perspective receding into the background. The hall is lit by multiple torch sources casting warm pools of amber light against cold iron-grey stone.
- Each skill category is represented by a 3D weapon or artifact mounted on the wall — swords, tomes, stone tablets, shields, quills — all continuously floating or slowly rotating in idle animation within the 3D background scene.
- **Color Grade:** Iron grey and warm amber — cold stone walls contrasted with warm torch light. This industrial, utilitarian palette signals technical mastery and craftsmanship. A subtle blue-grey cool tone in the deep background creates atmospheric depth, while the foreground iron racks are lit in amber.
- On hover over a skill item: the 3D object lifts off the wall toward the camera (translateZ in 3D space), glows with parchment gold, and displays the skill name.
- Mouse movement causes the entire armory background to shift perspective subtly, as if the camera is panning through the hall.
- Scroll-triggered entrance: 3D items fly in from the sides as if being placed on the rack.

**Skill Categories & Items:**
- **Programming Languages** → Swords rack (Python, PHP, C, C++, Java, HTML, CSS, JavaScript)
- **Data & ML** → Spell tomes / scrolls (OpenCV, Pandas, NumPy, Matplotlib, Seaborn, SymPy, SciPy, Scikit-learn, Keras, TensorFlow, MS Excel)
- **Databases** → Stone tablets (MySQL, SQLite, PostgreSQL, MariaDB, Oracle, MongoDB)
- **Frameworks & Tools** → Shield wall (Flask, Bootstrap, XAMPP)
- **Dev & Collaboration** → Quill & map table (Git, GitHub, VS Code, Supabase, Cursor)

---

### 3.6 Campaigns & Battles (Professional Experience)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D war room interior as the full-section background: a large stone chamber with a top-down parchment map rendered in 3D on a central table, battle markers/pins that animate (glow, pulse, rise and fall) continuously. The room has strong spatial depth — stone columns recede into the background, candles flicker at the map edges, a 3D compass slowly rotates on the table surface.
- **Color Grade:** Blood crimson and deep charcoal — a battle-ready palette that signals conflict, ambition, and achievement. The map surface is aged parchment gold, creating a warm focal point against the dark crimson-lit stone walls. This is the most dramatically lit section, reinforcing the narrative of professional campaigns.
- Clicking or hovering a battle marker triggers a 3D scroll/banner to unfurl from the pin, revealing internship details.
- The map background reacts to mouse movement — the camera tilts slightly as if leaning over the table.

**Content — Three Campaigns:**

1. **The Ardent Campaign** — Full-stack Web Developer Intern
   - Ardent Computech Pvt Ltd · Kolkata, West Bengal · 6 Weeks
   - Developed a Blood Bank Management System: donor onboarding, inventory tracking, request workflows.
   - Implemented CRUD modules, server-side form validation, role-based access control (RBAC).
   - Tech: HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, XAMPP.

2. **The VaultofCodes Expedition** — Python Programming Intern
   - VaultofCodes · Remote · 3 Months
   - Built Python utilities for data parsing, task automation, and file I/O operations.
   - Modular, testable scripts; Pandas/NumPy for tabular data processing; terminal reports.
   - Tech: Python, Pandas, NumPy, Git.

3. **The AISECT Crusade** — Data Science Intern
   - AISECT LEARN · Remote · 3 Months
   - EDA, feature engineering, model training, and metric evaluation on structured datasets.
   - Visualized insights with Matplotlib; communicated findings via Jupyter notebooks.
   - Tech: Python, Pandas, Scikit-learn, Matplotlib.

**Interaction:**
- Each campaign card enters with a banner-drop animation on scroll.
- Hover: card glows with a torch-light effect, border shimmers gold.
- Tech stack tags styled as small iron coins/badges.

---

### 3.7 The Great Works (Projects)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D gallery of stone archways as the full-section background: each archway is a fully rendered 3D structure with strong depth, shadow, and ambient occlusion. The gallery hall recedes into the background with multiple archways creating a deep perspective corridor.
- Archways are continuously lit from within by a slow-pulsing light bloom — the light intensity breathes in and out in a loop. Stained-glass window textures applied to archway interiors, with light rays casting colored shadows across the stone floor.
- **Color Grade:** Deep charcoal stone with multicolored stained-glass light rays — jewel tones (sapphire blue, emerald green, ruby red) cast from the stained glass create pools of color on the dark floor, evoking a cathedral of achievement. This is the most visually rich and colorful section, signaling the breadth and quality of Mourique's work. The contrast between the dark stone and the vivid light rays creates maximum visual impact.
- On hover: the selected archway's 3D background pushes forward toward the camera (depth zoom), the internal light intensifies, and project details overlay the scene.
- Mouse movement causes the entire gallery background to shift in 3D perspective, as if walking slowly through the hall.

**Content — Five Projects:**

1. **Student Performance Tracker** — Web Application
   - Secure platform: teacher login, grade management, performance statistics.
   - Deployed live with real-time database queries.
   - Tech: Python, Flask, SQLAlchemy, PostgreSQL, HTML, CSS.
   - Live: student-performance-tracker-s6wf.onrender.com

2. **Smart Traffic Analyzer & Predictor** — ML + Analytics
   - Cleaned and aggregated traffic data; forecasted congestion using ML models.
   - Flask analytics dashboard with interactive charts and heatmaps.
   - Tech: Flask, Pandas, NumPy, Scikit-learn, SciPy, Matplotlib, Seaborn.

3. **BloodConnect — Blood Bank Management System** — Full-stack Web App
   - Donor registration, blood inventory control, emergency request approvals for hospitals.
   - Tech: HTML5, CSS, PHP, MySQL, Bootstrap, XAMPP.

4. **Personal Expense Tracker** — Data Analysis
   - Expense tracking with structured JSON storage and interactive visual analysis.
   - Tech: Python, Pandas, Matplotlib, Ipywidgets, JSON.

5. **Interactive 3D Portfolio Website** — Frontend Development
   - High-performance responsive portfolio with custom 3D animations.
   - Tech: HTML, CSS, JavaScript, Spline 3D.
   - Live: mourique.netlify.app

**Interaction:**
- Each project card has a 「View the Chronicle」 button styled as a wax-sealed scroll link.
- Live project links open in a new tab.
- Cards animate in staggered on scroll (rise from fog).

---

### 3.8 Scrolls of Honor (Certifications)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D library interior as the full-section background: tall stone bookshelves receding into deep background perspective, a 3D wooden shelf in the foreground displaying four parchment scrolls — each continuously floating with a gentle bobbing idle animation, each with a 3D wax seal that slowly rotates. Warm candlelight illuminates the shelves from below.
- **Color Grade:** Aged parchment gold and warm amber against deep charcoal — a scholarly, reverent palette that signals earned honor and academic achievement. The gold tones are the warmest and most saturated in this section, making the certifications feel precious and hard-won. Subtle dust-mote particles drift through the candlelight, adding atmospheric depth.
- On hover/click: the selected scroll's 3D model physically unrolls in 3D space (the scroll mesh animates open), revealing certification details on the inner surface.
- Mouse movement causes the library background to tilt in 3D perspective.

**Content — Four Certifications:**

1. **Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate**
   - Issued: Sep 2025 · Credential ID: 102637996OCI25AICFA

2. **Postman API Fundamentals Student Expert Certification** — LetsUpgrade
   - Issued: Sep 2025 · Credential ID: LUEPAFSMAR12584

3. **MongoDB Bootcamp** — LetsUpgrade
   - Issued: Sep 2024 · Credential ID: LUEMDBSEP124383

4. **Cyber Security and Ethical Hacking Bootcamp** — LetsUpgrade
   - Issued: Nov 2024 · Credential ID: LUECESHOCT1249007

---

### 3.9 The Scholar's Path (Education)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D outdoor environment as the full-section background: a stone road or path stretching into a misty forest with strong spatial depth and atmospheric perspective fog. Two milestone markers (3D carved stone plaques/crests) are placed along the road, continuously lit by a soft torch glow that flickers. Ancient trees line the path, their canopies creating a natural archway overhead.
- **Color Grade:** Dark forest green and deep charcoal with soft amber torch accents — a natural, grounded palette that signals growth, learning, and the journey of education. The green tones are unique to this section, providing clear visual contrast with the stone-and-fire palette of surrounding sections. Morning mist particles drift across the path, adding atmospheric depth and a sense of forward movement.
- The road background responds to mouse movement — the camera drifts slightly left/right as if the viewer is walking.
- On scroll entry: the 3D camera travels forward along the road, arriving at each milestone in sequence.

**Content:**

1. **BCA — SITM College, Kolkata**
   - Duration: 2023 – 2026
   - CGPA: 8.4
   - Focus: Web Development, Database Management, Python, Data Analysis

2. **Class 12 – Commerce — BBIT Public School, Kolkata**
   - Duration: 2021 – 2023
   - Percentage: 74.4%

**Interaction:**
- Plaques animate in with a stone-carving chisel effect (text reveals character by character).
- Hover: plaque glows with torch light.

---

### 3.10 Achievements & Lore (Achievements & Extracurriculars)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D great hall interior as the full-section background: high stone walls with strong spatial depth, iron chandeliers with flickering 3D candle flames, and three large banners hanging from iron rods — all rendered in 3D. The hall has a grand, celebratory atmosphere with warm light pooling from multiple chandelier sources.
- Banners have a continuous cloth-simulation animation: they sway gently as if in a breeze. On scroll entry: banners drop down from above with a cloth-unfurl 3D physics animation.
- **Color Grade:** Warm amber and aged parchment gold with deep charcoal stone — a triumphant, celebratory palette that signals recognition and leadership. The chandelier light creates dramatic top-down illumination with warm pools of gold against cold stone shadows, reinforcing the sense of a grand hall of honor. This palette echoes the Warrior's Oath section but with greater warmth and grandeur, signaling earned achievement.
- Mouse movement causes the hall background to pan slightly, giving depth to the scene.

**Content:**
- **Certification:** G++ Smart in AI & ML, RGET (Mar 2025 – Present)
- **Leadership:** Led multiple college technical projects, ensuring on-time delivery and high-quality code.
- **Teaching:** Private tutor for computer science courses, mentoring students in programming fundamentals.
- **Soft Skills Banner:** Team Leadership · Cross-functional Collaboration · Technical Communication · Problem Solving · Analytical Thinking · Attention to Detail · Adaptability · Project Ownership · Continuous Learning

**Interaction:**
- Soft skills displayed as iron-coin badges in a horizontal scroll row.

---

### 3.11 The Raven's Call (Contact)

**3D Background — Design & Color Rationale:**
- A high-resolution 3D dark stone tower at night as the full-section background: the tower interior is a fully rendered 3D environment with strong spatial depth, ambient occlusion, and a night sky visible through a large arched window — drifting cloud particles and distant stars animate continuously. A 3D raven model perches on the windowsill with a continuous wing-flap idle animation loop. A 3D fire pit or lantern in the scene emits live 3D particle fire — flames and embers continuously animate.
- **Color Grade:** Midnight indigo and deep charcoal with ember orange fire accents — the darkest and most mysterious palette of the full page, signaling the end of the journey and an invitation to connect. The deep blue-black night sky creates maximum depth contrast with the warm ember glow of the fire pit, drawing the eye to the contact content. This palette provides a strong, memorable conclusion to the visual narrative.
- Mouse movement causes the tower background to shift perspective, as if looking around the room.
- On page load: the raven's wings flap in a welcoming animation before settling into the idle loop.

**Content:**
- **Phone:** 8100264250
- **Email:** naskarmourique@gmail.com (mailto link)
- **LinkedIn:** LinkedIn profile link (styled as a herald's banner icon)
- **GitHub:** GitHub profile link (styled as a scroll/tome icon)
- **Portfolio:** mourique.netlify.app (styled as a castle gate icon)
- CTA inscription: 「Send the Raven — Let us forge something legendary together.」
- A 「Send Message」 button styled as a wax-sealed letter (opens mailto).

**Interaction:**
- Contact icons glow gold on hover with a subtle fire-flicker effect.
- The CTA button has a wax-seal press animation on click.

---

## 4. Business Rules & Logic

- **Navigation:** Clicking any nav link smooth-scrolls to the corresponding section. Active section is highlighted in the nav bar with a glowing gold underline.
- **3D Background Transitions:** As the user scrolls from one section to the next, the outgoing section's 3D background cross-fades, wipes, or fire-burns into the incoming section's 3D background — creating a continuous, unbroken environmental narrative across the full page. Color grades shift visibly between sections, reinforcing the distinct mood of each chapter.
- **3D Idle Animations:** All 3D backgrounds run continuous idle animations at all times when their section is in view. No 3D background is ever static or frozen.
- **Mouse Reactivity:** All 3D backgrounds respond to mouse/pointer position within their section — camera tilt, depth-parallax shift, or light direction follows the cursor in real time, reinforcing spatial depth.
- **Foreground Readability:** All foreground content (text, cards, UI elements) must remain legible against the 3D background at all times. Semi-transparent overlay panels (dark iron or aged parchment, opacity 60–80%) are applied beneath text content where needed.
- **External Links:** All live project links and social/professional links (LinkedIn, GitHub, Portfolio) open in a new browser tab.
- **Mailto:** The email address and 「Send Message」 button both trigger the device's default mail client via mailto.
- **Scroll Progress Indicator:** A thin ember-colored progress bar at the top of the viewport fills as the user scrolls down the page.
- **Entrance Animations:** All section animations and 3D background entrances are scroll-triggered (Intersection Observer); they fire once when the section enters the viewport and do not repeat on scroll-up.
- **3D Scene Performance:** All section 3D backgrounds degrade gracefully — if WebGL is unavailable, a high-quality static image fallback (color-graded to match the section's intended palette) is displayed per section.
- **Mobile 3D:** On mobile devices, 3D backgrounds are simplified (reduced polygon count, shadows disabled, particle counts reduced) but remain animated and present — the immersive feel is preserved.
- **Ambient Sound:** Audio must be muted by default and only play on explicit user toggle. No autoplay.
- **Responsive Behavior:** The site must be fully functional on mobile and tablet. The navigation collapses to a crossed-swords hamburger menu.

---

## 5. Exceptions & Edge Cases

| Scenario | Handling |
|---|---|
| WebGL / Three.js not supported by browser | Display a high-quality static medieval image (color-graded to match the section palette) as fallback per section; all content remains accessible |
| User on low-end mobile device | Disable particle systems, reduce 3D polygon count and shadow maps; idle animations remain active at reduced fidelity |
| 3D background transition between sections causes frame drop | Reduce transition complexity (simple cross-fade instead of fire-burn wipe); prioritize 60fps over visual richness |
| Foreground text becomes illegible against a bright 3D background region | Increase overlay panel opacity dynamically to restore contrast; text legibility takes priority over background visibility |
| External live project link is down | Link still renders and opens; no broken-link detection required in this scope |
| Email client not configured on device | mailto link attempts to open; no custom contact form required in this scope |
| Very long skill list overflows armory grid | Skills wrap into additional rows; no truncation |
| User navigates directly to a section via URL hash | Page loads and smooth-scrolls to the correct section; the corresponding 3D background initializes and begins idle animation |

---

## 6. Acceptance Criteria

- Every section features a continuously animating, high-resolution, spatially deep 3D background that never freezes or remains static while in view.
- Each section's 3D background is visibly color-graded with a distinct dominant hue that establishes the emotional tone of that section, while remaining cohesive within the overall medieval palette.
- All 3D backgrounds respond to mouse/cursor movement in real time with camera tilt or depth-parallax shift, reinforcing spatial depth.
- Scrolling between sections triggers a visible 3D background transition (outgoing background exits, incoming background enters with its distinct color grade) creating a seamless environmental narrative.
- The hero section renders a full-viewport 3D battlefield scene with dusk color grading (charcoal-to-crimson horizon), mouse-parallax camera movement, and cinematic title animation.
- All sections are visually distinct in color grade yet cohesive within the medieval aesthetic — stone, parchment, fire, iron, and fog motifs are consistently applied across all 3D backgrounds.
- Foreground content remains legible against all 3D backgrounds at all times, with overlay panels applied where needed.
- Scroll-triggered animations and 3D background entrances fire correctly for every section on first entry into the viewport.
- All five projects display correctly with their live links functional and opening in new tabs.
- All four certifications display with correct credential IDs.
- Contact section correctly links to email (mailto), LinkedIn, GitHub, and Portfolio.
- Custom medieval cursor is visible and functional on desktop.
- The site is fully navigable on mobile with the hamburger menu operational and 3D backgrounds present in simplified form.
- No section content is missing, truncated, or incorrectly attributed.
- The scroll progress indicator updates correctly as the user scrolls.
- All 3D backgrounds have a static image fallback (color-graded to match section palette) when WebGL is unavailable.
- Ambient sound does not autoplay and is muted by default.

---

## 7. Out of Scope (This Release)

- Backend contact form with server-side message storage or email delivery (mailto only).
- CMS or admin panel for updating portfolio content.
- Blog or articles section.
- Dark/light theme toggle.
- Multi-language support.
- Analytics or visitor tracking integration.
- Password-protected or private project case studies.
- Downloadable CV/PDF button.
- Custom domain configuration.