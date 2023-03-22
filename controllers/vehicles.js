let vehicles = require("../data/vehicles")

const list = (req,res) => {
    res.json(vehicles)
}

const show = (req, res) =>{

    let value = req.params.id 
    let matchingID = vehicles.find((item) => {return item._id == value})

    if(matchingID){
        res.json(matchingID)
        }
        else {
            res.send("Not found!")
        }

}

const create = (req, res) =>{

    req.body = {
        "_id": vehicles.length +1,
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model,
        "postID": 1
    }
    
    vehicles.push(req.body)
    res.json(req.body)


}

module.exports = {
    list,
    show,
    create
}