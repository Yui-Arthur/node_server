var express = require('express');
var mysql = require('mysql2');
var bodyparser = require('body-parser');
var conf = require('./conf.js');
var cors = require('cors');
var accounts = require('./routes/users');
var sensor = require('./routes/test_sensor')
var app = express();
// var connection = mysql.createConnection(conf.db)


app.use(cors(conf.corsOptions));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('view/dist'))
app.use(accounts);
app.use(sensor);

app.listen(8001 , function(req , res ){
    console.log('node server is running...'); 
})