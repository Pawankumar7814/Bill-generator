//All require modules
var express = require('express');
var http = require('http');
var ejs = require('ejs');

//Application
var app = express();

//view engine
app.set('view engine', 'ejs');

//Assign port number
var port = 2100 | process.env.port;

//Routes
app.use("/", require('/routes/mainpages'));

//Starting server
http.createServer(app).listen(port, () => {
    console.log("Port = " + port);
})