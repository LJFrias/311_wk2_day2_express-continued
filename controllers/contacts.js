let contacts = require("../data/contacts")

const list = (req,res) => {
    res.json(contacts)
}

const show = (req, res) =>{

    let value = req.params.id 
    let matchingID = contacts.find((item) => {return item._id == value})

    if(matchingID){
        res.json(matchingID)
        }
        else {
            res.send("Not found!")
        }

}

const create = (req, res) =>{

    req.body = {
        "_id": contacts.length +1,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": req.body.avatar,
        "postID": 1
    }
    
    contacts.push(req.body)

    res.json(req.body)

}

module.exports = {
    list,
    show,
    create
}
