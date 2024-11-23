module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define(
      'UserRole',
      {
        role_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        role_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
      },
      {
        tableName: 'UserRoles',
        timestamps: false, // Disable automatic timestamps
      }
    );
  
    return UserRole;
  };
  