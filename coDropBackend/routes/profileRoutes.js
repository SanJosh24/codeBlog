// routes/auth-routes.js

const express = require('express');
const profileRoutes = express.Router();
const mongoose = require('mongoose');

// require the user model & blog model !!!!

const user = require('../models/user');
const blog = require('../models/blogs');

// GET route => to get user information

profileRoutes.get('/profile/:id', (req, res, next) => {
	user
		.findById(req.user._id)
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});

// GET route => to get all the blogs created by user

profileRoutes.get('/blogs', (req, res, next) => {
	blog
		.find()
		.then((blogs) => {
			res.json(blogs);
		})
		.catch((err) => {
			res.json(err);
		});
});

// POST route => to have the user post a blog

profileRoutes.post('/profile/post', (req, res, next) => {
	blog
		.create({
			title: req.body.title,
			description: req.body.description,
			owner: req.user._id,
      likes: [],
      public: true
		})
		.then((response) => {
			console.log('---------------', response);
			user
				.findByIdAndUpdate(req.user._id, { $push: { blogs: response._id } })
				.then((theResponse) => {
					console.log('====================', theResponse);
					res.json(theResponse);
				})
				.catch((err) => {
					res.json(err);
				});
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});

// POST route => to have the user post a PRIVATE blog

profileRoutes.post('/profile/postPrivate', (req, res, next) => {
	blog
		.create({
			title: req.body.title,
			description: req.body.description,
			owner: req.user._id,
      likes: [],
      public: false
		})
		.then((response) => {
			console.log('---------------', response);
			user
				.findByIdAndUpdate(req.user._id, { $push: { blogs: response._id } })
				.then((theResponse) => {
					console.log('====================', theResponse);
					res.json(theResponse);
				})
				.catch((err) => {
					res.json(err);
				});
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = profileRoutes;