const db = require('../models'); // Import the models

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const { user_id, first_name, last_name, date_of_birth, gender, contact_number, address } = req.body;
    const patient = await db.Patient.create({
      user_id,
      first_name,
      last_name,
      date_of_birth,
      gender,
      contact_number,
      address,
    });
    res.status(201).json({ patient });
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Failed to create patient' });
  }
};

// Get all patients
exports.getPatients = async (req, res) => {
  try {
    const patients = await db.Patient.findAll({
      include: [
        {
          model: db.User,
          as: 'user',
        },
      ],
    });
    res.status(200).json({ patients });
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};
