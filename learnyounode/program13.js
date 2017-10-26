var http = require('http');
var url = require('url');


var server = http.createServer(function(req,res){
	
	var q = url.parse(req.url,true)
	var dateTime = new Date(q.query.iso)

	if(req.method === 'GET'){

		if(q.pathname === '/api/parsetime'){

			var json = {
				"hour": dateTime.getHours(),
				"minute": dateTime.getMinutes(),
				"second": dateTime.getSeconds()
			}
		}
		if(q.pathname === '/api/unixtime'){
			var json = {
				"unixtime": dateTime.getTime()
			}
		}
		res.writeHead(200,{'Content-Type': 'application/json'})
		res.end(JSON.stringify(json))
	}
	
})

server.listen(Number(process.argv[2]))