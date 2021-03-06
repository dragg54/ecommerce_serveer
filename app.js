const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const bodyparser = require("body-parser")
const connectDb = require("./database/connection")

connectDb()
const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({extended: true}))
dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 3000
app.use("/assets", express.static(__dirname + "/assets"))
app.use("/media", express.static("media"))
app.use("/", require("./routes/routes") )
app.use("/items", require("./routes/routes"))
console.log("listening to port 3000")
app.listen(PORT)