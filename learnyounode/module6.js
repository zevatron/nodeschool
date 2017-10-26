	var fs = require('fs')
	var listFiles = []

	// função para listar arquivos filtrados de um diretório
	module.exports = function (dirName, fileExtension, callback){
		fs.readdir(dirName , function(err, listBuffer){
			if(err){
				return callback(err)
			}
			  
			for(var i = 0 ; i < listBuffer.length ; i++){
				if(listBuffer[i].split(".")[1] == fileExtension){
					listFiles.push(listBuffer[i])
				}
			}
			callback(null,listFiles)
			
		} )
	}