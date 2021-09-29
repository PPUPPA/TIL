/*** 2. 두 수 사이 숫자 ***/
// 두 수 사이의 숫자들을 출력하는 함수를 작성하시오.
// 입력 값은 두 숫자 값이 주어지며, 입력된 숫자를 포함한 두 수 사이의 자연수를 배열로 반환한다.

/* user code */
function answer(x, y) {
  let result = [];

  // 코드 구현 시작 영역
  // if(x<y){
  //   for(let i=x;i<=y;i++){
  //     result.push(i);
  //   }
  // }else{
  //   for(let i=y;i<=x;i++){
  //     result.push(i);
  //   }
  // }

  /* 무조건 x < y로 만들어서 for문을 돌리는 방법 */
  if (x>y){
    let t = x;
    x = y;
    y = t;
  }
  
  for(let i=x;i<=y;i++){
    result.push(i);
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
