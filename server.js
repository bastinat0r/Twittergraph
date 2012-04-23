// server listening on 127.0.0.0:8080

var http = require('http');
var util = require('util');

util.puts("started");

var srv = http.createServer(function(req, res) {
	

	res.end("worx");
});

srv.listen(8080, '0.0.0.0');
