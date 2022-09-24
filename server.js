//import express
const express = require('express');
//import mysql
const mysql = require('mysql2');

//add port designation and app expression 
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username,
        user: 'root',
        //your mysql password
        password: 'Outvilejelly123',
        database: 'election'
    },
    console.log('connected to election database')
);

// test connection with query; comment out after testing
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

//GET a single candidate;
db.query(`SELECT * FROM candidates WHERE id=1`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

//Delete a candidate; then comment out after demo
// db.query(`DELETE FROM candidates WHERE id=?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

//default response for any other request (not found); must place the default error route BELOW all other routes or it will override them
app.use((req, res) => {
    res.status(404).end();
});

//function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

