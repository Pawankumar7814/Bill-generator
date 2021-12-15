//All require modules
var express = require('express');
var http = require('http');
var ejs = require('ejs');
var PDFDoc = require('pdfkit');
const fs = require('fs');

//Creating new document
const doc = new PDFDoc();

//Creating Application
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set('view engine', 'ejs');

//Assign port number
var port = 2100 | process.env.port;

//Routes
app.use('/', require('./routes/mainpagesroute.js'));

//Saving the pdf file in root directory
doc.pipe(fs.createWriteStream('Bill.pdf'));

//Setting up font size, font family
doc.fontSize(25)
    .text("Hello");

//Finanlize the PDF and end the stream
doc.end();

//Starting server
http.createServer(app).listen(port, () => {
    console.log("Port = " + port);
});