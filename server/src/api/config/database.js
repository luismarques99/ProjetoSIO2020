require("dotenv").config();

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const {
	MONGO_DB_HOST = "localhost",
	MONGO_DB_PORT = 27017,
	MONGO_DB_NAME = "tech4you",
	URI
} = process.env;

mongoose
	.connect(`mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
	// .connect(URI,
	// 	{
	// 		useNewUrlParser: true,
	// 		useUnifiedTopology: true
	// 	})
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => {
		console.log(err);
	});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;