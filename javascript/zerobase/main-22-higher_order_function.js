/* Array.sort() */
// number
let nums = [1,-1,4,0,10,20,12];

console.log(nums.sort());
console.log(nums.reverse());

let ascending_order = function(x,y){
  return x-y;
};
let descending_order = function(x,y){
  return y-x;
};

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));

// string
let ascending_order2 = function (x,y){
  x = x.toUpperCase();
  y = y.toUpperCase();

  if(x>y) return 1;
  else if (y>x) return -1;
  else return 0;
}

let descending_order2 = function (x,y){
  x = x.toUpperCase();
  y = y.toUpperCase();

  if(x<y) return 1;
  else if (y<x) return -1;
  else return 0;
}

let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order2));
console.log(fruits.reverse(descending_order2));

// 공용화
let ascending_order3 = function (x,y){
  if(typeof x === "string") x = x.toUpperCase();
  if(typeof y === "string") y = y.toUpperCase();

  return x > y ? 1 : -1;
}

let descending_order3 = function (x,y){
  if(typeof x === "string") x = x.toUpperCase();
  if(typeof y === "string") y = y.toUpperCase();
  
  return x < y ? 1 : -1;
}

let nums2 = [1, -1, 4, 0, 10, 20, 12] // case1
let fruits2 = ["apple", "Orange", "orange", "melon"]; // case2

console.log(nums2.sort(ascending_order3));
console.log(nums2.reverse(descending_order3));

console.log(fruits2.sort(ascending_order3));
console.log(fruits2.reverse(descending_order3));

/* Array.forEach() */
// use for loop
// 1 2 3
let nums3 = [1,2,3];
for(let i=0;i<nums3.length;i++){
  console.log(nums3[i]);
}
// use forEach
// 1 2 3
nums3.forEach(function(i){
  console.log(i);
});

/* Array.map() */
// use for loop
let nums4 = [1,2,3,4,5];
let use_for_loop = [];
for (let i=0;i<nums4.length;i++){
  use_for_loop.push(nums4[i]*2);
}
console.log(use_for_loop); // [2,4,6,8,10]

// use map
let use_map = nums4.map(function(item){
  return item * 2;
});
console.log(use_map); // [2,4,6,8,10]

/* Array.find() */
let users = [
  {name:"bob",age:17,job:false},
  {name:"alice",age:20,job:false},
  {name:"john",age:27,job:true},
];
let find_job = users.find(function(user){
  return user.job == false;
});
console.log(find_job);
// {name:"bob",age:17,job:false}

let find_age = users.find(function(user){
  return user.age >= 19;
});
console.log(find_age);
// {name:"alice",age:20,job:false}

/* Array.filter() */
find_job = users.filter(function(user){
  return user.job == false;
});
console.log(find_job);
// {name:"bob",age:17,job:false}, {name:"alice",age:20,job:false}

find_age = users.filter(function(user){
  return user.age >= 19;
});
console.log(find_age);
// {name:"alice",age:20,job:false}, {name:"john",age:27,job:true}

/* Array.reduce() */
let nums5 = [1,2,3,4,5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums5.reduce(function(accumulator, item, index, array){
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);