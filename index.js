const app = require("express")()

app.get('/', (req, res) => {
    res.send("<h2>Hello world!</h2>")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})