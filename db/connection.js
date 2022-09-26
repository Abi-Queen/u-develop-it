const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localHost',
    user: 'root',
    password: 'Outvilejelly123',
    database: 'election'
});

module.exports = db;