const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/users");

// @route   POST api/user/signup
// @desc    Signup a user
// @access  Public
router.post("/signup", signup);

// @route   POST api/user/login
// @desc    Login a user
// @access  Public
router.post("/login", login);

module.exports = router;
