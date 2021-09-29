/*** 2. 나누기와 대소비교 ***/
// 4개의 수를 입력받아 나누기 연산을 통해 대소를 판단하는 함수를 제작하시오
// 1000이하 자연수 a, b, c, d 가 주어지고,
// a/b > c/d 일때는 1, a/b = c/d 일때는 0, a/b < c/d 일 때는 -1을 반환한다.

/* user code */
function answer(a, b, c, d) {
  let result;

  // 코드 구현 시작 영역

  let x = a/b;
  let y = c/d;

  if(x > y){
    result = 1;
  }else if(x < y){
    result = -1;
  }else{
    result = 0;
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [14, 2, 6, 6],
  // TC: 2
  [6, 7, 8, 9],
  // TC: 3
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
