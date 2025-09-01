// controllers/usersController.js
const { getUsersFromDB } = require("../models/usersModel");

async function getAllUsers(req, res) {
  try {
    const users = await getUsersFromDB();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching users" });
  }
}

module.exports = { getAllUsers };
