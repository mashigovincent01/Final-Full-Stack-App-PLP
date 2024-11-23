const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// POST /appointments - Create a new appointment
router.post('/appointments', appointmentController.createAppointment);

// GET /appointments - Get all appointments
router.get('/appointments', appointmentController.getAppointments);

// GET /appointments/patient/:patientId - Get appointments for a specific patient
router.get('/appointments/patient/:patientId', appointmentController.getAppointmentsForPatient);

// GET /appointments/doctor/:doctorId - Get appointments for a specific doctor
router.get('/appointments/doctor/:doctorId', appointmentController.getAppointmentsForDoctor);

// PUT /appointments/:appointmentId/status - Update appointment status
router.put('/appointments/:appointmentId/status', appointmentController.updateAppointmentStatus);

module.exports = router;
