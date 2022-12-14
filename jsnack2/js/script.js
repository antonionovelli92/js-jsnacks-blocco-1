/*
SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa. (vietato usare includes() )
*/

// Prendo l'elemento dal dom
const areaElement = document.getElementById('area');
const text = document.getElementById('text')
const button = document.getElementById('button')
const result = document.getElementById('result')

// array
const allowedName = [
    'Antonio',
    'Marco',
    'Pippo', 'Joker',
    'Batman'
];
//aggancio l'event listner al click del bottone

button.addEventListener('click', function () {
    // prendo il nome dell'utente
    const userName = text.value.trim();

    // Validiamo
    if (!userName) {
        result.classList.add('text-danger')
        result.innerText = 'Non hai inserito nessun Nome';
        return;
    }

    // creo un flag di aiuto
    let isAllowed = false;

    // controlliamo se il nome è presente
    for (let i = 0; i < allowedName.length && !isAllowed; i++) {
        // prendo il nome dall'array
        const currentName = allowedName[i];
        if (currentName === userName) {
            isAllowed = true;

        }
    }


    // if (isAllowed) {
    //     result.innerText = 'Benvenuto alla festa';
    // } else {
    //     result.innerText = 'Torna a casa, non sei il benvenuto';
    // }


    // alternativa con il ternario(nome costante= condizione ? se vero : se falso;)
    result.innerText = isAllowed ? 'Benvenuto alla festa' : 'Torna a casa, non sei il benvenuto';


})

