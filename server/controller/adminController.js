const Employee = require("../models/Employee");

// Add an employee
exports.addEmployee = async (req, res) => {
  console.log("hit");
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
    console.log(res.json(employee));
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
    console.log(error);
  }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const employee = await Employee.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};
