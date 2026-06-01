<div align="center">
  <h1>webioinfo-web</h1>
  <p><strong>Official website for webioinfo — AI developer tools organization</strong></p>
  <p>Warm, playful static site showcasing open-source AI CLI tools. Built with Astro, Tailwind CSS, and a "creative desk" visual identity.</p>
  <p>
    <strong>English</strong> &middot;
    <a href="./README_cn.md">简体中文</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/platform-web-334155?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/badge/framework-Astro_6-FF5D01?style=flat-square" alt="Astro">
    <img src="https://img.shields.io/badge/style-Tailwind_CSS_4-38B2AC?style=flat-square" alt="Tailwind">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License">
  </p>
</div>

> Let AI be your dev team.

## Tech Stack

- **Astro 6** — static site generation, zero JS by default
- **Tailwind CSS 4** — utility-first styling
- **Bilingual** — English + Chinese via JSON i18n

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
  components/     # Header, Hero, StickerMap, ProjectCard, Footer, Thanks
  i18n/           # en.json, zh.json
  layouts/        # Layout.astro (HTML shell, fonts, theme toggle)
  pages/          # index, about, projects (+ zh/ mirrors)
  styles/         # global.css (theme variables, sticker/desk styles)
public/           # static assets (logo, QR code, partner logos)
```

## Deployment

Pushed to `main` triggers GitHub Actions → GitHub Pages. Custom domain: `we.webioinfo.top`.
