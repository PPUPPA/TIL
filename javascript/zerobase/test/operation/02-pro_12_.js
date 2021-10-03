function solution(arr){
    var answer = [];
    let chkNum = arr[0];
    for(let i=0;i<arr.length;i++){
      if(answer.length == 0){
        answer.push(arr[0]);
      }

      if(arr[i] != chkNum){
        chkNum = arr[i];
        answer.push(arr[i]);
      }
    }

    return answer;
}

// 추가 변수 없이 비교
// function solution(arr){
//     var answer = [];

//     /* 인접한 숫자가 나와 같은 숫자인지 판단해, 다를 경우 배열에 추가 */
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i] != arr[i+1]){
//         answer.push(arr[i]);
//       }
//     }
//     answer.push(arr[arr.length - 1]);

//     return answer;
// }

// 필터사용
function solution(arr){
    return arr.filter((v,i) => v != arr[i+1]);
}