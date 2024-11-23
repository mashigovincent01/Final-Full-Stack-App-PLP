module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define(
      'Appointment',
      {
        appointment_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        patient_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        doctor_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        appointment_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        appointment_time: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM('Pending', 'Confirmed', 'Completed', 'Cancelled'),
          defaultValue: 'Pending',
        },
        reason: {
          type: DataTypes.TEXT,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'Appointments',
        timestamps: false,
      }
    );
  
    Appointment.associate = (models) => {
      Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id', as: 'patient' });
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
    };
  
    return Appointment;
  };
  