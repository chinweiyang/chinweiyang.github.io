# Support the standard latexmk -pdf recipe used by LaTeX Workshop.
# This CV's fontspec fonts require XeLaTeX instead of pdfLaTeX.
$pdf_mode = 1;
$pdflatex = 'xelatex -synctex=1 -interaction=nonstopmode -file-line-error -halt-on-error %O %S';
