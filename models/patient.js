module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define(
      'Patient',
      {
        patient_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        first_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        date_of_birth: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        gender: {
          type: DataTypes.ENUM('Male', 'Female', 'Other'),
          allowNull: false,
        },
        contact_number: {
          type: DataTypes.STRING(20),
        },
        address: {
          type: DataTypes.TEXT,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'Patients',
        timestamps: false,
      }
    );
  
    Patient.associate = (models) => {
      Patient.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    };
  
    return Patient;
  };
  