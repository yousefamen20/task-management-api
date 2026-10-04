require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const tasksRouter = require("./routes/tasksRouter");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
app.use(express.json());

app.use("/tasks", tasksRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });