require("dotenv").config();
const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = db.user;

const generateAccessToken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME });
    return accessToken;
}

exports.signIn = async (req, res) =>{

    const username = req.body.username;
    const password = req.body.password;
    try {
        await User.findOne({ where: { username: username } })
            .then(data => {
                // TODO check data is null
                bcrypt.compare(password, data.password, function (err, result) {
                    console.log(result);
                    // result == true
                    if (result == false) {
                        // console.log(result)
                        //password are matching
                        const accessToken = generateAccessToken(data.id);
                        res.send({
                            id: data.id,
                            username: data.username,
                            access_token: accessToken,
                        });
                    } else {
                        //password are not matched
                        res.status(404)
                            .send({
                                status: false,
                                message: "Password are not valid.  " +err
                            });
                    }
                });

            })
            .catch(err => {
                res.status(404)
                    .send({
                        status: false,
                        message: "User not valid." +err
                    });
            });

    } catch (error) {
        res.status(404)
            .send({
                status: false,
                message: "Password or Username not valid. "
            });
    }
}