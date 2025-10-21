'use strict';
const nums = [2, 4, 7, 10, 8];
const nums1 = [-2, 4, -7, 3];
const double = [2, 5, 5, 10];
const obj = [
    {valore: 10},
    {valore: 3},
    {valore: 4}
];
const testo = 'Ciao sono elisa chiappini e ho sostenuto un esame di matematica e un esame di storia';
const vocali = ['a', 'e', 'i', 'o', 'u'];
const ciao = 'ciao';
const misto = ['c', 3, 2, 'e'];

//Calcola la media dei cubi dei numeri di un array.
const result = (arr) => {
    const cubi = arr.map((n) => n ** 3).reduce((acc, curr) => acc + curr, 0);
    const media = cubi / arr.length;
    return media;;
}
console.log(result(nums));

//Dato un array, trova la differenza tra somma dei numeri pari e somma dei dispari.
const result1 = (arr) => {
    //trova i numeri pari
    let pari = 0;
    let dispari = 0;
    for (let n of arr) {
        if (n % 2 === 0) {
            pari += n;
        } else {
            dispari += n;
        }
    }
    return pari - dispari;
}
console.log(result1(nums));

//La funzione riceve un array e un numero limite, e restituisce la somma dei numeri che lo superano.
const result2 = (arr, val) => {
    return arr.filter(n => n > val).reduce((acc, curr) => acc + curr, 0)
}
console.log(result2(nums, 7));

//Calcola la somma dei quadrati solo dei numeri maggiori di zero.
const result3 = (arr) => {
    const quadri = arr.filter((n) => n > 0).map(n => n ** 2).reduce((acc, curr) => acc + curr, 0);
    return quadri;
}
console.log(result3(nums1));

/*Dato un array con elementi ripetuti, restituiscilo senza duplicati.
un Set è una collezione di valori unici.
IN PRATICA:
new Set(arr) → crea un Set che rimuove i duplicati.
[...Set] → converte di nuovo il Set in array. */

const result4 = (arr) => [...new Set(arr)];
console.log(result4(double));

//Dato un testo, restituisci quante vocali contiene.
const result5 = (str) => {
    let contatore = 0;  
    for (let c of str) {
        if (vocali.includes(c)) {
            contatore++;
        }
    }
    return contatore;
}
console.log(result5(testo));

//Dato un array di oggetti come { valore: 10 }, somma tutti i campi valore.
const result6 = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.valore, 0);
}
console.log(result6(obj))

//Dato un array, restituisci un nuovo array con ogni elemento al quadrato.
const result7 = (arr) => {
    return arr.map((n) => n ** 2);
}
console.log(result7(nums));

//Dato un array, trova il secondo valore più grande (senza usare sort direttamente).
const result8 = (arr) => {
    let max = -Infinity;
    let secondo = -Infinity;
    for(let n of arr) {
        if(n > max) {
            secondo = max;
            max = n;
        } else if (n > secondo && max > n){
            secondo = n;
        }
    }
    return secondo;
}
console.log(result8(nums));

//Dato un testo, restituisci quante parole contiene.
//.trim() -> toglie gli spazi
const result9 = (str) => {
    return str.trim().split(/\s+/).length;
}
console.log(result9(testo));

//rovescia una stringa 'ciao'.
const bonus = (str) => {
    //prendi l'array, dividi la stringa in lettere di un array, inverti, unisci in una stringa
    return ciao.split('').reverse().join('');
}
console.log(bonus(ciao));

//verifica se una parola è palindroma
const bonus1 = (str) => {
    const invertita = str.split('').reverse().join('');
    if(invertita.toLowerCase() === str.toLowerCase()) {
        return console.log('la parola è palindroma') 
    } else {
        return console.log('questa parola non è palindroma')
    }
}
bonus1('Anna');

//somma di numeri dispari al quadrato. combina filter, map e reduce in una sola riga
const bonus2 = (arr) => {
    return arr.filter(n => n % 2 !== 0).map(n => n ** 3).reduce((acc, curr) => acc + curr, 0);
}
console.log(bonus2(nums));

//conta quante volte ogni parola appare in una frase e restituisci un oggetto del tipo: {parola: conteggio}
const bonus3 = (arr) => {
    let contatore = {}; //restituisce un oggetto
    const parole = arr.toLowerCase().split(' ');
    for(let p of parole) {
        contatore[p] = (contatore[p] || 0) +1;
    }
    return contatore;
}
console.log(bonus3(testo));

//estrai solo numeri da un array misto (stringhe + numeri), filtra solo elementi numerici
const bonus4 = (arr) => {
    return arr.filter(e => typeof e === 'number');
}

console.log(bonus4(misto))