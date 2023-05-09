// null 
const myText = (text:string | null):void => {
  if(text === null){
    console.log("Nothing to say!");
  }
  else{
    console.log(text);
  }
}

// myText("Hello")
// myText(null)


// unknown type 
const guessSomething = (myGuess:unknown) => {
  console.log(myGuess);
}

// console.log("Ok");
// console.log(6);
// console.log(undefined);
// console.log(null);