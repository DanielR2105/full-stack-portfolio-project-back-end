const db = require("../db/dbConfig");

const getAllBookclubUsers = async (bookclub_id) => {
  try {
    const users = await db.any(
      "SELECT * FROM users JOIN bookclub_users ON users.id = bookclub_users.user_id WHERE bookclub_id=$1",
      bookclub_id
    );
    return users;
  } catch (error) {
    return error;
  }
};

// Want to get all book clubs for this user
const getAllBookclubUsersbyUserId = async () => {
  try {
    const allBookclubUsers = await db.any(
      "SELECT * FROM bookclub_users WHERE user_id=$1"
    );
    return allBookclubUsers;
  } catch (error) {
    return error;
  }
};

// SELECT * FROM bookclub_users INNER JOIN users ON users.id = bookclub_users.user_id WHERE users.id=$1
const getBookclubUser = async (id) => {
  try {
    const oneBookclubUser = await db.one(
      "SELECT * FROM bookclub_users INNER JOIN users ON users.id = bookclub_users.user_id WHERE users.id=$1",
      id
    );
    return oneBookclubUser;
  } catch (error) {
    return error;
  }
};

const createBookclubUser = async (bookclubUser) => {
  try {
    const newBookclubUser = await db.one(
      "INSERT INTO bookclub_users (bookclub_id, user_id) VALUES($1, $2) RETURNING *",
      [bookclubUser.bookclub_id, bookclubUser.user_id]
    );
    return newBookclubUser;
  } catch (error) {
    return error;
  }
};

const deleteBookclubUser = async (id) => {
  try {
    const deletedBookclubUser = await db.one(
      "DELETE FROM bookclub_users where id=$1 RETURNING *",
      id
    );
    return deletedBookclubUser;
  } catch (error) {
    return error;
  }
};

const updateBookclubUser = async (id, bookclubUser) => {
  try {
    const updatedBookclubUser = await db.one(
      "UPDATE bookclub_users SET bookclub_id=$1, user_id=$2 WHERE id=$3 RETURNING *",
      [bookclubUser.bookclub_id, bookclubUser.user_id, id]
    );
    return updatedBookclubUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBookclubUsers,
  getBookclubUser,
  createBookclubUser,
  deleteBookclubUser,
  updateBookclubUser,
  getAllBookclubUsersbyUserId,
};
