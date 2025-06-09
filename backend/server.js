const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO users (name) VALUES (?)", [name], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User added" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
