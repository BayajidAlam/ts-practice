function makeUpperCase(str: string | string[]): string | string[]|undefined {
  if (typeof str === "string") {
    return str.toUpperCase();
  }
  else if(Array.isArray(str)){
    return str.map(st=>st.toUpperCase())
  } 

}

console.log(makeUpperCase(['okkk']));
