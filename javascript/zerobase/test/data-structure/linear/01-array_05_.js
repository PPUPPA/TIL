/* 나무 그리기 */
/*
자연수를 높이로 입력받고 대칭형으로 나무 문자열을 만들어 반환한다
각 행별로 개행문자(\n)을 넣어주면서 *을 찍으며 출력값 형태로 나무를 그려준다.
*/

/* user code */
function answer(height) {
  let str = "";

  // 코드 구현 시작 영역
  str = "\n";
  for(let i=0;i<height;i++){
    // 공백
    for(let j=0;j<height-1-i;j++){
      str += " ";
    }
    // *
    for(let j=0;j<(i*2)+1;j++){
      str += "*";
    }
    str += "\n";
  }


  // 코드 구현 종료 영역

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
