const mongoose = require("mongoose");

//appointment schema
const appointmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Patient name is required"],
		},
		phone: {
			type: String,
			required: [true, "Patient phone is required"],
		},
		email: {
			type: String,
			required: [true, "Patient email is required"],
		},
		gender: {
			type: String,
		},
		address: {
			type: Array,
		},
		doctorId: {
			type: String,
		},
		mode: {
			type: String,
		},
		date: {
			type: String,
		},
		time: {
			type: String,
		},
		reason: {
			type: String,
		},
	},
	{ timestamps: true },
);

// export
module.exports = mongoose.model("Appointment", appointmentSchema);
