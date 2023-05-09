"use strict";
// creating class
class Person {
    // assigning value to constructor
    constructor(name1, age1) {
        (this.name = name1), (this.age = age1);
    }
}
// creating instance
const p1 = new Person("Jalil bahi", 88);
// console.log(p1); 
// inheritance
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}
class Person2 extends Person1 {
    constructor(name, age, salary, position) {
        super(name, age);
        (this.salary = salary), (this.position = position);
    }
    show() {
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}
const p2 = new Person1("Bayajid", 22);
const p3 = new Person2("Bayajid", 22, 60000, "Ful stack developer");
// console.log(p2);
