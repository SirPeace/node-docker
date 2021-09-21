const express = require("express")
const mongoose = require("mongoose")

const dbConfig = require('./config/database')
const postRouter = require("./routes/PostRoutes")
const userRouter = require("./routes/UserRoutes")

// Connect to the DB
const dbUrl = 
    `mongodb://${dbConfig.DATABASE_USERNAME}:${dbConfig.DATABASE_PASSWORD}` +
    `@${dbConfig.DATABASE_IP}:${dbConfig.DATABASE_PORT}` +
    "/?authSource=admin"

// Mongoose has built-in connection retry functionality
mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    })
    .then(() => console.log('Successfully connected to the database!'))
    .catch(e => console.error(e))

// Routing logic
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
})

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

// Serve application
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
