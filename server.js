var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
app.listen(port, function () {
    console.log('Server running on port ' + port);
});

if(!isProduction){
    var bundle = require("./server/bundle.js");
    bundle();
    
    app.all("/build/*", function(req, res){
        "use strict";
        proxy.web(req, res, {
            target: "http://localhost:8080"
        });
    });
}