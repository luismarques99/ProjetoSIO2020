const express = require("express");
const saftFileController = require("../controllers/saftFileController");
const saftFileRouter = express.Router();

saftFileRouter.get("/", saftFileController.findAll);
saftFileRouter.get("/:fileId", saftFileController.findById);
saftFileRouter.post("/", saftFileController.create)

module.exports = saftFileRouter;