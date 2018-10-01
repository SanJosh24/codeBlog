const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const passport = require("passport");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  blogs: Array,
  clans: Array,
  favoriteUser: Array,
  imageurl: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const user = mongoose.model("user", userSchema);

module.exports = user;