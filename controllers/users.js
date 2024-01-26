const router = require("express").Router();
const { User } = require("./../model");

// listing all users
router.get("/", async (req, res) => {
  try {
    const allUser = await User.findAll();
    res.json(allUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// adding a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// getting user via id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// updating user name via /:username
router.put("/:username", async (req, res) => {
  try {
    const putUser = await User.findOne({
      where: { username: req.params.username },
    });

    if (putUser) {
      putUser.username = req.body.username;
      await putUser.save();
      res.json(putUser);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
