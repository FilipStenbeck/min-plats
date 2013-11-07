var express = require('express');
var http = require('http');
var _ = require('underscore');
var app = express();

/*
* Configure, allow cross domain 
*/ 

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

/*
* REST endpoints
*/

var rest = { };
rest.version = {version : '1.0'}
rest.url = "http://api.trafiklab.se/sl/realtid/GetDpsDepartures.json?key=6707185a59791ecfb9bd173d74e2a343&siteId=";

//Test resource
app.get('/test', function (req, res) {
    res.send(version);
});

//get bus departures
app.get('/departures/:id', function (request, response) {
    var json = '';

    http.get(rest.url + request.params.id, function(res) {
        res.on('data', function(chunk) {
            json += chunk;
        });

        res.on('end', function() {
            
            var data;
            try {
                data = JSON.parse(json)
                response.send(data.DPS.Buses.DpsBus);
            } catch (e) {
                response.send(e);
            }
        });
    }).on('error', function(e) {
      console.log("Got error: ", e);
    });
});

app.listen(8080);

console.log("");
console.log("**********************************************");
console.log('The server is listening on port 8080');
console.log("**********************************************");