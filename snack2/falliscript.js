//Snack2
//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const listaSquadre = [
    {
        nome : "Parma",
        goal : 0,
        falli : 0
    },
    {
        nome : "Roma",
        goal : 0,
        falli : 0
    },
    {
        nome : "Piacenza",
        goal : 0,
        falli : 0
    },
    {
        nome : "Sampdoria",
        goal : 0,
        falli : 0
    },
    {
        nome : "Milan",
        goal : 0,
        falli : 0
    },
    {
        nome : "Inter",
        goal : 0,
        falli : 0
    }
]

console.table(listaSquadre);

for(let i = 0; i < listaSquadre.lenght; i++){
    const puntiRandom = Math.floor(Math.random() * 100) + 1;

    listaSquadre[i].goal = puntiRandom;
}

for(let i = 0; i < listaSquadre.lenght; i++){

    const falliRandom = Math.floor(Math.random() * 100) + 1;

    listaSquadre[i].falli = falliRandom
}

console.log(listaSquadre);


const arraysenzaGoal = [];

for (let i = 0; i < listaSquadre.length; i++) {

    const {nome, falli} = listaSquadre[i];

    arraysenzaGoal.push({
                            nome, 
                            falli
                        });
}
console.table(arraysenzaGoal);
