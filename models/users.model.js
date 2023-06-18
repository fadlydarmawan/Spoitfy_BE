const { DataTypes } = require('sequelize');

const koneksi = require("../db/database.js");

const user = koneksi.define("user", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     defaultValue: DataTypes.UUIDV4
   },
   username: {
     type: DataTypes.STRING,
     allowNull: false
   },
   password: {
     type: DataTypes.STRING,
     allowNull: false
   },
},
   {
    tablename: 'user'
   }
);
koneksi.sync().then(() => {
    console.log('spotify table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
 module.exports = {user}
 