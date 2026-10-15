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

// function createTimer(time) {
//     return function() {
//         setTimeout(() => {
//             console.log('Timeout!');
//         }, time);
//     }
// }

// //prova timer 2 secondi
// const timerTry = createTimer(2000);

// //avvio prova timer
// timerTry();

//SNACK-5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// function printEverySec(print) {
//     const interval =  setInterval (() => {
//             console.log(print)
//         }, 2000);

//     setTimeout(() => {
//         clearInterval(interval)
//         console.log('timeout: interval terminated');
//     },6000);
// }

// printEverySec('tic tac');


//SNACK-6 
//Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// function createAutomaticCounter(interval) {
//     let counter = 0; 
//     let timer;
//     return function() {
//         timer = setInterval(() => {
//             counter++;
//             console.log(counter);
//         }, interval);

//           return timer;
//     };
// }

// const startCounter = createAutomaticCounter(1000);
// const timer = startCounter();

// setTimeout(() => {
//         clearInterval(timer)
//         console.log('timeout: counter terminated');
// },4000);

//SNACK-7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function runAndStop(msg, runtime , stoptime) {
    const timer= setInterval(()=> {
        console.log(msg)
    },runtime);
    

    setTimeout(()=> {
        clearInterval(timer);
        console.log("KABOOOOM");
    }, stoptime);
}

runAndStop('TIC TAC', 1000, 4000);

//SNACK-8
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function reverseTimer (n) {
    const timer = setInterval(() => {
        console.log(n);

        if (n === 0) {
            console.log('TIME UP');
            clearInterval(timer);
        }
         n--;
    },1000);
}

reverseTimer(5);