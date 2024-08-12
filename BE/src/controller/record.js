import { db } from "../../db.js";


// CREATE record (POST)
export const createRecord = async (req, res) => {
    const { user_id, name, amount, transaction_type, description, category_id } = req.body;
    const queryText = `INSERT INTO records ( user_id, name, amount, transaction_type, description, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
  
    try {
      const result = await db.query(queryText, [
        user_id,
        name,
        amount,
        transaction_type,
        description,
        category_id
      ]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //done
  


//SELECT record (GET)
export const getRecord = async (req, res) => {
    const queryText = `
    SELECT * FROM records
    `;
  
    try {
      const result = await db.query(queryText);
      console.log(result.rows, "rows");
      res.send(result.rows);
    } catch (error) {
      console.error("error");
      res.send(error);
    }
  };
  //Done


//UPDATE (PUT)
export const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
      const result = await db.query(
        "UPDATE records SET name = $1, description = $2 WHERE id = $3 RETURNING *",
        [name, description, id]
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



//DELETE (DEL)
export const deleteRecord = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db.query(
        "DELETE FROM records WHERE id = $1 RETURNING *",
        [id]
      );
  
      res.send("users deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //Done
  
