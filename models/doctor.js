module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define(
      'Doctor',
      {
        doctor_id: {
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
        specialization: {
          type: DataTypes.STRING(100),
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
        tableName: 'Doctors',
        timestamps: false,
      }
    );
  
    Doctor.associate = (models) => {
      Doctor.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    };
  
    return Doctor;
  };
  