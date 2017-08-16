// fill numbersArray with 1 million random numbers
let numbersArray = Array.from({length: 10000000}, () => Math.floor(Math.random() * 40));

console.time('filtering');

//let numbersArrayFiltered = numbersArray.filter( function(item) {
//    return item > 10;
//});



let numbersArrayFiltered = numbersArray.reduce(function(pV,cV,cI){
  //console.log("pv: ", pV);
  if (cV > 10)
    pV.push(cV);
  return pV; // *********  Important ******
}, []);

console.timeEnd('filtering');

console.log('Original array length: ' + numbersArray.length);
console.log('FIltered array length: ' + numbersArrayFiltered.length);