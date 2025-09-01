// models/usersModel.js
const pool = require("../../db");

async function getUsersFromDB() {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
}

module.exports = { getUsersFromDB };
