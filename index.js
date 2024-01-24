const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
require("dotenv").config();
const { Blog } = require("./models/blogs");

app.use(express.json());
// env varibale
const PORT = process.env.PORT || 3009;
const DB_URL = process.env.DB_URL || "";

// const options = {
//   dialect: urlParts.protocol.replace(/:$/, ""),
// };

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    port: "5432", // Make sure it matches the Docker port
  }
);
// {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

app.get("/", (req, res) => {
  res.json({ message: "tushar your app is working!" });
});
app.get("/blogs", async (req, res) => {
  try {
    const allBlogs = await Blog.findAll();
    console.log(allBlogs);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`backend is listening at port: ${PORT}`);
});
