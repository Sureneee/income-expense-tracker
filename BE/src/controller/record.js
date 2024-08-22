import _ from "lodash";
import { db } from "../../db.js";


export const getBarChartData = async (req, res) => {
  const queryText = "SELECT * FROM record";
  try {
    const result = await db.query(queryText);
    const groupedData = _.groupBy(result.rows, (el) => {
    const moonLanding = new Date(el.createdat);
    return moonLanding.getMonth() + 1;
    } );
  
    const response = _.map(groupedData, (monthRecords, month) => {
      const totalAmount = monthRecords.reduce(
        (acc, record) => {
          if (record.transaction_type === "INC") {
            acc.income += record.amount;
          } else {
            acc.expense += record.amount;
          }
          return acc;
        },
        { income: 0, expense: 0 }
      );

      return { month, ...totalAmount };
    });
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};





// CREATE record (POST)
export const createRecord = async (req, res) => {
    const { user_id, name, amount, transaction_type, description, category_id } = req.body;
    const queryText = `INSERT INTO record ( user_id, name, amount, transaction_type, description, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
  
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
    SELECT * FROM record
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
        "UPDATE record SET name = $1, description = $2 WHERE id = $3 RETURNING *",
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
        "DELETE FROM record WHERE id = $1 RETURNING *",
        [id]
      );
  
      res.send("users deleted");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  //Done
  
