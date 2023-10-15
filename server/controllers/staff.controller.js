const Teacher = require("../models/staff.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.create = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingTeacher = await Teacher.findOne({ email });

    if (existingTeacher) {
      return res.status(401).json({
        message: "A Teacher with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = new Teacher({
      username,
      email,
      password: hashedPassword,
    });

    await newTeacher.save();

    return res.status(201).json({
      message: "Teacher created successfully",
      Teacher: newTeacher,
    });
  } catch (error) {
    console.error("Error creating Teacher:", error);
    return res.status(500).json({ error: "Failed to create a Teacher" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingTeacher = await Teacher.findOne({ email });

    if (!existingTeacher) {
      return res.status(401).json({ message: "Teacher not found" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingTeacher.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const userId = Teacher._id;

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

