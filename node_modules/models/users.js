var mysql = require('mysql2');
var conf = require('../conf');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;
 
var connection = mysql.createConnection(conf.db);
var sql = '';

module.exports = {
    users: function (req , callback){
        sql = 'SELECT * FROM user';
        return connection.query(sql, callback);
    },
    user: function (req , callback){
        sql = mysql.format('SELECT * FROM user WHERE account = ?', req.params.account )
        return connection.query(sql, callback);
    },
    // checkAccount: function (req , callback){
    //     console.log(req.params.account)
    //     sql = mysql.format('SELECT uid FROM user WHERE account = ?', req.params.account );
    //     return connection.query(sql, callback);
    // },
    getPassword: function (req , callback){
        sql = mysql.format('SELECT password FROM user WHERE account = ?', req.params.account );
        return connection.query(sql, callback);
    },
    checkPassword: function (valPassword , dbPassword , callback){
        return  bcrypt.compare(valPassword , dbPassword , callback)
    },
    getToken: function( account ,callback ){

        return token = jwt.sign({ _id: account }, conf.SERECT, { expiresIn: '10h' } , callback)

    },
    valToken: function( token ,callback ){

        return token = jwt.verify(token , conf.SERECT , callback)
    },
    newUser: function (req , callback){
        // bcrypt.hash(req.body.password, saltRounds ).then(function (hash){
        //     req.body.password = hash
        //     sql = mysql.format('INSERT INTO user SET ?' , req.body);
            
        //     return connection.query(sql, callback);
        // })
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
        sql = mysql.format('INSERT INTO user SET ?' , req.body);
        return connection.query(sql, callback);
        
    },
    

}