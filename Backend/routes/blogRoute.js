const express = require("express");

const { upload } = require("../middlewares/multer.js");
const {
  allBlogs,
  createBlog,
  deleteBlog,
  userBlogs,
} = require("../controllers/blogController.js");

const router = express.Router();

router.post("/create",  upload.single("image"), createBlog);
router.get("/all", allBlogs);
router.delete("/delete/:id", deleteBlog);
router.get("/user/blogs", userBlogs);

module.exports = router;