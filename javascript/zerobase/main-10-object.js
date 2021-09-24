let user = {
  name : "john",
  age : 25,
};

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user.age);

user.age = 34;

console.log(user.age);

user.weight = 74;
console.log(user);

delete user.age;
console.log(user);