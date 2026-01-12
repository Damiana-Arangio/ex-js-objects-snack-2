
// Code Question
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

/* 
    Domanda 1:
        -   Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?

    Risposta:    
        -   Lo spread operator crea una copia superficiale, 
            cioé copia solo il primo livello delle proprietà.
            Di conseguenza, le modifiche fatte nella proprietà ingredients di 
            secondBurger si riflettono anche su hamburger.

            Risultato:
            console.log(hamburger.ingredients[0]); -> Salad
            console.log(secondBurger.ingredients[0]); -> Salad

*/


/* 
    Domanda 2:
    -   Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

    Risposta:
    -   Durante l'esecuzione di questo codice, vengono creati tre oggetti in memoria:
        due oggetti (hamburger e secondBurger) e un array (ingredients).
        Poiché lo spread operator crea una copia superficiale, l'array ingredients 
        viene copiato per riferimento, quindi è condiviso.
*/