const express = require("express")
const PostController = require("../controllers/PostController")
const router = express.Router()


router.post("/",PostController.create)
router.put("/id/:_id",PostController.update)
router.get("/", PostController.getAll)
router.get("/id/:_id", PostController.getById)
router.get("/username/:username", PostController.getPostByUserName)
router.delete("/id/:_id", PostController.deleteById)



module.exports = router