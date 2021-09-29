/* 3. 놀이기구 입장 제한 */
/*
본 놀이기구는 안전상의 이유로 150cm 이상만 탈 수 있다.
탑승하려는 고객이 놀이기구를 탈 수 있는지 판단하는 함수를 구현하시오.
입력값은 객체로 이름/나이/키가 입력되며 탑승 가능시 true, 불가능 시 false를 반환한다.
*/

/* user code */
function answer(user) {
  let permit;

  // 코드 구현 시작 영역

  // if(user.height < 150){
  //   permit = false;
  // }else{
  //   permit = true;
  // }

  /* 조건문 사용하지 않고 연산자로만 구현 */
  permit = user.height >= 150;

  // 코드 구현 종료 영역

  return permit;
}

/* main code */
let input = [
  // TC: 1
  { name: "john", age: 27, height: 181 },
  // TC: 2
  { name: "alice", age: 12, height: 148 },
  // TC: 3
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
