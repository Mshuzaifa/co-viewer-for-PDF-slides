const socket = io();

// PDF.js setup
const url = 'test.pdf'; // Path to your PDF file
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');
let pdfDoc = null;
let currentPage = 1;

// Fetch the PDF
pdfjsLib.getDocument(url).promise.then((pdf) => {
    pdfDoc = pdf;
    renderPage(currentPage);
});

// Render the PDF page
function renderPage(pageNumber) {
    pdfDoc.getPage(pageNumber).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
            document.getElementById('current-page').textContent = `Page ${currentPage}`;
        });
    });
}

// Listen for page synchronization
socket.on('sync', (pageNumber) => {
    currentPage = pageNumber;
    renderPage(currentPage);
});

// Next page action
document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pdfDoc.numPages) {
        currentPage++;
        renderPage(currentPage);
        socket.emit('pageChanged', currentPage); // Notify server of page change
    }
});

// Previous page action
document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        socket.emit('pageChanged', currentPage); // Notify server of page change
    }
});
