/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

/* L'obbiettivo è pareggiare gli array, ho bisogno quindi di sapere da quanti elementi sono composti entrambi gli array, 
poi devo accrescere automaticamente array_1 fino a raggiungere array_2  */

// 1. Creare due array =>  var array = []
// 2. Stabilire il numero di elementi che li compongono => array.lenght
// 3. confrontare i due valori, e accrescere di elementi casuali il più piccolo fino a pareggiare l'altro =>

// 1. Creare due array
var array_1 = [ 1, 2, 3, 4, 5 ];
var array_2 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

// 2. Stabilire il numero di elementi che li compongono
console.log(array_1.length);
console.log(array_2.length);

// 3. confrontare i due valori, e accrescere di elementi casuali il più piccolo fino a pareggiare l'altro
