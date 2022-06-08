/*
Snack 4
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
    Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.

2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70

3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

*/

let listaStudents = [
    { name: "Marco", id: 213, grades: 78 },
    { name: "Paola", id: 110, grades: 96 },
    { name: "Andrea", id: 250, grades: 48 },
    { name: "Gaia", id: 145, grades: 74 },
    { name: "Luigi", id: 196, grades: 68 },
    { name: "Piero", id: 102, grades: 50 },
    { name: "Francesca", id: 120, grades: 84 },
];

// prima consegna


console.log("\n--------nuovo array con i nome studenti in maiuscolo-----------")

const nomiMaiuscolo = listaStudents.map((student, indice, arrayOrginale) => {
    return student.name.toUpperCase();
});

console.table(nomiMaiuscolo)


// seconda consegna


console.log("\n--------nuovo array con i studenti con voti superiore a 70-----------")

let filterGrades = listaStudents.filter((voto) => {
    if(listaStudents.grades > 70){
        return true;
    }

    let {grades} = voto

    return grades > 70

});

console.table(filterGrades);


// terza consegna


console.log("\n--------nuovo array con i studenti con voti superiore a 70 e id superiore a 120-----------")


const mapGradesId = listaStudents.map((student, indice, arrayOrginale) => {
    if (student.id > 120  && student.grades > 70){
        return student;
    };
    
});

console.table(mapGradesId)



