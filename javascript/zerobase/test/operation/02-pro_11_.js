function solution(arr, divisor) {
    var answer = [];

    for(let i=0;i<arr.length;i++){
      if(arr[i] % divisor == 0){
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0){
      answer.push(-1);
    }else{
      answer.sort(function(x,y){return x-y;});
    }

    return answer;
}

// filter 사용
// function solution(arr, divisor) {
//     var answer = arr.filter(n => n % divisor == 0);

//     return answer.length ? answer.sort((x,y) => x-y) : [-1];
// }