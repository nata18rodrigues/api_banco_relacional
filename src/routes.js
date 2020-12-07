const { Router } = require("express");

const router = Router();

const multer = require("multer");
const multerConfig = require('./config/multer');

const usersController = require("./controllers/users");
const addressController = require("./controllers/address");
const techControler = require("./controllers/tech");


router.get("/users", usersController.listall);
router.post("/users", multer(multerConfig).single("file") ,usersController.create);
router.get("/users/paginados", usersController.paginados);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.delete);


router.get("/users/:user_id/address", addressController.list);
router.post("/users/:user_id/address", addressController.create);
router.put("/address/:id", addressController.update);
router.delete("/address/:id", addressController.delete);
router.get("/address", addressController.listall);


router.get("/users/:user_id/techs", techControler.list);
router.post("/users/:user_id/techs", techControler.create);
router.delete("/users/:id/techs", techControler.delete);






module.exports = router;
