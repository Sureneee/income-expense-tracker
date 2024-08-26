import express from "express";

import { createRecord, getBarChartData, getRecordsByTransactionType, deleteRecord, getRecord, updateRecord } from "../controller/record.js";

const record = express.Router();

record.get("/", getRecord)
record.get("/barChart", getBarChartData)
record.get("/pieChart", getRecordsByTransactionType)
record.post("/create", createRecord)
record.put("/:id", updateRecord)
record.delete("/:id", deleteRecord)



export { record };