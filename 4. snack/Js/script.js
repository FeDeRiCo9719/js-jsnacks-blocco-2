/* Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari */

// INPUT - creazione array e variabile somma
var array = [ 20, 30, 40, 50, 60, 70, 80 ];
console.log( "INDICE DI 3 = " + array.indexOf(3)); // Estrapolare l'indice di un elemento all'interno di un array
var somma = 0;
var indice = [];

// PROGRAMMA somma 
for ( var i = 0; i<array.length; i++ ) {

    console.log(array.indexOf(array));

    // indice.push(array.indexOf(20));
    // console.log( "ciao " + indice);

    // if ( indice % 2 == 0 ) {
    //     somma = somma + array[i];
    //     console.log("valore array al giro = " + array[i])
    //     console.log("valore somma + array al giro = " + somma);
    //     console.log("---------------------------");
    // }
}

//OUTPUT stampare somma totale
// console.log("somma valore totale = " + somma);