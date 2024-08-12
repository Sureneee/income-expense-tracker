import bodyParser from "body-parser";
import express from "express";
import { user } from "./src/router/user.js";
import cors from "cors";
import { db } from "./db.js";
import { record } from "./src/router/record.js";
import { category } from "./src/controller/category.js";
import { auth } from "./src/router/auth.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use('/users', user);
app.use('/record', record);
app.use('/category', category);
app.use('/api/', auth);



app.get("/installExtension", async (req, res) => {
  const tableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  try {
    db.query(tableQueryText);

    res.send("success");
  } catch (error) {
    console.log(error);
  }
});


//CREATE TABLE-USERS
app.get("/users/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS users (
   id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   email VARCHAR(255) UNIQUE NOT NULL,
   name VARCHAR(50) NOT NULL,
   password TEXT,
   avatar_img TEXT,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   currency_type TEXT DEFAULT 'MNT'

  )`;

  try {
    db.query(tableQueryText);
  } catch (error) {
    console.error("error");
  }
  res.send("Table created successfully");
});



//CREATE TABLE-RECORD
app.get("/record/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE "record" (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  category_id uuid NOT NULL,
  name TEXT,
  amount REAL NOT NULL,
  transaction_type TEXT DEFAULT 'INC' NOT NULL,
  description TEXT,
  createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) references users(id),
  FOREIGN KEY (category_id) references category(id),

  )`;

  try {
    db.query(tableQueryText);
  } catch (error) {
    console.error("error");
  }
  res.send("Table created successfully");
});
//Done



//CREATE TABLE-CATEGORY
app.get("/category/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS category (
   id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   name VARCHAR(100),
   description TEXT,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   category_image TEXT
  )`;

  try {
    db.query(tableQueryText);
  } catch (error) {
    console.error("error");
  }
  res.send("Table created successfully");
});
//Done


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});