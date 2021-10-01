/* OX 퀴즈 */
/*
정답을 맞출 경우 문제당 1점을 부여하며, 연속적으로 맞출 경우 연속한 정답 갯수만큼 가산점을 부여해준다. 채점표를 보고 점수를 산출하는 프로그램을 제작하자.
1(정답)/0(오답)으로 입력되며, 점수의 합계를 반환한다.
*/

/* user code */
function answer(mark) {
  let result = 0;

  // 코드 구현 시작 영역
  let plus = 1;
  for(let i=0;i<mark.length;i++){
    if(mark[i]){
      result += plus;
      plus++;
    }else{
      plus = 1;
    }
  }
  return result;

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
