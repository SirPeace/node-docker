const app = require("express")()
const mongoose = require("mongoose")

const dbConfig = require('./config/database')

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
app.get('/', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
})

// Serve application
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
