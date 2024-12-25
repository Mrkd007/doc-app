const express = require("express");
const {
	getUserController,
	updateUserController,
	resetPasswordController,
	updatePasswordController,
	deleteProfileController,
	getDoctorListController,
	addDoctorController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE USER || PUT
router.put("/updateUser", authMiddleware, updateUserController);

// UPDATE PASSWORD || POST
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD || POST
router.post("/resetPassword", authMiddleware, resetPasswordController);

// DELETE USER || DELETE
router.delete("/deleteUser/:id/:type", authMiddleware, deleteProfileController);

// ADD_DOC || POST
router.post("/add-doctor", authMiddleware, addDoctorController);

// GET_DOC || GET
router.get("/doc-list", authMiddleware, getDoctorListController);

module.exports = router;
