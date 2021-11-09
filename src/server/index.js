// Node server imports
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const router = express.Router();
const sdk = require("api")("@opensea/v1.0#45bdz26kvmh8fbf");

// Variables init
const PORT = process.env.PORT || 8000;
const app = express();

// Another layer of init
app.use(helmet());
morgan("tiny");

// Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

sdk["retrieving-collections"]({
  owner: "0x9056d15c49b19df52ffad1e6c11627f035c0c960",
  offset: "0",
  limit: "300",
})
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// Server init
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
