const express = require("express")

const PostController = require("../controllers/PostController")

const router = express.Router()

router.route("/")
    .get(PostController.index)
    .post(PostController.store)

router.route("/:id")
    .get(PostController.get)
    .patch(PostController.update)
    .delete(PostController.delete)

module.exports = router