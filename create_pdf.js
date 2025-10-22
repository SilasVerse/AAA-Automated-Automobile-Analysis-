const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');

// Directory containing the images
const imageDir = 'C:/Users/Naing Soe Htut/Downloads/Picture'; // Replace with the path to your local images
// Output PDF file
const outputPdf = 'C:/Users/Naing Soe Htut/Downloads/Picture/report.pdf';

// Function to create the PDF from images
function createPdfFromImages() {
  const doc = new PDFDocument();
  const writeStream = fs.createWriteStream(outputPdf);
  doc.pipe(writeStream);

  // Read the image directory
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Filter out image files (you can adjust file extensions as needed)
    const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'));

    imageFiles.forEach((file, index) => {
      const imagePath = path.join(imageDir, file);

      if (index > 0) {
        doc.addPage(); // Add a new page for each image after the first one
      }

      // Add the image to the PDF and fit it to the page size (A4 here)
      doc.image(imagePath, {
        fit: [500, 700], // Adjust image fit as needed
        align: 'center',
        valign: 'center'
      });
    });

    // Finalize the PDF and end the stream
    doc.end();

    writeStream.on('finish', function() {
      console.log(`PDF created successfully: ${outputPdf}`);
    });
  });
}

// Call the function to create the PDF
createPdfFromImages();
