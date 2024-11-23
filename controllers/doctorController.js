const db = require('../models'); // Import the models

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const { user_id, first_name, last_name, specialization, contact_number, address } = req.body;
    const doctor = await db.Doctor.create({
      user_id,
      first_name,
      last_name,
      specialization,
      contact_number,
      address,
    });
    res.status(201).json({ doctor });
  } catch (error) {
    console.error('Error creating doctor:', error);
    res.status(500).json({ error: 'Failed to create doctor' });
  }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await db.Doctor.findAll({
      include: [
        {
          model: db.User,
          as: 'user',
        },
      ],
    });
    res.status(200).json({ doctors });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
};
