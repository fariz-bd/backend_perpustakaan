const token = require('./token');

class Aut{
    static user(req, res, next){
        let header = req.header('Authorization');
        if (!header){
            res.json({message: `Please login!.`})
        }else{
            let tokens = header.split(' ')[1];
            token.verify(tokens)
            .then(data => {
                // console.log(data);
                if(data.role = 'user'){
                    req.data = data;
                    next();
                }else{
                    res.json({message: `maaf anda dilarang membuka halaman ini`});
                }
            })
            .catch(data => res.json({message: `Please login`}));
        }
    }

    static admin(req, res, next){
        let header = req.header('Authorization');
        if (!header){
            res.json({message: `Please login!.`})
        }else{
            let tokens = header.splite(' ')[1];
            token.verify(tokens)
            .then(data => {
                if(data.role = 'admin'){
                    next();
                }else{
                    res.json({message: `Maaf anda dilarang membuka halaman ini`});
                }
            })
            .catch(data => res.json({message: `Please login`}));
        }
    }
}
module.exports = Aut