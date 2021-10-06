const db = require('../config');
const model = require('../model/pinjam');
const buku = require('../model/buku');

class Pinjam{
    static add(req, res){
        let date = new Date();
        // let tanggal = date.getDate();
        // let bulan = date.getMonth()+1;
        // let tahun = date.getFullYear();
        // let tgl = tahun+'-'+bulan+'-'+tanggal;
        // console.log(date);
        model.create({tgl_pinjam: date, userId: req.data.id, bukuId: req.body.id_buku})
        .then(data => {
            buku.findAll({where: {id: req.body.id_buku}})
            .then(data1 =>{
                let sisa = data1[0].jumlah - 1
                buku.update({jumlah: sisa}, {where: {id: req.body.id_buku}})
                .then(data2 => res.json({message: `success add data`, data: data}))
                .catch(data2 => res.json({message: data2.message}))                
            }).catch(data1 => res.json({message: data1.message}))
        })
        .catch(data => res.json({message: data.message, data: []}))
    }
    static all(req, res){
        model.findAll()
        .then(data => res.json({message: `Success!`, data: data}))
        .catch(data => res.json({message: data.message, data: []}));
    }
    static name(req, res){
        db.query(`SELECT * FROM pinjam join buku on "bukuId" = buku.id WHERE "userId" = ${req.data.id}`)
        .then(data => res.json({message: `Success!.`, data: data[0]}))
        .catch(data => res.json({message: data.message}));
    }
}

module.exports = Pinjam;