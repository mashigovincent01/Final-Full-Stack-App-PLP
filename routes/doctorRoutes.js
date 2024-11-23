const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// POST /doctors - Create a new doctor
router.post('/doctors', doctorController.createDoctor);

// GET /doctors - Get all doctors
router.get('/doctors', doctorController.getDoctors);

module.exports = router;
