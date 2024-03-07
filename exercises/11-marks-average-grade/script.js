

const MARKSARRAY = [55, 85, 55, 65];

/*
  the function calculateAverage() takes an array of marks as an argument
  and returns the average of the marks in the array.
 */
function calculateAverage(currentArray) {

  return currentArray.reduce((a,v,index,{length:len})=>{
    console.log('a',a,'v',v,'index',index)
    return index == len-1?((a+v)/len):(a+v);
  },0)

}



/*
  the function calculateGrades() takes an array of marks as an argument
  and returns the grade of the student based on the average of the marks
  in the array.
  The grade is calculated as follows:
  - average < 70 = 'D'
  - average < 80 = 'C'
  - average < 90 = 'B'
  - average <= 100 = 'A'
 */
function calculateGrades(_currentArray) {
  let avg=calculateAverage(MARKSARRAY)
  let grades=[{id:70,g:'D'},{id:80,g:'C'},{id:90,g:'B'},{id:100,g:'A'}]
  let g= grades.find(x=>avg<x.id);
  return g?g.g:'A'
}

console.log('Grade:',calculateGrades(MARKSARRAY)); // should return 'C'
