const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// POST /patients - Create a new patient
router.post('/patients', patientController.createPatient);

// GET /patients - Get all patients
router.get('/patients', patientController.getPatients);

module.exports = router;
