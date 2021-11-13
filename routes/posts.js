const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
//POST -> localhost:5000/api/posts
//If creating something, use "post" method
router.post("/", async (req, res) => {
    //Post model
    //req.body - everything
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);//everything okay
  } catch (err) {
    res.status(500).json(err);//500 means something went wrong
  }
});

//UPDATE POST
//PUT -> localhost:5000/api/posts/34567893456787654
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //Check if it is our own post
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            //set new properties
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);//everything works
      } catch (err) {
        res.status(500).json(err);//if there is error
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS

//"/?user="John" ->Fetches all posts by John
//"/?cat="music" ->Fetches all posts with category music

////GET -> localhost:5000/api/posts/
////GET -> localhost:5000/api/posts?user=jane
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;//let because it is changeable
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          //Look at this category array and assign it to post
          $in: [catName],
        },
      });
    } else {
      //no username and no category name, fetch all posts
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;