/*
Crea un array composto da 10 automobili.

Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.
*/

//Creo l'array delle macchine
let macchine = [
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "Benzina"
    },
    {
        marca: "Porche",
        modello: "Cayenne",
        alimentazione: "Gpl"
    },
    {
        marca: "Bmw",
        modello: "Serie 1",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "Diesel"
    },
    {
        marca: "Bmw",
        modello: "Serie 4",
        alimentazione: "Gpl"
    },
    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi",
        modello: "A3",
        alimentazione: "Diesel"
    },
    {
        marca: "Peugeot",
        modello: "307",
        alimentazione: "Gpl"
    },
    {
        marca: "Peugeot",
        modello: "308",
        alimentazione: "Benzina"
    },
    {
        marca: "Audi",
        modello: "A2",
        alimentazione: "Diesel"
    },
];

//Verifico e stampo le macchine
for (let i = 0; i < macchine.length; i++) {

    let macchineGpl =  macchine.filter(function(gpl) {
        return gpl.alimentazione == "Gpl";
      });
      
    console.log(macchineGpl);

    let macchineBenzina =  macchine.filter(function(benzina) {
        return benzina.alimentazione == "Benzina";
      });
      
    console.log(macchineBenzina);

    let macchineDiesel =  macchine.filter(function(diesel) {
        return diesel.alimentazione == "Diesel";
      });
      
    console.log(macchineDiesel);

}