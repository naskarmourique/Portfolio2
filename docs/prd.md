# Requirements Document

## 1. Application Overview

- **Application Name:** Mourique Naskar — The Chronicle
- **Description:** A visually immersive, medieval-themed personal portfolio website for Mourique Naskar, a Data Scientist and Full Stack Developer. The site draws aesthetic inspiration from Game of Thrones and battlefield imagery — iron, stone, fire, parchment, swords, shields, and crests. Every section is anchored by a continuously animating, interactive 3D model rendered in real time, making the entire experience feel alive and cinematic. Scroll-driven transitions, parallax layers, and live 3D scene changes per section transform this portfolio into a living, breathing chronicle.

---

## 2. Users & Use Cases

- **Target Users:** Recruiters, hiring managers, tech leads, and collaborators who visit the portfolio to evaluate Mourique's capabilities.
- **Core Use Case:** A visitor lands on the site and is drawn into an immersive medieval narrative. Each section features a distinct, continuously animating live 3D model that reacts to scroll position and mouse interaction, progressively revealing Mourique's background, skills, experience, and projects — each styled as a chapter of an epic story, culminating in a call-to-action to connect.

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

All sections share a unified medieval aesthetic. The defining upgrade across the entire site is the **Live 3D Model Layer**: every section features a dedicated, continuously animating 3D model rendered via Three.js / @react-three/fiber that persists and transforms as the user scrolls, creating a seamless sense of a living world rather than static illustrations.

**Live 3D Model System — Global Rules:**
- Each section owns a primary 3D model (detailed per section below).
- Models are always in motion: idle animations (rotation, floating, breathing, particle emission) run in a continuous loop — they never freeze or remain static.
- On scroll between sections, the active 3D model transitions (morphs, fades, or flies out) and the next section's model animates in — creating a continuous 3D narrative thread.
- Mouse movement within any section causes the active 3D model to respond: subtle camera orbit, tilt, or model rotation follows the cursor (similar to the reference site supratimghosh.telvexsolutions.co.in).
- On mobile, 3D models are simplified (reduced polygon count, disabled shadows) but remain animated and present.
- If WebGL is unavailable, a high-quality animated GIF or static image fallback replaces the 3D model.

**Color Palette:** Deep charcoal black, aged parchment gold, blood crimson, iron grey, ember orange, dark forest green.

**Typography:** Serif or gothic-style display fonts for headings (cinzel / uncial antiqua style); clean sans-serif for body text.

**Background Textures:** Stone wall textures, aged parchment overlays, subtle smoke/fog particle effects, ember/spark particle systems rendered via canvas or WebGL — layered behind or around the 3D models.

**Cursor:** Custom medieval cursor — a sword or quill replacing the default pointer on desktop.

**Scroll Behavior:** Smooth scroll with scroll-triggered reveal animations (fade-in from mist, rise from below, unfurl like a scroll). Scroll position drives 3D model transitions globally.

**Parallax:** Multi-layer parallax on hero and section backgrounds (foreground elements, mid-layer fog, background sky/stone).

**Section Transitions:** Each section transition uses a cinematic wipe or fire-burn reveal effect, synchronized with the outgoing and incoming 3D model swap.

**Scroll Progress Indicator:** A thin ember-colored progress bar at the top of the viewport fills as the user scrolls.

**Ambient Sound Toggle:** A mute/unmute icon for optional ambient medieval background audio — no autoplay, muted by default.

---

### 3.3 Hero / Opening Scroll

**Live 3D Model:**
- A full-viewport interactive 3D battlefield scene: dark terrain at dusk, fog rolling across a stone floor, a lone sword embedded in the ground with embers floating upward, a shield bearing a personal crest.
- The scene is continuously animated: embers drift upward in a loop, fog particles shift, the sword subtly pulses with a glow.
- Mouse movement causes the 3D camera to tilt and orbit slightly, giving a parallax depth effect across the entire scene.
- The 3D model fills the full viewport as the hero background.

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

**Live 3D Model:**
- A 3D animated parchment scroll that continuously unfurls and re-furls in a slow loop, floating slightly in the scene.
- A 3D wax seal rotates gently beside the scroll, stamping down with a satisfying animation on section entry.
- Mouse movement causes the scroll to tilt in 3D perspective, responding to cursor position.
- Background: aged stone wall with 3D torch sconces — flames are live 3D particle fire simulations (not CSS), flickering continuously.

**Content:**
- Section heading: 「The Warrior's Oath」 with a decorative medieval divider (crossed swords SVG).
- Career Objective text displayed as parchment inscription.
- Professional Summary displayed below as a second paragraph on the same scroll.
- Highlighted keywords (Python, Machine Learning, Full Stack, Data Analytics) glow subtly in gold on hover.

---

### 3.5 The Armory (Technical Skills)

**Live 3D Model:**
- A live 3D armory hall environment: stone walls, iron racks, and shelves rendered in 3D.
- Each skill category is represented by a 3D weapon or artifact mounted on the wall — swords, tomes, stone tablets, shields, quills — all continuously floating or slowly rotating in idle animation.
- On hover over a skill item: the 3D object lifts off the wall toward the camera (translateZ in 3D space), glows, and displays the skill name.
- Mouse movement causes the entire armory scene to shift perspective subtly, as if the camera is panning.
- Scroll-triggered entrance: 3D items fly in from the sides as if being placed on the rack.

**Skill Categories & Items:**
- **Programming Languages** → Swords rack (Python, PHP, C, C++, Java, HTML, CSS, JavaScript)
- **Data & ML** → Spell tomes / scrolls (OpenCV, Pandas, NumPy, Matplotlib, Seaborn, SymPy, SciPy, Scikit-learn, Keras, TensorFlow, MS Excel)
- **Databases** → Stone tablets (MySQL, SQLite, PostgreSQL, MariaDB, Oracle, MongoDB)
- **Frameworks & Tools** → Shield wall (Flask, Bootstrap, XAMPP)
- **Dev & Collaboration** → Quill & map table (Git, GitHub, VS Code, Supabase, Cursor)

---

### 3.6 Campaigns & Battles (Professional Experience)

**Live 3D Model:**
- A live 3D war map table: a top-down parchment map rendered in 3D, with battle markers/pins that animate (glow, pulse, rise and fall) continuously.
- Clicking or hovering a battle marker triggers a 3D scroll/banner to unfurl from the pin, revealing internship details.
- The map surface reacts to mouse movement — the camera tilts slightly as if leaning over the table.
- Atmospheric 3D elements: candles flickering at the map edges, a 3D compass slowly rotating.

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

**Live 3D Model:**
- A live 3D gallery of stone archways: each archway is a fully rendered 3D structure with depth, shadow, and ambient occlusion.
- Archways are continuously lit from within by a slow-pulsing light bloom — the light intensity breathes in and out in a loop.
- On hover: the selected archway's 3D model pushes forward toward the camera (depth zoom), the internal light intensifies, and project details overlay the scene.
- Mouse movement causes the entire gallery to shift in 3D perspective, as if walking slowly through the hall.
- Stained-glass window textures applied to archway interiors, with light rays casting colored shadows.

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

**Live 3D Model:**
- Four 3D parchment scrolls displayed on a 3D wooden shelf, each continuously floating with a gentle bobbing idle animation.
- Each scroll has a 3D wax seal that slowly rotates.
- On hover/click: the selected scroll's 3D model physically unrolls in 3D space (the scroll mesh animates open), revealing certification details on the inner surface.
- Mouse movement causes the shelf scene to tilt in 3D perspective.

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

**Live 3D Model:**
- A live 3D stone road or path stretching into a misty forest, rendered in 3D with depth and atmospheric fog.
- Two milestone markers (3D carved stone plaques/crests) are placed along the road, continuously lit by a soft torch glow that flickers.
- The road scene responds to mouse movement — the camera drifts slightly left/right as if the viewer is walking.
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

**Live 3D Model:**
- A live 3D great hall interior: high stone walls, iron chandeliers with flickering 3D candle flames, and three large banners hanging from iron rods — all rendered in 3D.
- Banners have a continuous cloth-simulation animation: they sway gently as if in a breeze.
- On scroll entry: banners drop down from above with a cloth-unfurl 3D physics animation.
- Mouse movement causes the hall camera to pan slightly, giving depth to the scene.

**Content:**
- **Certification:** G++ Smart in AI & ML, RGET (Mar 2025 – Present)
- **Leadership:** Led multiple college technical projects, ensuring on-time delivery and high-quality code.
- **Teaching:** Private tutor for computer science courses, mentoring students in programming fundamentals.
- **Soft Skills Banner:** Team Leadership · Cross-functional Collaboration · Technical Communication · Problem Solving · Analytical Thinking · Attention to Detail · Adaptability · Project Ownership · Continuous Learning

**Interaction:**
- Soft skills displayed as iron-coin badges in a horizontal scroll row.

---

### 3.11 The Raven's Call (Contact)

**Live 3D Model:**
- A live 3D dark stone tower at night: the tower is a fully rendered 3D environment with depth, ambient occlusion, and a night sky with drifting cloud particles.
- A 3D raven model perches on the windowsill with a continuous wing-flap idle animation loop.
- A 3D fire pit or lantern in the scene emits live 3D particle fire — flames and embers continuously animate.
- Mouse movement causes the tower scene to shift perspective, as if looking around the room.
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
- **3D Model Transitions:** As the user scrolls from one section to the next, the outgoing section's 3D model animates out (dissolves, flies away, or morphs) and the incoming section's 3D model animates in — creating a continuous, unbroken 3D narrative across the full page.
- **3D Idle Animations:** All 3D models run continuous idle animations at all times when their section is in view. No 3D model is ever static or frozen.
- **Mouse Reactivity:** All 3D scenes respond to mouse/pointer position within their section — camera tilt, model rotation, or light direction shifts follow the cursor in real time.
- **External Links:** All live project links and social/professional links (LinkedIn, GitHub, Portfolio) open in a new browser tab.
- **Mailto:** The email address and 「Send Message」 button both trigger the device's default mail client via mailto.
- **Scroll Progress Indicator:** A thin ember-colored progress bar at the top of the viewport fills as the user scrolls down the page.
- **Entrance Animations:** All section animations and 3D model entrances are scroll-triggered (Intersection Observer); they fire once when the section enters the viewport and do not repeat on scroll-up.
- **3D Scene Performance:** The hero 3D scene and all section 3D models degrade gracefully — if WebGL is unavailable, a high-quality static image fallback is displayed per section.
- **Mobile 3D:** On mobile devices, 3D models are simplified (reduced polygon count, shadows disabled, particle counts reduced) but remain animated and present — the live feel is preserved.
- **Ambient Sound:** Audio must be muted by default and only play on explicit user toggle. No autoplay.
- **Responsive Behavior:** The site must be fully functional on mobile and tablet. The navigation collapses to a crossed-swords hamburger menu.

---

## 5. Exceptions & Edge Cases

| Scenario | Handling |
|---|---|
| WebGL / Three.js not supported by browser | Display a high-quality static medieval image as fallback per section; all content remains accessible |
| User on low-end mobile device | Disable particle systems, reduce 3D polygon count and shadow maps; idle animations remain active at reduced fidelity |
| 3D model transition between sections causes frame drop | Reduce transition complexity (simple fade instead of morph); prioritize 60fps over visual richness |
| External live project link is down | Link still renders and opens; no broken-link detection required in this scope |
| Email client not configured on device | mailto link attempts to open; no custom contact form required in this scope |
| Very long skill list overflows armory grid | Skills wrap into additional rows; no truncation |
| User navigates directly to a section via URL hash | Page loads and smooth-scrolls to the correct section; the corresponding 3D model initializes and begins idle animation |

---

## 6. Acceptance Criteria

- Every section features a continuously animating live 3D model that never freezes or remains static while in view.
- All 3D models respond to mouse/cursor movement in real time with camera tilt or model rotation.
- Scrolling between sections triggers a visible 3D model transition (outgoing model exits, incoming model enters) creating a seamless narrative flow.
- The hero section renders a 3D interactive battlefield scene with mouse-parallax camera movement and cinematic title animation.
- All sections are visually distinct yet cohesive within the medieval aesthetic — stone, parchment, fire, iron, and fog motifs are consistently applied across all 3D scenes.
- Scroll-triggered animations and 3D model entrances fire correctly for every section on first entry into the viewport.
- All five projects display correctly with their live links functional and opening in new tabs.
- All four certifications display with correct credential IDs.
- Contact section correctly links to email (mailto), LinkedIn, GitHub, and Portfolio.
- Custom medieval cursor is visible and functional on desktop.
- The site is fully navigable on mobile with the hamburger menu operational and 3D models present in simplified form.
- No section content is missing, truncated, or incorrectly attributed.
- The scroll progress indicator updates correctly as the user scrolls.
- All 3D scenes have a static image fallback when WebGL is unavailable.
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