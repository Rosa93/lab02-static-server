//cargamos los modulos necesarios 
//para crear  mis servidor statico
var fs = require('fs'),
config = require('../config/config.js'),
mime = require('mime');
//Exportar la funcion de servidor statico 
exports.serve = function(url, res){
    //Acompletar el static path 
    var filePath = config.STATIC_PATH + url;
    // verificanso si existe el archivo o no dentro del servidor
    fs.exists(filePath,function (exists){
        if(exists){
            // sirvo el archivo 
            fs.readFile(filePath, function(err, content) {
                if(err){
                    console.log(`> Hubo error en la lectura del archivo: ${filePath}`);
                    //Enviar error interno  500
                    res.writeHead(500,{
                        'Content-Type' : 'text/html',
                        'Server' : 'pilgrimsHawk@2.1.2'
                    });
                    res.end("<h1> Error 500 : Recurso dañado </h1>");
                }else{
                    //Configuramos la respuesta
                    var contentType = mime.lookup(filePath);
                    //armamos respuesta 
                    res.writeHead(200, {
                        'content-Type ': contentType,
                        'server': 'PilgrimsHawks-Server@2.2.2'
                    });
                    //Enviar el archvo 
                    res.end(content);
                }
            });

        }else{
            //manda un codigo 404
            res.writeHead(404,{
                        'Content-Type' : 'text/html',
                        'Server' : 'pilgrimsHawk@2.1.2'

            });
            res.end("<h1> 404: recurso no encontrado </h1>");
        }
    });
};