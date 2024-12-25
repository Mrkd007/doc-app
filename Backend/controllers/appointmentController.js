const appointmentModel = require("../models/appointmentModel");
const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// ADD APPOINTMENT
const addAppointmentController = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      gender,
      address,
      doctorId,
      mode,
      date,
      time,
      reason,
    } = req.body;
    // validation
    if (
      !name ||
      !email ||
      !phone ||
      !phone ||
      !doctorId ||
      !mode ||
      !date ||
      !time ||
      !reason
    ) {
      return res.status(500).send({
        success: false,
        message: "Please provide all field data",
      });
    }
    // create appointment
    const appointment = await appointmentModel.create({
      name,
      email,
      phone,
      gender,
      address,
      doctorId,
      mode,
      date,
      time,
      reason,
    });

    // update user for the appointment
    const userData = await userModel.findOne({ email });

    if (userData) {
      userData.appointments.push(appointment._id);
      await userData.save();
    } 
    
    return res.status(201).send({
      success: true,
      message: "Successfully booked the Appointment",
    });
  } catch (error) {
    console.log("appointment error --> ".bgBlue, error);
    res.status(500).send({
      success: false,
      message: "Error in booking Appointment",
      error,
    });
  }
};

// GET APPOINTMENT LIST
const getAppointmentListController = async (req, res) => {
  try {
    // find user
    let userData = await userModel.findOne({_id: req.params.id});
    let docData = await doctorModel.findOne({_id: req.params.id});
    let appointments = await appointmentModel.find({});
    // filter appointments for user
    if(docData?.role === 'admin') {
      appointments = appointments;
    } else if(docData?.role === 'doctor') {
      appointments = appointments.filter((doc) => doc.doctorId === docData._id.toString());
    } else if(userData?.role === 'user') {
      appointments = appointments.filter((doc) => userData.appointments.indexOf(doc._id) !== -1);
    } else {
      appointments = [];
    }
    res.status(200).send({
      success: true,
      message: "Appointments list fetched successfully",
      data: appointments,
    });
  } catch (error) {
    console.log("Appointment error --> ".bgBlue, error);
    res.status(500).send({
      success: false,
      message: "Error in fetching appointments list",
      error,
    });
  }
};

// UPDATE APPOINTMENT INFO
const updateAptController = async (req, res) => {
  try {
    // find appointment
    const aptData = await appointmentModel.findOne({ _id: req.body.updateId });

    // invalidate appointment
    if (!aptData) {
      return res.status(404).send({
        success: false,
        message: "Appointment not found",
      });
    }

    // update appointment
    const aptDataArr = Object.keys(aptData._doc);
    aptDataArr.forEach((key) => {
      if(req.body[key])
        aptData[key] = req.body[key];
    });

    // save appointment
    await aptData.save();
    // resp
    res.status(200).send({
      success: true,
      message: "Appointment updated successfully",
    });
  } catch (error) {
    console.log("Apt error --> ".bgBlue, error);
    res.status(500).send({
      success: false,
      message: "Error in updating appointment details",
      error,
    });
  }
};


// DELETE USER PROFILE
const deleteAptController = async (req, res) => {
  try {
    // find appointment
    const aptData = await appointmentModel.findById({ _id: req.params.id });
    console.log("aptData", aptData, req.params.id);
    // validate appointment
    if (!aptData) {
      return res.status(404).send({
        success: false,
        message: "Appointment not found",
      });
    }
    // delete appointment
    await appointmentModel.findByIdAndDelete({ _id: req.params.id });
    // resp
    return res.status(200).send({
      success: true,
      message: "The appointment has been deleted successfully",
    });
  } catch (error) {
    console.log("Apt error --> ".bgBlue, error);
    return res.status(500).send({
      success: false,
      message: "Error in delete appointment api",
      error,
    });
  }
};

module.exports = {
  addAppointmentController,
  getAppointmentListController,
  updateAptController,
  deleteAptController,
}