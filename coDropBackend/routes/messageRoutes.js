// routes/auth-routes.js

const express = require('express');
const messageRoutes = express.Router();
const mongoose = require('mongoose');

// require the user model & blog model !!!!

const user = require('../models/user');
const blog = require('../models/blogs');
const Message = require('../models/message')

messageRoutes.get('/profile/:id/messages', (req, res, next) => {
	user
		.findById(req.user._id).populate('messages')
		.then((res) => {
			res.json(res);
		})
		.catch(next);
});

messageRoutes.post('/profile/:id/messages', (req, res, next) => {
	Message
		.create({
			title: req.body.title,
			body: req.body.body,
			senderId: req.user._id,
			recieverId: req.params.id
		})
		.then((response) => {
			user
				.findByIdAndUpdate(req.user._id, { $push: { messages: response._id } })
				.then((theResponse) => {
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

// PUT route => to update a specific blog

// messageRoutes.put('/profile/:id/messages', (req, res, next) => {
// 	user
// 		.findByIdAndUpdate(req.params.id.populate('messages'), req.body)
// 		.then(() => {
// 			res.json({ message: `blog with ${req.params.id} is updated successfully.` });
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });


module.exports = messageRoutes;