// http
var http = require("http"),
fs= require('fs'),
config = require("./config/config.js"),
staticServer = require('./internals/static-server'),
colors = require('colors'),
handlers = require('./internals/handlers');

// Obteniendo información del entorno
// De ejecución con respecto al IP
// y al puerto que debemos usar en
// nuestro server.
var PORT = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
if (IP=='127.0.0.1'){
    console.log(">-----EJECUTANDO EN MODO LOCAL");
}
// Crear un servidor basico
var server = http.createServer(function(req, res){
    //obtener la URL
    var url = req.url;
    if(url == "/"){
        //sirve el index.html
        url = "/index.html"
    }
    // verificando q la peticion 
    //del cliente sea una ruta virtual
    if(typeof(handlers[url]) === 'function'){
        //Si entro aqui , significa que 
        //existe un manejador para la url
        // que se esta solicitando por lo tanto 
        // la ejecuto 
        handlers[url](req, res)
    }else{

    console.log(`> URL Solicitada: ${url}....`.yellow);
    // sirvo la url con mi server statico
    staticServer.serve(url,res);   
    }
});
// Poner a trabjar al server
server.listen(PORT,IP,function(){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});


