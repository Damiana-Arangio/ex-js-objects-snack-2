
// Code Question
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

/* 
    Domanda 1:
    -   Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

    Risposta:
    -   Lo structuredCloneDurante è una funzione di JavaScript che crea una copia profonda,
        quindi durante l'esecuzione di questo codice, vengono creati 9 oggetti in memoria:
        - l'oggetto hamburger con i relativi oggetti annidati (maker, restaurant),
        - l'oggetto secondBurger con i relativi oggetti annidati (maker, restaurant),
        - l'oggetto thirdBurger con i relativi oggetti annidati (maker, restaurant).
*/