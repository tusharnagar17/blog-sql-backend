const router = require("express").Router();
const { User } = require("./../model");

router.get("/", (req, res) => {
  res.json({ message: "tushar" });
});

router.post("/", async (req, res) => {
  // username
  const tempUser = await User.findOne({
    where: { username: req.body.username },
  });
  console.log("console tempUser", tempUser);
  if (tempUser && tempUser.password == req.body.password) {
    res.json(tempUser);
  } else {
    return res.status(403).json({ messsage: "invalid username & password" });
  }
});

module.exports = router;
