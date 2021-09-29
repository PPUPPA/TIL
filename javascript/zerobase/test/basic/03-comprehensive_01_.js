/* 1. 최소값 구하기 */
/*
두 수의 정수를 입력받아 최소 값을 반환해주는 함수를 구현하시오.
*/

/* user code */
function answer(x, y) {
  let min;

  // 코드 구현 시작 영역

  // if(x < y){
  //   min = x;
  // }else{
  //   min = y;
  // }

  /* 한줄 구현 가능! */
  min = x > y ? y : x;

  // 코드 구현 종료 영역

  return min;
}

/* main code */
let input = [
  // TC: 1
  [16, 3],
  // TC: 2
  [-3, 1],
  // TC: 3
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
