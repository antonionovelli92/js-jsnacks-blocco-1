/*
SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

// Prendo l'elemento dal dom
const resultElement = document.getElementById('result');

// variabile d'appoggio
let result = '';

// creo un ciclo

for (let i = 1; i <= 10; i++) {
    // chiedere all'utente 10 volte un numero
    const askNumber = prompt('Scegli un numero?').trim();
    result += askNumber;

    // console.log(askNumber)
}
resultElement.innerText = result;
// 