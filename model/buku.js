const db = require('../config');
const sequelize = require('sequelize');
const kategory = require('./kategory');

let Buku = db.define('buku', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: sequelize.DataTypes.STRING,
    },
    jumlah: {
        type: sequelize.DataTypes.INTEGER,
    }
},{
    freezeTableName: true,
    timestamps: false
});

kategory.hasMany(Buku);
Buku.belongsTo(kategory);

Buku.sync({ alter: true });

module.exports = Buku;