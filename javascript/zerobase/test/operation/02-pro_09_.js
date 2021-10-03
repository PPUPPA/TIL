// O(n)
function solution(price, money, count) {
    let answer = 0;

    for(let i=1;i<=count;i++){
      answer += i;
    }
    answer*=price;

    return answer > money ? answer - money : 0;
}

// 등차수열 이용 O(1)
// function solution(price, money, count) {
//     let answer = 0;

//     answer = (price * ((1 + count) * count) / 2) - money

//     return answer > 0 ? answer : 0;
// }

