const express = require('express');
const setupSwagger = require('./swagger'); // Import the Swagger setup

const app = express();
app.use(express.json());

// Setup Swagger
setupSwagger(app); // This mounts the Swagger UI at /api-docs

// Your routes (example)
const userRoutes = require('./api/userRoutes');
const jobPostRoutes = require('./api/jobPostRoutes');
const applicationRoutes = require('./api/applicationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobPostRoutes);
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API docs at http://localhost:${PORT}/api-docs`);
});
