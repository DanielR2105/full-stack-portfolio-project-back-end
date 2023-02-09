const express = require("express");
const books = express.Router();
const {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} = require("../queries/books");
// Importing reviews controller
const reviewsController = require("./reviewsController");

books.use("/:bookId/reviews", reviewsController);

// INDEX
books.get("/", async (req, res) => {
  console.log("hit GET /books");
  const allBooks = await getAllBooks();
  if (allBooks[0]) {
    res.status(200).json(allBooks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
books.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await getBook(id);
  console.log("book");
  if (!book.message) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
books.post("/", async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
books.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBook(id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// UPDATE
books.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await updateBook(id, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(404).json({ error: "book not found" });
  }
});

module.exports = books;
