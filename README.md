# Chin-Wei Yang’s website

## Your files

- **CV source:** `cv/cwyang_CV.tex`, with `cv/1.5column.sty` and `cv/Fonts/`.
- **Photo:** `static/images/chin-wei-yang.jpg`.
- **Paper PDFs:** `static/papers/`.
- **Published CV PDF:** `cv/cwyang_CV.pdf`, generated from the CV source.

Edit the CV and run `bash cv/build.sh` to update its PDF locally. Commit and push to `main` to have GitHub Actions compile and deploy it. GitHub Pages must use GitHub Actions as its source.

## Website text and design

- `content/about/_index.md`: biography, also displayed on the homepage.
- `content/research/_index.md`: research titles, authors, abstracts, and links.
- `content/teaching/_index.md`: teaching text.
- `content/cv/_index.md`: CV page definition (the CV source remains in `cv/`).
- `layouts/`: Hugo page templates.
- `assets/`: CSS and JavaScript.
- `hugo.toml`: settings and contact links.

These are Hugo’s source folders, each with a separate purpose. Generated site output goes in the hidden `.build/site/` directory, not a second visible `public/` folder. Do not edit generated output.

## Local preview

```sh
bash cv/build.sh
hugo server --renderToMemory
```

Visit http://localhost:1313/. To build for publishing, run `hugo --minify`.

## Design references

Built with Hugo using an original layout inspired by Hyun Soo Suh and Nina Roussille, and the content organization of Stefanie Stantcheva’s Hugo site. Content was migrated from chinweiyang.com.

## Add a working paper

1. Put its PDF in `static/papers/`, for example `new-paper.pdf`.
2. Add an entry under `working_papers:` in `content/research/_index.md`, following the existing entry. Use `url: /papers/new-paper.pdf` (or an external paper URL).
3. Commit and push.

The `cv/` folder is the only editable CV source. Its compiled PDF is generated alongside the source as `cv/cwyang_CV.pdf`, which Hugo includes automatically. There is no manually maintained CV PDF in `static/`.
