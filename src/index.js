const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lojavirtual'
});
connection.connect(); 

app.use(cors({ 
    origin: '*' 
}));

app.listen(9901,'0.0.0.0', function(){
    console.log("Aplicatação rodando na porta: 9901");
});