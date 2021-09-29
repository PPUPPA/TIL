/*** 5. 무한 뺄셈 ***/
// 앞의 숫자에서 뒤의 숫자를 뺄셈하며 반복 연산하는 프로그램을 작성하시오
// 뺀 값이 음수일 때 프로그램이 종료됨
// 초기 입력된 수를 포함, 뺄셈을 통해 나온 숫자 모두를 배열에 저장하여 반환한다.
// 6, 3이 입력된 경우 6 - 3 = 3, 3 - 3 = 0, 3 - 0 = 3 ,0 - 3 = -3 순으로 계산되며 종료된다.
// 결과 값은 [6,3,3,0,3]이 된다.

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  // 코드 구현 시작 영역

  let sum = 0;
  while(true){
    sum = s-e;
    s = e;
    e = sum;
    if(e < 0){
      break;
    }
    sequence.push(e);
  }

  // 코드 구현 종료 영역

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
