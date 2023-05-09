"use strict";
const isHeroAvailable = true;
// if(isHeroAvailable){
//   console.log('Book Now😋');
// }
// else{
//   console.log('You can not book😪');
// }
const checkAvailablity = isHeroAvailable ? 'Book now' : "you can not";
// console.log(checkAvailablity);
// nullish operator 
// check null and undefined 
const inputSomething = null;
const checkInput = inputSomething !== null && inputSomething !== void 0 ? inputSomething : 'no input';
console.log(checkInput);
