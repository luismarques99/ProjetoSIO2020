const mongoose = require("mongoose");

const saftFileSchema = new mongoose.Schema({
	Header: {
		type: []
	},
	MasterFiles: {
		type: []
	},
	GeneralLedgerEntries: {
		type: []
	},
	SourceDocuments: {
		type: []
	}
});

module.exports = mongoose.model("SaftFile", saftFileSchema);