// Manejadores de rutas virtuales
var fechaDeNacimiento = new Date(1993,08,30,6,30);  
module.exports = {
    "/edad/rosa-paez" : function(req, res){
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        // Calculo la edad
        var hoy = new Date();
        var age = 
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        //Armando el json
        var objetoRespuesta= {
            "edad" : age
        };
        var jsonResponse = 
        JSON.stringify(objetoRespuesta);
        // Envio Respuesta
        res.end(jsonResponse);  
    } 
};