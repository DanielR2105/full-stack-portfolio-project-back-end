const db = require("../db/dbConfig");

const getAllBooks = async () => {
  console.log("hit getAll books");
  try {
    const allBooks = await db.any("SELECT * FROM books");
    return allBooks;
  } catch (error) {
    console.log("db error", error);
    return error;
  }
};

const getBook = async (id) => {
  try {
    const oneBook = await db.one("SELECT * FROM books WHERE id=$1", id);
    return oneBook;
  } catch (error) {
    return error;
  }
};

// CREATE
const createBook = async (book) => {
  try {
    const newBook = await db.one(
      "INSERT INTO books (title, author, page_count, image, average_rating) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        book.title,
        book.author,
        book.page_count,
        book.image,
        book.average_rating,
      ]
    );
    return newBook;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteBook = async (id) => {
  try {
    const deletedBook = await db.one(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      id
    );
    return deletedBook;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateBook = async (id, book) => {
  try {
    const updatedBook = await db.one(
      "UPDATE books SET title=$1, author=$2, page_count=$3, image=$4 average_rating=$5 WHERE id=$6 RETURNING *",
      [
        book.title,
        book.author,
        book.page_count,
        book.image,
        book.average_rating,
        id,
      ]
    );
    return updatedBook;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
};
