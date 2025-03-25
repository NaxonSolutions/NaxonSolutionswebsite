const User = require("../model/admin.model.js");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user with case-insensitive search
    const user = await User.findOne({
      username: { $regex: new RegExp("^" + username + "$", "i") },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginAdmin };
