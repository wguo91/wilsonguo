"use strict";
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    morgan = require("morgan"),
    expressHandlebars = require("express-handlebars"),
    routes = require("./routes"),
    config = require("./config");

// set up view directory
app.set("views", path.join(__dirname, "views"));

// set up handlebars
var handlebars = expressHandlebars.create({
  defaultLayout: "layout"
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// set up body-parser and morgan
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

// set up directory to set up static files
app.use(express.static(path.join(__dirname, "public")));

// set up routes
app.use("/", routes);

// custom 500 page
app.use(function(req, res) {
  res.status(404);
  res.render("404", {
    title: "404 Page Not Found"
  });
});

// custom 500 page
app.use(function(req, res) {
  res.status(500);
  res.render("500", {
    title: "500 Internal Server Error"
  });
});

app.listen(config.port);
