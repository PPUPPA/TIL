let array=[
  [101,102,103],
  [201,202,203],
  [301,302,303],
];

console.log(array); // [[101,102,103],[201,202,203],[301,302,303]]
console.log(array[0]); // [101,102,103]
console.log(array[1][0]) // 201
console.log(array[2][2]) // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [301,302,303]
console.log(array); // [[101,102,103],[201,202,203]]

let array_num = array.push([401,402,403]);
console.log(array.length); // 3
console.log(array_num); // 3
console.log(array); // [[101,102,103],[201,202,203],[401,402,403]]