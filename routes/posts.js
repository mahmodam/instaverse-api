const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/", getPosts);

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/", auth, createPost);

// @route   PATCH api/posts
// @desc    Update a post
// @access  Private
router.put("/:id", auth, updatePost);

// @route   DELETE api/posts
// @desc    Delete a post
// @access  Private
router.delete("/:id", auth, deletePost);

// // @route   PATCH api/posts/likePost
// // @desc    Like a post
// // @access  Private
router.put("/:id/likePost", auth, likePost);

module.exports = router;
