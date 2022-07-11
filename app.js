const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const path = require("path")
const bodyparser = require("body-parser")
const connectDb = require("./database/connection")


connectDb()
const app = express()
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({extended: true}))
dotenv.config({path:"config.env"})
const PORT = process.env.PORT
app.use("/assets", express.static(__dirname + "/assets"))
app.use(morgan("tiny"))
app.use("/", require("./routes/routes") )
console.log("listening to port 3000")
app.listen(3000)