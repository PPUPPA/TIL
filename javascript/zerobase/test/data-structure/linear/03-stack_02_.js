/* 괄호 짝 찾기 */
/*
계산 수식이 주어졌을 때, 같은 짝의 괄호 위치를 찾느 ㄴ프로그램을 제작하시오
입력은 계산수식으로 주어지며, 괄호 짝 별 위치(인덱스값!)를 [시작, 끝]으로 찾아 2차원 배열로 반환한다
위치 시작값은 0이며, 하나라도 짝이 맞지 않을 경우 빈 배열을 반환한다.
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
  for(let i=0;i<str.length;i++){
    if(str[i] == "("){
      stack.push(i);
    }else if(str[i] == ")"){
      if(stack.isEmpty()){
        return [];
      }

      result.push([stack.pop(), i]);
    }
  }

  if(!stack.isEmpty()){
    return [];
  }

  return result;

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(a+b)",

  // TC: 2
  "(a*(b+c)+d)",

  // TC: 3
  "(a*(b+c)+d+(e)",

  // TC: 4
  "(a*(b+c)+d)+e)",

  // TC: 5
  "(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
