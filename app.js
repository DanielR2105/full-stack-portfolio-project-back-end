// IMPORTS
const cors = require("cors");
const express = require("express");
const booksController = require("./controllers/booksController.js");
const usersController = require("./controllers/usersController.js");
const bookclubsController = require("./controllers/bookclubsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// Book ROUTES
app.use("/books", booksController);
app.use("/users", usersController);
app.use("/bookclubs", bookclubsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Book Club App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
