// abstract
abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class Mycar extends Car {
  start(): void {
    console.log("Car starting!");
  }
  stop(): void {
    console.log("Car stopped...!");
  }
}

const car1 = new Mycar();
car1.start();