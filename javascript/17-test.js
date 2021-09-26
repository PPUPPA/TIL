// 두 정수를 입력받아 가장 큰 값을 출력해주는 함수를 작성하시오.
function MAX(x,y){
  // 구현 필요
  if(x>y) return x;
  else return y;

  // 참고!
  // return x>y ? x : y;
}

console.log(MAX(0,3)); // output: 3
console.log(MAX(-1,5)); // output: 5
console.log(MAX(100,7)); // output: 100