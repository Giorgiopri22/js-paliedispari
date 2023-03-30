const parola = prompt("Inserisci una parola: ");

function Palindromo(parola) {
  for (let i = 0; i < parola.length / 2; i++) {
    if (parola[i] !== parola[parola.length -1 -i]) {
      return false; 
    }
  }
  return true;
}

if (Palindromo(parola)) {
  console.log(`${parola} è palindroma.`);
} else {
  console.log(`${parola} non è palindroma.`);
}


/*---------------------------------------*/


// Chiediamo all'utente di scegliere tra pari e dispari
let sceltaUtente = prompt("Scegli pari o dispari");


// Funzione per generare un numero casuale da 1 a 5
function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

// Chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));


// Generiamo un numero casuale per il computer
let numeroComputer = generaNumero();

// Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
  
  // Funzione per stabilire se un numero è pari o dispari
  function Pari(numero) {
    return numero % 2 === 0;
  }
  
  // Stabiliamo se la somma è pari o dispari
  let sommaPari = Pari(somma);
  
  // Dichiariamo chi ha vinto
  if ((sceltaUtente === "pari" && sommaPari) || (sceltaUtente === "dispari" && !sommaPari)) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso!");
  }
  