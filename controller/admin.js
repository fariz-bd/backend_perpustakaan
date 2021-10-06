const model = require('../model/admin');
const bcrypt = require('bcrypt');

class Admin{
    static add(req, res){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        model.create({nama: req.body.nama, email: req.body.email, password: hash, role: 'admin'})
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static all(req, res){
        model.findAll()
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static edit(req, res){
        let form = {};
        if (req.body.nama){
            form.nama = req.body.nama
        }
        if (req.body.email){
            form.email = req.body.email
        }
        if (req.body.password){
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(req.body.password, salt);
            form.password = hash;
        }
        model.update(form, {where: {id: req.params.id}})
        .then(data => res.json({message: `Success edit id ${req.params.id}`}))
        .catch(data => res.json({message: data.message}));
    }
    static delete(req, res){
        model.destroy({where: {id: req.params.id}})
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message}));
    }
}

module.exports = Admin;