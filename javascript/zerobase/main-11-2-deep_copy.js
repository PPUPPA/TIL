let user = {
  name : "john",
  age : 25,
  sizes: {
    height:180,
    weight:70,
  }
};

/* 전개 연산자 */
// shallow copy problem
// let admin = { ...user } // user 내의 모든 필드값을 전개시킨다.
                        // {user.name, user.age}
                        // ES6부터 지원
// admin.sizes.height = admin.sizes.height + 1; // 181
// console.log(admin.sizes.height); // 181
// console.log(user.sizes.height); // 180이 아닌 181이 나옴

let admin = JSON.parse(JSON.stringify(user));
admin.sizes.height = admin.sizes.height + 1; // 181
console.log(admin.sizes.height); // 181
console.log(user.sizes.height); // 180이 아닌 181이 나옴


admin.name = "park";
console.log(admin.name);
console.log(user.name); // john > park로 변경됨

user.age = 30;
console.log(admin.age);
console.log(user.age); // 30으로 변경됨