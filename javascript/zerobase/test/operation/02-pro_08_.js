// O(n)
// function solution(a, b) {
//     let result = 0;

//     if(a>b){
//       let t = a;
//       a = b;
//       b = t;
//     }
//     for(let i=a;i<=b;i++){
//       result += i;
//     }
//     return result;
// }

// O(1)
function solution(a, b) {
    return ((a+b)*(Math.abs(a-b)+1))/2;
}