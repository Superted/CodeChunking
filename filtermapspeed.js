// fill numbersArray with 1 million random numbers
let numbersArray = Array.from({length: 1000000}, () => Math.floor(Math.random() * 40));

console.time('FilteringAndMapping');

let numbersArrayFiltered = numbersArray.filter( function(item) {
    return item > 10;
});
let numbersArrayMapped = numbersArrayFiltered.map( function(item) {
    return item * 2;
});

console.timeEnd('FilteringAndMapping');

console.log('Original array length: ' + numbersArray.length);
console.log('FIltered and mapped array length: ' + numbersArrayMapped.length);
//console.log(numbersArrayFiltered);
//console.log(numbersArrayMapped);