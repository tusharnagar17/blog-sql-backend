const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3009;

app.get("/", (req, res) => {
  res.json({ message: "tushar your app is working!" });
});

app.listen(PORT, () => {
  console.log(`backend is listening at port: ${PORT}`);
});
