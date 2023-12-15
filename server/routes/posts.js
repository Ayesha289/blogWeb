const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { body, validationResult } = require("express-validator");

//fetch all the Posts
router.get("/fetchPosts", async (req, res, err) => {
  try {
    const Posts = await Post.find();
    res.json(Posts);
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//create Posts
router.post("/addPost", async (req, res, err) => {
  try {
    const { title, content } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const NewPost = new Post({
      title,
      content,
    });
    const savedPost = await NewPost.save();
    res.json(savedPost);
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

//fetch specific posts
router.get("/:id", async (req, res, err) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
