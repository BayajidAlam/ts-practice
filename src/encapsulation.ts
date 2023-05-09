class MyBank{
  id: number;
  private amount: number;
  name: string;

  constructor(id:number,amount:number,name:string) {
    this.amount = amount;
    this.id = id;
    this.name = name;
  }
}

const bank = new MyBank(111,50000,'bayajid')
console.log(bank);