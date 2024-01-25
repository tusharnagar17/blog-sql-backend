const express = require("express");
const app = express();

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

// routes
const BlogRouter = require("./controllers/blogs");

app.use(express.json());

app.use("/api/blogs", BlogRouter);

// USE =express-async-error to remove TRY-CATCH

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is successfully connected to :${PORT}`);
  });
};

start();
