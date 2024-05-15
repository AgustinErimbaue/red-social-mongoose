const express = require("express");
const CommentController = require("../controllers/CommentController");
const { authentication, isAuthorComment } = require("../middleware/authentication");
const router = express.Router();

router.post("/id/:_id",authentication, CommentController.create);
router.put("/comment/:_id", authentication,isAuthorComment, CommentController.update);
router.delete("/id/:_id",authentication,isAuthorComment, CommentController.deleteById)
module.exports = router;
