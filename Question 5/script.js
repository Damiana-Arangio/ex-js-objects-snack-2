
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

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

/* 
    Domanda 1:
    -   Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

    Risposta:    
        -   

        Analisi di console.log(hamburger.maker.name); e console.log(secondBurger.maker.name);
        -   Nella riga 18 viene creata una copia superficiale dell’oggetto hamburger,
            quindi secondBurger contiene un nuovo oggetto indipendente, ma mantiene
            i riferimenti agli oggetti annidati (maker e restaurant) di hamburger.
            Di conseguenza, la modifica effettuata alla riga 20 (secondBurger.maker.name = "Chef Hyur";)
            si riflette anche sull'oggetto hamburger.

            Risultato:
            console.log(hamburger.maker.name); -> Chef Hyur
            console.log(secondBurger.maker.name); -> Chef Hyur

        
        Analisi di console.log(hamburger.maker.restaurant.name); e console.log(secondBurger.maker.restaurant.name); 
        -   Nella riga 15 viene creata una copia indipendente dell'oggetto annidato restaurant,
            quindi le righe 16 e 17 non si riflettono su hamburger.
        
        -   Nella riga 18 viene creata una copia superficiale dell’oggetto hamburger,
            quindi secondBurger contiene un nuovo oggetto indipendente, ma mantiene
            i riferimenti agli oggetti annidati (maker e restaurant) di hamburger.

        -   Nella riga 19, viene assegnato a secondBurger.maker.restaurant il 
            riferimento in memoria dell'oggetto newRestaurant. 
            
            Di conseguenza hamburger.maker.restaurant e secondBurger.maker.restaurant
            fanno riferimento allo stesso oggetto newRestaurant, e quindi
            hamburger.maker.restaurant.name e secondBurger.maker.restaurant.name
            hanno lo stesso valore assegnato nella riga 16 ((newRestaurant.name = "Hyur's II";))

            Risultato:
            console.log(hamburger.maker.restaurant.name); -> Hyur's II
            console.log(secondBurger.maker.restaurant.name); -> Hyur's II
*/


/* 
    Domanda 2:
    -   Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

    Risposta:
    -   Durante l'esecuzione di questo codice, vengono creati 5 oggetti in memoria:
        -   l'oggetto hamburger con i relativi oggetti annidati (maker, restaurant),
        -   l'oggetto newRestaurant,
        -   l'oggetto secondBurger (un solo oggetto perché gli oggetti annidati 
            vengono copiati per riferimento)
*/