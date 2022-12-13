/*
SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.
*/

// Prendo l'elemento dal dom
const resultElement = document.getElementById('result');


const numbers = [];

// creo un ciclo
for (let i = 1; i <= 10; i++) {
    // chiedere all'utente 10 volte un numero
    const askNumber = parseInt(prompt('Scegli un numero?', 5));
    numbers.push(askNumber);
}
let total = '';
for (let i = 1; i < numbers.length; i++) {
    total += numbers[i];

}

resultElement.innerHTML += total;
