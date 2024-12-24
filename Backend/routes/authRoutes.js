const express = require("express");
const {
	registerController,
	loginController,
	addDoctorController,
	loginDocController,
} = require("../controllers/authController");

const router = express.Router();

// routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// ADD_DOC || POST
router.post("/add-doctor", addDoctorController);

// ADD_DOC || POST
router.post("/login-doctor", loginDocController);

module.exports = router;
