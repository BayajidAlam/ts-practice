"use strict";
// type assertion 
const thinkSomething = 34.4555;
console.log(thinkSomething.toFixed(2));
const myLuckyNum = (num) => {
    if (typeof num === 'string') {
        return 'This is string';
    }
    else if (typeof num === 'number') {
        return num;
    }
};
