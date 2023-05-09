"use strict";
const doSomething = (a) => {
    if (typeof a === "number") {
        return a;
    }
    return a;
};
const getInfo = (info) => {
    if ("phone" in info) {
        return `Type A: phone: ${info.phone}`;
    }
    else if ("salary" in info) {
        return `Type B: salary: ${info.salary}`;
    }
};
// instance of guard
class P {
    constructor(position, salary) {
        this.position = position;
        this.salary = salary;
    }
    showDetails() {
        console.log(`Position: ${this.position}`);
    }
}
class Q extends P {
    constructor(position, salary) {
        super(position, salary);
    }
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}
class R extends P {
    constructor(position, salary) {
        super(position, salary);
    }
    showSalaryWithPosition() {
        console.log(`Salary: ${this.salary},${this.position}`);
    }
}
function findInstance(person) {
    if (person instanceof Q) {
        person.showSalary();
    }
    else if (person instanceof R) {
        person.showSalaryWithPosition();
    }
}
const p4 = new Q('Developer', 3000);
const p5 = new R('Engineer', 4000);
