const Blog = require("../models/blogModel");
const fs = require("fs");
const path = require("path");

// 1. Get All Blogs
const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, blogs });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// 2. Create Blog
const createBlog = async (req, res) => {
    try {
        const imageFilename = req.file ? req.file.filename : "";
        const newBlog = new Blog({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            image: imageFilename,
            author: {
                name: req.body.authorName, 
                image: req.body.authorImage || ""   
            }
        });

        await newBlog.save();
        res.status(201).json({ success: true, message: "Blog Added Successfully", blog: newBlog });
        
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    // Authorization check HATA diya gaya hai
    
    // Delete image file
    const imagePath = path.join("uploads", blog.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await blog.deleteOne();
    return res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    return res.status(200).json({ success: true, blog });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const userBlogs = async (req, res) => {
  return res.status(400).json({ success: false, message: "Function not available without authentication" });
};


module.exports = {
  allBlogs,
  createBlog,
  deleteBlog,
  singleBlog,
  userBlogs
};