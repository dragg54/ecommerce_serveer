const axios = require("axios")

exports.itemRoutes = (req, res) =>{
    res.render("items")
}
exports.allItemRoutes = (req, res) =>{
    axios.get("http://localhost:3000/api/items")
    .then(response=>{
        const data = response.data
        res.send(data)
    }

    )
}
