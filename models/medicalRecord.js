module.exports = (sequelize, DataTypes) => {
    const MedicalRecord = sequelize.define(
      'MedicalRecord',
      {
        record_id: {
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
        appointment_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        diagnosis: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        prescription: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        notes: {
          type: DataTypes.TEXT,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'MedicalRecords',
        timestamps: false,
      }
    );
  
    MedicalRecord.associate = (models) => {
      MedicalRecord.belongsTo(models.Patient, { foreignKey: 'patient_id', as: 'patient' });
      MedicalRecord.belongsTo(models.Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
      MedicalRecord.belongsTo(models.Appointment, { foreignKey: 'appointment_id', as: 'appointment' });
    };
  
    return MedicalRecord;
  };
  