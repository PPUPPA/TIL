for(let i = 0; i<3; i++){
  console.log(i);
}
// 0, 1, 2

for(let i = 10; i<3; i++){
  console.log(i);
}
// 반환 결과 X

let num = 0;
for(; num<2;){
  console.log(num);
  num++;
}
// 0, 1

/* 이중 for문 */
for (let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    console.log(`${i} + ${j} = ${i+j}`);
  }
}
// 내부 for문이 전부 돈 후 다시 바깥 for문이 동작하는 형태


/* for in 문 */
const person = {fname:"John", lname:"Bob", age:25,};
let info = "";

for (let x in person){
  info += person[x];
}
console.log(info); // JohnBob25

/* for of 문 */
let language = "JavaScript";
let text = "";

for(let x of language){
  text += x;
  console.log(x); // J a v a S c r i p t
}
console.log(text); // JavaScript