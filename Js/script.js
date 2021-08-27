/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

// 1. propmt * 5 => ciclo * 5
// 2. stampare la sommare

//INPUT 
// 1. propmt * 5 => ciclo * 5
var somma = 0;
var supporto = 0;

// for ( var i = 0; i<5; i++ ) {
//     supporto = parseInt( prompt ("inserisci un numero") );
//     while (isNaN(supporto)) {
//         alert("carattere non valido, riprova");
//         supporto = parseInt(prompt("inserisci un numero"));
//     }
//     console.log(supporto);
//     somma  = somma  + supporto
// }

// //OUTPUT 
// // 2. stampare la sommare
// console.log(somma);


// CICLO WHILE

var i = 0;

while (i<5) {
    supporto = parseInt( prompt ("inserisci un numero") );
    while (isNaN(supporto)) {
        alert("carattere non valido, riprova");
        supporto = parseInt(prompt("inserisci un numero"));
    }
    console.log(supporto);
    somma  = somma  + supporto
    i++
}

//OUTPUT 
// 2. stampare la sommare
console.log(somma);