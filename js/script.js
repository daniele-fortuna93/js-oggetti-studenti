// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// 1. Creazione oggetto studente

var studente = {
  nome: 'Pippo',
  cognome: 'Rossi',
  eta: 25
};

// 2. Stampare proprietà oggetto

for (var key in studente) {
  console.log(key + ": " + studente[key]);
}

// 3. Creazione array di oggetti di studenti
var classe = [
  {
    nome: 'Pluto',
    cognome: 'Bianchi',
    eta: 28
  },
  {
    nome: 'Mario',
    cognome: 'Verdi',
    eta: 22
  },
  {
    nome: 'Giuseppe',
    cognome: 'Neri',
    eta: 24
  },
  {
    nome: 'Antonio',
    cognome: 'Gialli',
    eta: 27
  }
];


// 4. Creazione oggetto nuovo studente

var nuovoStudente = {}; // Creazione oggetto vuoto

var nomeStudente = ""; // Variabile Nome

var cognomeStudente = ""; // Variabile Cognome

var etaStudente; // Variabile età

// Controllo che nome non sia un numero
while ( !isNaN(nomeStudente) ) {
  nomeStudente = prompt("Inserisci il nome.");
  nomeStudente = nomeStudente[0].toUpperCase() + nomeStudente.substring(1);
  nuovoStudente.nome = nomeStudente;
  console.log(nuovoStudente);
}

// Controllo che cognome non sia un numero
while ( !isNaN(cognomeStudente) ) {
  cognomeStudente = prompt("Inserisci il cognome.");
  cognomeStudente = cognomeStudente[0].toUpperCase() + cognomeStudente.substring(1);
  nuovoStudente.cognome = cognomeStudente;
  console.log(nuovoStudente);
}

// Controllo che eta non sia una stringa
while ( isNaN(etaStudente) ) {
  etaStudente = parseInt(prompt("Inserisci l'età."));
  if ( !isNaN(etaStudente) ) {
    nuovoStudente.eta = etaStudente;
    console.log(nuovoStudente);
  }
}

// Inserisco oggetto nell'array
classe.push(nuovoStudente);

// 5. Stampare nome e cognome di tutti gli studenti della classe
for (var i = 0; i < classe.length; i++) {
  console.log("Nome: " + classe[i].nome + "\nCognome: " + classe[i].cognome + "\n");
}
