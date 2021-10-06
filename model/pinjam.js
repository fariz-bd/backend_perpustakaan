const db = require('../config');
const sequelize = require('sequelize');
const user = require('./user');
const buku = require('./buku');

let Pinjam = db.define('pinjam', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tgl_pinjam: {
        type: sequelize.DataTypes.DATE
    }
},{
    freezeTableName: true,
    timestamps: false
});

buku.hasMany(Pinjam);
Pinjam.belongsTo(buku);

user.hasMany(Pinjam);
Pinjam.belongsTo(user);

Pinjam.sync({alter: true});

module.exports = Pinjam;