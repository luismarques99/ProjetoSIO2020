const fs = require("fs");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();

let xmlResult = "";

filename = "SAFTPT1_04_01_example";

fs.readFile(`${filename}.xml`, (err, data) => {
	parser.parseString(data, (err, result) => {
		console.dir(result);
		fs.writeFileSync(`${filename}.json`, JSON.stringify(result));
		console.log("Done!");
	});
});
