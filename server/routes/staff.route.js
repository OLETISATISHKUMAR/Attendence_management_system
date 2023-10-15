const teacher = require("../controllers/staff.controller")
const express = require("express")

const route = express.Router()

route.use("/register-teacher", teacher.create)
route.use("/login-teacher", teacher.login)
module.exports = route
