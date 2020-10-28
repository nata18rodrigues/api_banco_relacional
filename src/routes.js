const { Router } = require("express");

const router = Router();

const usersController = require("./controllers/users");
const produtosController = require("./controllers/produtos");

router.get("/select/:id", usersController.list);
router.get("/consult", usersController.listall);
router.post("/create", usersController.create);
router.put("/update/:id", usersController.update);
router.delete("/delete/:id", usersController.delete);

router.get("/select_products/:id", produtosController.listall);
router.get("/consult_products", produtosController.list);
router.post("/create_products", produtosController.create);
router.put("/update_products/:id", produtosController.update);
router.delete("/delete_products/:id", produtosController.delete);

module.exports = router;
