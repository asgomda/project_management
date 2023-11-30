const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
	// Define your client schema fields here
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	// Add more fields as per your requirements
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
