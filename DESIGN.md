---
name: webioinfo
description: Official website for webioinfo — AI developer tools organization
colors:
  primary: "#FFB5C2"
  primary-dark: "#FF8FAB"
  secondary: "#D4B5FF"
  mint: "#B5E8D5"
  cream: "#FFF8F0"
  cream-dark: "#F5EDE0"
  wood: "#E8D5B8"
  wood-dark: "#C8B898"
  text: "#5C4033"
  text-light: "#8B7355"
typography:
  display:
    fontFamily: Sora, Noto Sans SC, system-ui, sans-serif
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
  heading:
    fontFamily: Sora, Noto Sans SC, system-ui, sans-serif
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  body:
    fontFamily: Sora, Noto Sans SC, system-ui, sans-serif
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label:
    fontFamily: Sora, Noto Sans SC, system-ui, sans-serif
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
  code:
    fontFamily: JetBrains Mono, Fira Code, monospace
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
rounded:
  sm: 6px
  DEFAULT: 8px
  lg: 20px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  sticker:
    borderRadius: 6px 6px 20px 6px
    padding: 32px 24px 28px
    minHeight: 240px
    shadow: 2px 3px 12px rgba(0,0,0,0.1)
  sticker-tape:
    width: 64px
    height: 22px
    background: rgba(255,255,255,0.45)
    borderRadius: 3px
  desk:
    borderRadius: 20px
    background: linear-gradient(135deg, #E8D5B8, #D4C4A8, #DEC9A6, #C8B898)
  detail-card:
    padding: 28px
    borderRadius: 8px
    background: rgba(255,255,255,0.75)
    backdrop-filter: blur(6px)
  cta-button:
    padding: 14px 36px
    borderRadius: 9999px
    fontWeight: "700"
---

## Overview

webioinfo is the official website for a team building AI developer tools. The visual identity is warm, playful, and approachable — a "creative desk" metaphor where project cards look like sticky notes with tape, sitting on a wooden desk surface. The audience is developers who use AI coding agents.

## Colors

The palette is warm pastels on a cream background — soft pinks, lavenders, and mints evoke a creative workspace.

- **Primary (#FFB5C2 / #FF8FAB):** Pink for interactive elements — buttons, links, active states. The lighter shade is the default; the darker shade is for hover/active.
- **Secondary (#D4B5FF):** Lavender for accents, gradients, and secondary highlights.
- **Mint (#B5E8D5):** Green for the third project card and decorative washes.
- **Cream (#FFF8F0):** The page background — warm white, not cold sterile white.
- **Wood (#E8D5B8 / #C8B898):** Tan tones for the desk surface. Never used as text or button color.
- **Text (#5C4033):** Warm brown for body copy. Not black — never use pure black.
- **Text-light (#8B7355):** Muted brown for subtitles, metadata, and secondary information.

## Typography

Sora for all text — geometric, modern, excellent legibility at all sizes. Clean and technical without being cold. Noto Sans SC as fallback for Chinese characters. JetBrains Mono for code blocks.

## Layout

Single-column, centered content. Maximum width of 1200px for the homepage desk, 768px for the projects page. Generous vertical padding (80px+ between sections). Mobile-first responsive grid — single column on mobile, three columns on desktop for the sticker cards.

## Visual Effects

### Watercolor Washes

Two fixed-position radial gradients (pink-lavender top-right, mint-warm bottom-left) create a soft, layered background. They are purely decorative — no pointer events, no z-index conflicts.

### Desk Surface

A wood-grain textured panel built with layered CSS: a multi-stop linear gradient base, subtle repeating-linear-gradient "grain" lines at slightly off-axis angles (88deg/92deg), and a thin white border for depth. The desk wraps the project cards.

### Sticker Cards

Each project card is a "sticker" with:
- A slight random rotation (-2deg to 1.5deg) for a natural, scattered look
- A translucent tape strip at the top
- A colored gradient body (pink, lavender, or mint)
- A hover lift animation (translateY -8px, rotation resets to 0deg) with a spring easing curve

### Detail Cards (Projects Page)

Glassmorphism-style cards: semi-transparent white background with backdrop blur. Hover slides the card 4px right with a soft shadow.

### Gradient Text

The hero tagline uses a three-color gradient (pink → lavender → mint) clipped to the text. Used sparingly — only for the main tagline and the logo wordmark.

## Components

- **Header:** Sticky, backdrop-blur, cream/80 opacity. Logo uses gradient text for "webio" + solid brown for "info". Language toggle is a small pill button.
- **Hero:** Centered, display-size tagline with gradient text, a subtitle, and two CTA buttons (primary filled pill + secondary outlined pill).
- **StickerMap:** The homepage project showcase. Three sticker cards inside a desk panel. Each card has an emoji icon, name, description, tags, and a "Learn more" link.
- **ProjectCard:** Used on the projects page. A glassmorphism row card with emoji, name, detail text, and link badges (primary gradient pill + secondary outlined pill).
- **Footer:** Minimal — GitHub and npm links, copyright line.

## Do's and Don'ts

- **Do** keep the warm, pastel palette — it's the brand's defining trait.
- **Do** use the sticker/desk metaphor for any new project showcase.
- **Do** maintain the bilingual (en/zh) structure when adding pages.
- **Do** use Sora for all text — headings, body, and labels.
- **Don't** use pure black (#000) anywhere — always the warm brown text colors.
- **Don't** add client-side JavaScript beyond the theme toggle (localStorage + class toggle). No framework runtime, no hydration.
- **Don't** break the single-column, centered layout pattern.
- **Don't** introduce cold or saturated colors — the palette should always feel like a creative desk, not a dashboard.
