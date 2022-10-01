var mysql = require('mysql2');
var conf = require('../conf');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
 
var connection = mysql.createConnection(conf.db);
var sql = '';

module.exports = {
    datas: function (req , callback){
        sql = 'SELECT * FROM sensor_value';
        return connection.query(sql, callback);
    },
    // data: function (req , callback){
    //     sql = mysql.format('SELECT * FROM user WHERE account = ?', req.params.account )
    //     return connection.query(sql, callback);
    // },

    getToken: function( account ,callback ){

        return token = jwt.sign({ _id: account }, conf.SERECT, { expiresIn: '10h' } , callback)

    },
    valToken: function( token ,callback ){

        return token = jwt.verify(token , conf.SERECT , callback)
    },
    newData: function (req , callback){
        
        sql = mysql.format('INSERT INTO sensor_value SET ?' , req.body);
        return connection.query(sql, callback);
        
    },
    

}