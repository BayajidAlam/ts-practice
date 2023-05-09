"use strict";
// const myNumbers: number[] = [1,2,3,4,5];
const myNumbers = [1, 2, 3, 4, 5];
// const myString: string[] = ['jalil','ananta','cip'];
const myString = ["jalil", "ananta", "cip"];
// const myBoolean: boolean[] = [true,false,true]
const myBoolean = [true, false, true];
const ourInfo = [
    { name: "Bayajid", age: 22 },
    { name: "Alam", age: 26 },
    { name: "Sojib", age: 20 },
];
const A = [33, "44"];
// generic in function
const printInfo = (param1, param2) => {
    console.log(`${param1} and ${param2}`);
    return param1;
};
printInfo("bayajid", 335);
printInfo(true, 335);
printInfo("bayajid", 335);
const me = {
    name: 'Bayajid',
    age: 23,
    mark: 34
};
const myTest = "category";
