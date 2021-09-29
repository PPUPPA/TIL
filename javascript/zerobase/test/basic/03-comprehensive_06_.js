/* 6. 배열 내 최대값 구하기 */
/*
정수가 저장된 배열을 입력받아 그 중 최대값을 반환해주는 함수를 구현하시오.
Math객체 사용 불가 (max = Math.max.apply(null, arr));
*/

/* user code */
function answer(arr) {
  let max;

  // 코드 구현 시작 영역
  max = arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i];
    }
  }

  // 코드 구현 종료 영역

  return max;
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
