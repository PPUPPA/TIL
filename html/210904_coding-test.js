// 문제 1 : 선생님의 실수
// 개발 지식이 없어서 너무 어렵다.. ;ㅅ;... 아마 의도한 풀이는 이게 아니었을 것 같은데 문제 이해하는 것만으로도 벅찼다...
// 첫 문제인데도 몇 시간을 헤맨 것 같다..😂...
var nums = new Array();
nums=[1,2,3,4,6,6,6]
leng=nums.length;
var newNums = new Array();
for(i=0;i<leng;i++){
	if(nums[i] != i+1){
    newNums.push(i+1);
  }
}
newNums