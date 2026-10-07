# Diverse Innov LLC Website

Static HTML/CSS/JavaScript site prepared for GitHub Pages.

## Local preview

```powershell
cd diverseinnovllc.github.io
python -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

Desired account or organization: `DiverseInnovLLC`
Desired repository: `diverseinnovllc.github.io`
Expected public URL: `https://diverseinnovllc.github.io`

```powershell
git init
git add .
git commit -m "Initial Diverse Innov website"
git branch -M main
git remote add origin https://github.com/DiverseInnovLLC/diverseinnovllc.github.io.git
git push -u origin main
```

If GitHub Pages is not automatic for the user-site repository, open repository Settings > Pages and publish from the `main` branch/root.

## Contact form

The frontend form is built, but GitHub Pages does not provide server-side form handling. The current JavaScript deliberately prevents false success messages and directs the visitor to call/text 775-444-2327.

Before relying on online submissions, connect the form to a real endpoint such as Formspree, Web3Forms, or a Cloudflare Worker, then remove the temporary submission handler in `assets/js/main.js`.

## Brand assets

- `assets/images/diverse-innov-horizontal.png` — primary header/footer mark
- `assets/images/diverse-innov-stacked.png` — secondary brand mark
- `assets/images/diverse-innov-icon.png` — favicon/icon

## Founder photo

When available, add a real founder image as `assets/images/founder.jpg` and integrate it into `about.html` or the homepage. Do not substitute a stock person.

## Custom domain

A custom domain is not required for launch. GitHub Pages can serve the site at `diverseinnovllc.github.io`. A future custom domain can be added in GitHub Pages settings without redesigning the site.

## Service area

Reno/Northern Nevada, Las Vegas/Southern Nevada, Northern California, Southern California, plus remote technical support beyond the primary service area.

## Notes

The site intentionally avoids guaranteed-profit claims, fake testimonials, fake operating metrics, and enterprise-scale construction claims.
