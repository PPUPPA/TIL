let user = {
  name : "john",
  age : 25,
};

let admin = user; // 복사
console.log(admin);

admin.name = "park";
console.log(admin.name);
console.log(user.name); // john > park로 변경됨

user.age = 30;
console.log(admin.age);
console.log(user.age); // 30으로 변경됨