const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();
const apiRouter = require("./routes/api");

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`app is runing on port ${PORT}`);
});
