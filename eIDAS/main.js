const node_sign = require('node-signpdf');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const crypto = require('cryptography');

signer = new node_sign.SignPdf();

//TODO: read file and cert path from command line 
pdf = fs.readFileSync('/Users/miguelq/Downloads/teste.pdf');
cert = fs.readFileSync('/Users/miguelq/Downloads/certificate.p12');

//TODO: add signature placeholder to pdf

const signedPdf = signer.sign(
    pdf_with_placeholder,
    cert
)

//TODO: write signed pdf to filesystem
