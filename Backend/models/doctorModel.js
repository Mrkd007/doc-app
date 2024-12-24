const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: [true, "Username is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "Doctor already exists"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		address: {
			type: Array,
		},
		phone: {
			type: String,
			required: [true, "Phone no. is required"],
		},
		role: {
			type: String,
			default: "doctor",
			enum: ["user", "admin", "doctor"],
			required: [true, "User role is required"],
		},
		profile: {
			type: String,
			default:
				"https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
		},
		gender: {
			type: String,
			default: "male",
			enum: ["male", "female", "others"],
			required: [true, "gender is required"],
		},
		speciality: {
			type: String,
			required: [true, "Doctor speciality is required"],
		},
		rating: {
			type: Number,
			min: 1,
			max: 5,
		},
		designation: {
			type: String,
			required: [true, "Doctor designation is required"],
		},
		about: {
			type: String,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Doctor", doctorSchema);
