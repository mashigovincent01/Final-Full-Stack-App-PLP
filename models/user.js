module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        user_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'Users',
        timestamps: false,
      }
    );
  
    User.associate = (models) => {
      User.belongsTo(models.UserRole, { foreignKey: 'role_id', as: 'role' });
    };
  
    return User;
  };
  