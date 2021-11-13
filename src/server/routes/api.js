// Imports
const express = require("express");
const app = express.Router();

// Controllers
const assets = require("../controllers/assets");

// Api routes
app.get("/", (req, res) => {
  res.json("Working");
});

app.get("/getAssets", (req, res) => {
  assets.getAssets(req, res);
});

module.exports = app;
