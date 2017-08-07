var dbconfig = require('./config/database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var port     = process.env.PORT || 80;
var flash    = require('connect-flash');


var io = require('socket.io').listen(3001); 
var net = require('net');
var JsonSocket = require('json-socket');
var port1 = 4545;
var server = net.createServer();

server.listen(port1);
server.on('connection', function(socket) {

    liste=[];
    object={};
    liste.push(socket.remoteAddress);
    console.log(liste);
    socket = new JsonSocket(socket);
    var n;
    var isRunning = false;
    var streatTimeout;
    
    socket.on('data', function(data) {
        var str= data.toString();
        console.log("veri : "+data.toString());    
        var array = str.split(',');
        console.log(array);
        io.emit(array[0],array)
    });


});


app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs'); 

app.use(session({
    secret: 'vidyapathaisalwaysrunning',
    resave: true,
    saveUninitialized: true
 } )); 

app.use(flash()); 

require('./app/routes.js')(app); 


app.listen(port);
console.log('kodizim code running localhost:' + port);
