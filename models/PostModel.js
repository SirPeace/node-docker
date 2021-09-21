const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post must have a title"]
    },
    body: {
        type: String,
        required: [true, "Post must have a body"]
    }
})

const Post = mongoose.model("Post", schema)

module.exports = Post