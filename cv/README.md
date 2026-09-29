# CV

Edit `cwyang_CV.tex`. Keep `1.5column.sty` and `Fonts/` alongside it.

In VS Code, open the website project folder, then build with LaTeX Workshop's **latexmk** recipe. Saving also triggers compilation. The result is `cwyang_CV.pdf` in this folder. The website serves that exact PDF automatically; no copying is needed.

You can also run `bash cv/build.sh` from the project root, or `latexmk cwyang_CV.tex` from this folder.

Commit and push the source to `main`; GitHub Actions recompiles it and publishes the site. Only the PDF is included on the website, not the fonts or TeX source.

The local `.latexmkrc` automatically selects the engine required by the bundled fonts, including when the standard recipe passes `-pdf`.
