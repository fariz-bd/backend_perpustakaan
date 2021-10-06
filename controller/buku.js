const db = require('../config');
const model = require('../model/buku');

class Buku{
    static add(req, res){
        model.create({judul: req.body.judul, jumlah: req.body.jumlah, kategoryId: req.body.kategory})
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message, data: []}));
    }

    static all(req, res){
        model.findAll()
        .then(data => res.json({message: 'Success!', data: data}))
        .catch(data => res.json({message: data.message, data: []}));
    }

    static delete(req, res){
        model.destroy({where: {id: req.params.id}})
        .then(data => res.json({message: `Success delete id ${req.params.id}`, data: data}))
        .catch(data => res.json({message: data.message, data: []}));
    }

    static edit(req, res){
        let form = {}
        if (req.body.judul){
            form.judul = req.body.judul
        }
        if (req.body.jumlah){
            form.jumlah = req.body.jumlah
        }
        if (req.body.kategory){
            let int = parseInt(req.body.kategory);
            form.kategoryId = int
        }
        model.update(form, {where: { id: req.params.id}})
        .then(data => res.json({message: `Success edit id ${req.params.id}`, data: data}))
        .catch(data => res.json({message: data.message, data: []}))
    }
}

module.exports = Buku;