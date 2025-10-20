'use strict';
const nums = [2, 3, 4, 7, 8, 9, 2, 2, 2];
const nomi = ['Ida', 'Samantha', 'Marco', 'Simone', ' Mattia', 'Ivo'];

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
const result4 = (arr) => {
    const inverso = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        inverso.push(arr[i]);
    }
    return inverso;
}
console.log(result4(nums));

//Dato un array, restituisci la somma solo dei numeri superiori a 5.
const result5 = (arr) => {
    const filter = arr.filter((n) => n >= 5).reduce((acc, curr) => acc + curr, 0);
    return filter;
}
console.log(result5(nums));

//Dato un array di stringhe, restituisci solo quelle con più di 3 caratteri.
const result6 = (arr) => {
    const filter = arr.filter(n => n.length > 3);
    return filter;
}
console.log(result6(nomi));

//Conta quante volte appare un valore. Data una lista e un valore, conta quante volte compare quel valore.
const result7 = (arr, val) => {
    return arr.filter(n => n === val).length;
}
console.log(result7(nums, 4));

//somma degli elementi con indice pari
const result8 = (arr) => {
    let newArray = [];
    arr.forEach((element, index) => {
        if(index % 2 === 0){
            newArray.push(element);
        }
    });
    return newArray.reduce((acc, curr) => acc + curr, 0); 
}

console.log(result8(nums));
//alternativa
const result9 = (arr) => {
    let somma = 0;
    arr.forEach((element, index) => {
        if(index % 2 === 0){
            somma += element;
        }
    });
    return somma; 
}

console.log(result9(nums));