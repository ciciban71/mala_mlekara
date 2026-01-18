# Implementation Plan: Serbian Dairy Farm Website
## Mala Mlekara Janić - Static Website with Astro

---

## 1. Project Overview

**Goal:** Build a complete, production-ready static website for a small Serbian dairy farm using Astro framework. The site must be entirely in Serbian (Latin script), optimized for GitHub Pages, with authentic warmth reflecting a family business.

**Current State:** Greenfield project - only documentation files exist in `/Users/ciciban/Documents/DEV/Business/Mala_mlekara_Janic/Momo/`

**Target:** Fully responsive, accessible, performant single-page website with all content in Serbian Latin script, ready for GitHub Pages deployment.

---

## 2. Design & Technology Decisions

### 2.1 Design Aesthetic: **Rustic-Modern**
- **Color Palette:** Cream (#F5F1E8), Sage Green (#8B9D83), Barn Red (#A44A3F), Warm Brown (#6B4423)
- **Typography:** Playfair Display (headlines) + Inter (body)
- **Rationale:** Earth tones and organic shapes evoke natural dairy production while maintaining professional appearance

### 2.2 CSS Framework: **Tailwind CSS**
- **Why Tailwind:**
  - Rapid development with utility-first approach
  - Built-in responsive design system
  - Smaller production bundle with automatic purging
  - Easy customization for rustic-modern palette
- **Integration:** Use official Astro Tailwind integration (`npx astro add tailwind`)

### 2.3 Repository Setup
- **Repository Name:** `mala-mlekara-janic` (URL-friendly)
- **Site URL:** `https://[USERNAME].github.io/mala-mlekara-janic/`
- **Branch:** `main` (GitHub Pages default)

---

## 3. Implementation Phases

### Phase 1: Project Initialization (Priority 1)

**Objective:** Set up Astro project with proper configuration for GitHub Pages

**Steps:**
1. Initialize new Astro project
   ```bash
   npm create astro@latest mala-mlekara-janic
   # Select: Empty template, TypeScript (strict), Install dependencies
   ```

2. Install Tailwind CSS integration
   ```bash
   cd mala-mlekara-janic
   npx astro add tailwind
   ```

3. Configure Astro for GitHub Pages deployment
   - Edit `astro.config.mjs`:
     ```javascript
     import { defineConfig } from 'astro/config';
     import tailwind from '@astrojs/tailwind';

     export default defineConfig({
       site: 'https://[USERNAME].github.io',
       base: '/mala-mlekara-janic',
       integrations: [tailwind()],
       build: {
         assets: '_assets',
         inlineStylesheets: 'auto'
       }
     });
     ```

4. Create custom Tailwind configuration
   - Edit `tailwind.config.mjs`:
     ```javascript
     export default {
       content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
       theme: {
         extend: {
           colors: {
             cream: '#F5F1E8',
             sage: '#8B9D83',
             barnRed: '#A44A3F',
             warmBrown: '#6B4423',
             charcoal: '#3A3632',
             offWhite: '#FAF8F3'
           },
           fontFamily: {
             serif: ['Playfair Display', 'serif'],
             sans: ['Inter', 'sans-serif']
           }
         }
       }
     };
     ```

5. Set up global styles
   - Create `src/styles/global.css`:
     - Import Google Fonts (Playfair Display, Inter)
     - CSS reset/normalize
     - Smooth scroll behavior
     - Serbian typography support

6. Initialize Git and create `.gitignore`
   ```bash
   git init
   git add .
   git commit -m "Initial Astro setup with Tailwind"
   ```

**Deliverables:**
- Working Astro project
- Tailwind CSS configured with custom colors
- Global styles ready
- Git repository initialized

---

### Phase 2: Base Layout & Navigation (Priority 1)

**Objective:** Create reusable layout structure and navigation system

**Components to Build:**

#### 2.1 Layout.astro (`src/layouts/Layout.astro`)
- HTML structure with Serbian metadata:
  ```html
  <html lang="sr-Latn">
  <title>Mala Mlekara Janić - Sveži mlečni proizvodi iz Šumadije</title>
  <meta name="description" content="Porodična farma koja već tri generacije proizvodi najkvalitetnije mlečne proizvode...">
  ```
- Load fonts (Playfair Display, Inter)
- Include global CSS
- Set viewport and responsive meta tags
- Add smooth scroll behavior

#### 2.2 Header.astro (`src/components/Header.astro`)
- Sticky navigation bar
- Logo/farm name: "Mala Mlekara Janić"
- Desktop navigation menu (horizontal):
  - Početna (Home)
  - O nama (About)
  - Proizvodi (Products)
  - Galerija (Gallery)
  - Kontakt (Contact)
- Mobile hamburger menu (responsive < 768px)
- Smooth scroll anchor links to sections
- Scroll-triggered styling (shadow on scroll)

#### 2.3 Footer.astro (`src/components/Footer.astro`)
- Three-column layout (responsive):
  - Left: Logo, tagline "Tradicija kvaliteta od 1985"
  - Center: Quick navigation links
  - Right: Social media icons (Facebook, Instagram), contact info
- Copyright: "© 2025 Mala Mlekara Janić. Sva prava zadržana."

**Technical Details:**
- Mobile menu: CSS-only animation or minimal vanilla JS (~20 lines)
- Sticky header: `position: sticky` with Tailwind classes
- Semantic HTML5 elements (`<nav>`, `<header>`, `<footer>`)

---

### Phase 3: Hero Section (Priority 1)

**Objective:** Create compelling above-the-fold experience

**Component:** `src/components/Hero.astro`

**Features:**
1. Full viewport height (`min-h-screen`)
2. Video placeholder (16:9 aspect ratio):
   - Gradient background (sage green to warm brown)
   - Play button SVG overlay (centered)
   - Label: "Video snimak farme"
3. Headline: "Sveže sa naše farme, direktno do vašeg stola"
4. Subheadline: "Porodična tradicija kvalitetnih mlečnih proizvoda već tri generacije - iz srca Šumadije"
5. CTA buttons:
   - Primary: "Saznajte našu priču" (link to #o-nama)
   - Secondary: "Pogledajte proizvode" (link to #proizvodi)
6. Scroll indicator with bounce animation

**Responsive Behavior:**
- Desktop: Text left, video placeholder right (OR centered overlay)
- Tablet/Mobile: Stacked layout, video below headline

---

### Phase 4: About Section (Priority 2)

**Objective:** Tell the farm's story authentically

**Component:** `src/components/About.astro`

**Layout:**
- Split two-column (desktop) / stacked (mobile)
- Left: Image placeholder (4:3 aspect ratio)
  - Label: "Porodica Janić na farmi"
  - Sepia-toned gradient background
- Right: Content blocks

**Content:**
- Section heading: "Naša priča"
- Farm history (3 paragraphs):
  ```
  "Naša priča počinje davne 1985. godine, kada je deda Miloš odlučio
  da porodično stočarstvo pretvori u nešto više. Sa tri krave, jednim
  drvenim kolivcetom i velikim snovima..."

  [Full content in detailed plan]
  ```
- Values (3 pillars):
  - Tradicionalni metodi
  - Dobrobit životinja
  - Lokalna proizvodnja
- Optional stats boxes:
  - "35+ godina iskustva"
  - "15 hektara pašnjaka"
  - "500+ zadovoljnih porodica"

---

### Phase 5: Products Section (Priority 2)

**Objective:** Showcase dairy product offerings

**Components:**
- `src/components/Products.astro` (section wrapper)
- `src/components/ProductCard.astro` (individual cards)

**Layout:**
- Responsive grid:
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column

**Products (4 cards):**

1. **Sveže mleko**
   - Placeholder: Milk bottle silhouette on cream gradient
   - Description: "Svakog jutra, direktno od naših krava. Bez homogenizacije, bez aditiva..."

2. **Domaći sirevi**
   - Placeholder: Cheese assortment illustration
   - Description: "Kajmak, beli sir, kačkavalj — pripreman po receptima naše bake Milice..."
   - Varieties: "Kajmak • Beli sir • Kačkavalj"

3. **Kiselo mleko i jogurt**
   - Placeholder: Yogurt jar silhouette
   - Description: "Prirodno fermentirano, bogato probioticima..."

4. **Pavlaka**
   - Placeholder: Cream container
   - Description: "Gusta, kremasta pavlaka od najkvalitetnijeg mleka..."

**Card Design:**
- Border-radius, subtle shadow
- Hover effect: Lift (translateY -4px) + shadow increase
- "Saznaj više" link (optional)

---

### Phase 6: Gallery Section (Priority 2)

**Objective:** Visual storytelling through farm imagery

**Components:**
- `src/components/Gallery.astro` (section)
- `src/components/GalleryItem.astro` (individual items)

**Layout:**
- Responsive grid:
  - Desktop: 3 columns (masonry or uniform)
  - Tablet: 2 columns
  - Mobile: 1 column

**Placeholders (8 items):**
1. "Jutarnja muža - 5:30 ujutro" (4:3)
2. "Naše krave na zelenim pašnjacima" (1:1)
3. "Proizvodnja domaćeg sira" (3:4)
4. "Pogled na farmu sa brda" (16:9)
5. "Tri generacije porodice Janić" (4:3)
6. "Sveži proizvodi spremni za isporuku" (1:1)
7. **VIDEO:** "Jedan dan na farmi" (16:9, play button overlay)
8. "Proleće u Šumadiji - naš pašnjak" (4:3)

**Features:**
- Hover: Overlay with zoom icon + "Uvećaj" text
- Click: Lightbox modal (CSS `:target` pseudo-class)
- Smooth transitions
- Keyboard support (Escape to close)

---

### Phase 7: Contact Section (Priority 2)

**Objective:** Enable customer outreach

**Component:** `src/components/Contact.astro`

**Layout:** Two-column (desktop) / stacked (mobile)

**Left Column - Contact Info:**
- 📍 **Adresa:** Selo Janić bb, 34310 Topola, Srbija
- 📞 **Telefon:** +381 34 XXX XXXX
- ✉️ **Email:** kontakt@malamlekara.rs
- 🕐 **Radno vreme:** Pon-Sub 07:00-19:00, Nedelja po dogovoru

**Right Column - Map Placeholder:**
- Styled container (16:9 or square)
- Map pin icon
- Label: "Mapa lokacije - Selo Janić, Topola"
- HTML comment for Google Maps embed instructions

**Optional Contact Form:**
- Fields: Ime (required), Email (required), Telefon, Poruka (required)
- Submit button: "Pošalji poruku"
- HTML5 validation
- Success message: "Hvala na poruci! Odgovorićemo vam uskoro."

---

### Phase 8: Placeholder Component System (Priority 2)

**Objective:** Create consistent, professional placeholders

**Component:** `src/components/PlaceholderImage.astro`

**Props:**
- `type`: 'image' | 'video'
- `label`: string (Serbian text)
- `aspectRatio`: string (default '4/3')

**Styling:**
```css
/* Gradient background (cream to sage) */
background: linear-gradient(135deg, #F5F1E8 0%, #E8E4DF 50%, #D4CFC7 100%);

/* Dashed border with rustic color */
border: 2px dashed #A89F91;
border-radius: 12px;

/* Subtle pattern overlay */
background-image: url("data:image/svg+xml,..."); /* Grain texture */

/* Hover effect */
&:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(58, 54, 50, 0.15);
  border-color: #8B9D83;
}
```

**Video Placeholders:**
- Play button SVG (64px, centered)
- White background circle
- Scale on hover (1.1x)

---

### Phase 9: Responsive & Accessibility (Priority 3)

**Objective:** Ensure mobile-friendly, accessible experience

**Responsive Breakpoints:**
- Mobile: < 640px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (multi-column, full layouts)

**Testing Checklist:**
- [ ] Test at 320px, 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets minimum 48×48px
- [ ] Serbian text wraps properly (no overflow)

**Accessibility:**
- Semantic HTML5 (`<section>`, `<article>`, `<nav>`)
- Serbian ARIA labels:
  ```html
  <nav aria-label="Glavna navigacija">
  <button aria-label="Otvori meni">
  <div role="img" aria-label="Fotografija svežeg mleka">
  ```
- Keyboard navigation (Tab, Enter, Escape)
- Focus indicators (visible outline)
- Color contrast WCAG AA (4.5:1)
- Heading hierarchy (H1 → H2 → H3)

**Performance:**
- Lazy load all images below fold
- Inline critical CSS
- Preconnect to Google Fonts
- Minimize/purge CSS
- Target: Lighthouse score >90 all categories

---

### Phase 10: GitHub Pages Deployment (Priority 3)

**Objective:** Make site publicly accessible

**Steps:**

1. **Create GitHub Actions workflow**
   - Path: `.github/workflows/deploy.yml`
   - Use official Astro GitHub Pages action
   - Auto-deploy on push to `main`

2. **Test local build**
   ```bash
   npm run build
   npm run preview
   # Verify at http://localhost:4321/mala-mlekara-janic/
   ```

3. **Create GitHub repository**
   - Name: `mala-mlekara-janic`
   - Visibility: Public (required for free GitHub Pages)
   - Do NOT initialize with README (we have local repo)

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/[USERNAME]/mala-mlekara-janic.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Wait for deployment (check Actions tab)

6. **Verify deployment**
   - URL: `https://[USERNAME].github.io/mala-mlekara-janic/`
   - Test all navigation, placeholders, responsiveness

**Pre-Deployment Checklist:**
- [ ] `site` and `base` configured in `astro.config.mjs`
- [ ] All links use relative paths or base path
- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview works with base path
- [ ] No console errors

---

## 4. File Structure

```
mala-mlekara-janic/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navigation + mobile menu
│   │   ├── Hero.astro             # Hero section with video placeholder
│   │   ├── About.astro            # Farm story
│   │   ├── Products.astro         # Products grid
│   │   ├── ProductCard.astro      # Individual product card
│   │   ├── Gallery.astro          # Image/video gallery
│   │   ├── GalleryItem.astro      # Gallery item with lightbox
│   │   ├── Contact.astro          # Contact info + map + form
│   │   ├── Footer.astro           # Footer
│   │   └── PlaceholderImage.astro # Reusable placeholder component
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML layout
│   ├── pages/
│   │   └── index.astro            # Homepage (all sections)
│   ├── styles/
│   │   └── global.css             # Global styles, fonts, reset
│   └── assets/
│       └── icons/                 # SVG icons (social, UI)
├── public/
│   ├── favicon.svg                # Farm logo favicon
│   └── robots.txt                 # SEO configuration
├── .gitignore
├── astro.config.mjs               # Astro + GitHub Pages config
├── tailwind.config.mjs            # Custom design tokens
├── package.json
├── tsconfig.json
└── README.md                      # Setup instructions (Serbian)
```

---

## 5. Critical Files to Create/Modify

### Priority 1 (Foundation)
1. **`astro.config.mjs`** - GitHub Pages deployment configuration
2. **`tailwind.config.mjs`** - Rustic-modern color palette and typography
3. **`src/layouts/Layout.astro`** - Base HTML with Serbian metadata
4. **`src/styles/global.css`** - Fonts, reset, smooth scroll
5. **`.github/workflows/deploy.yml`** - Auto-deployment workflow

### Priority 2 (Components)
6. **`src/components/Header.astro`** - Navigation system
7. **`src/components/PlaceholderImage.astro`** - Reusable placeholder styling
8. **`src/components/Hero.astro`** - Hero section
9. **`src/components/About.astro`** - About section
10. **`src/components/Products.astro`** + **`ProductCard.astro`**
11. **`src/components/Gallery.astro`** + **`GalleryItem.astro`**
12. **`src/components/Contact.astro`** - Contact section
13. **`src/components/Footer.astro`** - Footer

### Priority 3 (Integration)
14. **`src/pages/index.astro`** - Compose all sections into homepage
15. **`README.md`** - Serbian documentation for client
16. **`public/robots.txt`** - SEO configuration

---

## 6. Serbian Content Summary

All content must be in Serbian Latin script. Key sections:

### Navigation
- Početna, O nama, Proizvodi, Galerija, Kontakt

### Hero
- **Headline:** "Sveže sa naše farme, direktno do vašeg stola"
- **Subheadline:** "Porodična tradicija kvalitetnih mlečnih proizvoda već tri generacije"
- **CTAs:** "Saznajte našu priču", "Pogledajte proizvode"

### About
- **Heading:** "Naša priča"
- **Content:** Farm history from 1985, three generations, traditional methods
- **Values:** Tradicionalni metodi, Dobrobit životinja, Lokalna proizvodnja

### Products
1. Sveže mleko - "Svakog jutra, direktno od naših krava..."
2. Domaći sirevi - "Kajmak, beli sir, kačkavalj..."
3. Kiselo mleko i jogurt - "Prirodno fermentirano..."
4. Pavlaka - "Gusta, kremasta pavlaka..."

### Gallery
- 8 placeholders with Serbian labels (e.g., "Jutarnja muža", "Krave na pašnjacima")
- 1 video placeholder: "Video: Jedan dan na farmi"

### Contact
- Adresa, Telefon, Email, Radno vreme (all in Serbian)
- Form fields: Ime, Email, Telefon, Poruka

### Footer
- Copyright: "© 2025 Mala Mlekara Janić. Sva prava zadržana."

---

## 7. Verification & Testing

### Final Checklist
- [ ] All text in Serbian (Latin script) - no Cyrillic, no English
- [ ] Serbian special characters render correctly (ć, č, š, ž, đ)
- [ ] Responsive at all breakpoints (320px - 1440px+)
- [ ] Placeholders look professional (not broken)
- [ ] Video placeholders have play button overlays
- [ ] Smooth scroll navigation works
- [ ] Mobile menu opens/closes properly
- [ ] GitHub Pages deployment successful
- [ ] Site loads at `https://[USERNAME].github.io/mala-mlekara-janic/`
- [ ] Lighthouse scores >90 (Performance, Accessibility, SEO, Best Practices)
- [ ] No console errors
- [ ] Keyboard navigation works (accessibility)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing
- [ ] Screen reader announces Serbian content correctly
- [ ] Color contrast WCAG AA compliant
- [ ] Focus indicators visible
- [ ] All interactive elements keyboard accessible

---

## 8. Post-Implementation

### Handoff to Client
1. Provide GitHub repository access
2. Document how to update content (in Serbian)
3. Reference existing `DEPLOYMENT-GUIDE.md` for future updates
4. Create simple README with:
   - How to run locally (`npm install`, `npm run dev`)
   - How to make changes and deploy
   - Contact for technical support

### Future Enhancements (Phase 2)
- Replace placeholders with real photos/videos
- Add customer testimonials
- Implement blog for farm updates
- E-commerce integration (online ordering)
- Instagram feed integration
- Newsletter signup

---

## 9. Success Criteria

**Technical:**
- ✅ Astro project initialized with Tailwind CSS
- ✅ All components built and responsive
- ✅ Serbian language throughout (Latin script)
- ✅ Professional placeholder styling
- ✅ Deployed to GitHub Pages
- ✅ Lighthouse score >90 all categories

**Design:**
- ✅ Rustic-modern aesthetic achieved
- ✅ Consistent color palette (cream, sage, barn red, warm brown)
- ✅ Typography hierarchy clear (Playfair + Inter)
- ✅ Authentic, warm tone (not corporate)

**User Experience:**
- ✅ Fast loading (<3s on 3G)
- ✅ Mobile-friendly (no horizontal scroll)
- ✅ Accessible (WCAG AA)
- ✅ Intuitive navigation
- ✅ Clear call-to-actions

---

## Estimated Timeline

**Full-time (dedicated work):** 1 week (40 hours)
**Part-time (evenings/weekends):** 4 weeks (~25-30 hours total)

### Week-by-Week Breakdown (Part-time)
- **Week 1:** Phases 1-3 (Setup, Layout, Hero)
- **Week 2:** Phases 4-5 (About, Products)
- **Week 3:** Phases 6-7 (Gallery, Contact)
- **Week 4:** Phases 8-10 (Polish, Testing, Deployment)

---

## Implementation Notes

### Why This Approach?
1. **Astro** - Perfect for static sites, zero JS by default, excellent performance
2. **Tailwind CSS** - Rapid development, consistent design system, small bundle
3. **Single-page** - Simple navigation, cohesive story, fast loading
4. **GitHub Pages** - Free hosting, automatic deployment, reliable
5. **Placeholders** - Professional appearance while awaiting real media
6. **Serbian Latin** - Authentic to target audience, supports special characters

### Key Considerations
- Serbian typography requires Unicode support (all modern fonts support this)
- Base path configuration critical for GitHub Pages subdirectory deployment
- Placeholder styling must look intentional, not broken
- Mobile-first ensures optimal experience for majority of users
- Accessibility ensures inclusivity and better SEO

---

This plan provides a complete roadmap from initialization to deployment. Following these phases sequentially will result in a professional, performant Serbian dairy farm website ready for production use.
