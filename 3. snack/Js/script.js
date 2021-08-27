/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

//1. creare due array => due liste (nomi e cognomi)
var nomi = ["Marco", "Francesco", "Andrea"];
var cognomi = ["Rossi", "Brambilla", "Fumagalli"];
var supporto = [];

//2. Accoppiare un nome casuale con un cognome casuale => math.random(da 0 a 2) tramite indice array
for ( var i = 0; i<nomi.length; i++ ) {
    console.log( nomi[Math.floor(Math.random() * 2)] + " " + cognomi[Math.floor(Math.random() * 2)]);
}
