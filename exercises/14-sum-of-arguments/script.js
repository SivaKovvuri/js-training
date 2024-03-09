/*
  * Sum of Arguments
  * Create a function that sums all the arguments passed to it.
 */
function sumOfArguments(...args){
  // your code goes here
  console.log('args',args)
  return args.reduce((acc,val)=> acc+val);
}

// Usage: pass arguments
console.log('Sum:', sumOfArguments(10, 2, 8, 4, 6)); // 30

