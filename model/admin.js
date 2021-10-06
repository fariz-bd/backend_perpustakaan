const db = require('../config');
const sequelize = require('sequelize');

const Admin = db.define('admin',
{
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: sequelize.DataTypes.STRING
    },
    email: {
        type: sequelize.DataTypes.STRING
    },
    password: {
        type: sequelize.DataTypes.STRING
    },
    role: {
        type: sequelize.DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

Admin.sync({ alter: true});

module.exports = Admin;