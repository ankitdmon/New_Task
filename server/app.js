const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

const index = require('./router/index')

const Employee = require('./models/Employee');
const Review = require('./models/Review');

console.log('Employee Model Fields:', Employee.schema.obj);
console.log('Employee Model Fields:', Review.schema.obj);

// Middleware
app.use(express.json()); // Place this middleware above the route definitions

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!!' })
});

app.use("/", index);

// Start the server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = `mongodb://${process.env.MONGODB_URI}/Office_Task`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!!'))
  .catch((error) => console.error('Not Connected!!:', error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
