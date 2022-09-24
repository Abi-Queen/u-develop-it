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

// test connection with query 
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default response for any other request (not found); must place the default error route BELOW all other routes or it will override them
app.use((req, res) => {
    res.status(404).end();
});

//function to start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

