const db =require('../models')
const Role = db.role;

exports.getAllRole = (re, res)=>{
    Role.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('Roles are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleRole = (re, res)=>{
    res.status(200).send(' get Single Role  Success')
}
exports.createRole = (re, res)=>{
    res.status(200).send('Create  Success');
    
}

exports.updateRole = (re, res)=>{
    res.status(200).send(' Update  Success')
}

exports.deleteRole = (re, res)=>{
    res.status(200).send('Delete  Success')
}