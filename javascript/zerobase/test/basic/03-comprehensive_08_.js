/* 8. 배열 회전 */
// 배열을 입력 받아 순서를 역으로 만들어 반환해주는 함수를 구현하시오
// reverse 사용 불가

/* user code */
function answer(user) {
  let reverse = [];

  // 코드 구현 시작 영역
  // for(let i=user.length-1;i>=0;i--){
  //   reverse.push(user[i]);
  // }

  /* unshift, shift 사용 가능 */
  /* 값을 스와핑해주는 방식도 사용 가능 */
  let tmp;
  for(let i=0;i<user.length/2;i++){
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }
  reverse = user;

  // 코드 구현 종료 영역

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
