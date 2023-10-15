const Student = require("../models/students.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(401).json({
        message: "A student with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      username,
      email,
      password: hashedPassword,
    });

    await newStudent.save();

    return res.status(201).json({
      message: "Student created successfully",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).json({ error: "Failed to create a student" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingStudent = await Student.findOne({ email });

    if (!existingStudent) {
      return res.status(401).json({ message: "Student not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingStudent.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const userId = existingStudent._id;

    // Create a JWT token
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Failed to log in" });
  }
};

