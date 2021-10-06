const model = require('../model/kategory');

class Kategory{
    static add(req, res){
        model.create({nama: req.body.nama})
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static all(req, res){
        model.findAll()
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message}));
    }
    static edit(req, res){
        // console.log(req.body.nama);
        if (!req.body.nama){
            res.json({message: 'Masukan data!'})
        }else{
            model.update({nama: req.body.nama}, {where: {id: req.params.id}})
            .then(data => res.json({message: `Success edit id ${req.params.id}`}))
            .catch(data => res.json({message: data.message}));
        }
    }
    static delete(res, req){
        model.destroy({where: {id: req.params.id}})
        .then(data => res.json({message: `Success delete id ${req.params.id}`}))
        .chatc(data => res.json({message: data.message}));
    }
}

module.exports = Kategory;