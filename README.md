# Portfolio Website Template

A minimal portfolio site (Vite 8, plain HTML/CSS/JS — no framework) that
deploys to GitHub Pages automatically via GitHub Actions on every push to
`main`.

## 1. Get your own copy

Click **Use this template** at the top of this repo on GitHub, then clone
your new repo:

```bash
git clone https://github.com/hextech/portifolio.git
cd YOUR-REPO
npm install
npm run dev
```

Open the local URL it prints — you should see the placeholder portfolio.

## 2. Customize it with Claude Code

Open this folder in Claude Code and describe what you want changed in plain
English. Every place you need to edit is marked `<!-- EDIT ME -->` in
`index.html`. Examples of things to ask Claude Code:

- "Update the site with my name, a short bio, and my real GitHub/LinkedIn
  links."
- "I have three projects: [describe them]. Replace the placeholder project
  cards with these."
- "Change the accent color to green instead of blue."
- "Add a project card for a fourth project."

Claude Code can edit `index.html`, `src/style.css`, and `src/main.js`
directly. Run `npm run dev` and refresh your browser to see changes live.

## 3. Turn on GitHub Pages

In your new repo on GitHub: **Settings → Pages → Build and deployment →
Source → GitHub Actions**. That's it — no further config needed, the
workflow in `.github/workflows/deploy.yml` handles the rest.

## 4. Deploy

```bash
git add .
git commit -m "Customize portfolio"
git push
```

Pushing to `main` triggers the **Deploy to GitHub Pages** workflow
automatically (check the **Actions** tab to watch it run). Once it finishes,
your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Project structure

```
index.html        Page content — sections marked EDIT ME
src/style.css      Styling
src/main.js         Small bit of JS (footer year)
.github/workflows/deploy.yml   Builds and deploys on every push to main
```

## Local commands

| Command           | What it does                          |
| ------------------ | -------------------------------------- |
| `npm run dev`       | Start a local dev server with live reload |
| `npm run build`     | Build the production site into `dist/` |
| `npm run preview`   | Preview the production build locally   |
