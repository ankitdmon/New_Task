const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Admin routes
router.post('/addEmployees', adminController.addEmployee);
router.put('/employees/:id', adminController.updateEmployee);
router.delete('/employees/:id', adminController.deleteEmployee);
router.get('/employees', adminController.getAllEmployees);
router.get('/employees/:id', adminController.getEmployeeById);

module.exports = router;