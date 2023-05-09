class Father {
  showInfo(): void {
    console.log(`Father`);
  }
}

class Son1 extends Father {
  showInfo(): void {
    console.log("Son 1");
  }
}

class Son2 extends Father {
  showInfo(): void {
    console.log("Son 2");
  }
}

function show(param: Father) {
  param.showInfo();
}

// create instance
const x = new Father();
const Y = new Son1();
const Z = new Son2();


show(x)