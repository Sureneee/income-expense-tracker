import express from "express";

import { createCategory, deleteCategory, getCategory, updateCategory } from "../router/category.js";

const category = express.Router();

category.get("/", getCategory)
category.post("/create", createCategory)
category.put("/:id", updateCategory)
category.delete("/:id", deleteCategory)



export { category };

