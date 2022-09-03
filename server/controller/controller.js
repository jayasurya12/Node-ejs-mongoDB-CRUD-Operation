const Userdb = require('../model/model');

//create and save the new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(4000).send({message:"Content can not be empty!"});
        return;
    }
    //new user
    const user = new Userdb(req.body);
    //save user in the database
    user.save(user)
    .then(data=>{
        res.redirect('/add-user');
    })
    .catch(err=>{
        res.status(5000)
        .send({message:err.message || "Some error occured while creating a create operation"})
    })
}

//retieve and return all users/ retrive and return a single users

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

//Update a new identified user by user id

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

//Delete a user with specified user id in the request
exports.delete =(req,res)=>{
    Userdb.findByIdAndDelete(req.params.id)
    .then(data=>{
        if(!data){
            res.status(400)
            .send({message:`Cannot Delete with id ${req.params.id}. Maybe id is Wrong!`})
        }else{
            res.send({message:"User was deleted successfully!"})
        }
    })
    .catch(err=>{
        res.status(500)
        .send({message:`Could not delete User with id = +${req.params.id}`})
    })
}