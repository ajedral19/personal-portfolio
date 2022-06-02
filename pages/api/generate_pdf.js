const PDFDocument = require('pdfkit')
const blobStream = require('blob-stream')
const brotli = require('brotli')
const decomp = require('brotli/decompress')

export const generatePDF = () => {
  // create a document the same way as above
  const doc = new PDFDocument()

  // pipe the document to a blob
  const stream = doc.pipe(blobStream())

  // add your content to the document here, as usual
  doc.fontSize(25).text('here is a sample text', 220, 80)

  // get a blob when you're done
  doc.end()
  stream.on('finish', () => {
    // get a blob you can do whatever you like with
    const blob = stream.toBlob('application/pdf')

    // or get a blob URL for display in the browser
    const url = stream.toBlobURL('application/pdf')
    // iframe.src = url
  })
}
