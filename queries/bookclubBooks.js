const bookclubUsers = require("../controllers/bookclubUsersController");
const db = require("../db/dbConfig");

const createBookclubBook = async (bookclubBook) => {
  try {
    const newBookclubBook = await db.one(
      "INSERT INTO bookclub_books (bookclub_id, book_id) VALUES($1, $2) RETURNING *",
      [bookclubBook.bookclub_id, bookclubBook.book_id]
    );
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
  deleteBookclubBook,
  createBookclubBook,
};
