const { DataTypes } = require('sequelize');
const koneksi = require("../db/database.js");

const musik = koneksi.define("musik", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tittle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    album: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    filenameAlbum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    filenameMusik: {
        type: DataTypes.STRING,
        allowNull: false
    },
    urlAlbum : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    urlMusik:{
    type: DataTypes.STRING,
    allowNull: false,
 },
},
    {
     tablename: 'musik'
    }
 );
 
 koneksi.sync().then(() => {
    console.log('spotify table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

 module.exports = {
    musik
 }