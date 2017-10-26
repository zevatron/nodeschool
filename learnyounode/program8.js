const bl = require('bl')
//var concat = require('concat-stream')
var http = require('http')


http.get(process.argv[2], function(response){
	response.setEncoding('utf8')
	response.pipe(new bl( function(err,data){
		
		if(err)
			return console.error(err)

		string = data.toString()
		console.log(string.length)
		console.log(string)
	} ))

}).on('error', console.error)


