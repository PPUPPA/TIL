let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi";
console.log(fruits);

// 배열의 실체
let nums = [];

nums[0] = "one";
nums[1] = "two";
nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length);
console.log(nums);


console.log(Object.getOwnPropertyDescriptors(nums));

// 배열 확인 및 삭제
let num = 123.456;
let str = "Here I am";
let fruits1 = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits1));

console.log(fruits1);
console.log(fruits1.length);

delete fruits1[1];
console.log(fruits1);
console.log(fruits1.length);

let fruits2 = ["apple", "orange", "melon"];
let ret;

ret = fruits2.push("watermelon");
console.log(fruits2);
console.log(fruits2.length);
console.log(ret);

ret = fruits2.pop();
console.log(fruits2);
console.log(fruits2.length);
console.log(ret);

ret = fruits2.unshift("watermelon");
console.log(fruits2);
console.log(fruits2.length);
console.log(ret);

ret = fruits2.shift();
console.log(fruits2);
console.log(fruits2.length);
console.log(ret);


// splice
ret = fruits2.splice(1);
console.log(ret);
console.log(fruits2);

fruits2 = ["apple", "orange", "melon", "strawberry"];
ret = fruits2.splice(1, 1);
console.log(ret);
console.log(fruits2);

ret = fruits2.splice(1,1, "mango", "kiwi");
console.log(ret);
console.log(fruits2);

// slice
fruits2 = ["apple", "orange", "melon", "strawberry"];
console.log(fruits2.slice(1));
console.log(fruits2);

console.log(fruits2.slice(1,2));
console.log(fruits2.slice(-2));

// concat
let fruits3 = ["lemon", "peach"]
console.log(fruits2.concat(["cherry", "banana"]));
console.log(fruits2.concat(fruits3));
console.log(fruits2);

// 배열 반복문
let fruits4 = ["apple", "orange", "melon"];

for(let i=0;i<fruits4.length;i++){
  console.log(fruits4[i]);
}

for(let fruit of fruits4){
  console.log(fruit);
}

for(let key in fruits4){
  console.log(fruits4[key]);
}