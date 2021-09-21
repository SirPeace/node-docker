const express = require("express")

const PostController = require("../controllers/PostController")
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.route("/")
    .get(PostController.index)
    .post(protect, PostController.store)

router.route("/:id")
    .get(PostController.get)
    .patch(protect, PostController.update)
    .delete(protect, PostController.delete)

module.exports = router