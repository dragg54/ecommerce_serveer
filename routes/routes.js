const express = require("express")
const services = require("../services/render")
const controller = require("../controller/controller")
const route = express.Router()
route.get("/", services.itemRoutes)
route.post("/api/items", controller.create)

module.exports = route