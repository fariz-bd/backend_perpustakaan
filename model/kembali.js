const sequelize = require('sequelize');
const db = require('../config');
const pinjam = require('./pinjam');


let Kembali = db.define('kembali',{
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tanggal: {
        type: sequelize.DataTypes.DATE
    }
},{
    freezeTableName: true,
    timestamps: false
});

pinjam.hasMany(Kembali);
Kembali.belongsTo(pinjam);

Kembali.sync({alter: true});

module.exports = Kembali;
