"use strict";
// spread-operator 
const heroArr1 = ['ananta', 'hero', 'sakib'];
const heroArr2 = ['alom', 'faruk', 'razzak'];
heroArr1.push(...heroArr2);
console.log(heroArr1);
// rest parameter 
const heroScore = (...score) => {
    let sum = 0;
    score.map(n => {
        sum = sum + n;
    });
    return sum;
};
console.log(heroScore(4, 5, 4));
// rest with string 
const heroString = (...strings) => {
    strings.map(str => {
        console.log(str);
    });
};
heroString('Programming', 'hero', 'apollo');
