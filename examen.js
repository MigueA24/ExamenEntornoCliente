alert("Hola bievenido Carlos, espero que te guste!")
// Le añado una nueva sorpresa mediante un boton
function anadir(sw){
    var pic;
    if(sw ==0){
        pic = "sin_nieve.jpg"}
    else{
        pic = "con_nieve.jpg"
    }
    document.getElementById('nieve').src = pic;
}

// Le añado una música a un boton que se encuentra en el html
var sound = new Audio();
sound.src = "./musica.mp3"


var i = 0;
var txt = "Bienvenido a mi código";
var velocidad = 80;

function typeWrite(){
    if(i <txt.length){
        document.getElementById("texto").innetHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}








