function getFirstElement<T extends number | string>(arr: T[]) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

const myArray = ["1", "def", "xyz"];
console.log(getFirstElement(myArray));
