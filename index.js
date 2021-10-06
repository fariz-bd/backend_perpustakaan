const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const admin = require('./router/admin');
const kategory = require('./router/kategory');
const user = require('./router/user');
const login = require('./router/login');
const buku = require('./router/buku');
const middleware = require('./middleware/aud')
const pinjam = require('./router/pinjam');
const kembali = require('./router/kembali');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/admin', admin);
app.use('/kategory', middleware.admin, kategory);
app.use('/user', user);
app.use('/login', login);
app.use('/buku', buku);
app.use('/pinjam', pinjam);
app.use('/kembali', kembali);



app.listen(port, () =>console.log(`Example app listen at http://localhost:${port}`));
