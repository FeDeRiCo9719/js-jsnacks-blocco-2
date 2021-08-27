//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

//INPUT
// 1. inserire un numero (variabile)
var num = parseInt(prompt("Inserisci un numero"));
// validazione
while (isNaN(num)) {
    alert("carattere non valido, riprova");
    num = parseInt(prompt("inserisci un numero"));
}

// 2. SE il numero è pari stampalo
if (num % 2 == 0) {
    alert("Il numero " + num + " è pari");
} else {
    alert( "Il numero successivo è " + (num + 1) );
}