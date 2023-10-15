const student = require("../controllers/student.controller")
const express = require("express")

const route = express.Router()

route.use("/register-student", student.create)
route.use("/login-student", student.login)
module.exports = route
