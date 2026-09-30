# CV

Edit `cwyang_CV.tex`; keep `1.5column.sty` alongside it. The fonts are installed locally in macOS Font Book (`~/Library/Fonts`), not in this repository: Sabon LT Std, Adobe Caslon Pro, and Calluna.

Build using the normal LaTeX Workshop **latexmk** recipe, or run `bash cv/build.sh` from the website root. The local `.latexmkrc` selects XeLaTeX for the installed fonts.

The website displays `cv/cwyang_CV.pdf` directly. After editing, compile locally, then commit and push both the source changes and the updated PDF. GitHub publishes the PDF without compiling the CV.

A different computer needs these fonts installed before it can compile the CV.
