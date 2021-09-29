/* 4. 요일 구하기 */
/* 날짜를 입력받아 요일을 반환하는 함수 구현.
날짜(datestring)값이 입력되며, 문자열 형태의 요일을 반환한다. */

/* user code */
function answer(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  // 코드 구현 시작 영역

  let date = new Date(str).getDay();
  day = week[date];


  // 코드 구현 종료 영역

  return day;
}

/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
