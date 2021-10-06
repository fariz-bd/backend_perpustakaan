const model = require('../model/kembali');
const buku = require('../model/buku');
const pinjam = require('../model/pinjam');

class Kembali{
    static add(req, res){
        let tgl = new Date;
        let id_pinjam = parseInt(req.params.id);
        // console.log(id_pinjam);
        model.create({tanggal: tgl, pinjamId: id_pinjam})
        .then(data => {
            pinjam.findAll({where: {id: id_pinjam}})
            .then(data1 =>{ 
                let id_buku = data1[0].bukuId;
                buku.findAll({where:{id: id_buku}})
                .then(data2 => { 
                    let sisa = data2[0].jumlah + 1;
                    console.log(sisa);
                    buku.update({jumlah: sisa}, {where: {id: id_buku}})
                    .then(data3 => res.json({message: `Success return buku ${data2[0].judul}`, data: data}))
                    .catch(data3 => res.json({message: data3.message, data: []}))
                })
                .catch(data2 => res.json({message: data2.message, data: []}))
            })
            .catch(data1 => res.json({message: data1.message, data: []}));
        })
        .catch(data => res.json({message: data.message, data: []}));
    }
    static all(req, res){
        model.findAll()
        .then(data => res.json({message: `Success!.` , data: data}))
        .catch(data => res.json({message: data.message, data: []}));
    }
}

module.exports = Kembali;