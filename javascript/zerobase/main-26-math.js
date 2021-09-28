console.log(Math.max(1,-1));
console.log(Math.min(1,-1));

console.log(Math.max(1,-1,5,23,17,-4));
console.log(Math.min(1,-1,5,23,17,-4));

let nums = [1,-1,5,23,17,-4];
// apply
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));
// spread
console.log(Math.max(...nums));
console.log(Math.min(...nums));

// 절대값
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));

// property
console.log(Math.E);
console.log(Math.PI);

// random
for (let i=0;i<10;i++){
  console.log(Number.parseInt(Math.random()*10));
}

// pow
console.log(Math.pow(2,3));
console.log(2**3);

// sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(2));

// round, ceil, floor
console.log(Math.round(3.5));
console.log(Math.round(-2.3));
console.log(Math.round(-2.7));

console.log(Math.ceil(3.5));
console.log(Math.ceil(-2.3));
console.log(Math.ceil(-2.7));

console.log(Math.floor(3.5));
console.log(Math.floor(-2.3));
console.log(Math.floor(-2.7));