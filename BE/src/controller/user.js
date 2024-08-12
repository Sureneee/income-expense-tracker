import { db } from "../../db.js";
// CREATE users
export const createUsers = async (req, res) => {
    const { email, name, password, avatar_img, currency_type } = req.body;
    const queryText = `INSERT INTO users ( email, name, password, avatar_img, currency_type) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  
    try {
      const result = await db.query(queryText, [
        email,
        name,
        password,
        avatar_img,
        currency_type,
      ]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //done


//SELECT users
export const getUsersWithFilter = async (req, res) => {
    const { name, email } = req.body;
    const queryText = "SELECT * FROM users WHERE name = $1 OR email = $2";
  
    try {
      const result = await db.query(queryText, {name, email});
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("error");
      res.send(error);
    }
  };
  //Done
  


//UPDATE
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    try {
      const result = await db.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
      );
      if (result.rows.length === 0) {
        res.status(404).json({ error: "users not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //Done


//DELETE
export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db.query(
        "DELETE FROM users WHERE id = $1 RETURNING *",
        [id]
      );
  
      res.send("users deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //Done