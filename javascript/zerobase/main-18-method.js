// 함수 선언식
function add_1(x,y){
  return x+y;
}

// 함수 표현식
const add_2 = function (x,y){
  return x+y;
}

// 화살표 함수
const add_3 = (x,y) => x+y;

const add_4 = add_1;

console.log(add_4(1,3));

console.log(add_1 == add_2);
console.log(add_1 == add_4); // 주소참조

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));

let list = [
  "John",
  27,
  function hello_func(){
    console.log("hello");
  },
];

let obj = {
  name: "John",
  age: 27,
  hello_func(){
    console.log("hello");
  },
};

function hello_func(){console.log("hello");}
function hi_func(){console.log("hi");}

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);

let obj2 = {
  name: "John",
  age: 27,
  func: hello_func,
}

hello_func();
hi_func();
obj2.func();
console.log(hello_func == obj2.func);

obj2.func = hi_func;
obj2.func();
console.log(hi_func == obj2.func);

let user={name:"john"};
let admin={name:"admin"};

function hello_func2(){
  console.log("Hello "+this.name);
}

user.func = hello_func2;
admin.func = hello_func2;

user.func();
admin.func();

user["func"]();
admin["func"]();