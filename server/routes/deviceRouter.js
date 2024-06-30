const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");

router.get("/", deviceController.getAll);
router.get("/", deviceController.getOne);
router.post("/", deviceController.create);
router.delete("/", deviceController.delete);

module.exports = router;
