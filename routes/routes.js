const express = require("express")
const services = require("../services/render")
const controller = require("../controller/controller")
const multer = require("multer")
const route = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "media/")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage})
route.get("/", services.itemRoutes)
route.post("/api/items", upload.single("itemImage"), controller.create)
module.exports = route