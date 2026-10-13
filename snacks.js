//SNACK-1
//Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function sumDeclarative(a, b) {
    return a + b;
};

console.log("Total:" , sumDeclarative(3,5));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sumAnonymous = function (a, b){
    return a + b;
}

console.log("Total:", sumAnonymous(7,10));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const sumArrowF = (a, b) => a + b;
console.log("Total:",sumArrowF(4,9));

//SNACK-2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const doubleArrowF = num => num * num;

console.log('Il numero al quadrato fa:', doubleArrowF(10));

//SNACK-3 
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function calculation (num1, num2 , operation) {
    return operation(num1, num2);
}

function sum(a, b ) { return a + b; }
function minus(a, b) { return a - b; }
function multiplier(a, b) { return a * b; }

console.log(calculation(4, 2, sum));
console.log(calculation(4, 2, minus));
console.log(calculation(4, 2, multiplier));