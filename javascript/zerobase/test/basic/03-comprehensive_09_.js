/* 9. 문자 교정 */
/*
우리 출판사는 출판되는 모든 책의 단어들이 앞 글자가 대문자로 표기되어야 한다
업무로 바쁜 동료를 위해 원고의 단어 앞글자를 모두 대문자로 변경시켜주는 함수를 구현하시오
입력값은 문자형 형태의 단어들이며 교정된 문자형으로 치환시켜 반환한다.
*/

/* user code */
function answer(str) {
  let fix_str = "";

  // 코드 구현 시작 영역

  let tmp_list = str.split(" ");
  for(let item of tmp_list){
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  // fix_str = str.charAt(0).toUpperCase() + str.slice(1);

  // 코드 구현 종료 영역

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
