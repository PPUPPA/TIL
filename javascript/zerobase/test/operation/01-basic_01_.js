/* 1. 등차수열의 항 찾기 */
/*
입력된 값을 통해 등차수열의 몇번째 항인지 구하는 프로그램을 작성하시오.
입력은 초항 a, 인접한 차이 d, 찾는항의 수n이 주어지며, n값에 해당하는 항 번호를 반환한다.
단, 항 번호가 없을 경우 -1을 반환한다.
예를들어 f(1)=1,f(2)=3,f(3)=5,f(4)=7이므로 n=7에 해당하는 항인 4를 반환한다.
*/

/* user code */
function answer(a, d, n) {
  let index = -1;

  // 코드 구현 시작 영역
  /*
  // 등차수열
  let num;
  for(let i=1;;i++){
    num = a + d * (i-1);

    // 찾지 못함
    if(num>n) break;
    
    // 답 찾음
    if(num == n){
      index=i;
      break;
    }
    // console.log(num);
  }
  */
 
 if((n-a)%d == 0){
   index=(n-a)/d+1;
 }else index = -1;

  // 코드 구현 종료 영역

  return index;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
