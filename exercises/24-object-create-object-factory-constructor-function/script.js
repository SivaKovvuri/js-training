/*
 * create a function that will return an object
 */
function createObjFactoryMethod(name, age, rank, country) {
  return {
    name:name,
    age:age,
    rank:rank,
    country:country
  }
}

// example usage:
let Students1 = createObjFactoryMethod('Dinanath', 35, 5, 'India');
console.log('Students1', Students1); // { name: 'Dinanath', age: 35, rank: 5, country: 'India' }

// use constructor function to create an object
function Student(name, age, rank, country) {
  this.name=name,
  this.age=age,
  this.rank=rank,
  this.country=country

}

// example usage:
let Students2 = new Student('Amit', 30, 4, 'Hindustan');
console.log('Students2', Students2); // Student { name: 'Amit', age: 30, rank: 4, country: 'Hindustan' }
