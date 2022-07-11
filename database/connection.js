const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path:"config.env"})
const MONGO_URL = process.env.MONGO_URL
const connectDb = async () =>{
    await mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    console.log(mongoose.connection.readyState)
    console.log(MONGO_URL)
}

module.exports = connectDb