/* 체스 세트 */
/*
오래된 창고에서 체스판과 체스 기물을 발견했다.
불행히도 기물 별 개수가 부족하거나 많아, 완전한 한 세트를 이루지 못하고 있다.
게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 제작하시오.
기물의 개수는 배열 형태로 아래와 같이 king부터 pawns 순으로 들어오며
한 게임을 하기 위해 필요한 기물의 수는 아래와 같다
** king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)
*/

/* user code */
function answer(chess) {
  let result = [];

  // 코드 구현 시작 영역

  const piece = [1,1,2,2,2,8];
  for(let i=0;i<chess.length;i++){
    result.push(piece[i]-chess[i]);
  }
  // 인덱스 사용
  // let count = 0;
  // for(let i=0;i<chess.length;i++){
  //   result[count++] = piece[i]-chess[i];
  // }


  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [0, 1, 2, 2, 2, 7],

  // TC: 2
  [2, 1, 2, 1, 2, 1],

  // TC: 3
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
