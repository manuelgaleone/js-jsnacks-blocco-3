/*
Crea un array di oggetti che rappresentano degli animali.

Ogni animale ha un nome, una famiglia e una classe.

    Es:
    [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

Crea un nuovo array con la lista dei mammiferi.
*/

let animali = [
    {
        nome: "Leone",
        famiglia: "Felini",
        classe: "Mammiferi"
    },
    {
        nome: "Balene",
        famiglia: "Pesci",
        classe: "Uccelli"
    },
    {
        nome: "Leone",
        famiglia: "Felini",
        classe: "Uccelli"
    },
    {
        nome: "Cani",
        famiglia: "Domestici",
        classe: "Mammiferi"
    },
    {
        nome: "Ippopotamo",
        famiglia: "Felini",
        classe: "Uccelli"
    },
];

//Verifico e stampo solo mammiferi
for (let i = 0; i < animali.length; i++) {

    let mammiferi =  animali.filter(function(mammiferi) {
        return mammiferi.classe == "Mammiferi";
      });
      
    console.log(mammiferi);

}