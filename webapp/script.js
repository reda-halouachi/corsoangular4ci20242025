var numero = 5;
var tagnumero = document.getElementById('numero');
tagnumero.innerText = numero;

function incrementa() {
    numero++;
    var tagnumero = document.getElementById('numero');
    tagnumero.innerText = numero;
}


console.log('Ciao mondo!');

setTimeout(() => {
    console.log('Sono passati 2 secondi');
    setTimeout(() => {
        console.log('Sono passati 2 secondi');
    }, 2000);
}, 2000);



function saluta(pippo, topolino) {
}

saluta()