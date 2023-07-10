const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    database : "sdmexam",
    user : "root",
    password : "manager"

})

module.exports = connection;