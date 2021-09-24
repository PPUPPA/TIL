let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; // SyntaxError

const B = 123; // 상수 선언과 동시에 값 초기화
console.log(B);

// B = 456; // TypeError

// const C; // SyntaxError: 상수인데도 값을 선언하지 않음

// 선언 후 할당
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "hello!";

// 한 줄에 여러 변수 선언하고 초기화
let name = "john",
    age = 11,
    msg = "hello";

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2020.1.1";

console.log(hi, halo, name, age, msg, TESTCASE, BIRTHDAY);