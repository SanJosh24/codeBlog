// routes/auth-routes.js

const express = require('express');
const messageRoutes = express.Router();
const mongoose = require('mongoose');

// require the user model & blog model !!!!

const user = require('../models/user');
const blog = require('../models/blogs');







module.exports = messageRoutes;