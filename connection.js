const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '6gojsy-fipFek',
        database: 'tracker'
    }
);

module.exports = db;