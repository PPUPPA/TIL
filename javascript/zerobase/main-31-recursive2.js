// 팩토리얼 재귀함수

let result;

function recursive(number){
  if(number == 1){
    return 1;
  }

  // 5*4*3*2*1
  return recursive(number-1)*number;
}
result = recursive(5);
console.log(result);

// 피보나치 수열
/*  */
let result2;
function recursive2(number){
  if(number==1||number==0){
    return number;
  }

  // f(n) = f(n-1) + f(n-2)
  return recursive2(number-1)+recursive2(number-2);
}

result2 = recursive2(5);
console.log(result2);
