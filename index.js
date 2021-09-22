const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const redis = require("redis")
const redisStore = require("connect-redis")(session)

const dbConfig = require('./config/database')
const postRouter = require("./routes/PostRoutes")
const userRouter = require("./routes/UserRoutes")
const redisConfig = require("./config/redis")
const sessionConfig = require("./config/session")

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

let redisClient = redis.createClient({
    host: redisConfig.URL,
    port: redisConfig.PORT
})

// Initialize the app
const app = express()

app.enable("trust proxy")

app.use(express.json())

app.use(
    session({
        store: new redisStore({client: redisClient}),
        secret: sessionConfig.SECRET,
        cookie: {
            secure: false,
            resave: false,
            saveUninitialized: false,
            httpOnly: true,
            maxAge: 30000
        }
    })
)

app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

app.get('/api/v1', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
    console.log("Request handled")
})

// Serve application
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
