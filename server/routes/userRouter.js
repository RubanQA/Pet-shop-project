const Router = require("express");
const router = new Router();
const UserController = require("../controllers/userController");
const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.checkUser, (req, res) => {
  res.json({ message: "User is already logged" });
});

module.exports = router;
