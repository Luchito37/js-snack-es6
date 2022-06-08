//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const caratteristicheBici = [
    {
        nome : "Timmy",
        peso : 120,
    },
    {
        nome : "WeightLess",
        peso : 100,
    },
    {
        nome : "EnduroBike",
        peso : 150,
    },
    {
        nome : "SeaBike",
        peso : 140,
    },
    {
        nome : "CityBike",
        peso : 110,
    },
]

console.table(caratteristicheBici);

let biciPiuLeggera = caratteristicheBici[0];

for (let i = 0; i < caratteristicheBici.length; i++){

    const biciLeggera = caratteristicheBici[i];

    if(biciPiuLeggera.peso > biciLeggera.peso){
        biciPiuLeggera = biciLeggera;
    }


}
console.log(biciPiuLeggera);

const biciDaStampare = document.getElementById("containerBike");
    biciDaStampare.innerHTML = `<h1>La bici più leggera che abbiamo è:</h1>
                                <h2>${biciPiuLeggera.nome}</h2>
                                <h3>${biciPiuLeggera.peso} g </h3>`







