const express = require("express");
const bookclubUsers = express.Router({ mergeParams: true });
const {
  getAllBookclubUsers,
  getBookclubUser,
  createBookclubUser,
  deleteBookclubUser,
  updateBookclubUser,
  getAllBookclubUsersbyUserId,
} = require("../queries/bookclubUsers");
const { getUser } = require("../queries/users");

bookclubUsers.get("/", async (req, res) => {
  const { bookclubId } = req.params;
  try {
    const allBookclubUsers = await getAllBookclubUsers(bookclubId);
    res.status(200).json(allBookclubUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// bookclubUsers.get("/", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const allBookclubUsers = await getAllBookclubUsersbyUserId(userId);
//     res.status(200).json(allBookclubUsers);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

bookclubUsers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const bookclubUser = await getBookclubUser(id);
  if (!bookclubUser.message) {
    res.status(200).json(bookclubUser);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

bookclubUsers.post("/", async (req, res) => {
  try {
    const bookclubUser = await createBookclubUser(req.body);
    res.status(200).json(bookclubUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

bookclubUsers.delete("/:id", async (req, res) => {
  try {
    console.log("hit delete");
    const { id } = req.params;
    const deletedBookclubUser = await deleteBookclubUser(id);
    res.status(200).json(deletedBookclubUser);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// Dont think I need update since you can only leave or join a bookclub/ could just use update user instead
// bookclubUsers.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBookclubUser = await updateBookclubUser(id, req.body);
//     res.status(200).json(updatedBookclubUser);
//   } catch (error) {
//     res.status(404).json({ error: "Bookclub User not found!" });
//   }
// });

module.exports = bookclubUsers;
