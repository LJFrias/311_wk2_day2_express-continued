let products = require("../data/products")

const list = (req,res) => {
    res.json(products)
}

const show = (req, res) =>{

    let value = req.params.id 
    let matchingID = products.find((item) => {return item._id == value})

    if(matchingID){
        res.json(matchingID)
        }
        else {
            res.send("Not found!")
        }

}

const create = (req, res) =>{

    req.body = {
        "_id": products.length +1,
        "name": req.body.name,
        "description": req.body.description,
        "postID": 1
    }
    
    products.push(req.body)
    res.json(req.body)


}

module.exports = {
    list,
    show,
    create
}