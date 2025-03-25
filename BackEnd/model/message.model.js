const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true }, // Client's name or admin
  email: { type: String }, // Client's email (optional for admin)
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false }, // To track admin messages
});

module.exports = mongoose.model("Message", messageSchema);
