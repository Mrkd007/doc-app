const express = require("express");
const {
	getUserController,
	updateUserController,
	resetPasswordController,
	updatePasswordController,
	deleteProfileController,
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
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;