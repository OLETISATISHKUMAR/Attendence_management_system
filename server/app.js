const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())

module.exports = app;
