const express = require("express");
const CommentController = require("../controllers/CommentController");
const { authentication, isAuthor } = require("../middleware/authentication");
const router = express.Router();

router.post("/id/:_id",authentication, authentication, CommentController.create);
router.put("/comment/:_id", authentication,isAuthor, CommentController.update);

module.exports = router;
