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
		},
		email: {
			type: String,
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
		slot: {
			type: Date,
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
