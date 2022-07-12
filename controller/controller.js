const Item = require("../model/model")

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
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:err})
    })
}
