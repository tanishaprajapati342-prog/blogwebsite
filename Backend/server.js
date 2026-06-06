const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db.js');
require('dotenv').config();
const userRouter = require('./routes/userRoute.js');
const blogRouter=require('./routes/blogRoute.js')

const app = express();

// 1. Middleware Configuration
app.use(cors()); // Frontend (localhost:5173) se requests allow karne ke liye
app.use(express.json()); // Incoming JSON data ko pass karne ke liye
app.use(express.urlencoded({ extended: true }));

// 2. MongoDB Connection Setup
const PORT = process.env.PORT || 5000;

connectDB();
//api endpoints
app.use("/images", express.static("uploads"));
app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)

// 3. Sample Route (Testing ke liye)
app.get('/', (req, res) => {
    res.send('Backend Server is running perfectly');
});

// 4. Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
});