/*
  * Create the function `excludes` that receives an array and
  * another array of elements to be excluded from the first array.
 */
function excludes(arrayToExclude, elementsToExcluded) {

  //option 1 using indexOf
  //return arrayToExclude.filter(x => elementsToExcluded.indexOf(x) === -1);

  //option 2 using Set
  //const exclusionSet = new Set(elementsToExcluded);
  //return arrayToExclude.filter(x=> !exclusionSet.has(x))  ;


  for (let index = arrayToExclude.length - 1; index >= 0; index--) {
    for (let i = 0; i < elementsToExcluded.length; i++) {
      if(arrayToExclude[index] == elementsToExcluded[i]){
        arrayToExclude.splice(index,1);
         // console.log(index)
          //console.log('arrayToExclude',arrayToExclude)
          //console.log('output',output)
      }
    }
  }
  return arrayToExclude;
}

// Usage example:
const versionArray = [1, 2, 5, 7, 2];
const newVesionArray = (excludes(versionArray, [2]));
console.log('newVesionArray: ', newVesionArray); // [1, 5, 7]



const ageArray = [21, 25, 22, 25, 30, 25, 30];
const newAgeArray = (excludes(ageArray, [25, 30]));
console.log('newAgeArray: ', newAgeArray); // [21, 22]




const ageArray1 = [21, 25, 22, 25, 30, 25,30,30,22,25, 30,30];
const newAgeArray1 = (excludes(ageArray1, [25, 30]));
console.log('newAgeArray1: ', newAgeArray1); // [21, 22]

