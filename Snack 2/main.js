/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

//Array nomi
let nomi = nomiMaiuscole(["MANUEL", "manuel", "MANuel"]);
console.log(nomi);

//Funzione per maiuscole
function nomiMaiuscole(name) {
 
    return name.map(nameUp => {
 
        return nameUp.charAt(0).toUpperCase() + nameUp.slice(1).toLowerCase();
 
    });
}

  