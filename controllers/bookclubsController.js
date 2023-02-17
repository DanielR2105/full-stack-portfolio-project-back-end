const express = require("express");
const bookclubs = express.Router();

const {
  getAllBookclubs,
  getBookclub,
  createBookclub,
  deleteBookclub,
  updateBookclub,
} = require("../queries/bookclubs");

const bookclubUsersController = require("./bookclubUsersController");
const bookclubBooksController = require("./bookclubBookscontroller");

bookclubs.use("/:bookclubId/bookclubusers", bookclubUsersController);
bookclubs.use("/:bookclubId/bookclubbooks", bookclubBooksController);

bookclubs.get("/", async (req, res) => {
  const allBookclubs = await getAllBookclubs();
  if (allBookclubs[0]) {
    res.status(200).json(allBookclubs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

bookclubs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookclub = await getBookclub(id);
  if (!bookclub.message) {
    res.status(200).json(bookclub);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bookclubs.post("/", async (req, res) => {
  try {
    const bookclub = await createBookclub(req.body);
    res.status(200).json(bookclub);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

bookclubs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookclub = await deleteBookclub(id);
    res.status(200).json(deletedBookclub);
    return deletedBookclub;
  } catch (error) {
    res.status(404).json({ error: "bookclub not found" });
  }
});

bookclubs.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBookclub = await updateBookclub(id, req.body);
    res.status(200).json(updatedBookclub);
  } catch (error) {
    res.status(404).json({ error: "book not found" });
  }
});

module.exports = bookclubs;
