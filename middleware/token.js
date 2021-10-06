const jwt = require('jsonwebtoken');

class Token{
    static add(data){
        let promise = new Promise((resolve, reject)=>{
            jwt.sign({id: data.id, nama: data.nama, role: data.role}, 'fosan', (err, data)=>{
                if (err){
                    reject('Error add token!');
                }else{
                    resolve(data)
                }
            });
        });
        return promise;
    }

    static verify(data){
        let promise = new Promise((resolve, reject)=>{
            jwt.verify(data, 'fosan', (err, data)=>{
                if (err){
                    reject('Error verify token!');
                }else{
                    resolve(data);
                }
            });
        });
        return promise;
    }
}

module.exports = Token;