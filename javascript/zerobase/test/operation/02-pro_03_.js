function solution(a, b) {
    const weekList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const currentYear = 2016;
    const currentMonth = a;
    const currentDate = b;
    const currentDay = new Date(`${currentYear}-${currentMonth}-${currentDate}`).getDay();
    
    return weekList[currentDay];
}

// 깔끔하게?
// function solution(a, b) {
    //     return ["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date(`2016-${a}-${b}`).getDay()];
// }

// function solution(a, b) {
//     let answer = '';
//     const currentDay = new Date(`2016-${a}-${b}`).getDay();

//     switch(currentDay){
//         case 0:
//             answer = "SUN";
//             break;
//         case 1:
//             answer = "MON";
//             break;
//         case 2:
//             answer = "TUE";
//             break;
//         case 3:
//             answer = "WED";
//             break;
//         case 4:
//             answer = "THU";
//             break;
//         case 5:
//             answer = "FRI";
//             break;
//         case 6:
//             answer = "SAT";
//             break;
//     }
//     return answer;
// }