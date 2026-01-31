import db from "../db.js";

// GET users
export const getUsers = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ADD user
export const addUser = (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User added successfully" });
  });
};

// delete user
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  });
};

// update user

export const updateUser = (req, res) => {
  const { id, name, email } = req.body;
  const sql = "UPDATE users set name=?, email=? where id=? ";
  db.query(sql, [name, email, id], (err, result) => {
    console.log(result, err);
    if (err) return res.status(500).json(err);
    res.json({ message: "User update successfully" });
  });
};
