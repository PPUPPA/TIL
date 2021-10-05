/* 기차 운행 */
/*
열차가 1번부터 3번까지 순서대로 들어온다고 했을 때 입력 순서대로 나갈 수 있는지 판단하는 프로그램을 작성.
입력은 차량 번호가 적혀있는 배열이며, 가능 여부에 따라 boolean값을 반환한다.
*/

if (!Array.prototype.peek){
  Array.prototype.peek = function(){
    return this[this.length-1];
  };
}

if (!Array.prototype.isEmpty){
  Array.prototype.isEmpty = function(){
    return this.length == 0;
  };
}

/* user code */
function answer(train) {
  // 코드 구현 시작 영역
  
  for(let i=0;i<train.length;i++){
    // stack.length === 0 = stack.isEmpty()
    // stack[stack.length-1] = stack.peek()
    
    // while(stack.length === 0 || stack[stack.length-1] < train[i]){
    while(stack.isEmpty() || stack.peek() < train[i]){
      stack.push(++num);
    }

    // if(stack[stack.length-1] === train[i]){
    if(stack.peek() === train[i]){
    stack.pop();
    }else{
      return false;
    }
  }
  return true;

  // 코드 구현 종료 영역
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3],

  // TC: 2
  [3, 2, 1],

  // TC: 3
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
