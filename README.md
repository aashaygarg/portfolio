# Aashay Garg Portfolio

Static portfolio website with interactive system filters and recruiter-friendly structure.

## Local preview

```bash
cd portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Best hosting choice

Use **Cloudflare Pages** for this site.

Why:
- Fast global CDN for static files.
- Very good free tier for personal portfolios.
- Built-in HTTPS and custom domain support.
- No backend needed for this project.

## Deploy in 10 minutes (Cloudflare Pages)

1. Create a GitHub repo (for example `aashay-portfolio`).
2. Upload all files from this `portfolio` folder to the repo root.
3. In Cloudflare Dashboard: `Workers & Pages` -> `Create` -> `Pages` -> `Connect to Git`.
4. Select your repository.
5. Build settings:
- Framework preset: `None`
- Build command: *(leave empty)*
- Build output directory: `.`
6. Click `Save and Deploy`.

After first deploy:
1. Go to your Pages project -> `Custom domains` -> `Set up a custom domain`.
2. Enter your domain (example: `aashaygarg.com`).
3. Follow DNS instructions shown by Cloudflare (usually auto-config if domain is in Cloudflare).
4. Wait for SSL to issue (typically a few minutes).

## Alternate hosts

### Vercel
- Import repo.
- Framework: `Other`.
- Build command: empty.
- Output directory: `.`

### Netlify
- New site from Git.
- Build command: empty.
- Publish directory: `.`

### GitHub Pages
- Push this as repository root.
- Repository `Settings` -> `Pages`.
- Deploy from branch `main`, folder `/ (root)`.

## Current interactive features

- Section-aware navigation highlighting
- Scroll progress indicator
- Copy-to-clipboard email button
- Systems filter chips for fast domain-level browsing

## Files

- `index.html`: structure and portfolio content
- `styles.css`: design and responsive behavior
- `main.js`: interactivity and lightweight UI logic
- `assets/Aashay_Garg_Resume.pdf`: downloadable resume
- `assets/aashay-portrait-45.jpg`: optimized 4:5 hero portrait image
