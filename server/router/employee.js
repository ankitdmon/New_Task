const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');

// Employee routes
router.get('/performance-reviews', employeeController.getPerformanceReviews);
router.post('/feedBack', employeeController.submitFeedback);

module.exports = router;