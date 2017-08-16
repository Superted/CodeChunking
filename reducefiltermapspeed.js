// fill numbersArray with 1 million random numbers
let numbersArray = Array.from({length: 1000000}, () => Math.floor(Math.random() * 40));

console.time('FilteringAndMapping');

//let numbersArrayFiltered = numbersArray.filter( function(item) {
//    return item > 10;
//});
//let numbersArrayMapped = numbersArrayFiltered.map( function(item) {
//    return item * 2;
//});

let numbersArrayMapped = numbersArray.reduce(function(pV,cV,cI){
  if (cV > 10)
    pV.push(cV * 2);
  return pV; // *********  Important ******
}, []);

console.timeEnd('FilteringAndMapping');

console.log('Original array length: ' + numbersArray.length);
console.log('FIltered and mapped array length: ' + numbersArrayMapped.length);
//console.log(numbersArray);
//console.log(numbersArrayMapped);