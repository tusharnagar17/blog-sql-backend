const router = require("express").Router();
const { User } = require("./../model");

router.get("/", async (req, res) => {
  const data = await User.findAll();
  res.json(data);
});

router.post("/", async (req, res) => {
  try {
    const data = await User.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
