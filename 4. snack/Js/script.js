/* Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari */

// INPUT - creazione array e variabile somma
var array = [ 20, 30, 40, 50, 60, 70, 80 ];
var somma = 0;
// console.log( "INDICE DI 30 = " + array.indexOf(30)); // Estrapolare l'indice di un elemento all'interno di un array

// PROGRAMMA - somma 
for ( var i = 0; i<array.length; i++ ) {

    if ( (array.indexOf(array[i])) % 2 == 1 ) {
        somma = somma + array[i];
    }

}

//OUTPUT stampare somma totale
console.log("somma valore totale = " + somma);