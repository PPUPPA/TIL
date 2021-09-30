let input = ["a", "b", "c"];
let count = 0;

/* 1. for문을 통한 방법 */
// function permutation(arr){
//   // for i -> 첫번째 index 위치시킬 요소 a,b,c [i, 0, 0]
//   for(let i=0;i<arr.length;i++){
//     // for j -> 두번째 index 위치시킬 요소 a,b,c [i, j, 0]
//     for(let j=0;j<arr.length;j++){
//       if(i==j) continue;
//       // for k -> 세번째 index 위치시킬 요소 a,b,c [i, j, k]
//       for(let k=0;k<arr.length;k++){
//         if(i == k) continue;
//         if(j == k) continue;

//         console.log(arr[i], arr[j], arr[k]);
//         count++;
//       }
//     }
//   }
// }

/* 2. 재귀함수를 통한 방법 */
                    // 배열, 시작할 위치, 몇개를 뽑을지
function permutation(arr, s, r){
  // 1. 재귀 함수를 멈추는 조건
  if(s==r){
    count++;
    console.log(arr.join(" "));
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 할 부분/메인로직
  for(let i=s;i<arr.length;i++){
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s+1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
    /*
    i = 1
    s = 0, r = 2 ["a", ]
    s = 1, r = 2 ["a", "b", ]
    s = 2, r = 2 ["a", "b", "c"]
    ...
    i = 2
    s = 1, r = 2 ["a", "c"]
    s = 2, r = 2 ["a", "c", "b"]
    ...
    i = 1
    s = 0, r = 2 ["b", "a", "c"]
    ...
    i = 2
    s = 0, r = 2 ["b", "a", "c"]
    */
  }
}

permutation(input,0,2);
console.log(count);
