# Claude Code Prompt: Serbian Dairy Farm Website

## Project Overview

Build a complete, production-ready static website for a small Serbian dairy farm using **Astro (latest version - use `npm create astro@latest`)**. The website must be entirely in **Serbian language using Latin script (Srpski - latinica)** — this is critical, not Cyrillic.

## Technical Requirements

- **Framework**: Astro (latest stable version)
- **Styling**: Tailwind CSS or vanilla CSS (your choice, but make it beautiful)
- **Language**: All content, navigation, buttons, alt text, and meta tags must be in Serbian (Latin script)
- **Deployment target**: GitHub Pages (configure `astro.config.mjs` accordingly with correct `base` and `site` settings)
- **Performance**: Optimize for Core Web Vitals — lazy load images, minimize JS
- **Responsive**: Mobile-first design, works flawlessly on all devices
- **Accessibility**: Semantic HTML, proper ARIA labels (in Serbian), keyboard navigation

## Design Direction

This is a **small family dairy farm** — the design should evoke:

- **Warmth and authenticity** — not corporate, not sterile
- **Connection to nature** — rolling hills, morning mist, green pastures
- **Artisanal quality** — handcrafted products, tradition meets quality
- **Trust and transparency** — family business, know where your food comes from

**Aesthetic approach**: Choose ONE of these directions and commit fully:
1. **Rustic-modern** — warm earth tones (cream, sage green, barn red accents), organic shapes, subtle grain textures
2. **Clean pastoral** — lots of white space, soft greens and blues, elegant serif typography, photographic focus
3. **Artisanal craft** — kraft paper textures, hand-drawn elements, warm yellows and browns, stamp-like badges

Avoid: Generic corporate blue, stock photo aesthetics, overly polished tech startup vibes.

## Website Structure

### 1. Header (Zaglavlje)
- Logo placeholder (use text "NAZIV FARME" as placeholder or create a simple SVG)
- Navigation menu with smooth scroll to sections:
  - Početna (Home)
  - O nama (About)
  - Proizvodi (Products)
  - Galerija (Gallery)
  - Kontakt (Contact)
- Mobile hamburger menu with animated transition
- Sticky header on scroll (subtle shadow/blur effect)

### 2. Hero Section (Glavna sekcija)
- Full-viewport height
- **Video placeholder** — create a styled container with play button overlay, dimensions 16:9
  - Placeholder text: "Video snimak farme"
- Compelling headline in Serbian, e.g.:
  - "Sveže sa naše farme, direktno do vašeg stola"
  - "Tradicija kvaliteta od 1985. godine"
- Subheadline describing the farm's mission
- Primary CTA button: "Saznajte više" or "Posetite nas"
- Secondary CTA: "Pogledajte proizvode"
- Subtle scroll indicator animation

### 3. About Section (O nama)
- Split layout: text + image placeholder
- **Image placeholder**: Styled container (aspect ratio 4:3 or 3:2)
  - Placeholder text: "Fotografija porodice / farme"
- Content areas:
  - Farm history and family story
  - Values and philosophy (traditional methods, animal welfare, sustainability)
  - Location hint (e.g., "U srcu Šumadije" / "In the heart of Šumadija")
- Optional: Small stats/numbers (godina iskustva, hektara, zadovoljnih kupaca)

### 4. Products Section (Naši proizvodi)
- Section title: "Naši proizvodi" or "Šta proizvodimo"
- Grid of product cards (3-4 items), each with:
  - **Image placeholder** (square or 4:3 aspect ratio)
  - Product name in Serbian:
    - Sveže mleko
    - Domaći sir (kajmak, beli sir, kačkavalj)
    - Kiselo mleko / Jogurt
    - Pavlaka
  - Short description
  - Optional: "Saznaj više" link
- Design the cards with hover effects (subtle lift, shadow change)

### 5. Gallery Section (Galerija)
- Section title: "Galerija" or "Pogledajte našu farmu"
- Grid layout (masonry or uniform grid) with 6-8 **image placeholders**
- Each placeholder should have:
  - Aspect ratios varying between 1:1, 4:3, 3:4 for visual interest
  - Placeholder text like: "Slika 1", "Slika 2", etc.
  - Subtle overlay on hover with zoom icon or text "Uvećaj"
- Consider a lightbox-style modal (can be CSS-only or simple JS)
- **Video placeholder** option: One slot for additional video content
  - Placeholder text: "Video iz proizvodnje"

### 6. Contact Section (Kontakt)
- Section title: "Kontaktrajte nas" or "Gde nas možete naći"
- Two-column layout:
  - **Left**: Contact information
    - Address: "Adresa: [Placeholder selo/grad], Srbija"
    - Phone: "Telefon: +381 XX XXX XXXX"
    - Email: "Email: info@example.com"
    - Working hours: "Radno vreme: Pon-Sub 07:00-19:00"
  - **Right**: Map placeholder
    - Styled container with text "Mapa lokacije"
    - Or embed instructions comment for Google Maps
- Optional: Simple contact form (name, email, message fields)
  - Form labels in Serbian: Ime, Email, Poruka, Pošalji

### 7. Footer (Podnožje)
- Farm name/logo
- Quick navigation links
- Social media icon placeholders (Facebook, Instagram — common in Serbia)
- Copyright: "© 2025 [Naziv Farme]. Sva prava zadržana."
- Optional: "Izrada sajta" credit line

## Content Guidelines (Serbian Latin)

Use natural, warm Serbian language. Here's example content to include or adapt:

**Hero headline options:**
- "Priroda na vašem stolu"
- "Od srca farme do vašeg doma"
- "Sveži mlečni proizvodi svaki dan"

**About section example:**
- "Naša porodična farma već tri generacije proizvodi najkvalitetnije mlečne proizvode. Verujemo u tradicionalne metode uzgoja i brigu o svakom detalju — od zelenih pašnjaka do vaše trpeze."

**Product descriptions:**
- Sveže mleko: "Svakog jutra, direktno od naših krava — bez aditiva, samo čista priroda."
- Domaći sir: "Pripremljen po receptima naših baka, sa ukusom koji vas vraća u detinjstvo."

## Placeholder Specifications

All placeholders should be **clearly styled containers**, not broken images:

```css
/* Example placeholder styling */
.placeholder {
  background: linear-gradient(135deg, #e8e4df 0%, #d4cfc7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #a89f91;
  border-radius: 8px;
  color: #6b6560;
  font-style: italic;
}
```

For video placeholders, add a play button icon (SVG) overlay.

## File Structure Expected

```
dairy-farm/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Products.astro
│   │   ├── Gallery.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   └── (placeholder for images/videos)
├── astro.config.mjs
├── package.json
└── README.md
```

## Final Checklist

- [ ] All text content is in Serbian (Latin script) — double-check navigation, buttons, placeholders, alt texts
- [ ] Responsive design tested at 320px, 768px, 1024px, 1440px
- [ ] Video placeholders (minimum 2): hero + gallery/production
- [ ] Image placeholders (minimum 8): about, products (4), gallery (6+)
- [ ] Smooth scroll navigation works
- [ ] Mobile menu opens/closes properly
- [ ] Astro config ready for GitHub Pages deployment
- [ ] No console errors
- [ ] Page loads fast (minimal JS, optimized CSS)

## Deployment Configuration

In `astro.config.mjs`, include:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/REPO-NAME',
  // Add any integrations here
});
```

Create the website now. Make it beautiful, authentic, and something a Serbian farming family would be proud to show their community.
