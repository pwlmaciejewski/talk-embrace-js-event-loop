import os
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

class MyHandler(BaseHTTPRequestHandler):
    def do_GET (self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        f = open(os.path.dirname(os.path.realpath(__file__)) + '/file.txt')
        self.wfile.write(f.read())
        f.close()

server = HTTPServer(('', 8001), MyHandler)
server.serve_forever()
print 'Server started on port 8001'