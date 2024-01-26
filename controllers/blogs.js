const router = require("express").Router();
const { Blog } = require("./../model");

// GET

router.get("/", async (req, res) => {
  try {
    const data = await Blog.findAll();
    // console.log(JSON.stringify(data, null, 2));
    res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// GET by id
router.get("/:id", async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id);
    if (data) {
      res.json(data);
    }
    res.status(404).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Blog.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// DEL
router.delete("/:id", async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id);
    if (data) {
      await data.destroy();
    }
    res.status(204).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// PUT => update like of post
router.put("/:id", async (req, res) => {
  try {
    const post = await Blog.findByPk(req.params.id);
    if (post) {
      post.likes = req.body.likes;
      await post.save();
      res.json(post);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
