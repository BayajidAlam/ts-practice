// spread-operator 
const heroArr1:string[] = ['ananta','hero','sakib'];
const heroArr2:string[] = ['alom','faruk','razzak'];

heroArr1.push(...heroArr2);
console.log(heroArr1);

// rest parameter 
const heroScore = (...score:number[]):number => {
  let sum:number = 0;
  score.map(n=>{
    sum = sum + n;
  })
  return sum;
}
console.log(heroScore(4,5,4));

// rest with string 
const heroString = (...strings: string[]):void => {
  strings.map(str=>{
    console.log(str);
  })
}
heroString('Programming','hero','apollo')