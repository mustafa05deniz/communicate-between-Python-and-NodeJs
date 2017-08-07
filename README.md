
<h2>install</h2>

<h3>config/database.js</h3>
<pre>
module.exports = {
    'connection': {
        'host': '127.0.0.1', // local or ip adress .
        'user': 'root', // mysql user name
        'password': 'password', // password 
        'database': 'dbname'// database name .
    },
	'database': 'dbname',
    
};
</pre>

<h2>Python Code</h2>
<pre>
import socket
import sys
import time
import datetime
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('nodejserver', 4545)
print >>sys.stderr, 'connecting to %s port %s' % server_address
sock.connect(server_address)
sock.sendall("start")
while True:
    veri="deneme"
    veriler = ("%s,%s"%(veri,str(datetime.datetime.now())))
 
    print(veriler)
    sock.sendall(veriler)

    time.sleep(5)
    
</pre>
<h2>Nodejs codes</h2>
<pre>
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

</pre>

<h2>How is running</h2>

<h4></h4>
<pre>

</pre>
<h4>sign up </h4>
<pre>

</pre>
<h4>Sign in</h4>
<pre>

</pre>
