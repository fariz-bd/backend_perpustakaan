const db = require('../config');
const sequelize = require('sequelize');

let User = db.define('user', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nama: {
        type: sequelize.DataTypes.STRING,
    },
    email: {
        type: sequelize.DataTypes.STRING,
        
    },
    password: {
        type: sequelize.DataTypes.STRING
    },
    role: {
        type: sequelize.DataTypes.STRING,
    }
},{
    freezeTableName: true,
    timestamps: false
});

User.sync({alter: true});


module.exports = User;