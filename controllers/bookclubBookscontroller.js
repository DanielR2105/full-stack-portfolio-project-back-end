const express = require("express");
const bookclubBooks = express.Router({ mergeParams: true });
const {
  getBookclubBook,
  deleteBookclubBook,
  createBookclubBook,
} = require("../queries/bookclubBooks");
const { getBook } = require("../queries/books");

bookclubBooks.post("/", async (req, res) => {
  try {
    const bookclubBook = await createBookclubBook(req.body);
    res.status(200).json(bookclubBook);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

bookclubBooks.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookclubBook = await deleteBookclubBook(id);
    res.status(200).json(deletedBookclubBook);
  } catch (error) {
    res.status(404).json({ error: "ID not found" });
  }
});

bookclubBooks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookclubBook = await getBook(id);
  if (!bookclubBook.message) {
    res.status(200).json(bookclubBook);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

module.exports = bookclubBooks;
