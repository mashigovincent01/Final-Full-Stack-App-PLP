const db = require('../models'); // Import the models

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patient_id, doctor_id, appointment_date, appointment_time, reason } = req.body;
    const appointment = await db.Appointment.create({
      patient_id,
      doctor_id,
      appointment_date,
      appointment_time,
      reason,
    });
    res.status(201).json({ appointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Failed to create appointment' });
  }
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await db.Appointment.findAll({
      include: [
        {
          model: db.Patient,
          as: 'patient',
        },
        {
          model: db.Doctor,
          as: 'doctor',
        },
      ],
    });
    res.status(200).json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};

// Get appointments for a specific patient
exports.getAppointmentsForPatient = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const appointments = await db.Appointment.findAll({
      where: { patient_id: patientId },
      include: [
        {
          model: db.Doctor,
          as: 'doctor',
        },
      ],
    });
    res.status(200).json({ appointments });
  } catch (error) {
    console.error('Error fetching patient appointments:', error);
    res.status(500).json({ error: 'Failed to fetch patient appointments' });
  }
};

// Get appointments for a specific doctor
exports.getAppointmentsForDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const appointments = await db.Appointment.findAll({
      where: { doctor_id: doctorId },
      include: [
        {
          model: db.Patient,
          as: 'patient',
        },
      ],
    });
    res.status(200).json({ appointments });
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    res.status(500).json({ error: 'Failed to fetch doctor appointments' });
  }
};

// Update appointment status (e.g., Pending, Confirmed, Completed, or Cancelled)
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId;
    const { status } = req.body;
    const appointment = await db.Appointment.update(
      { status },
      { where: { appointment_id: appointmentId } }
    );

    if (appointment[0] === 0) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment status updated successfully' });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({ error: 'Failed to update appointment status' });
  }
};
