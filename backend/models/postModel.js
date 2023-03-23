const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  photoUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
