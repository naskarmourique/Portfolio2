# Requirements Document

## 1. Application Overview

- **Application Name:** Mourique Naskar — The Chronicle
- **Description:** A visually immersive, medieval-themed personal portfolio website for Mourique Naskar, a Data Scientist and Full Stack Developer. The site draws aesthetic inspiration from Game of Thrones and battlefield imagery — think iron, stone, fire, parchment, swords, shields, and crests. Every section unfolds like a chapter in an epic saga, using 3D effects, scroll-driven animations, parallax layers, and cinematic hover interactions to tell the story of Mourique's skills, experience, and projects. This is not a conventional portfolio — it is a living, breathing chronicle.

---

## 2. Users & Use Cases

- **Target Users:** Recruiters, hiring managers, tech leads, and collaborators who visit the portfolio to evaluate Mourique's capabilities.
- **Core Use Case:** A visitor lands on the site and is drawn into an immersive medieval narrative that progressively reveals Mourique's background, skills, experience, and projects — each section styled as a chapter of an epic story, culminating in a call-to-action to connect.

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

All pages share a unified medieval aesthetic and animation layer:

- **Color Palette:** Deep charcoal black, aged parchment gold, blood crimson, iron grey, ember orange, and dark forest green.
- **Typography:** Serif or gothic-style display fonts for headings (e.g., cinzel, uncial antiqua style); clean sans-serif for body text to maintain readability.
- **Background Textures:** Stone wall textures, aged parchment overlays, subtle smoke/fog particle effects, and ember/spark particle systems rendered via canvas or WebGL.
- **Cursor:** Custom medieval cursor — a sword or quill replacing the default pointer.
- **Scroll Behavior:** Smooth scroll with scroll-triggered reveal animations (fade-in from mist, rise from below, unfurl like a scroll).
- **3D Effects:** Three.js or @react-three/fiber used for 3D hero scene and interactive 3D elements (rotating shield, floating sword, spinning crest).
- **Parallax:** Multi-layer parallax on hero and section backgrounds (foreground mountains, mid-layer fog, background sky).
- **Section Transitions:** Each section transition uses a cinematic wipe or fire-burn reveal effect.
- **Ambient Sound Toggle (optional UI element):** A mute/unmute icon for optional ambient medieval background audio — no autoplay.

---

### 3.3 Hero / Opening Scroll

**Visual Concept:**
- Full-viewport 3D scene: a dark battlefield at dusk — fog rolling across a stone floor, a lone sword embedded in the ground, a shield bearing a personal crest, embers floating upward.
- The 3D scene is interactive: mouse movement causes parallax shift in the 3D environment (camera tilt follows cursor).
- A dramatic title unfurls letter by letter as if being carved into stone:
  - Large display text: **「MOURIQUE NASKAR」**
  - Subtitle typewriter effect: *「Data Scientist · Full Stack Developer · Builder of Worlds」*
- A glowing scroll-down indicator (animated feather quill or downward arrow with ember glow).
- A navigation bar styled as a stone tablet or iron banner with chapter names.

**Navigation Bar:**
- Fixed/sticky at top, styled as a dark iron banner.
- Links: The Oath · The Armory · Campaigns · Great Works · Scrolls · The Scholar · The Raven
- On scroll, the nav bar gains a frosted stone/dark glass background.
- Hamburger menu on mobile styled as crossed swords icon.

---

### 3.4 The Warrior's Oath (Career Objective + Professional Summary)

**Visual Concept:**
- Parchment scroll unfurls on scroll-enter, revealing the text inside.
- Background: aged stone wall with torch sconces flickering (CSS/canvas flame animation).
- A wax seal icon (personal crest) stamps onto the parchment with a satisfying animation.

**Content:**
- Section heading: *「The Warrior's Oath」* with a decorative medieval divider (crossed swords SVG).
- Career Objective text displayed as parchment inscription.
- Professional Summary displayed below as a second paragraph on the same scroll.
- Highlighted keywords (Python, Machine Learning, Full Stack, Data Analytics) glow subtly in gold on hover.

---

### 3.5 The Armory (Technical Skills)

**Visual Concept:**
- A dark stone armory hall. Skills are displayed as weapons, shields, and artifacts mounted on the wall.
- Each skill category is a weapon rack or shelf:
  - **Programming Languages** → Swords rack (Python, PHP, C, C++, Java, HTML, CSS, JavaScript)
  - **Data & ML** → Spell tomes / scrolls (OpenCV, Pandas, NumPy, Matplotlib, Seaborn, SymPy, SciPy, Scikit-learn, Keras, TensorFlow, MS Excel)
  - **Databases** → Stone tablets (MySQL, SQLite, PostgreSQL, MariaDB, Oracle, MongoDB)
  - **Frameworks & Tools** → Shield wall (Flask, Bootstrap, XAMPP)
  - **Dev & Collaboration** → Quill & map table (Git, GitHub, VS Code, Supabase, Cursor)
- Each skill item is a card/badge with a medieval icon. On hover: the item lifts off the wall in 3D (translateZ + rotation), glows, and displays the skill name.
- Scroll-triggered entrance: items fly in from the sides as if being placed on the rack.

---

### 3.6 Campaigns & Battles (Professional Experience)

**Visual Concept:**
- A war map table (top-down parchment map) with three battle markers/pins.
- Clicking or hovering a battle marker expands a scroll/banner revealing the internship details.
- Alternatively: a vertical timeline styled as a stone road with milestone markers (shields/crests).

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

**Visual Concept:**
- A gallery of stone archways or stained-glass windows, each archway framing a project.
- On hover: the archway illuminates from within (light bloom effect), and a 3D tilt (CSS perspective transform) reveals project details.
- Projects displayed in a responsive grid of archway cards.

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

**Visual Concept:**
- Four rolled parchment scrolls displayed on a wooden shelf or stone ledge.
- Each scroll unrolls on hover/click to reveal certification details.
- A wax seal with a unique icon per certification.

**Content — Four Certifications:**

1. **Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate**
   - Issued: Sep 2025 · Credential ID: 102637996OCI25AICFA

2. **Postman API Fundamentals Student Expert Certification** — LetsUpgrade
   - Issued: Sep 2025 · Credential ID: LUEPAFSMAR12584

3. **MongoDB Bootcamp** — LetsUpgrade
   - Issued: Sep 2024 · Credential ID: LUEMDBSEP124383

4. **Cyber Security and Ethical Hacking Bootcamp** — LetsUpgrade
   - Issued: Nov 2024 · Credential ID: LUECESHOCT1249007

**Interaction:**
- Scroll unroll animation on hover.
- Credential ID displayed in a stamped-ink style.

---

### 3.9 The Scholar's Path (Education)

**Visual Concept:**
- A stone road or path with two milestone markers (crests/shields).
- Each milestone is a carved stone plaque with education details.
- Parallax background: a misty forest road.

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

**Visual Concept:**
- A trophy hall or great hall wall with mounted banners and plaques.
- Three achievement banners hang from iron rods.

**Content:**
- **Certification:** G++ Smart in AI & ML, RGET (Mar 2025 – Present)
- **Leadership:** Led multiple college technical projects, ensuring on-time delivery and high-quality code.
- **Teaching:** Private tutor for computer science courses, mentoring students in programming fundamentals.
- **Soft Skills Banner:** Team Leadership · Cross-functional Collaboration · Technical Communication · Problem Solving · Analytical Thinking · Attention to Detail · Adaptability · Project Ownership · Continuous Learning

**Interaction:**
- Banners drop down from above on scroll-enter with a cloth-unfurl animation.
- Soft skills displayed as iron-coin badges in a horizontal scroll row.

---

### 3.11 The Raven's Call (Contact)

**Visual Concept:**
- A dark stone tower at night. A raven perches on the windowsill (3D or animated SVG).
- A glowing fire pit or lantern illuminates the contact area.
- Contact details carved into stone or written on a parchment note.

**Content:**
- **Phone:** 8100264250
- **Email:** naskarmourique@gmail.com (mailto link)
- **LinkedIn:** LinkedIn profile link (styled as a herald's banner icon)
- **GitHub:** GitHub profile link (styled as a scroll/tome icon)
- **Portfolio:** mourique.netlify.app (styled as a castle gate icon)
- A short call-to-action inscription: *「Send the Raven — Let us forge something legendary together.」*
- A 「Send Message」 button styled as a wax-sealed letter (opens mailto).

**Interaction:**
- Raven animates (wing flap loop) on page load.
- Contact icons glow gold on hover with a subtle fire-flicker effect.
- The CTA button has a wax-seal press animation on click.

---

## 4. Business Rules & Logic

- **Navigation:** Clicking any nav link smooth-scrolls to the corresponding section. Active section is highlighted in the nav bar with a glowing gold underline.
- **External Links:** All live project links and social/professional links (LinkedIn, GitHub, Portfolio) open in a new browser tab.
- **Mailto:** The email address and 「Send Message」 button both trigger the device's default mail client via mailto.
- **Scroll Progress Indicator:** A thin ember-colored progress bar at the top of the viewport fills as the user scrolls down the page.
- **Entrance Animations:** All section animations are scroll-triggered (Intersection Observer); they fire once when the section enters the viewport and do not repeat on scroll-up.
- **3D Scene Performance:** The hero 3D scene degrades gracefully — if WebGL is unavailable, a high-quality static image fallback is displayed.
- **Ambient Sound:** If implemented, audio must be muted by default and only play on explicit user toggle. No autoplay.
- **Responsive Behavior:** The site must be fully functional on mobile and tablet. 3D and parallax effects are reduced on mobile for performance. The navigation collapses to a crossed-swords hamburger menu.

---

## 5. Exceptions & Edge Cases

| Scenario | Handling |
|---|---|
| WebGL / Three.js not supported by browser | Display a static high-quality medieval battlefield image as hero background fallback |
| User on low-end mobile device | Disable particle systems and reduce 3D complexity; maintain core layout and content |
| External live project link is down | Link still renders and opens; no broken-link detection required in this scope |
| Email client not configured on device | mailto link attempts to open; no custom contact form required in this scope |
| Very long skill list overflows armory grid | Skills wrap into additional rows; no truncation |
| User navigates directly to a section via URL hash | Page loads and smooth-scrolls to the correct section |

---

## 6. Acceptance Criteria

- The hero section renders a 3D interactive scene with mouse-parallax camera movement and cinematic title animation.
- All sections are visually distinct yet cohesive within the medieval aesthetic — stone, parchment, fire, iron, and fog motifs are consistently applied.
- Scroll-triggered animations fire correctly for every section on first entry into the viewport.
- All five projects display correctly with their live links functional and opening in new tabs.
- All four certifications display with correct credential IDs.
- Contact section correctly links to email (mailto), LinkedIn, GitHub, and Portfolio.
- Custom medieval cursor is visible and functional on desktop.
- The site is fully navigable on mobile with the hamburger menu operational.
- No section content is missing, truncated, or incorrectly attributed.
- The scroll progress indicator updates correctly as the user scrolls.
- The 3D hero scene has a static image fallback when WebGL is unavailable.
- Ambient sound (if included) does not autoplay and is muted by default.

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