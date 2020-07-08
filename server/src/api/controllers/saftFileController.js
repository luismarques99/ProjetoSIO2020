const SaftFile = require("../models/SaftFile");

const findAll = async (req, res, next) => {
	const files = await SaftFile.find().catch(next);
	res.json({
		status: "Success",
		message: "Saft files list",
		data: files
	});
};

const findById = async (req, res, next) => {
	const file = await SaftFile.findById(req.params.fileId).catch(next);
	res.json({
		status: "Success",
		message: "Saft file found",
		data: file
	});
};

const create = async (req, res, next) => {
	const user = await new SaftFile(req.body).save().catch(next);
	res.json({
		status: "Success",
		message: "Saft file created",
		data: user
	});
};

module.exports = {
	findAll,
	findById,
	create
};