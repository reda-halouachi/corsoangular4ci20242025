var numero = 5;
var tagnumero = document.getElementById('numero');
tagnumero.innerText = numero;

function incrementa() {
    numero++;
    var tagnumero = document.getElementById('numero');
    tagnumero.innerText = numero;
}