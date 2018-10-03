const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  title: String,
  description: String,
  from: String,
  to: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const message = mongoose.model("message", messageSchema);

module.exports = message;