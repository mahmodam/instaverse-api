const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  tags: [String],
  selectedFile: {
    type: String,
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
