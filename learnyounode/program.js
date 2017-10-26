var fs = require('fs');
var lines = undefined;
var listFiles = undefined;

function linesNumber(callback){
	
	fs.readFile(process.argv[2] , function done(err, buffer){
 		
 		lines = buffer.toString().split("\n").length -1;
		callback();
	} );
}

function logLines(){
	console.log(lines);
}

// linesNumber(logLines);

function filesOfDirectory(callback){
	fs.readdir( process.argv[2] , function done(err, listBuffer){
		listFiles = listBuffer;
		callback();
	} );
}

function logTypefiles() {
	for(var i=0 ; i< listFiles.length ; i++){
		if(listFiles[i].split(".")[1] == process.argv[3]){
			console.log(listFiles[i]);
		}
	}
}

// filesOfDirectory(logTypefiles);