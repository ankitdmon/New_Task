const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
  try {
    const { userName, fullName, email, mobile, profilePic, role } = req.body;
    const employee = await Employee.create({
      userName,
      fullName,
      email,
      mobile,
      profilePic,
      role,
    });
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};