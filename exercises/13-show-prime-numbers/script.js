/*
  Write a function that takes a number and displays all the prime
  numbers from 2 to that number.
 */
function showPrimeNumbers(numberLimit) {
  if(numberLimit<2){
    return false;
  }

  // your code goes here
  for (let index = 2; index <= numberLimit; index++) {
    if(isPrimeNumber(index)){
      console.log(index)
    }
    
  }
}           

/*
  Write a function that takes a number and returns true if the number
  is prime, false otherwise.
 */
function isPrimeNumber(_number) {
 for (let index = 2; index <= Math.sqrt(_number); index++) {
    if(_number%index == 0){
      return false;
    }      
 }
  return true;
}

showPrimeNumbers(20); // 2, 3, 5, 7, 11, 13, 17, 19
