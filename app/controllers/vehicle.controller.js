const db =require('../models')
const Vehicle = db.vehicle;

exports.getAllVehicle = (re, res)=>{
    Vehicle.findAll()
    .then(data =>{
        if (data.length != 0) {
            res.status(200).send(data);
        } else {
            res.status(401).send('Vehicle are empty');
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || 'Not Found'
        });
    });
    }

exports.getSingleVehicle = (re, res)=>{
    res.status(200).send(' get Single Vehicle  Success')
}
exports.createVehicle = (re, res)=>{
    res.status(200).send(' Vehicle Create  Success');
    
}

exports.updateVehicle = (re, res)=>{
    res.status(200).send('Vehicle Update  Success')
}

exports.deleteVehicle = (re, res)=>{
    res.status(200).send(' Vehicle Delete  Success')
}