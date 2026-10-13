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

function sum(a, b ) { return a + b; }   //function sum(a, b ) => a + b;
function minus(a, b) { return a - b; }   //function minus(a, b)  => a - b;
function multiplier(a, b) { return a * b; }   //function multiplier(a, b) => a * b;

console.log(calculation(4, 2, sum));
console.log(calculation(4, 2, minus));
console.log(calculation(4, 2, multiplier));

//SNACK-4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function createTimer(time) {
    return function() {
        setTimeout(() => {
            console.log('Timeout!');
        }, time);
    }
}

//prova timer 2 secondi
const timerTry = createTimer(2000);

//avvio prova timer
timerTry();

//SNACK-5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function printEverySec(print) {
    const interval =  setInterval (() => {
            console.log(print)
        }, 2000);

    setTimeout(() => {
        clearInterval(interval)
        console.log('timeout: interval terminated');
    },6000);
}

printEverySec('tic tac');



