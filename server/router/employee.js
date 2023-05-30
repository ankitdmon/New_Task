const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Employee routes
router.get('/performance-reviews', employeeController.getPerformanceReviews);
router.post('/performance-reviews/:id/feedback', employeeController.submitFeedback);

module.exports = router;