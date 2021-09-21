const app = require("express")()
const mongoose = require("mongoose")

const dbService = "database"
const dbServicePort = 27017
const dbUsername = "sirpeace"
const dbPassword = "password"

mongoose
    .connect(
        `mongodb://${dbUsername}:${dbPassword}` +
        `@${dbService}:${dbServicePort}` +
        "/?authSource=admin"
    )
    .then(() => console.log('Successfully connected to the database!'))
    .catch(e => console.error(e))

app.get('/', (req, res) => {
    res.send("<h2>Hi There!!!</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
