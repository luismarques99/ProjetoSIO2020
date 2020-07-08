const mongoose = require("mongoose");

const saftFileSchema = new mongoose.Schema({
	name: {
		type: String
	},
	nif: {
		type: Number
	},
	array: {
		type: []
	},
	Header: {
		type: []
	},
	MasterFiles: {
		type: []
	},
	GeneralLedgerEntries: {
		type: []
	}
});

module.exports = mongoose.model("SaftFile", saftFileSchema);