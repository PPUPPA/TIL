/* 괄호 계산 */
/*
소괄호 '(', ')' 대괄호 '[', ']'를 이용해 만들어지는 괄호열로 규칙대로 계산하는 프로그램을 작성

1. '()' 인 괄호열 값은 2
2. '[]' 인 괄호열 값은 3
3. '(X)'인 괄호 값은 2*X 로 계산
4. '[X]'인 괄호 값은 3*X 로 계산
4. 괄호형 X와 Y가 결합된 XY는 X+Y로 계산

예를 들어 ()[[]]는 2+3*3 = 11이며, ([]) 는 2*3으로 6이다.
쌍이 맞지 않거나 기호 순서가 비정상적이라 계산이 되지 않는 경우 0을 반환한다.
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
  let result = 0;

  // 코드 구현 시작 영역

  let stack=[];
  let temp=1;
  for(let i=0;i<str.length;i++){
    let mark=str[i];

    switch (mark){
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if (stack.isEmpty() || stack.peek() != "(") {
          return 0;
        }

        if (str[i - 1] == "(") {
          result += temp;
        }

        stack.pop();
        temp /= 2;
        break;
      case "]":
        if(stack.isEmpty() || stack.peek() != "["){
          return 0;
        }

        if(str[i - 1] == "["){
          result += temp;
        }

        stack.pop();
        temp /= 3;
        break;
    }
  }

  if(!stack.isEmpty()){
    return 0;
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  "(()[[]])",

  // TC: 2
  "[][]((])",

  // TC: 3
  "(()[[]])([])",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
