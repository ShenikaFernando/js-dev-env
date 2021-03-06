// setting up Express
var express = require('express');
var path = require('path');
var open = require('open');

var port = 5000;
var app = express();

// get the route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// listen to the route
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})