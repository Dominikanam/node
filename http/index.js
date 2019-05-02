var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function requestCallback(request, response) {
	if (request.method === 'GET') {
		switch (request.url) {
			case '/':
				fs.readFile('index.html', 'utf8', function readIndexCallback(error, data) {
					if (error) {
						throw error;
					}

					response.setHeader("Content-Type", "text/html; charset=utf-8");
					response.write(data);
					response.end();
				});
				break;
			default:
				fs.readFile('images/404.jpg', function readImageCallback(error, data) {
					if (error) {
						throw error;
					}

					response.statusCode = 404;
					response.setHeader("Content-Type", "image/jpg;");
					response.write(data);
					response.end();
				});
				break;
		}
	} else {
		response.statusCode = 405;
		response.end;
    }
});

server.listen(9000);