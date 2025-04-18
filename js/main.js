// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
// passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste
// regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare
//   centesimi sul prezzo).

// ----RACCOLTA DATI----
const utentKm = parseInt(prompt("inserisci il numero di Km da percorrere", "50"));
const utentAge = parseInt(prompt("inserisci la tua età", "18"));
const eurForKm = utentKm * 0.21;
let ticketPrice = eurForKm;


// ----SCRIPT----

// se l'utente è minorenne avrà uno sconto del 20%
if (utentAge < 18){
    ticketPrice = eurForKm * 0.8;
}
// se l'utente ha più di 65 anni avrà uno sconto del 40%
else if(utentAge>65){
    ticketPrice= eurForKm * 0.6;
}

// se c'è un errore nell'inserimento dei dati, avverti l'utente
if (isNaN(utentAge)){
    alert("inserire l'età in valore numerico come da esempio")
}else if(isNaN(utentKm)){
    alert("inserire i Km da percorrere in valore numerico come da esempio")
}
// se è tutto corretto, mostra il prezzo
else{
    alert("il prezzo del tuo biglietto è di " + ticketPrice.toFixed(2) + "€" )
}

