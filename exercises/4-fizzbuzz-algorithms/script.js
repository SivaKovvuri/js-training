/*
  FizzBuzz
  Write a program that prints the numbers from 1 to 100.
  But for multiples of three print “Fizz” instead of the number
  and for the multiples of five print “Buzz”.
  For numbers which are multiples of both three and five print “FizzBuzz”.
 */
function isfizzBuzz(arg){
  //console.log('isfizzBuzz',arg)
  if(typeof(arg) != "number"){
    console.log('Please enter a number')
    return
  }
    
  if(arg%3   == 0   && arg%5 ==0){
    console.log(arg,'FizzBuzz')
  }
  
  else if(arg%3  == 0 &&  arg%5 != 0){
    console.log(arg,'Fizz')
  }

  
  else if(arg%3  != 0 &&  arg%5 == 0){
    console.log(arg,'Buzz')
  }else{
    console.log(arg)
  }

}

function looptillhundred(){
  for (let index = 1; index <= 100; index++) {
    isfizzBuzz(index);
    
  }
}
looptillhundred();

// Usage example:
let checkFizzBuzz1 = isfizzBuzz('one');
//console.log(checkFizzBuzz1); // should print 'Please enter a number'

let checkFizzBuzz2 = isfizzBuzz(true);
//console.log(checkFizzBuzz2); // should print 'Please enter a number'

let checkFizzBuzz3 = isfizzBuzz(9);
//console.log(checkFizzBuzz3); // should print 'Fizz'

let checkFizzBuzz4 = isfizzBuzz(10);
//console.log(checkFizzBuzz4); // should print 'Buzz'

let checkFizzBuzz5 = isfizzBuzz(30);
//console.log(checkFizzBuzz5); // should print 'FizzBuzz'

let checkFizzBuzz6 = isfizzBuzz(11);
//console.log(checkFizzBuzz6); // should print 11
