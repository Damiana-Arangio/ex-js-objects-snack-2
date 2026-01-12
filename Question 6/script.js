
// Code Question
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

/* 
    Domanda 1:
    -   Qual è il metodo migliore per clonare l’oggetto chef, e perché?

    Risposta:
    -   Se l'oggetto chef non contenesse funzioni, il metodo migliore per clonarlo sarebbe
        structuredClone(), ma siccome ne contiene diverse e contiene anche oggetti annidati,
        il metodo migliore è lo spread operator applicato anche agli oggetti annidati.
        Questa soluzione rende il codice più lungo, ma permette di copiare anche le funzioni.
*/