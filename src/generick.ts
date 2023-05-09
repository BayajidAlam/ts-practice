type myArray<T> = Array<T>;

// const myNumbers: number[] = [1,2,3,4,5];
const myNumbers: myArray<number> = [1, 2, 3, 4, 5];
// const myString: string[] = ['jalil','ananta','cip'];
const myString: myArray<string> = ["jalil", "ananta", "cip"];
// const myBoolean: boolean[] = [true,false,true]
const myBoolean: myArray<boolean> = [true, false, true];

type dataType = { name: string; age: number };

const ourInfo: myArray<dataType> = [
  { name: "Bayajid", age: 22 },
  { name: "Alam", age: 26 },
  { name: "Sojib", age: 20 },
];

// tuple in generic
type myGenType<X, Y> = [X, Y];
const A: myGenType<Number, string> = [33, "44"];

// generic in function
const printInfo = <P, Q>(param1: P, param2: Q): P => {
  console.log(`${param1} and ${param2}`);
  return param1;
};

printInfo<string, number>("bayajid", 335);
printInfo<boolean, number>(true, 335);
printInfo<string, number>("bayajid", 335);


// generic interface
interface IMe<T,U> {
  name: string;
  age: T;
  mark: U;
}

const me:IMe<number,number> = {
  name: 'Bayajid',
  age: 23,
  mark: 34
}


// keyof 
type MovieType = {
  name: string,
  duration: number,
  category: string
}
type myMovieType = keyof MovieType
const myTest:myMovieType = "category"