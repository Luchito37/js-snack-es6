//Snack 3
//Dato l’array di nomi:
//const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
//e dati due numeri min e max (min più piccolo di max).
//Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
//Eseguiamo questo esercizio prima con forEach e poi con filter.



const listaNomi = [
    "Michele",
    "Fabio",
    "Roberto",
    "Giovanni",
    "Simone",
    "Chiara"
]

const min = 2;

const max = 5;

let nuovaListaNomi = [];

// procedura con il ciclo "forEach"

listaNomi.forEach(function(nome, i){

    if (i > min && i < max){
        nuovaListaNomi.push(nome)
    }

    
});

console.table(nuovaListaNomi);


// procedura con il ciclo "filter"


const nuovaListaNomi2 = listaNomi.filter((nome, i) => {

    //bisogna utilizzare il valore booleano True o False

    if(i > min && i < max){
        return true;
    }else{
        return false;
    }

});

console.table(nuovaListaNomi2);