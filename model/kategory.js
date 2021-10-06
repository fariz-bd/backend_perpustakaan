const db = require('../config');
const sequilize = require('sequelize');

let Kategory = db.define('kategory', 
{
    id: {
        type: sequilize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: sequilize.DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

Kategory.sync({alter: true});

module.exports = Kategory;