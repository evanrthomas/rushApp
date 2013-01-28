#!/usr/bin/python
import socket
import threading

def run(socket):
  while True:
    message =  socket.recv(1024)
    print message
    socket.send(message)

HOST = 'localhost'
PORT = 4001

ss = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
ss.bind((HOST, PORT))
ss.listen(5)

while True:
  clientsocket, address = ss.accept();
  t = threading.Thread(target = run, args = (clientsocket, ))
  t.start()

