const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  description: String,
  owner: Array,
  favoritedBy: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;