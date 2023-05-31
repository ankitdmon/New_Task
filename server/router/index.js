const express = require('express');
const app = express();
const adminRouter = require('./admin');
const employeeRouter = require('./employee')

app.use('/admin', adminRouter);
app.use('/employee', employeeRouter)


module.exports = app;