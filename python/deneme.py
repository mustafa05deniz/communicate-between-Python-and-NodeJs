
import socket
import sys
import RPi.GPIO as GPIO
import time
import datetime
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('192.168.1.102', 4545)
print >>sys.stderr, 'connecting to %s port %s' % server_address
sock.connect(server_address)

sock.sendall("start")


while True:
    veri="deneme"
    veriler = ("%s,%s"%(veri,str(datetime.datetime.now())))
 
    print(veriler)
    sock.sendall(veriler)

    time.sleep(5)






