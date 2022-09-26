//import express
const express = require('express');
//import mysql
const mysql = require('mysql2');
//import inputCheck function for adding candidate
const inputCheck = require('./utils/inputCheck'); 
//import connection to database
const db = require('./db/connection');

//connect to routes files
const apiRoutes = require('./routes/apiRoutes');

//add port designation and app expression 
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

//use api routes
app.use('/api', apiRoutes);

// //connect to database; commented out when created separate file in db, modularizing 
// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         //your mysql username,
//         user: 'root',
//         //your mysql password
//         password: 'Outvilejelly123',
//         database: 'election'
//     },
//     console.log('connected to election database')
// );

// test connection with query; comment out after testing
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// moved all candidate routes to apiRoutes folder candidateRoutes file and changed app object to router


//get route for displaying all parties; moved to partyRoutes.js


//get route for displaying a single party; moved to partyRoutes.js


//get route for deleting parties; moved to partyRoutes.js


//update/change a candidate's party affiliation; moved to candidateRoutes

// //create candidate (first version)
//         const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//default response for any other request (not found); must place the default error route BELOW all other routes or it will override them
app.use((req, res) => {
    res.status(404).end();
});

//function to start express.js server on port 3001 after db connection
db.connect(err => {
    if(err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});