
// Code Question
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

/* 
    Domanda 1:
        -   Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?

    Risposta:    
        -   Poiché viene effettuata una copia per riferimento, 
            le variabili (hamburger e secondBurger) puntano allo stesso oggetto in memoria. 
            Di conseguenza, le modifiche fatte in secondBurger si riflettono anche su hamburger.

            Risultato:
            console.log(hamburger.name); -> Double Cheese Burger
            console.log(secondBurger.name); -> Double Cheese Burger
*/


/* 
    Domanda 2:
    -   Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

    Risposta:
    -   Durante l'esecuzione di questo codice, viene creato un solo oggetto.
        Le viariabili hamburger e secondBurger contengono il riferimento allo stesso oggetto.
*/