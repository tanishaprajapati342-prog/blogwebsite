const User = require("../models/userModel.js"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      image: image_filename,
    });
    
    res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid password", success: false });
    }
    

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    
    res
      .status(200)
      .json({ message: "Login successful", success: true, token, user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// CommonJS format mein saare functions ko ek sath export karne ke liye
module.exports = {
  register,
  login,
};