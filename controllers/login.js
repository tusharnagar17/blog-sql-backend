const router = require("express").Router();
const { User } = require("./../model");

router.get("/", (req, res) => {
  try {
    res.json({ message: "tushar" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  // username
  try {
    const tempUser = await User.findOne({
      where: { username: req.body.username },
    });
    console.log("console tempUser", tempUser);
    if (tempUser && tempUser.password == req.body.password) {
      res.json(tempUser);
    } else {
      return res.status(403).json({ messsage: "invalid username & password" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
