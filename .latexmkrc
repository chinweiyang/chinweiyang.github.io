# Also support compiling the CV from the website root.
$do_cd = 1;
$pdf_mode = 1;
$pdflatex = 'xelatex -synctex=1 -interaction=nonstopmode -file-line-error -halt-on-error %O %S';
