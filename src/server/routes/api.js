// Imports
const express = require("express");
const app = express.Router();

// Controllers
const assets = require("../controllers/assets");
const collections = require("../controllers/collections");

// Api Routes
app.get("/", (req, res) => {
  res.json("Working");
});

module.exports = app;
