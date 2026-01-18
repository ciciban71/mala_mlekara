# Uputstvo za Postavljanje Sajta na GitHub Pages

# (Deployment Guide for GitHub Pages)

Ovaj vodič će vas provesti kroz ceo proces — od kreiranja GitHub naloga do objave vašeg sajta na internetu. Ne brinite ako niste tehnički osoba, sve je objašnjeno korak po korak!

---

## Sadržaj

1. [Šta vam je potrebno](#1-šta-vam-je-potrebno)
2. [Kreiranje GitHub naloga](#2-kreiranje-github-naloga)
3. [Instalacija potrebnih alata](#3-instalacija-potrebnih-alata)
4. [Kreiranje repozitorijuma (projekta)](#4-kreiranje-repozitorijuma-projekta)
5. [Priprema Astro projekta za deployment](#5-priprema-astro-projekta-za-deployment)
6. [Upload sajta na GitHub](#6-upload-sajta-na-github)
7. [Aktiviranje GitHub Pages](#7-aktiviranje-github-pages)
8. [Ažuriranje sajta u budućnosti](#8-ažuriranje-sajta-u-budućnosti)
9. [Rešavanje čestih problema](#9-rešavanje-čestih-problema)
10. [Dodavanje custom domene (opciono)](#10-dodavanje-custom-domene-opciono)

---

## 1. Šta vam je potrebno

Pre nego što počnete, proverite da imate:

- ✅ Računar (Windows, Mac, ili Linux)
- ✅ Internet konekcija
- ✅ Email adresa
- ✅ Vaš Astro projekat (folder sa sajtom)

**Vreme potrebno**: ~30-45 minuta za prvi put

---

## 2. Kreiranje GitHub naloga

Ako već imate GitHub nalog, preskočite na korak 3.

### Korak po korak:

1. **Otvorite GitHub sajt**
   - Idite na: [https://github.com](https://github.com)

2. **Kliknite "Sign up"** (gornji desni ugao)

3. **Unesite svoje podatke**:
   - Email adresa
   - Lozinka (najmanje 8 karaktera, preporučuje se kombinacija slova i brojeva)
   - Username (korisničko ime) — ovo će biti deo URL-a vašeg sajta!
     - Primer: ako izaberete `mojafarma`, vaš sajt će biti na `mojafarma.github.io`
     - Koristite samo mala slova, brojeve i crtice

4. **Verifikujte email**
   - GitHub će vam poslati email — kliknite na link za potvrdu

5. **Završite podešavanje**
   - Možete preskočiti sve dodatne opcije (kliknite "Skip" gde god možete)

🎉 **Čestitamo!** Sada imate GitHub nalog.

---

## 3. Instalacija potrebnih alata

### A) Instalacija Node.js

Node.js je potreban za pokretanje Astro projekta.

1. Idite na: [https://nodejs.org](https://nodejs.org)
2. Kliknite na **LTS verziju** (zeleno dugme) — ovo je stabilna verzija
3. Pokrenite preuzeti fajl i pratite uputstva za instalaciju
4. **Proverite instalaciju**: Otvorite Terminal (Mac/Linux) ili Command Prompt (Windows) i ukucajte:
   ```bash
   node --version
   ```
   Trebalo bi da vidite broj verzije, npr. `v20.10.0`

### B) Instalacija Git-a

Git služi za slanje fajlova na GitHub.

**Windows:**
1. Idite na: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Preuzmite i instalirajte (koristite podrazumevane opcije)

**Mac:**
1. Otvorite Terminal
2. Ukucajte: `git --version`
3. Ako nije instaliran, sistem će vas pitati da ga instalirate — kliknite "Install"

**Provera instalacije:**
```bash
git --version
```
Trebalo bi da vidite verziju, npr. `git version 2.42.0`

### C) Konfiguracija Git-a (samo prvi put)

Otvorite Terminal/Command Prompt i ukucajte (zamenite sa vašim podacima):

```bash
git config --global user.name "Vaše Ime"
git config --global user.email "vas@email.com"
```

---

## 4. Kreiranje repozitorijuma (projekta)

Repozitorijum (ili "repo") je kao folder na internetu gde će živeti vaš sajt.

### Na GitHub sajtu:

1. **Prijavite se** na [github.com](https://github.com)

2. **Kliknite zeleno dugme "New"** (ili idite na [github.com/new](https://github.com/new))

3. **Popunite informacije**:
   - **Repository name**: `farma-sajt` (ili bilo koje ime, samo mala slova i crtice)
   - **Description** (opciono): `Sajt naše porodične mlekare`
   - **Public/Private**: Izaberite **Public** (mora biti public za besplatni GitHub Pages)
   - ❌ **NE** čekirajte "Add a README file"
   - ❌ **NE** čekirajte "Add .gitignore"
   - Kliknite **"Create repository"**

4. **Sačuvajte URL vašeg repozitorijuma**
   - Izgledaće ovako: `https://github.com/vasusername/farma-sajt`

---

## 5. Priprema Astro projekta za deployment

### A) Podesite Astro konfiguraciju

Otvorite fajl `astro.config.mjs` u vašem projektu i izmenite ga:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://VASUSERNAME.github.io',
  base: '/farma-sajt',
});
```

⚠️ **VAŽNO**: Zamenite:
- `VASUSERNAME` sa vašim GitHub korisničkim imenom
- `farma-sajt` sa imenom vašeg repozitorijuma

### B) Kreirajte GitHub Actions workflow

Ovo automatski "builda" i postavlja vaš sajt svaki put kad napravite izmenu.

1. U vašem projektu, kreirajte folder: `.github/workflows/`
2. U tom folderu kreirajte fajl: `deploy.yml`
3. Kopirajte sledeći sadržaj u taj fajl:

```yaml
name: Deploy to GitHub Pages

on:
  # Pokreće se svaki put kad push-ujete na main granu
  push:
    branches: [ main ]
  # Omogućava ručno pokretanje iz Actions taba
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
        
      - name: Install, build, and upload your site
        uses: withastro/action@v3
        # with:
          # path: . # Lokacija vašeg Astro projekta (. = root)
          # node-version: 20 # Node.js verzija
          # package-manager: npm # Ili pnpm, yarn

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### C) Struktura vašeg projekta

Vaš projekat bi trebalo da izgleda ovako:

```
farma-sajt/
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Ovo ste upravo kreirali
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
├── astro.config.mjs        ← Ovo ste izmenili
├── package.json
└── ...
```

---

## 6. Upload sajta na GitHub

Sada ćemo poslati vaš projekat na GitHub.

### Otvorite Terminal/Command Prompt

Navigirajte do foldera vašeg projekta:

```bash
cd putanja/do/vaseg/projekta/farma-sajt
```

**Primer na Windows-u:**
```bash
cd C:\Users\VaseIme\Documents\farma-sajt
```

**Primer na Mac-u:**
```bash
cd ~/Documents/farma-sajt
```

### Izvršite sledeće komande (jednu po jednu):

```bash
# 1. Inicijalizuj Git u ovom folderu
git init

# 2. Dodaj sve fajlove
git add .

# 3. Napravi prvi "commit" (snimak)
git commit -m "Prvi upload sajta"

# 4. Preimenuj granu u 'main'
git branch -M main

# 5. Poveži sa GitHub repozitorijumom (zamenite URL sa vašim!)
git remote add origin https://github.com/VASUSERNAME/farma-sajt.git

# 6. Pošalji fajlove na GitHub
git push -u origin main
```

⚠️ **Ako se traži autorizacija:**
- Može se otvoriti prozor za prijavu na GitHub — prijavite se
- Ili ukucajte username i password (za password koristite Personal Access Token — videti rešavanje problema)

---

## 7. Aktiviranje GitHub Pages

### Korak po korak:

1. **Idite na vaš repozitorijum** na GitHub
   - `https://github.com/vasusername/farma-sajt`

2. **Kliknite na "Settings"** (tab sa zupčanikom)

3. **U levom meniju, kliknite "Pages"**

4. **Pod "Build and deployment"**:
   - **Source**: Izaberite **"GitHub Actions"**
   
5. **Sačekajte nekoliko minuta**
   - Idite na tab "Actions" da vidite progres
   - Zelena kvačica ✅ znači da je uspešno

6. **Vaš sajt je sada uživo!** 🎉
   - URL: `https://vasusername.github.io/farma-sajt/`

---

## 8. Ažuriranje sajta u budućnosti

Kada želite da izmenite sajt:

### 1. Napravite izmene u fajlovima

Editujte fajlove u vašem projektu lokalno (na vašem računaru).

### 2. Pošaljite izmene na GitHub

Otvorite Terminal u folderu projekta i izvršite:

```bash
# Dodaj izmenjene fajlove
git add .

# Napravi commit sa opisom šta ste promenili
git commit -m "Ažurirao cene proizvoda"

# Pošalji na GitHub
git push
```

### 3. Sačekajte automatski deployment

GitHub Actions će automatski detektovati promenu i ažurirati sajt (obično 1-3 minuta).

---

## 9. Rešavanje čestih problema

### Problem: "Permission denied" ili autorizacija ne radi

**Rešenje**: Koristite Personal Access Token umesto lozinke

1. Idite na: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Kliknite "Generate new token (classic)"
3. Dajte mu ime, izaberite rok važenja
4. Čekirajte: `repo` (full control)
5. Kliknite "Generate token"
6. **KOPIRAJTE TOKEN ODMAH** (nećete ga više videti!)
7. Koristite ovaj token umesto lozinke kad Git traži autorizaciju

### Problem: Sajt prikazuje 404 grešku

**Provere:**
1. Jeste li podesili `base` u `astro.config.mjs` ispravno?
2. Da li je ime repozitorijuma tačno napisano?
3. Idite na Settings → Pages i proverite da je source "GitHub Actions"
4. Proverite Actions tab — da li je build uspeo?

### Problem: CSS/slike se ne učitavaju

**Rešenje**: Proverite `base` putanju

U `astro.config.mjs`:
```javascript
base: '/ime-repozitorijuma',  // Sa kosom crtom na početku, bez na kraju
```

### Problem: "fatal: not a git repository"

**Rešenje**: Niste u pravom folderu ili Git nije inicijalizovan

```bash
# Proverite da ste u pravom folderu
pwd

# Ako treba, inicijalizujte Git ponovo
git init
```

### Problem: Build fails u GitHub Actions

**Provere:**
1. Otvorite Actions tab i kliknite na failed workflow
2. Pročitajte error poruke
3. Najčešći uzroci:
   - Sintaksne greške u kodu
   - Nedostajuće zavisnosti u `package.json`
   - Pogrešna verzija Node.js

---

## 10. Dodavanje custom domene (opciono)

Ako želite da vaš sajt bude na sopstvenoj domeni (npr. `www.mojafarma.rs`):

### 1. Kupite domenu
- Popularni provajderi u Srbiji: Loopia, SuperHosting, NiNet

### 2. Podesite DNS
Kod vašeg domain provajdera, dodajte:
- **A Record** koji pokazuje na: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME Record**: `www` → `vasusername.github.io`

### 3. Podesite na GitHub-u
1. Settings → Pages → Custom domain
2. Unesite vašu domenu: `www.mojafarma.rs`
3. Čekirajte "Enforce HTTPS"

### 4. Kreirajte CNAME fajl
U `public/` folderu vašeg projekta, kreirajte fajl `CNAME` (bez ekstenzije) sa sadržajem:
```
www.mojafarma.rs
```

### 5. Push-ujte izmenu
```bash
git add .
git commit -m "Dodao custom domenu"
git push
```

---

## Brzi referentni vodič

### Svakodnevne komande:

| Šta želite | Komanda |
|------------|---------|
| Proveriti status | `git status` |
| Dodati sve izmene | `git add .` |
| Napraviti commit | `git commit -m "Opis izmene"` |
| Poslati na GitHub | `git push` |
| Povući izmene sa GitHub-a | `git pull` |

### Korisni linkovi:

- Vaš sajt: `https://vasusername.github.io/ime-repozitorijuma/`
- GitHub repozitorijum: `https://github.com/vasusername/ime-repozitorijuma`
- GitHub Actions (status builda): `https://github.com/vasusername/ime-repozitorijuma/actions`
- Astro dokumentacija: [https://docs.astro.build](https://docs.astro.build)

---

## Potrebna pomoć?

Ako naiđete na problem koji nije pokriven ovim vodičem:

1. **Google-ujte error poruku** — verovatno je neko već imao isti problem
2. **Astro Discord**: [https://astro.build/chat](https://astro.build/chat)
3. **GitHub dokumentacija**: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)

---

*Srećno sa vašim sajtom! 🐄🥛*
