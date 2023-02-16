const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (name, favorite_book, age, favorite_genre, firebase_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        user.name,
        user.favorite_book,
        user.age,
        user.favorite_genre,
        user.firebase_id,
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deleteduser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deleteduser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, bookclub) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET name=$1, favorite_book=$2, age=$3, favorite_genre=$4, firebase_id=$5, WHERE id=$6 RETURNING *",
      [
        user.name,
        user.favorite_book,
        user.age,
        user.favorite_genre,
        user.firebase_id,
      ]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

const getUserByFirebaseId = async (firebase_id) => {
  try {
    const user = await db.one(
      "SELECT * FROM users WHERE firebase_id=$1",
      firebase_id
    );
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserByFirebaseId,
};
