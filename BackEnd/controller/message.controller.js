const Message = require("../model/message.model.js");

// Fetch all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};

// Send a new message
const sendMessage = async (req, res) => {
  try {
    const { sender, email, message, isAdmin } = req.body;
    console.log(sender, email, message, isAdmin);

    if (!sender || !message) {
      return res
        .status(400)
        .json({ message: "Sender and message are required" });
    }

    const newMessage = new Message({ sender, email, message, isAdmin });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
};

module.exports = { getMessages, sendMessage };
