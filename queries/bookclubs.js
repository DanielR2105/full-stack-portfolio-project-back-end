const db = require("../db/dbConfig");

const getAllBookclubs = async () => {
  try {
    const allBookclubs = await db.any("SELECT * FROM bookclubs");
    return allBookclubs;
  } catch (error) {
    return error;
  }
};

const getBookclub = async (id) => {
  try {
    const oneBookclub = await db.one("SELECT * FROM bookclubs WHERE id=$1", id);
    return oneBookclub;
  } catch (error) {
    return error;
  }
};

const createBookclub = async (bookclub) => {
  try {
    const newBookclub = await db.one(
      "INSERT INTO bookclubs (name, description, goal, location, meeting_time) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        bookclub.name,
        bookclub.description,
        bookclub.goal,
        bookclub.location,
        bookclub.meeting_time,
      ]
    );
    return newBookclub;
  } catch (error) {
    return error;
  }
};

const deleteBookclub = async (id) => {
  try {
    const deletedBookclub = await db.one(
      "DELETE FROM bookmarks WHERE id=$1 RETURNING *",
      id
    );
    return deletedBookclub;
  } catch (error) {
    return error;
  }
};

const updateBookclub = async (id, bookclub) => {
  try {
    const updatedBookclub = await db.one(
      "UPDATE bookclubs SET name=$1, description=$2, goal=$3, location=$4, meeting_time=$5 WHERE id=$6 RETURNING *",
      [
        bookclub.name,
        bookclub.description,
        bookclub.goal,
        bookclub.location,
        bookclub.meeting_time,
        id,
      ]
    );
    return updatedBookclub;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBookclubs,
  getBookclub,
  createBookclub,
  deleteBookclub,
  updateBookclub,
};
