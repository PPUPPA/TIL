// 조건문
const age = parseInt(prompt("How old are you?"));
// prompt - 자바스크립트가 계속 로딩 중임....
// 예쁘지도 않고, 커스텀 불가.
// 일부 브라우저나 사용자는 막아둠.
// = 요즘 사용하지 않음!

// parseInt("15")
// String -> Number 변환

// 타입 확인
// console.log(typeof age, typeof parseInt(age));

// console.log(isNaN(age));

if(isNaN(age) || age < 0){
  console.log("Please write a real positive number.");
}else if(age < 18){
  console.log("You are too young.");
}else if(age >= 18 && age <= 50){
  console.log("You can drink.")
}else if(age > 50 && age <= 80){
  console.log("You should exercise.");
}else if(age === 100){
  console.log("Wow. You are wise.")
}else if(age > 80){
  console.log("You can do whatever you want.")
}