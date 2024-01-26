const router = require("express").Router();
const { Blog } = require("./../model");

// GET

router.get("/", async (req, res) => {
  const data = await Blog.findAll();
  // console.log(JSON.stringify(data, null, 2));
  res.json(data);
});
// GET by id
router.get("/:id", async (req, res) => {
  const data = await Blog.findByPk(req.params.id);
  if (data) {
    res.json(data);
  }
  res.status(404).end();
});

// POST
router.post("/", async (req, res) => {
  console.log(req.body);
  const data = await Blog.create(req.body);
  res.status(201).json(data);
});

// DEL
router.delete("/:id", async (req, res) => {
  const data = await Blog.findByPk(req.params.id);
  if (data) {
    await data.destroy();
  }
  res.status(204).end();
});
// PUT => update like of post
router.put("/:id", async (req, res) => {
  const post = await Blog.findByPk(req.params.id);
  if (post) {
    post.likes = req.body.likes;
    await post.save();
    res.json(post);
  } else {
    res.status(404).end();
  }
});
module.exports = router;
