import express from "express";

import { createUsers, deleteUser, getUsersWithFilter, updateUser } from "../controller/user.js";

const user = express.Router();

user.get("/", getUsersWithFilter)
user.post("/create", createUsers)
user.put("/:id", updateUser)
user.delete("/:id", deleteUser)



export { user };