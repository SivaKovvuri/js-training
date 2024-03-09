/*
   DOM Manipulation Exercise
   Create a new bingo card with random numbers from 1-75.
 */

window.onload = createBingoCard;

function createBingoCard() {
  // your code here
  for (let index = 1; index <= 24; index++) {
    let id = 'Square' + index
    console.log(id)
    document.getElementById(id).innerHTML = this.RandomValue(0, 75);
  }


}

function RandomValue(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}