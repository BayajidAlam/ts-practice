const myLuckNum = [1, 2, 3, 4, 5];
const myLuckyStrings = myLuckNum.map(num=>num.toString());
console.log(myLuckyStrings);

type listOfFriend = {
  friend1: string,
  friend2: string,
  friend3: string,
  friend4: string,
}

type listOffFriendReadOnly = {
  readonly [key in keyof listOfFriend] : listOfFriend[key]
}

const friendList: listOffFriendReadOnly = {
  friend1: 'abc',
  friend2: 'def',
  friend3: 'ghi',
  friend4: 'jkl'
}


console.log(friendList);