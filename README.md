# Mala Mlekara Janić - Sajt

Sajt porodične mlekare iz Šumadije, napravljen u Astro-u sa Tailwind CSS-om.

## Tehnički zahtevi

- **Node.js**: verzija 18.20.8 ili novija (ili 20.3.0+, ili 22+)
- **npm**: verzija 9.6.5 ili novija

## Instalacija

```bash
# Instalirajte zavisnosti
npm install
```

## Pokretanje lokalno

```bash
# Pokrenite development server
npm run dev

# Sajt će biti dostupan na http://localhost:4321
```

## Build za produkciju

```bash
# Napravite production build
npm run build

# Pregledajte production build lokalno
npm run preview
```

## Deployment na GitHub Pages

Sajt je konfigurisan za automatski deployment na GitHub Pages pomoću GitHub Actions.

### Koraci:

1. Kreirajte GitHub repozitorijum nazvan `mala-mlekara-janic`
2. U `astro.config.mjs` zamenite `USERNAME` sa vašim GitHub korisničkim imenom
3. Push-ujte projekat na GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/mala-mlekara-janic.git
   git push -u origin main
   ```
4. U GitHub repozitorijumu:
   - Idite na Settings → Pages
   - Pod "Source" izaberite "GitHub Actions"
5. Deployment će se automatski pokrenuti nakon svakog push-a na main granu

Vaš sajt će biti dostupan na: `https://USERNAME.github.io/mala-mlekara-janic/`

## Struktura projekta

```
mala-mlekara-janic/
├── src/
│   ├── components/      # Astro komponente
│   ├── layouts/         # Layout komponente
│   ├── pages/           # Stranice (index.astro)
│   └── styles/          # Globalni CSS
├── public/              # Statički fajlovi
├── astro.config.mjs     # Astro konfiguracija
├── tailwind.config.mjs  # Tailwind konfiguracija
└── package.json
```

## Ažuriranje sadržaja

### Tekst
Sav sadržaj se nalazi u komponentama u `src/components/` folderu:
- Hero.astro - Glavna sekcija
- About.astro - O nama
- Products.astro - Proizvodi
- Gallery.astro - Galerija
- Contact.astro - Kontakt

### Slike i video
Trenutno koriste placeholdere. Za dodavanje pravih slika:
1. Dodajte slike u `public/images/` folder
2. Zamenite `<PlaceholderImage />` komponente sa `<img>` tagovima
3. Primer: `<img src="/images/farma.jpg" alt="Porodica na farmi" />`

### Mapa
U `Contact.astro` komponenti, zamenite PlaceholderImage sa Google Maps embed kodom.

## Pomoć i dokumentacija

Za detaljnija uputstva pogledajte:
- `Docs/DEPLOYMENT-GUIDE.md` - Kompletan vodič za deployment
- `Docs/IMPLEMENTATION-PLAN.md` - Detaljan plan implementacije

## Tehnologije

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety

## Kontakt za podršku

Za tehničku podršku i pitanja, kontaktirajte razvoj tima.

---

© 2025 Mala Mlekara Janić. Sva prava zadržana.
