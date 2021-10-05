/* 기린의 시야 */
/*
기린이 앞쪽만 볼 수 있는 경우 다른 기린을 몇마리나 볼 수 있는지 총합을 구하는 프로그램을 작성하시오
키가 작거나 같은 기린만 볼 수 있으며, 큰 기린이 나올 경우 앞 기린이 시야를 가려 볼 수 없다
입력은 기린 별 키 값으로 들어오며, 다른 기린을 볼 수 있는 총합을 구해 반환한다.
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
function answer(giraffe) {
  let result = 0;

  // 코드 구현 시작 영역

  let stack = [];
  giraffe.push(Number.MAX_SAFE_INTEGER);
  for(let i=0;i<giraffe.length;i++){
    while(!stack.isEmpty() && stack.peek()["h"] < giraffe[i]){
      result += i - stack.pop()["i"] - 1;
    }
    stack.push({h:giraffe[i], i:i});
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [10, 3, 7, 4, 12, 2],

  // TC: 2
  [7, 4, 12, 1, 13, 11, 12, 6],

  // TC: 3
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
