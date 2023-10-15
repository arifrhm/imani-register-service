const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// Configure body parser
app.use(bodyParser.json());

// Define routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));

module.exports = app;