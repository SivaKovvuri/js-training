/*
  Swap the values of the two variables.
 */

let value1 = 'one';
let value2 = 'two';

// original values
console.log('original', value1); // should be 'one'
console.log('original', value2); // should be 'two'

//using a temporary  variable
// let temp=value1;
// value1=value2;;
// value2=temp;

//using  an  object destrucutring

[value1,value2]=[value2,value1]

console.log('swap', value1); // should be 'two'
console.log('swap', value2); // should be 'one'
