'use strict';
const nums = [2, 4, 7, 8, 8];
const nums1 = [-2, 4, -7, 3];
const double = [2, 5, 5, 10];

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
    for(let n of arr) {
        if(n % 2 === 0) {
            pari += n;
        }else {
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

//Dato un array con elementi ripetuti, restituiscilo senza duplicati.
//un Set è una collezione di valori unici.
// IN PRATICA:
//new Set(arr) → crea un Set che rimuove i duplicati.
//[...Set] → converte di nuovo il Set in array.

const result4 = (arr) => [...new Set(arr)];
console.log(result4(double))