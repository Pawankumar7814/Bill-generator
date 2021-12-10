//All require modules
var express = require('express');
var http = require('http');
var ejs = require('ejs');
var templateToPdf = require('html-template-pdf');

//Creating Application
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set('view engine', 'ejs');

//Assign port number
var port = 2100 | process.env.port;

//Routes
app.use('/', require('./routes/mainpagesroute.js'))

//Starting server
http.createServer(app).listen(port, () => {
    console.log("Port = " + port);
})