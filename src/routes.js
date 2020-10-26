const { Router } = require("express");

const router = Router();

const usersController = require("./controllers/users");
const produtosController = require("./controllers/produtos");

router.get("/users/:id", usersController.list);
router.post("/users", usersController.create);
router.get("/users_list", usersController.listall);
router.put("/update/:id", usersController.update);
router.delete("/delete/:id", usersController.delete);

router.get("/produtos", produtosController.list);
router.post("/produtos", produtosController.create);

module.exports = router;
