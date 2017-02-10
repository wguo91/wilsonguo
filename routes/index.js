"use strict";
var express = require("express");
var router = express.Router();

// GET homepage
router.get("/", function(req, res) {
  res.render("index", {
    title: "Wilson Guo"
  });
});

// GET projects page
router.get("/projects", function(req, res) {
  res.render("projects", {
    title: "Wilson Guo - Projects"
  });
});

// GET resume page
router.get("/resume", function(req, res) {
  res.render("resume", {
    title: "Wilson Guo - Resume"
  });
});

module.exports = router;
