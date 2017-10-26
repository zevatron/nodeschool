var http = require('http')
var fs = require('fs')

var streamResponse = fs.createReadStream(process.argv[3])

var server = http.createServer(function(request,response){
	streamResponse.pipe(response)
})

server.listen(process.argv[2])