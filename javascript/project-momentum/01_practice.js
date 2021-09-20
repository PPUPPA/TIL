// test
// alert('hi!')

// console.log(123123);
// console.log('lalalalalala');

const a = 5;
const b = 2;
let myName = "Sunny";

console.log(a+b);
console.log(a*b);
console.log(a/b);

console.log('hello ' + myName);

myName = "Sunny-as";
console.log('my name is '+ myName);

const amIFat = null; // null : 절대 자연적으로는 생기지 않음. 아무것도 없다는 걸 의도적으로 표현한 것.
let something; // undefined : 변수는 있지만 정의되지 않은 상태
const isHere = true; // Boolean : true or false

console.log(amIFat, something);

// nonsense = [1, 2,'hello', false, null, true, undefined, "sunny"]

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push('sun');

console.log(daysOfWeek);

const toBuy = ['potato', 'tomato', 'pizza'];
toBuy.push('kimbab');
console.log(toBuy[2]);


// Objects
// const playerName = 'sunny';
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = 'little bit';

// const player = ['sunny', 121212, false, 'little bit']
// 각 요소가 뭘 의미하는지 알 수 없으므로 배열을 사용하기엔 무리가 있음.

// 원하는 property와 값을 생성함!
const player = {
  name: 'sunny',
  points: 10,
  fat: true,
}
console.log(player);
console.log(player.name);
console.log(player['name']);

player.fat = false;
console.log(player);
player.lastName = 'potato';
console.log(player);
player.points = player.points + 15;
console.log(player.points);