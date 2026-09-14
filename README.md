# ⬛ ifeoluwaafuwape.xyz — Minimalist Developer Site & Publishing Platform

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat-square)](./LICENSE)

Official personal website, portfolio, and Markdown publishing platform of **Ifeoluwa Afuwape (Hipheckts)** — UK-qualified Engineering Manager & Certified Cloud Architect (GCP/AWS).

Designed with a high-contrast, distraction-free **black & white monochromatic developer aesthetic** and built for sub-second page loads.

---

## ⚡ Core Features

- **High-Performance Architecture**: Built with Vite + React 18 + React Router v6. Production bundle compiles in **~1.1s** with Rollup vendor code-splitting (<26 kB core JS).
- **Monochromatic Aesthetic**: Clean dark mode (`#0a0a0a`) by default with dark/light mode toggle. Uses monospace (`JetBrains Mono`) for code, tags, timestamps, and terminal headers, paired with `Inter` for body copy.
- **Dynamic Markdown Articles**: Publish technical articles simply by dropping `.md` files into `src/content/articles/`. Features YAML frontmatter parsing, syntax highlighting (`highlight.js`), tag filtering, and search.
- **TechChat with Ife Podcast**: Interactive video podcast hub on `/podcast` streaming all 9 playlist episodes from YouTube ([`PLE1d6q-CHei7ryhzDE6vhtlhC0vAzqoCE`](https://www.youtube.com/playlist?list=PLE1d6q-CHei7ryhzDE6vhtlhC0vAzqoCE)) with dynamic episode selection.
- **Conference Speaking**: Dedicated `/speaking` section showcasing keynotes, workshops, and panel sessions (TechNExt 2026, FlutterForward Extended Accra, GDG FUNAAB, CodeLagos).
- **Fully Responsive Navigation**: Icon-based spacing for tablets and an expandable monochromatic menu drawer for mobile viewports (<640px).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/) + [React Router v6](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/) + Rollup Code-Splitting
- **Styling**: Pure Vanilla CSS with CSS Custom Properties (Variables)
- **Markdown & Syntax Highlighting**: `front-matter`, `react-markdown`, `remark-gfm`, `rehype-highlight`, `highlight.js`
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Repository Structure

```text
ifeoluwaafuwape.com/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive header with icon nav & mobile drawer
│   │   └── Footer.jsx        # Footer with copyright & social links
│   ├── content/
│   │   └── articles/         # Markdown (.md) articles repository
│   ├── pages/
│   │   ├── Home.jsx          # Profile hero, GCP certs, speaking & podcast highlights
│   │   ├── Experience.jsx    # Work experience, capabilities, volunteering, education
│   │   ├── Projects.jsx      # Open-source packages & enterprise solutions
│   │   ├── Articles.jsx      # Article index with live search & tag filtering
│   │   ├── ArticleDetail.jsx# Full markdown article reader view
│   │   ├── Speaking.jsx      # Conference keynotes & panel sessions
│   │   └── Podcast.jsx       # TechChat with Ife interactive video player & episodes
│   ├── utils/
│   │   └── markdownLoader.js # Dynamic Vite import.meta.glob & frontmatter parser
│   ├── App.jsx               # Application routes
│   ├── main.jsx              # Application entrypoint
│   └── index.css             # Monochromatic design system
├── index.html                # Root HTML template
├── vite.config.js            # Vite configuration & Rollup chunking
└── package.json
```

---

## 📝 How to Publish a New Article

To publish a new article on the site:

1. Create a new `.md` file in `src/content/articles/` (e.g. `your-article-slug.md`).
2. Add standard YAML frontmatter metadata at the top:

```markdown
---
title: "Your Article Title Here"
date: "2026-09-15"
description: "A concise description of what this article covers."
tags: ["Architecture", "Cloud", "React"]
readTime: "5 min read"
---

Write your article content in Markdown here...

```javascript
const greeting = "Hello World";
console.log(greeting);
```
```

3. The site automatically detects, parses, and lists your new article on `/articles` and `/`!

---

## 🚀 Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📄 License

This project is open-source under the [MIT License](./LICENSE).
