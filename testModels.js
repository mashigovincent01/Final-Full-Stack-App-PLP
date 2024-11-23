const db = require('./models'); // Import models and Sequelize instance

(async () => {
  try {
    // Sync models with the database
    await db.sequelize.sync({ force: true }); // WARNING: Deletes all data and recreates tables
    console.log('All models were synchronized successfully.');

    // Test creating a role
    const adminRole = await db.UserRole.create({ role_name: 'Admin' });
    console.log('Created UserRole:', adminRole.toJSON());

    // Test creating a user
    const adminUser = await db.User.create({
      email: 'admin@example.com',
      password: 'securepassword',
      role_id: adminRole.role_id,
    });
    console.log('Created User:', adminUser.toJSON());
  } catch (error) {
    console.error('Error testing models:', error);
  } finally {
    await db.sequelize.close();
  }
})();
