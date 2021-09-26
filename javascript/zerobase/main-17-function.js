function print_add(x, y=10){
  console.log(x+y);
}

print_add(10);

function print_min(){
  // console.log(arguments); // [Arguments] { '0': 10, '1': 20, '2': 30 }
  console.log(arguments[0] - arguments[1])
}

// print_min(10,20,30);
print_min(10,20,30);

function add(x,y){
  return x+y;
}
let result = add(10,20);
console.log(result);

function checkAge(age){
  if(age>=18) return true;
  else return false;
}

console.log(checkAge(14));
console.log(checkAge(20));