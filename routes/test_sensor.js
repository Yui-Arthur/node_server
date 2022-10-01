var express = require('express');
var test_sensor = require('../models/test_sensor');
var router = express.Router();


router.route('/api/test_sensor')
    // 取得所有資源
    .get(function (req, res) {

        test_sensor.datas(req, function (err, results, fields) {
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
        test_sensor.newData(req, function (err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
    
            // 新的資源已建立 (回應新增資源的 id)
            res.status(201).json(results.insertId)
            
        });
    });
    
module.exports = router;