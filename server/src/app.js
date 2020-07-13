require("dotenv").config();

const path = require("path");
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

app.use(express.static(path.join(process.cwd(), "..", "App", "dist", "app")));

app.get("/*", (req, res) => {
	try {
		res.sendFile(path.join(process.cwd(), "..", "App", "dist", "app", "index.html"));
	} catch (err) {
		console.log(err);
	}
});

app.listen(PORT, () => {
	console.log(`The server is running in http://localhost:${PORT}`);
});