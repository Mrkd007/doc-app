const mongoose = require("mongoose");

// Schemas

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: [true, "Username is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "User exists"],
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
		},
		role: {
			type: String,
			default: "user",
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
		appointments: {
			type: Array,
			default: [],
		}
	},
	{ timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
