/* 수열 최소값 위치 */
/*
수열이 주어질 때, 이 수열의 수 중 최소값의 위치를 모두 출력하는 프로그램을 작성하시오.
입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최소값의 위치를 배열로 반환한다.
모든 수는 100이하의 자연수로 입력받는다.
*/

/* user code */
function answer(nums) {
  let result = [];

  // 코드 구현 시작 영역

  let min = nums[0];
  for(let i=0;i<nums.length;i++){
    if(nums[i]<min){
      min = nums[i]
      result = [];
      result.push(i);
    }else if(nums[i]===min){
      result.push(i);
    }
  }

  // 1. 최소값
  // let min = 100;
  // for(let i=0;i<nums.length;i++){
  //   if(min>nums[i]){
  //     min = nums[i];
  //   }
  // }

  // // 2. 최소값 위치 index
  // let count = 0;
  // for(let i=0;i<nums.length;i++){
  //   if(min==nums[i]){
  //     result[count++] = i;
  //   }
  // }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
