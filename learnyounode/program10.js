var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function(socket){

	var dataAtual = strftime('%F %H:%M', new Date())

	socket.end(dataAtual + "\n")
	
})
server.listen(process.argv[2])