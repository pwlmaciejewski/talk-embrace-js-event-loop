from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

class MyHandler(BaseHTTPRequestHandler):
    def do_GET (self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        f = open('./file.txt')
        self.wfile.write(f.read())
        f.close()

server = HTTPServer(('', 8080), MyHandler)
server.serve_forever()
print 'Server started on port 8080'