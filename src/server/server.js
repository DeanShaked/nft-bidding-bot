// Imports
const express = require("express");
const cors = require("cors");

// Objects init
const PORT = process.env.PORT || 8000;
const app = express();
const apiRouter = require("./routes/api");

// Server adjustments
app.use(express.json());
app.use(cors());

// Init api router
app.use("/api", apiRouter);

// Server init
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
