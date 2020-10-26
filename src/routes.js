const { Router } = require("express");

const router = Router();

const usersController = require("./controllers/users");

router.get("/users", usersController.list);
router.post("/users", usersController.create);

module.exports = router;
