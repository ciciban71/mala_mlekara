# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Мала Млекара Јанић is a static website for a Serbian family dairy farm built with Astro and Tailwind CSS. All content is in **Serbian Cyrillic script (sr-Cyrl)**.

**Live site:** https://ciciban71.github.io/mala_mlekara/

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:4321

# Build & Preview
npm run build        # Build for production (outputs to ./dist)
npm run preview      # Preview production build locally
```

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. GitHub Pages source must be set to "GitHub Actions" in repository settings.

**Important:** The site uses base path `/mala_mlekara` - all internal links must account for this (configured in `astro.config.mjs`).

## Architecture

### Single-Page Structure
The site is a single-page application with sections linked via anchor navigation:
- `index.astro` composes all section components
- Navigation uses smooth scroll to `#o-nama`, `#proizvodi`, `#galerija`, `#kontakt`

### Component Organization
```
src/
├── components/      # Section components (Hero, About, Products, Gallery, Contact)
│   └── PlaceholderImage.astro  # Reusable placeholder for images/videos
├── layouts/
│   └── Layout.astro # Base HTML wrapper with Serbian meta tags
├── pages/
│   └── index.astro  # Main page composing all sections
└── styles/
    └── global.css   # Tailwind directives + Google Fonts (Playfair Display, Inter)
```

### Design System
Custom colors defined in `tailwind.config.mjs`:
- `primaryBlue` (#046bd2) - Primary accent
- `deepBlue` (#0e5faa) - Text color
- `accentGreen` (#8ac542) - Secondary accent
- `lightIce` (#e2f0fd) - Background tint

Typography: Playfair Display (headings) + Inter (body)

## Content Guidelines

- **Language:** All text must be Serbian Cyrillic script (ћ, ч, ш, ж, ђ supported)
- **Placeholders:** Currently using `PlaceholderImage.astro` for media - replace with real images in `public/images/`
- **Tone:** Warm, authentic family farm voice - not corporate

## Workflow

**Always push to GitHub after a successful build.** After making changes:
1. Run `npm run build` to verify the build succeeds
2. Commit and push changes to GitHub

## Key Files

- `astro.config.mjs` - Site URL, base path, Tailwind integration
- `tailwind.config.mjs` - Custom color palette and fonts
- `src/layouts/Layout.astro` - HTML structure with `lang="sr-Cyrl"` and Serbian SEO meta
