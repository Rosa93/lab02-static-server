var color = "honeydew";
function hola(){
    sweetAlert("World Places",
    "¡Bienvenido a esta pagina!");
    alert("Bienvenido a esta pagina ");
    document.body.style.backgroundColor = "lightseagreen"
}

function changeBkgColor(){
    var color = document.body.style.backgroundColor;
    console.log("> Color original:" + color );
    if(color == "lightseagreen"){
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
    console.log("> Cambiando color a " + color);
    document.body.style.backgroundColor = color;
}