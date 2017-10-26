var myModule = require('./module6.js')

function logFilterFiles(err , file) {
	if (err) {
		console.log("Oops, algo de errado ocorreu!")
	}else{
		for(var i=0 ; i < file.length ; i++){
			console.log(file[i])
		}
	}
}

myModule(process.argv[2], process.argv[3], logFilterFiles)