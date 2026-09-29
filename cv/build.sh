#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
# macOS GUI applications may not inherit the TeX installation's PATH.
if [[ -d /Library/TeX/texbin ]]; then
  export PATH="/Library/TeX/texbin:$PATH"
fi
latexmk -pdf -synctex=1 -interaction=nonstopmode -halt-on-error cwyang_CV.tex
