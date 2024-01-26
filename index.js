const express = require("express");
const app = express();
// require("express-async-errors");

const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");

// routes
const BlogRouter = require("./controllers/blogs");
const UserRouter = require("./controllers/users");
const LoginRouter = require("./controllers/login");

app.use(express.json());

app.use("/api/blogs", BlogRouter);
app.use("/api/users", UserRouter);
app.use("/api/login", LoginRouter);

// USE =express-async-error to remove TRY-CATCH
// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });
const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is successfully connected to :${PORT}`);
  });
};

start();
