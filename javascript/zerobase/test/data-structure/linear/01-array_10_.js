/* 달팽이 만들기 */
/*
달팽이 모양으로 숫자를 하나씩 적어주는 프로그램을 제작하시오.
입력한 크기의 정사각형으로, 시계방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다.
*/

/* user code */
function answer(length) {
  let result = [];

  // 코드 구현 시작 영역
  
  for(let i=0;i<length;i++){
    result[i] = [];
  }

  let direction = 1;
  let x, y, num;
  y = num = 0;
  x = -1;

  while(1){
    for(let i=0;i<length;i++){
      x += direction;
      result[y][x] = ++num;
    }

    length--;
    
    if(length == 0) break;
    for(let i=0;i<length;i++){
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
