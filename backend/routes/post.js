const {
  getPosts,
  addPost,
  deletePost,
} = require("../controllers/postController");

const router = require("express").Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

module.exports = router;
