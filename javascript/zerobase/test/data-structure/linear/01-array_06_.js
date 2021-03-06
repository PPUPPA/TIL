/* two sum */
/*
배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수값을 만들 수 있도록 두개의 index를 반환하는 함수를 작성하시오.
각 입력에 정확히 하나의 솔루션이 있다고 가정, 동일한 요소를 두 번 사용하지 않는다.
배열의 인덱스는 오름차순으로 정렬하여 반환한다.
*/

/* user code */
function answer(nums, target) {
  // 코드 구현 시작 영역

  /* O(n^2) */
  // for(let i=0;i<nums.length;i++){
  //   for(let j=i+1;j<nums.length;j++){
  //     if(nums[i]+nums[j] == target){
  //       return [i, j].sort(function(x,y){return x-y;});
  //     }
  //   }
  // }
  // return [];

  // O(n)
  let map = {}; // key, value
  for(let i=0;i<nums.length;i++){
    // target - nums[i] == nums[j]임!
    if(map[target-nums[i]] != undefined){
      return [map[target-nums[i]], i];
    }

    map[nums[i]] = i; // map: {'3':0} -> map: {'2':1, '3':0} -> [1,2]
  }

  // 코드 구현 종료 영역
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
