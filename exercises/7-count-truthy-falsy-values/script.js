/*
  Write a function which checks and count the truthy values from an array
*/

const valuesArray = [0, 1, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
 // your code here
 let count=0; 
 curArray.forEach(element => {

    if(element){
        count+=1;
    }
    
  });
  return count;

}

// usage example:
console.log(checkCountTruthyFalsy(valuesArray)); // should return 2



//other alternative
// const valuesArray = [0, 1, '', undefined, false, true];

// function countTruthyValues(curArray) {
//   let truthyValues = curArray.filter(element => element);
//   return truthyValues.length;
// }

// // usage example:
// console.log(countTruthyValues(valuesArray)); // should return 2
