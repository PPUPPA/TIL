/* 접시 꺼내기 */
/*
a,b,c,d 순으로 한쪽이 막혀있는 세척기에 들어간다
bacd 순으로 꺼내기 위해서는 push push pop pop push pop push pop 순으로 꺼내면 된다
순서가 주어질 때 push, pop으로 동작을 계산하는 프로그램을 작성하시오
입력은 10개 이하의 소문자 알파벳으로 주어지며, 연산동작은 push:0 / pop:1로 반환한다.
>> 주어진 순서로 꺼낼 수 없는 경우 빈배열 반환
*/


if(!Array.prototype.peek){
  Array.prototype.peek =function(){
    return this[this.length-1];
  };
}

if(!Array.prototype.isEmpty){
  Array.prototype.isEmpty =function(){
    return this.length == 0;
  };
}

/* user code */
function answer(str) {
  let result = [];

  // 코드 구현 시작 영역
  
  let stack=[];
  // 1. 접시의 순서 문자열 abc 나눔
  let dish=str.split("").sort().join("");
  let dish_index=0;
  
  // 2. 꺼내야 하는 접시, 세척기 안에 있는 알파벳이 작을 때 push
  // 3. 최상단 접시와 비교
  for(let i=0;i<str.length;i++){
    while(stack.isEmpty() || stack.peek() < str[i]){
      stack.push(dish[dish_index++]);
      result.push(0);
    }

    // 3. 반환 불가한 경우
    if(stack.isEmpty() || stack.peek() > str[i]){
      return [];
    }else{
      stack.pop();
      result.push(1);
    }
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
