const express = require("express");
const { login, register } = require("../controllers/userControoler.js");
const { upload } = require("../middlewares/multer.js");

const router = express.Router();

router.post("/register", upload.single("image"), register);
router.post("/login", login);

// CommonJS format mein export karne ke liye
module.exports = router;