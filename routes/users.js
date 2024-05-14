const express = require("express");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middleware/authentication");
const router = express.Router();

router.post("/", UserController.register);
router.get("/user", authentication, UserController.getUser);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);

module.exports = router;
