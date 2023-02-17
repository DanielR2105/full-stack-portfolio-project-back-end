const bookclubUsers = require("../controllers/bookclubUsersController");
const db = require("../db/dbConfig");

const getBookclubBook = async (id) => {
  try {
    const oneBookclubBook = await db.one(
      "SELECT * FROM bookclub_books INNER JOIN books ON books.id = bookclub_books.book_id WHERE books.id=$1",
      id
    );
    return oneBookclubBook;
  } catch (error) {
    return error;
  }
};

const createBookclubBook = async (bookclubBook) => {
  try {
    const newBookclubBook = await db.one(
      "INSERT INTO bookclub_books (bookclub_id, book_id) VALUES($1, $2) RETURNING *",
      [bookclubBook.bookclub_id, bookclubBook.book_id]
    );
    return newBookclubBook;
  } catch (error) {
    return error;
  }
};

const deleteBookclubBook = async (id) => {
  try {
    const deletedBookclubBook = await db.one(
      "DELETE FROM bookclub_books where id=$1 RETURNING *",
      id
    );
    return deleteBookclubBook;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getBookclubBook,
  deleteBookclubBook,
  createBookclubBook,
};
