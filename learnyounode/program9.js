const bl = require('bl')
//var concat = require('concat-stream')
var http = require('http')

var fila = []

function getResponses(){

	for(var i=2 ; i<=4 ; i++){

		http.get(process.argv[i], function(response){
			response.setEncoding('utf8')
			response.pipe(new bl( function(err,data){
				
				if(err)
					return console.error(err)

				string = data.toString()
				fila.push(string)
			} ))
		}).on('error', console.error)			
	}

}

function logResponses(err , filaResponses) {
	if (err){
		return console.error("Oops, algo de errado ocorreu!",err)
	}

	filaResponses.forEach(function (file){
		console.log(file)
	})
	
}

//getResponses(logResponses)
//issues ----------------------------https://github.com/nodeschool/discussions/issues/69

const sources = process.argv.slice(2);
let count = 0;
let content = [];

//sources.forEach(processUrl);

function processUrl (source, index) {
  http.get(sources[index], function (response) {
    response.pipe(bl((err, data) => processBuffer(err, data, index)));
  });
}

function processBuffer (error, data, index) {
  if (error) {
    return console.error(error);
  }
  content[index] = data.toString();
  if (++count === sources.length) {
    content.forEach((el) => console.log(el));
  }
}
//---------------------------------

//Oficial Version
 
   
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }