const userModel = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



async function signup(req, res) {
    console.log(req.body.password)
    console.log(req.body.username)
    const saltrounds = 10;
    const salt = bcrypt.genSaltSync(saltrounds);
    const hash = bcrypt.hashSync(req.body.password,salt)

    const createUser = await userModel.user.create({
       username: req.body.username,
       password : hash,

    });
    res.status(201).send({
        status: 201,
        data: createUser,
        message: 'berhasil membuat akun',
    })
}

async function signin (req, res) {
    const findUser = await userModel.user.findAll({
        where: {
            username:req.body.username,
        }
    });

try {
    let data = bcrypt.compare(req.body.password,findUser[0].password);
    //setelah bcrypt berhasil maka data true
    if (data) {
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
                id: findUser[0].id,
                username: findUser[0].username
            }
          }, 'secret');
          
        return res.status(200).json({
            status: 201,
            data: data,
            token: token,
            message : ' berhasil masuk'
        })
    }
    
} catch (error) {
    return res.status(400).json({
        message:"something went  wrong",
    })
    
}
};
module.exports = {signup,signin}