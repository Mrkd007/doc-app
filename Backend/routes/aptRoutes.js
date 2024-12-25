const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
	getAppointmentListController,
  addAppointmentController,
  updateAptController,
  deleteAptController,
} = require("../controllers/appointmentController");

const router = express.Router();

// routes
// GET APPOINTMENTS || GET
router.get( "/appointment-list/:id", authMiddleware, getAppointmentListController);

// POST APPOINTMENT || POST
router.post( "/add-appointment", authMiddleware, addAppointmentController);

// UPDATE APPOINTMENT || PUT
router.put("/update-appointment", authMiddleware, updateAptController);

// DELETE APPOINTMENT || DELETE
router.delete("/delete-appointment/:id", authMiddleware, deleteAptController);

module.exports = router;
