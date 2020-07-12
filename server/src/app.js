require("dotenv").config();

const express = require("express");
const cors = require("cors");

const apiRouter = require("./api/index");

const database = require("./api/config/database");

const app = express();

const {
	PORT = 3000
} = process.env;


app.use(express.json());

app.use("/api/v1", cors(), apiRouter);

app.use(express.static(`${process.cwd()}/../app/dist/app`));

app.get("/", (req, res) => {
	res.sendFile(`/../app/dist/app/index.html`);
});

app.listen(PORT, () => {
	console.log(`The server is running in http://localhost:${PORT}`);
});