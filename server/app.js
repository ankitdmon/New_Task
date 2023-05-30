const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

const Employee = require('./models/Employee');

console.log('Employee Model Fields:', Employee.schema.obj);

// Middleware
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = `mongodb://${process.env.MONGODB_URI}/Office_Task`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!!'))
  .catch((error) => console.error('Not Connected!!:', error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
