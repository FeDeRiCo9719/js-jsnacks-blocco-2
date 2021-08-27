/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

// 1. propmt * 5 => ciclo * 5
// 2. sommare tutti i numeri e stamparli

//INPUT 
// 1. propmt * 5 => ciclo * 5
var supporto = 0;
var ciao = 0;

for ( var i = 0; i<5; i++ ) {
    ciao = parseInt( prompt ("inserisci un numero") );
    console.log(supporto);
    supporto = supporto + ciao
}

console.log(supporto);