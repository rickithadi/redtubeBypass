var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var request = require('request');

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(process.env.PORT || 5000, function () {
    console.log("app running on port.", server.address().port);
});
