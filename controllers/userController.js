const db = require('../models'); // Import the models

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, password, role_id } = req.body;
    const user = await db.User.create({ email, password, role_id });
    res.status(201).json({ user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      include: [
        {
          model: db.UserRole,
          as: 'role',
        },
      ],
    });
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
