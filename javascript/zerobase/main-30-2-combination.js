let input = [1,2,3,4] // 4C2
let output = [];
let count = 0;

/* for문 사용 */
// function combination(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       count++;
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

/* 재귀함수 사용 */
function combination(arr, data, s, idx, r){
  if(s == r){
    count++;
    console.log(data);
    return;
  }
  for(let i=idx;arr.length-i>=r-s;i++){
    data[s] = arr[i];
    combination(arr, data, s+1, i+1, r)
  }
}

// combination(input);
combination(input, output, 0, 0, 2);
console.log(count);