
/*
  * Create a function that checks if an array contains a given element.
 */
function includes(arrayToSearch, elementToSearch) {
  // Write your code here
  
  for (let index = 0; index < arrayToSearch.length; index++) {
      if(elementToSearch ===  arrayToSearch[index]){
        return true;
      }    
  }  
  return false;
  
}

// usage example:
const versionArray = [1, 2, 5, 7, 2];
console.log(includes(versionArray, 2)); // true


const ageArray = [21, 22, 25, 27, 25];
console.log(includes(ageArray, 30)); // false
