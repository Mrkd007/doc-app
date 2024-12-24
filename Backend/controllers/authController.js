const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const JWT = require("jsonwebtoken");

// REGISTER
const registerController = async (req, res) => {
	try {
		const { userName, email, password, phone, address, answer } = req.body;
		// validation
		if (!userName || !email || !password || !phone || !answer) {
			return res.send(500).send({
				success: false,
				message: "Please provide all field data",
			});
		}
		// check user
		const existing = await userModel.findOne({ email });
		if (existing) {
			return res.send(500).send({
				success: false,
				message: "User already exists",
			});
		}
		// password hashing
		const hashPassword = await bcrypt.hash(password, salt);
		// create user
		const user = await userModel.create({
			userName,
			email,
			password: hashPassword,
			phone,
			address,
			answer,
		});
		res.status(201).send({
			success: true,
			message: "Successfully registered",
		});
	} catch (error) {
		console.log("Auth error --> ".bgBlue, error);
		res.send(500).send({
			success: false,
			message: "Error in register api",
			error,
		});
	}
};

// LOGIN
const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		// validation
		if (!email || !password) {
			return res.status(500).send({
				success: false,
				message: "Please provide email or password",
			});
		}

		// check user
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not foundh",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(500).send({
				success: false,
				message: "Invalid credentials",
			});
		}
		// token
		const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		user.password = undefined;
		return res.status(200).send({
			success: true,
			message: "Login Successfully",
			token,
			user,
		});
	} catch (error) {
		console.log("Auth error --> ".bgBlue, error);
		return res.send(500).send({
			success: false,
			message: "Error in login api",
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
			return res.send(500).send({
				success: false,
				message: "Please provide all field data",
			});
		}
		// check existance
		const existing = await doctorModel.findOne({ email });
		if (existing) {
			return res.send(500).send({
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
		res.status(201).send({
			success: true,
			message: "Successfully registered",
		});
	} catch (error) {
		console.log("Auth error --> ".bgBlue, error);
		res.send(500).send({
			success: false,
			message: "Error in register api",
			error,
		});
	}
};

// LOGIN DOCTOR
const loginDocController = async (req, res) => {
	try {
		const { email, password } = req.body;
		// validation
		if (!email || !password) {
			return res.status(500).send({
				success: false,
				message: "Please provide email or password",
			});
		}

		// check user
		const user = await doctorModel.findOne({ email });
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User not foundh",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(500).send({
				success: false,
				message: "Invalid credentials",
			});
		}
		// token
		const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		user.password = undefined;
		return res.status(200).send({
			success: true,
			message: "Login Successfully",
			token,
			user,
		});
	} catch (error) {
		console.log("Auth error --> ".bgBlue, error);
		return res.send(500).send({
			success: false,
			message: "Error in login api",
			error,
		});
	}
};

module.exports = {
	registerController,
	loginController,
	addDoctorController,
	loginDocController,
};
