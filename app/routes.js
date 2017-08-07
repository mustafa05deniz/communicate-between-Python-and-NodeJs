var dbconfig = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection); // mysql bağlantısını yapıyoruz . 
var bcrypt = require('bcrypt-nodejs');



module.exports = function(app,passport) {

    
    app.get('/', function(req, res) {
        res.render('index.ejs'); // index.ejs ye gönderiyoruz . 

    });



};

