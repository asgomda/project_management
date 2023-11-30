const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	// Define your Project schema fields here
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	phone: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed"],
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Client",
	},
	// Add more fields as per your requirements
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
