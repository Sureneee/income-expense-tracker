import express from "express";

import { createUsers, deleteUser, getUser, updateUser } from "../controller/user.js";

const user = express.Router();

user.get("/", getUser)
user.post("/create", createUsers)
user.put("/:id", updateUser)
user.delete("/:id", deleteUser)



export { user };