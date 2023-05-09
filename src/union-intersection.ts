type HeroTypeA = {
  name: string;
  age: number;
};

type HeroTypeB = HeroTypeA & {
  salary: number;
  position: string;
};

const HeroData: HeroTypeB = {
  name: 'Bayajid',
  age: 23,
  salary:3534,
  position: 'developer'
}

const myFavHero:HeroTypeA | HeroTypeB = {
  name: 'khan',
  age: 30
}