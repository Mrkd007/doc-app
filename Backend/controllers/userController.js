const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const JWT = require("jsonwebtoken");

// GET USER INFO
const getUserController = async (req, res) => {
	try {
		// find user
		const user = await userModel.findById({ _id: req.body.id });
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found",
			});
		}
		//  hiden password
		user.password = undefined;
		// resp
		res.status(200).send({
			success: true,
			message: "User data fetched successfully",
			user,
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in fetching user details",
			error,
		});
	}
};

// UPDATE USER INFO
const updateUserController = async (req, res) => {
	try {
		const { data, type } = req.body;
		// find user
		const userModel = type === "doctor" ? doctorModel : userModel;
		const user = await userModel.findOne({ _id: data.id });
		// validate user
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found",
			});
		}
		//  update user
		const userdataArr = Object.keys(user._doc);
		userdataArr.forEach((key) => {
			if(data[key])
				user[key] = data[key];

		});
		// save user
		await user.save();
		// resp
		res.status(200).send({
			success: true,
			message: "User updated successfully",
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in updating user details",
			error,
		});
	}
};

// UPDATE USER PASSWORD
const updatePasswordController = async (req, res) => {
	try {
		// find user
		const user = await userModel.findById({ _id: req.body.id });
		// validate user
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found",
			});
		}
		// get data from user
		const { oldPassword, newPassword } = req.body;
		// validation
		if (!oldPassword || !newPassword) {
			return res.status(500).send({
				success: false,
				message: "Please provide old password and new password",
			});
		}
		// check user password and compare password
		const isMatch = await bcrypt.compare(oldPassword, user.password);
		if (!isMatch) {
			return res.status(404).send({
				success: false,
				message: "Invalid old password",
			});
		}

		//  update password
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		// save user
		await user.save();
		// resp
		res.status(200).send({
			success: true,
			message: "Password updated successfully",
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in update password api",
			error,
		});
	}
};

// RESET USER PASSWORD
const resetPasswordController = async (req, res) => {
	try {
		const { email, newPassword, answer } = req.body;
		// validation
		if (!email || !newPassword || !answer) {
			return res.status(500).send({
				success: false,
				message: "Please provide email, new password and answer",
			});
		}
		// find user
		const user = await userModel.findOne({ email, answer });
		// validate user
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found or invalid answer",
			});
		}
		//  update password
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		// save user
		await user.save();
		// resp
		res.status(200).send({
			success: true,
			message: "Password reset successfully",
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in reset password api",
			error,
		});
	}
};

const deleteProfileController = async (req, res) => {
	try {
		const { id, type } = req.params;
		// find user
		const userModel = type === "doctor" ? doctorModel : userModel;
		const user = await userModel.findById({ _id: id });
		// validate user
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not found",
			});
		}
		// delete user
		await userModel.findByIdAndDelete({ _id: id });
		// resp
		return res.status(200).send({
			success: true,
			message: "The accoount has been deleted successfully",
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		return res.status(500).send({
			success: false,
			message: "Error in delete profile api",
			error,
		});
	}
};

// REGISTER DOCTOR
const addDoctorController = async (req, res) => {
	try {
		const {
			userName,
			email,
			password,
			phone,
			role,
			profile,
			address,
			gender,
			speciality,
			rating,
			designation,
			about,
		} = req.body;
		// validation
		if (
			!userName ||
			!email ||
			!password ||
			!phone ||
			!role ||
			!speciality ||
			!designation ||
			!gender
		) {
			return res.status(500).send({
				success: false,
				message: "Please provide all field data",
			});
		}
		// check existance
		const existing = await doctorModel.findOne({ email });
		if (existing) {
			return res.status(500).send({
				success: false,
				message: "Doctor profile already exists",
			});
		}
		// password hashing
		const hashPassword = await bcrypt.hash(password, salt);
		// create doctor profile
		const user = await doctorModel.create({
			userName,
			email,
			password: hashPassword,
			phone,
			role,
			profile,
			address,
			gender,
			speciality,
			rating,
			designation,
			about: about || "NA",
		});
		return res.status(201).send({
			success: true,
			message: "Successfully Added Doctor",
		});
	} catch (error) {
		console.log("Auth error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in adding doc api",
			error,
		});
	}
};

// GET DOCTORS LIST
const getDoctorListController = async (req, res) => {
	try {
		// find user
		let docData = await doctorModel.find({});

		//  hiden password
		if (docData) {
			docData = docData.filter((doc) => {
				if(doc.role === 'doctor') {
					doc.password = undefined;
					return true
				} else return false;
			});
		} else {
			docData = [];
		}
		// resp
		res.status(200).send({
			success: true,
			message: "Doctors list fetched successfully",
			data: docData,
		});
	} catch (error) {
		console.log("User error --> ".bgBlue, error);
		res.status(500).send({
			success: false,
			message: "Error in fetching doctors list",
			error,
		});
	}
};

module.exports = {
	getUserController,
	updateUserController,
	resetPasswordController,
	updatePasswordController,
	deleteProfileController,
	getDoctorListController,
	addDoctorController,
};
