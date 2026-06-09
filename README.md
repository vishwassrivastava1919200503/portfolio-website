# Claude-Inspired Editorial Portfolio

A highly polished, literary-style developer portfolio website built for **Vishwas Srivastava** (Data Analyst & Operations Engineer). The interface translates the signature warm,humanist, and editorial design vocabulary of Anthropic's Claude marketing website into a professional developer showcase.

---

## 🎨 Theme & Design Aesthetics

This website adheres to the **Claude.com** design principles, presenting a stark departure from typical SaaS marketing designs:
*   **Warm Canvas Background**: The main page floor uses a tinted cream canvas (`#faf9f5`) rather than cool white or gray, giving it a literary publication feel.
*   **Literary Typography**: Display headlines are voiced using a regular-weight serif display typeface with tight letter-spacing (`Cormorant Garamond` at `-0.02em` tracking) paired with a humanist body sans (`Inter`).
*   **Alternating Pacing Rhythm**: Layouts alternate between light cream canvas elements, card surfaces (`#efe9de`), and dark navy product blocks (`#181715`).
*   **Brand Voltage Accent**: Warm coral (`#cc785c`) is reserved strictly for primary calls-to-action, links, and the full-bleed contact card.
*   **Zero-Dependency Build**: Crafted entirely in vanilla HTML5, CSS3, and JavaScript for lightning-fast loading speeds and maximum portability.

---

## ✨ Features Implemented

1.  **Sticky Top Navigation**: A glassmorphic cream nav bar with a 4-spoke radial brand mark logo that rotates on hover.
2.  **Jupyter / Python Typing Animation**: An automated code typing simulation in the Hero section showcasing developer profile metrics.
3.  **Active Scroll Spy**: Sticky menu items automatically highlight as you scroll into different sections of the page.
4.  **Interactive Query Showcase**: A tabbed code-window panel where users can switch between SQL metrics queries, Python modeling pipelines, and AI evaluation schema rubrics.
5.  **Interactive Projects Showcase**: A categorized filter system (All, BI & Dashboards, Python & AI Quality) displaying card grids with customized CSS/SVG mockups.
6.  **Interactive Experience Timeline**: A vertical, publication-style milestone timeline documenting internship and educational history.
7.  **Form Validation**: Client-side validation on the contact section showing user response confirmations.
8.  **Fully Responsive Layout**: Breakpoints optimized for mobile devices (collapsible mobile menu, grid items collapsing to single columns, and code scrolling).

---

## 📂 Codebase Structure

```text
portfolio-website/
├── index.html        # Main HTML structure and content markup
├── styles.css        # Custom CSS variables, typography, layouts, components, and animations
├── app.js            # Typing simulation, tab switching, project filtering, and menu toggle logic
├── design.md         # Saved design analysis and color/font tokens
└── README.md         # Project documentation (this file)
```

---

## 🚀 Quick Start (Running Locally)

The project has zero dependencies and can be run without compiling or packaging.

### Method 1: Direct Execution
Double-click `index.html` on your local system to open it immediately in any browser.

### Method 2: Python Local Server
If you want to run a local server:
1. Open terminal and navigate to the project directory.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open browser to `http://localhost:8000`.

---

## 🛠️ How to Customize

*   **Change Contact Info & Links**: Edit the header links, contact card (`#contact`), and footer social anchors in `index.html`.
*   **Add Projects**: Insert a new `.product-mockup-card-dark` division inside the `#projects-list` container in `index.html`. Add `data-category="bi"` or `data-category="python-ai"` to automatically link with the category filters.
*   **Modify Code Snippets**: Edit the JSON dictionary payloads inside `app.js` under `showcaseTabsContent` to update the SQL or Python code templates.
