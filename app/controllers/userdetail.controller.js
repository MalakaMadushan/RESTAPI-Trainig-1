const db =require('../models')
const UserDetail = db.userdetail;

exports.getAllUserDetail = (re, res)=>{
    UserDetail.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('UserDetails are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleUserDetail = (re, res)=>{
    res.status(200).send(' get Single UserDetail  Success')
}
exports.createUserDetail = (re, res)=>{
    res.status(200).send('Create  Success');
    
}

exports.updateUserDetail = (re, res)=>{
    res.status(200).send(' Update  Success')
}

exports.deleteUserDetail = (re, res)=>{
    res.status(200).send('Delete  Success')
}