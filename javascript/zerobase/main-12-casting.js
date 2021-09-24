// Casting
// String
console.log(String(123));
console.log(String(1/0));
console.log(String(-1/0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("haha"));

console.log(typeof String(123));
console.log(typeof String(1/0));
console.log(typeof String(-1/0));
console.log(typeof String(NaN));
console.log(typeof String(true));
console.log(typeof String(false));
console.log(typeof String(undefined));
console.log(typeof String(null));
console.log(typeof String("haha"));

// Number
console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

console.log(parseInt("123.123"));
console.log(parseFloat("123.123"));
console.log(typeof parseInt("123.123"));
console.log(typeof parseFloat("123.123"));

// Boolean
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));