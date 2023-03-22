let comments = require("../data/comments")

const list = (req,res) => {
    res.json(comments)
}

const show = (req, res) =>{

    let value = req.params.id 
    let matchingID = comments.find((item) => {return item._id == value})

    if(matchingID){
        res.json(matchingID)
        }
        else {
            res.send("Todo not found!")
        }

}

const create = (req, res) =>{

    req.body = {
        "_id": comments.length +1,
        "body": req.body.body,
        "postID": 1
    }
    
    comments.push(req.body)
    res.json(req.body)


}

module.exports = {
    list,
    show,
    create
}

