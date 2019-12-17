const express = require("express")
const booksRouter = require("./src/books")
const commentsRouter = require("./src/comments")
const expressListEndpoint = require('express-list-endpoints')
const cors = require("cors")
require('dotenv').config()

const server = express();

var whitelist = ['http://localhost:3000', process.env.FE_URL,'https://bubba-books-store.herokuapp.com','http://localhost:4000']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

// this allows HEROKU (or whatever else cloud system) to select the PORT that is free for him
const port = process.env.PORT || 4000

console.log(process.env.USER)
console.log(process.env.FE_URL)

//server.use()
server.use(express.json())

server.use("/books", cors(corsOptions), booksRouter)
server.use("/books",cors(corsOptions), commentsRouter)
server.get("/test", (req, res) => {
    res.send("working!!!")
})

server.listen(port, () => {
    console.log("I'm listening on port " + port)
})
console.log(expressListEndpoint(server))
