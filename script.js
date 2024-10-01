//Consegna:
//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?


//Scrivi un programma che stampi i numeri da 1 a 100---> deduco che la condizione sarà i<=100 e l'incremento sarè ++i
//Invece l'inizializzazione sarà i= 1

//ma per i multipli di 3 stampi “Fizz” al posto del numero ---> deduco che dovrò sicuramente usare un If e un Else e che quando i sarà diviso da 3 e darà resto 0 (i % 3 == 0) il CONSOLE LOG dovrà essere "Fizz"
//e per i multipli di 5 stampi "Buzz" ----> deduco la stessa cosa ma i % 5 ==0 e invece di riscrivere If ed Else aggiungerò un Else if
//Per i numeri che sono siano multipli di 3 che di 5 stampi "FizzBuzz" ----> deduco che dovrò aggiungere un altro Else if con &&
// Invece L'else riguarderà i numeri che non rientrano in nessuna delle 3 categorie qua sopra.




for (i = 1; i <= 100; ++i) {

  
    if (i % 5 == 0 && i % 3 == 0)  {
        console.log('Fizzbuzz');

    }

    else if (i % 3 == 0) {
        console.log('Fizz');

    }

    else if (i % 5 == 0) {
        console.log('Buzz');

    }

    else {
        console.log(i);
    }






}

