const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticated = async (req, res, next) => {
  console.log("Headers received:", req.headers);
  try {
    let token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: "Token missing", success: false });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY || process.env.JWT_SECRET);
    
    // 2. Database se User dhoondhein
    const user = await User.findById(decode.id || decode.userId); 
    if (!user) {
      return res.status(401).json({ message: "User not found", success: false });
    }

    req.user = user; // 3. Yahan fix hai
    next();
  } catch (error) {
    console.log("Auth Error:", error.message);
    return res.status(401).json({ message: "Token expired or invalid", success: false });
  }
};

module.exports = isAuthenticated;