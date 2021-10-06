const admin = require('../model/admin');
const user = require('../model/user');
const bcrypt = require('bcrypt');
const token = require('../middleware/token');

class Login{
    static admin(req, res){
        admin.findAll({where: {email: req.body.email}})
        .then(data => {
            // console.log(data.length, 'ini data length');
            // console.log(data);
            if(data.length){
                // console.log('test.....');
                bcrypt.compare(req.body.password, data[0].password, (err, data1)=>{
                    if (data1 == false){
                        res.json({message: 'Password salah!', data: []});
                    }else{
                        token.add(data[0])
                        .then(datatoken => res.json({message: 'Login success!', token: datatoken}))
                        .catch(datatoken => res.json({message: datatoken.message}));
                    }
                })
            }else{
                res.json({message: 'Email salah!.', data: []});
            }
        })
        .catch(data => res.json({message: data.message, data : []}))
    }
    static user(req, res){
        user.findAll({where: {email: req.body.email}})
        .then(data => {
            if(data.length){
                bcrypt.compare(req.body.password, data[0].password, (err, data1) => {
                    if(data1 == false){
                        res.json({message: 'Password salah!.', data: []})
                    }
                    else{
                        token.add(data[0])
                        .then(data2 => res.json({message: 'Login success!.', token: data2}))
                        .catch(data2 => res.json({message: data2.message}));
                    }
                });
            }else{
                res.json({message: 'Email salah!.', data: []});
            }
        })
        .catch(data => res.json({message: data.message}));
    }
}

module.exports = Login;


