# Aashay Garg Portfolio

Static portfolio website built with plain HTML, CSS, and JavaScript.

## Live site

- GitHub Pages URL: [https://aashaygarg.github.io/portfolio/](https://aashaygarg.github.io/portfolio/)

## Local preview

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Deploy (GitHub Pages)

This repository includes a GitHub Actions workflow:

- `.github/workflows/deploy-pages.yml`

### One-time setup

1. Open repository `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.

### Ongoing deploys

1. Push changes to `main`.
2. GitHub Actions runs `Deploy static content to Pages`.
3. Site updates automatically at the Pages URL.

## Project structure

- `index.html`: page content and structure
- `styles.css`: layout, visual design, and responsive behavior
- `main.js`: UI interactions (scroll progress, section highlighting, filters, copy email)
- `assets/`: resume and profile images
- `.nojekyll`: ensures static files are served as-is on GitHub Pages

## Features

- Section-aware navigation highlight
- Scroll progress indicator
- Systems filter buttons
- Copy email to clipboard
- Responsive layout for desktop and mobile
