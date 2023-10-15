const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const PORT = process.env.PORT || 8000;
const studentRouter = require("./routes/student.route")
const teacherRouter = require("./routes/staff.route")
app.use(cors())
app.use(express.json())

app.use("/", studentRouter)
app.use("/", teacherRouter)
module.exports = app;
