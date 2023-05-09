// type assertion 
const thinkSomething:unknown = 34.4555;
console.log((thinkSomething as number).toFixed(2));

const myLuckyNum = (num:string | number):number | string | undefined => {
  if(typeof num === 'string'){
    return 'This is string';
  }
  else if(typeof num === 'number'){
    return num;
  }
}


