const db =require('../models')
const User = db.user;

exports.getAllUser = (re, res)=>{
    User.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('Users are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleUser = (re, res)=>{
    res.status(200).send(' get Single User  Success')
}
exports.createUser = (re, res)=>{
    res.status(200).send('Create user Success');
    
}

exports.updateUser = (re, res)=>{
    res.status(200).send(' Update  Success')
}

exports.deleteUser = (re, res)=>{
    res.status(200).send('Delete  Success')
}