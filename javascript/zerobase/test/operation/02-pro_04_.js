function solution(nums) {
    const maxLeng = parseInt(nums.length/2);
    const maxType  = new Set(nums).size; // 중복 제거

    return maxLeng > maxType ? maxType : maxLeng;
}