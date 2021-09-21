const bcrypt = require("bcryptjs")

const User = require("../models/UserModel")

exports.signUp = async (req, res) => {
    const {username, password} = req.body

    try {
        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            username,
            password: hashPassword
        })

        res.status(201).json({
            status: "success",
            data: {
                user: newUser
            }
        })
    } catch (e) {
        console.error(e.message)
        res.status(400).json({
            status: "fail"
        })
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({username})

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                status: "fail",
                message: "Username or password is not correct"
            })
        }

        return res.status(200).json({
            status: "success"
        })
    } catch (e) {
        return res.status(400).json({
            status: "fail"
        })
    }
}