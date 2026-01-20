# Manual Changes Guide

## How to Make Text Changes

1. Edit the `.astro` files in `src/components/` directly:
   - `About.astro` - "O nama" section
   - `Contact.astro` - Contact info and form
   - `Footer.astro` - Footer content
   - `Hero.astro` - Main hero section
   - `Products.astro` - Products section
   - `Gallery.astro` - Gallery section

2. Commit and push your changes:
   ```bash
   git add -A
   git commit -m "Your description of changes"
   git push origin main
   ```

3. Wait for GitHub Actions to rebuild (check: https://github.com/ciciban71/mala_mlekara/actions)

4. View the updated site at: https://ciciban71.github.io/mala_mlekara/

## Important Notes

- **Never edit files in `dist/`** - this folder is auto-generated during build
- **Only edit files in `src/`** - these are the source files
- Changes typically take 1-2 minutes to appear after pushing

## File Structure

```
src/
├── components/     # Edit these for content changes
│   ├── About.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── Gallery.astro
│   ├── Hero.astro
│   ├── Products.astro
│   └── ...
├── layouts/        # Page layout template
├── pages/          # Page entry points
└── styles/         # Global CSS styles
```
