import { db } from "../../db.js";
// CREATE category
export const createCategory = async (req, res) => {
    const { name, description, category_image } = req.body;
    const queryText = `INSERT INTO category ( name, description, category_image ) VALUES ($1, $2, $3 ) RETURNING *`;
  
    try {
      const result = await db.query(queryText, [
        name,
        description,
        category_image
      ]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //done


//SELECT category
export const getCategory = async (req, res) => {
    const queryText = `
    SELECT * FROM category
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


//UPDATE
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
      const result = await db.query(
        "UPDATE category SET name = $1, description = $2 WHERE id = $3 RETURNING *",
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
  


//DELETE
export const deleteCategory = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await db.query(
        "DELETE FROM category WHERE id = $1 RETURNING *",
        [id]
      );
  
      res.send("users deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //Done