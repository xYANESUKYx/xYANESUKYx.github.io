
var contador = 0; 

function TocarNota(nota){
    contador = 0;

    let audioNota = document.getElementById(nota);
    audioNota.play();

    var notasGif = document.getElementById("notas");
    var gotasGif = document.getElementById("gotas");
    var Sonrojo = document.getElementById("Sonrojo");
    var Corona = document.getElementById("corona");
    var nombreNota = document.getElementById("nombreNota");

    notasGif.style.display = "none";
    gotasGif.style.display = "none";
    Sonrojo.style.display = "none";
    Corona.style.display = "none";
    nombreNota.textContent = " ";
    nombreNota.style.border = "";

    notasGif.style.display = "block";
    gotasGif.style.display = "block";
    Sonrojo.style.display = "block";
    Corona.style.display = "block";
    nombreNota.textContent = nota;
    nombreNota.style.border = "solid";
}

function contando(){
    contador++;

    if(contador == 4){
        var notasGif = document.getElementById("notas");
        var gotasGif = document.getElementById("gotas");
        var Sonrojo = document.getElementById("Sonrojo");
        var Corona = document.getElementById("corona");
        var nombreNota = document.getElementById("nombreNota");

        notasGif.style.display = "none";
        gotasGif.style.display = "none";
        Sonrojo.style.display = "none";
        Corona.style.display = "none";
        nombreNota.textContent = " ";
        nombreNota.style.border = "";
    }
} 

var cont = setInterval('contando()', 1000);

