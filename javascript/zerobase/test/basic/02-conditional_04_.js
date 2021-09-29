/*** 4. ATM 기기 ***/
/*
ATM기기는 5만원권만 취급하고, 인츨할 때 .5만원(5천원)의 수수료가 발생한다
인출할 금액과 계좌의 총 금액을 입력받아 남은 금액을 반환하는 함수를 작성하시오.
입력값 중 첫번째는 인출할 금액, 두번째 값은 계좌의 금액이다(만원단위)
정상적인 인출이 불가능할 경우 출금되지 않고, 통장의 원래 금액을 반환한다.
*/

/* user code */
function answer(withdraw, total) {
  let result;

  // 코드 구현 시작 영역

  if(total < withdraw+.5 || withdraw % 5 !== 0){
    result = total;
  }else{
    result = total-(withdraw+.5);
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
