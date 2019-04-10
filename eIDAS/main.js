#!/usr/bin/env node
const node_sign = require('node-signpdf');
const fs = require('fs');
const PDFDocument = require('pdfkit');
const crypto = require('cryptography');

signer = new node_sign.SignPdf();

function load_files(args){
    pdf_index = args.indexOf("--file") + 1;
    cert_index = args.indexOf("--cert") + 1;

    // Check if cert and pdf file exist
    if(pdf_index && cert_index){
        fs.stat(args[pdf_index], function(err, stat){
            if(!err){
                pdf = fs.readFileSync(args[pdf_index]);
                fs.stat(args[cert_index], function(err, stat){
                    if(!err){
                        cert = fs.readFileSync(args[cert_index]);
                        sign_pdf(pdf, cert);
                    }else{
                        usage();
                    }
                });
            }else{
                usage();
            }
        });
    }else{
        usage();
    }
}

function process_args(){
    if(process.argv.includes("-h"))
        usage();
    else 
        load_files(process.argv.slice(2,));
}

function usage(){
    console.log("Usage: ./main.js [--file pdf_file] [--cert cert_file]")
}

function sign_pdf(pdf, cert){
    //TODO: add signature placeholder to pdf

    const signedPdf = signer.sign(
        pdf_with_placeholder,
        cert
    )

    //TODO: write signed pdf to filesystem
}

process_args();
