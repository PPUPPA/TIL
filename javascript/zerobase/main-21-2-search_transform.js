// 배열 탐색
let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("Orange")); // 값이 없어서 음수값 반환
console.log(fruits.indexOf("orange", 2));

console.log(fruits.lastIndexOf("orange"));
console.log(fruits.lastIndexOf("orange", -3));
console.log(fruits.lastIndexOf("orange", 0));

console.log(fruits.includes("orange"));
console.log(fruits.includes("Orange"));
console.log(fruits.includes(0));

// 배열 변형
console.log(fruits.sort());
console.log(fruits.reverse());

let nums = [1,-2,4,2,5,0]
console.log(nums.sort());
console.log(nums.reverse());

console.log(fruits.join());
console.log(fruits.join(";"));