'use strict';
const nums = [2, 3, 4, 7, 8, 9];

//Dato un array di numeri, restituisci la somma dei loro quadrati.
const result = nums.map(n => n * n).reduce((acc, curr) => acc + curr, 0);
console.log(result)

//Dato un array di numeri, restituisci la somma solo dei numeri pari.
const result1 = nums.filter(n => n % 2 === 0).reduce((acc, curr) => acc + curr, 0);
console.log(result1)

//Dato un array, restituisci quanti numeri sono maggiori di 0.
const result2 = nums.filter(n => n > 0).length;
console.log(result2)

//Dato un array di numeri, restituisci il prodotto di tutti gli elementi.
const result3 = nums.reduce((acc, curr) => acc * curr);
console.log(result3);

//Restituisci il valore massimo contenuto in un array (senza usare Math.max).

function massimo(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num 
    }
    return max;
}

console.log(massimo(nums));

//Dato un array, restituisci un nuovo array con gli elementi in ordine inverso.