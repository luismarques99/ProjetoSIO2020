const fs = require("fs");
const xml2js = require("xml2js");

const parser = new xml2js.Parser();

filename = "SAFT_100_01-01-2020_31-12-2020_v2";

fs.readFile(`${filename}.xml`, (err, data) => {
	parser.parseString(data, (err, result) => {
		console.dir(result);
		fs.writeFileSync(`${filename}.json`, JSON.stringify(result));
		console.log("Done!");
	});
});
