const express = require("express")
const PostController = require("../controllers/PostController")
const { authentication, isAuthor } = require("../middleware/authentication")
const router = express.Router()


router.post("/",authentication,PostController.create)
router.put("/id/:_id",authentication,isAuthor,PostController.update)
router.get("/", PostController.getAll)
router.get("/id/:_id", PostController.getById)
router.get("/username/:username", PostController.getPostByUserName)
router.delete("/id/:_id",authentication,isAuthor, PostController.deleteById)



module.exports = router