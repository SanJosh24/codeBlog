// routes/auth-routes.js

const express    = require('express');
const profileRoutes = express.Router();

// require the user model & blog model !!!!
const user       = require('../models/user');
const blog       = require('../models/blogs')


profileRoutes.get('/create', (req, res, next) => {

});

module.exports = profileRoutes;


