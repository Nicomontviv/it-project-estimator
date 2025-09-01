// index.js
const express = require("express");
const db = require("./db");
const usersRoutes = require("./src/routes/users");

const app = express();
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Rutas de usuarios
app.use("/users", usersRoutes);

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
