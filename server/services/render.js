const axios = require('axios')

exports.homeRoutes =(req,res)=>{
    axios.get('http://localhost:5000/api/users')
    .then((response)=>{
        // console.log(response.data);
        res.render('index',{users:response.data});
    })
    
}

exports.add_user =(req,res)=>{
    res.render('_add-user');
}

exports.update_user = async(req, res) =>{
    await axios.get('http://localhost:5000/api/users',{ params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
            // res.send(userdata)
        })
        .catch(err =>{
            res.send({message:err});
        })
    // res.render('update_user')
}