// 등차함수 (+t를 *t로 바꾸면 등비 수열이 됨!)
let result;

/* for문 */
// function forloop(s, t, number){
//   let acc = 0;
//   for(let i=1;i<=number;i++){
//     if(i==1){
//       acc += s;
//     }else{
//       acc += t;
//     }
//     console.log(i, acc);
//   }
//   return acc;
// }

function recursive(s,t,number){
  // 멈춤조건
  if(number==1){
    return s;
  }
  return recursive(s,t,number-1)+t;
}
// number 5, recursive(s,t,4) +2 => 9+2=11
// number 4, recursive(s,t,3) +2 => 7+2
// number 3, recursive(s,t,2) +2 => 5+2
// number 2, recursive(s,t,1) +2 => 3+2
// number 1 => 3

// result = forloop(3,2,5);
result = recursive(3,2,5);
console.log(result);