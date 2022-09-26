var express = require('express');
var users = require('../models/users');
var router = express.Router();

router.route('/api/user')
    // 取得所有資源
    .get(function (req, res) {

        users.users(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            
            // 沒有找到指定的資源
            if (!results.length) {
                res.sendStatus(404);
                return;
            }
            
            res.json(results);
            
        });

    })
    .post(function (req, res) {        
        users.newUser(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
    
            // 新的資源已建立 (回應新增資源的 id)
            res.status(201).json(results.insertId)
            
        });
    });
    

router.route('/api/user/:account/login')
    // 取得所有資源
    .get(function (req, res) {

        dbPassword = ''
        users.getPassword(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            
            // 沒有找到指定的資源
            if (!results.length) {
                res.sendStatus(404);
                return;
            }
            
            dbPassword = results;
            // console.log(req.headers.password)
            // console.log(dbPassword[0].password)

            users.checkPassword(req.headers.password , dbPassword[0].password , function(err,results){
                console.log(results)
                if(results){
                    users.getToken(req.params.account ,function(err,results){

                        res.json(results)
                        return;
                    })
                }
                else{
                    res.sendStatus(402);
                    return;
                }
    
            })
            
        });
        
        
    })

router.route('/api/user/:account')
    // 取得所有資源
    .get(function (req, res) {

        if(req.header('Authorization') == undefined){
            res.sendStatus(401)
            return 
        }
        users.valToken(req.header('Authorization').replace('Bearer ', ''), function(err,results){
        
            if(err){
                console.log(err.name)
                if(err.name === 'TokenExpiredError') 
                res.sendStatus(401)
                else
                res.sendStatus(400)

                return
            }
            else{
                users.user(req , function(err , results){
                    if (err) {
                        res.sendStatus(500);
                        return console.error(err);
                    }
                    
                    // 沒有找到指定的資源
                    if (!results.length) {
                        res.sendStatus(404);
                        return;
                    }
                    
                    res.json(results);
                })
            }
        })
        
        
    })
    
    



module.exports = router;