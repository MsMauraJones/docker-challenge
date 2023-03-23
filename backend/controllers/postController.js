const Post = require("../models/postModel");

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

const addPost = async (req, res) => {
  if (req.body.photoUrl && req.body.description) {
    const post = new Post();
    post.photoUrl = req.body.photoUrl;
    post.description = req.body.description;
    try {
      await post.save();
      res.json(post);
    } catch (e) {
      console.log(e);
      res.json(e);
    }
  } else {
    res.json({ error: "All Fields are required" });
  }
};

const deletePost = async (req, res) => {
  if (req.params.id) {
    const post = await Post.deleteOne({ _id: req.params.id });
    res.json(post);
  }
};

module.exports = {
  getPosts,
  addPost,
  deletePost,
};
