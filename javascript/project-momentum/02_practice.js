// function sayHello(nameOfPerson, age){
//   console.log('Hello my name is ' + nameOfPerson + ' and I\'m ' + age);
// }

// sayHello('sunny', 26);
// sayHello('dada', 22);
// sayHello('lynn', 21);

// function plus(a, b){
//   console.log(a + b);
// }
// function divide(a, b){
//   console.log(a/b);
// }
// plus(8,60);
// divide(98, 20);

const player = {
  name:'sunny',
  sayHello: function(otherPersonsName){
    console.log('hello '+otherPersonsName+' nice to meet you!');
  }
}
console.log(player.name);
player.sayHello('lynn');