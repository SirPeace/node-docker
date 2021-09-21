const mongoose = require("mongoose")

const schema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "User must have a username"],
        unique: [true, "Username must be unique"]
    },
    password: {
        type: String,
        require: [true, "User must have a password"]
    }
})

const User = mongoose.model("User", schema)

module.exports = User