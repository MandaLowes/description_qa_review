const express = require('express');
const cors = require('cors');
const server = express();
const mysql = require('mysql');

const port = 3003;
server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'productinfo'
  });

connection.connect((err) => {
    if (err) {
        console.error(err);
    }else {
        console.log('connection successful')
    }
});


server.get('/information', (req, res) => {
    connection.query('SELECT * FROM information;', (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })    
});
server.get('/ratings', (req, res) => {
    connection.query('SELECT * FROM ratings;', (err, results) => {
        if(err) {
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })    
});



server.post('/ratings', (req, res) => {
    console.log(req)
    connection.query(`INSERT INTO ratings (USER_NAME, rating) VALUE ("${req.body.USER_NAME}") ("${req.body.rating}");`, (err, results) => {
        if (err) {
            console.error(err);
        } else {

             res.status(200).send(results)
        }
    })
});


server.listen(port, () => {
    console.log(`listening on port${port}`)
})
