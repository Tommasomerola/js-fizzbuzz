// Scrivi un programma che stampi i numeri da 1 a 100,
//  ma per i multipli di 3 stampi “Fizz” al posto del
//  numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5
//  stampi FizzBuzz.


// fai numeri da 1 a 100
for (let i=1; i<=100;i++){
    // SE il numero è divisibile sia per 3 che per 5 ALLORA scrivi FizzBuzz
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("FizzBuzz")
    }
    // SE il numero è divisibile solo per 3 ALLORA scrivi Fizz
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    // SE il numero è divisibile solo per 5 ALLORA scrivi Buzz
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    // SE il numero non è divisibile per nessuno dei due ALLORA scrivi i
    else{
        console.log(i)
    }
}