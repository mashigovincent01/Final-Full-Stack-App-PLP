const express = require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const express = require('express');
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set views directory for EJS templates
app.set('views', path.join(__dirname, 'views'));
// Middleware
app.use(express.json()); // to parse JSON data

// Use Routes
app.use('/api', userRoutes);
app.use('/api', patientRoutes);
app.use('/api', doctorRoutes);
app.use('/api', appointmentRoutes);

// Sync and start the server
db.sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
});
