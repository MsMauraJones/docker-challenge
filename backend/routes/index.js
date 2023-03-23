const router = require("express").Router();

const postRouter = require("./post.js");

router.use("/posts", postRouter);

module.exports = router;
