/*** 5. 네번째 좌표 ***/
/*
고객이 평행한 직사각형을 만들기 위해 3점을 선택한 후 네번째 점을 구하는데 고생하고 있다.
고객을 도와 네번째 점을 구하는 함수를 만드시오.
입력 값은 x좌표 3개, y좌표 3개가 각각 배열로 입력되며, 네번째 점[x,y]를 산출하여 반환한다.
*/

/* user code */
function answer(x_arr, y_arr) {
  let result = [];

  // 코드 구현 시작 영역

  if(x_arr[0] === x_arr[1]){
    result[0] = x_arr[2];
  }else if(x_arr[0] === x_arr[2]){
    result[0] = x_arr[1];
  }else if(x_arr[1] === x_arr[2]){
    result[0] = x_arr[0];
  }

  if(y_arr[0] === y_arr[1]){
    result[1] = y_arr[2];
  }else if(y_arr[0] === y_arr[2]){
    result[1] = y_arr[1];
  }else if(y_arr[1] === y_arr[2]){
    result[1] = y_arr[0];
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
