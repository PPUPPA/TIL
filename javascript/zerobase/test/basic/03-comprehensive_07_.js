/* 7. 스팸 메일 */
/*
대소문자를 구분하지 않고, Advert로 시작하는 메일 제목은 스팸 처리하는 함수를 구하시오.
*/

/* user code */
function answer(str) {
  let spam_flag;

  // 코드 구현 시작 영역
  spam_flag = str.toLowerCase().includes("advert");

  // 코드 구현 종료 영역

  return spam_flag;
}

/* main code */
let input = [
  // TC: 1
  "RE: Request documents",
  // TC: 2
  "[Advertisement] free mobile!",
  // TC: 3
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
