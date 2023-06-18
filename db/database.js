const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    database:'spotify',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps : false,
    }
});
//cek koneksi
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

module.exports = sequelize