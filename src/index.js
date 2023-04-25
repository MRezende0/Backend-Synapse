const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',  // caminho da cloud, se existir
    user: 'root',
    password: 'root',
    database: 'lojavirtual'
});

connection.connect();

app.use(cors({ 
    origin: '*' 
}));

app.get('/products/legumes',function(req,res){
    connection.query('SELECT * FROM products WHERE price >= 10 and category="Legumes"', function(error,results){
        if(error) {
            throw error;
        }
        else {
            res.send(results)
        }
    })
}) // .get é para listar - .post é para criar - WHERE é para filtrar

app.get('/products/organicos',function(req,res){
    connection.query('SELECT * FROM products WHERE price >= 10 and category="Orgânicos"', function(error,results){
        if(error) {
            throw error;
        }
        else {
            res.send(results)
        }
    })
})

app.get('/products/legumes/1',function(req,res){
    connection.query('SELECT * FROM products WHERE id=1 and category="Legumes"', function(error,results){
        if(error) {
            throw error;
        }
        else {
            res.send(results)
        }
    })
})

app.listen(9901,'0.0.0.0', function(){
    console.log("Aplicatação rodando na porta: 9901");
});