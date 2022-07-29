const Item = require("../model/model")
const path = require("path")

exports.create=(req,res)=>{
    const items = new Item({
        name:req.body.name,
        description:req.body.description,
        category: req.body.category,
        price: req.body.price,
        itemImage: req.file.path
    })
    items
    .save(items)
    .then(data=>{
        console.log(req.file)
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err})
    })
}

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id
        Item.findById(id)
        .then(response=>{
            res.send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
    }

    else{
        Item.find()
        .then(response=>{
            res.send(response)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
    }
}