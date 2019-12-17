const express = require("express")
const booksRouter = require("./src/books")
const cors = require("cors")

const server = express();

var whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// const port = process.env.PORT || 4000

//server.use()
server.use(express.json())

server.use("/books", cors(corsOptions),  booksRouter)
server.get("/test", (req, res)=>{
    res.send("working!!!")
})

server.listen(4000, () => {
    console.log("I'm listening on port " + port)
})