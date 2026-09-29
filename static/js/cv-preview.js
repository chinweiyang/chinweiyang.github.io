const container = document.querySelector('#cv-pages');
const status = document.querySelector('#cv-status');
try {
  const pdfjs = await import('../vendor/pdfjs/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('../vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;
  const pdf = await pdfjs.getDocument(container.dataset.pdf).promise;
  for (let number = 1; number <= pdf.numPages; number++) {
    const page = await pdf.getPage(number);
    const viewport = page.getViewport({scale: 1.8});
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', `CV page ${number} of ${pdf.numPages}`);
    await page.render({canvasContext: canvas.getContext('2d'), viewport}).promise;
    container.append(canvas);
  }
  status.textContent = '';
  status.hidden = true;
} catch (error) {
  status.textContent = 'The preview could not load. Please use the PDF link above.';
  console.error('CV preview:', error);
}
