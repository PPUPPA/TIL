/* 숫자 빈도수 구하기 */
/*
두 자연수 m, n을 입력받아 m부터 n까지 각 자리수의 빈도수를 합하는 프로그램을 제작하시오.
예를들어 129와 137이 주어졌을 때 129, 130, 131, 132, 133, 134, 135, 136, 137 의 숫자가 나오고, 각각 자릿수별 숫자 빈도를 계산하여 0~9까지의 각 숫자의 빈도수 값을 반환한다.
M,N은 10000이하의 자연수이며, 0~9까지의 자릿수별 빈도수를 배열 형태로 반환한다.
*/

/* user code */
function answer(s, e) {
  let result = [];

  // 코드 구현 시작 영역

  for(let i=0;i<10;i++){
    result[i] = 0;
  }
  
  let num;
  for(let i=s;i<=e;i++){
    num = i;
    while(num != 0){
      result[num%10]++;
      num /= 10;
      num = parseInt(num);
    }
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
