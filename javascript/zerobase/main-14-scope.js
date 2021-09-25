// Global Scope

let x = 1;
let y = 2;

console.log(x);
console.log(y);

{
  // Local Scope
  let x = 3;
  let y = 4;

  console.log(x);
  console.log(y);
}

let A = 1;
let B = 2;

{
  // Local Scope
  let C = 3;
  let D = 4;

  console.log(A);
  console.log(C);

  {
    let C = 5;
    let D = 6;
    console.log(C);
  }
}

// console.log(C); // ReferenceError: C is not defined