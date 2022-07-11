// Entry point

// Require express
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import our dotenv package
require("Dotenv/config");

// Declare the enviornment variables
const port = process.env.port;
const connecter = process.env.dbconnect;

// Fire the function
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Connection string to the database
mongoose
  .connect(connecter, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });

// Requiring files
const todoRoute = require("./routes/todoRoutes");

//using the files
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", todoRoute);

// Create the server
app.listen(port, () => {
  console.log(`Connected to port, ${port}, ${connecter}`);
});
