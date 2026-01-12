
// Code Question
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

/* 
    Domanda 1 - chef:
        -   Qual è il metodo migliore per clonare l’oggetto chef, e perché?

    Risposta:    
        -   Per clonare l’oggetto chef il metodo migliore da utilizzare 
            è lo spread operator perché l'oggetto chef non contiene oggetti annidati 
            al suo interno, quindi è sufficiente una copia superficiale. 
            Inoltre, lo spread operator, a differenza dei metodi JSON.parse(JSON.stringify())
            e structuredClone(), permette di copiare anche la funzione makeBurger
*/


/* 
    Domanda 2 - restaurant:
    -   Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

    Risposta:
    -   Per clonare l'oggetto restaurant il metodo migliore da utilizzare è structuredClone()
        perché l'oggetto restaurant contiene un oggetto annidato (address), 
        quindi è necessaria una copia profonda. Inoltre, l'oggetto restaurant 
        contiene un oggetto di tipo Date che il metodo JSON.parse(JSON.stringify()) non
        copia direttamente (lo trasforma in una stringa)
*/