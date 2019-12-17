const express = require("express")
const booksRouter = require("./src/books")

const server = express();

const port = process.env.PORT || 4000

server.use(express.json())

server.use("/books", booksRouter)

server.listen(port, () => {
    console.log("I'm listening on port " + port)
})