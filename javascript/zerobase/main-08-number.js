let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1/0;

console.log(num_1 - num_2); // output : -0.456(예상)
                            // output : -0.45600000000000307(실제)
                            // 컴퓨터는 소숫점 연산을 잘 하지 못해서 일부 오차가 생긴다.
console.log((num_1 - num_2).toFixed(3)); // 반올림해서 소숫점 3자리까지만 표현
console.log(num_3);
console.log(num_1/"hello"); // NaN