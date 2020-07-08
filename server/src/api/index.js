const express = require("express");

const saftFileRoutes = require("./routes/saftFileRoutes");

const apiRouter = express.Router();

apiRouter.use("/saftFiles", saftFileRoutes);

module.exports = apiRouter;
