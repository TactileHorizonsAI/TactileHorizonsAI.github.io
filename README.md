# Tactile Horizons AI — Website

Static marketing site for https://tactilehorizonsai.github.io/

## Deploy to GitHub Pages (Step-by-Step)

### Option A — New repo (first time)

1. Create a new GitHub repository named exactly: `tactilehorizonsai.github.io`
   - Go to https://github.com/new
   - Owner: `tactilehorizonsai`
   - Repository name: `tactilehorizonsai.github.io`
   - Visibility: Public
   - Do NOT initialize with README

2. Push this project to that repo:
```bash
cd tactile_horizons_site
git remote add origin https://github.com/tactilehorizonsai/tactilehorizonsai.github.io.git
git branch -M main
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Click Save

4. Wait 1-2 minutes. Site will be live at https://tactilehorizonsai.github.io/

### Option B — Existing repo

If you already have the repo:
```bash
cd tactile_horizons_site
git remote set-url origin https://github.com/tactilehorizonsai/tactilehorizonsai.github.io.git
git branch -M main
git push -f origin main
```

## Why .nojekyll?

The `.nojekyll` file (empty, at root) tells GitHub Pages to serve files as pure static HTML — no Jekyll build step. This is required for this site to work correctly.

## Local Preview

```bash
cd tactile_horizons_site
python3 -m http.server 8080
# Open http://localhost:8080
```

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | index.html | Hero, overview, stats |
| Problem | problem.html | Scale of the problem |
| Solution | solution.html | AI-powered solution |
| Market | market.html | TAM/SAM/SOM + sources |
| Validation | validation.html | Comprehension rates, partnerships |
| Competitive | competitive.html | Competitor table + patent |
| **The MVP** | **mvp.html** | **Tactile Horizon AIv2 app** |
| Team | team.html | Founder bio |
| Contact | contact.html | Contact details + form |
