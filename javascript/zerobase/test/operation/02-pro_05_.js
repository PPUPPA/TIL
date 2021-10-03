function solution(s) {
    if(s.length%2 == 0){
      return `${s[(s.length/2)-1]}${s[(s.length/2)]}`;
    }else{
      return `${s[Math.ceil(s.length/2)-1]}`;
    }
}

// function solution(s) {
//   return s.substr(Math.round(s.length/2)-1, s.length % 1 == 0 ? 2 : 1);
// }

// function solution(s) {
//   return s.slice(parseInt(s.lenght - 1) / 2), Math.round((s.length+1)/2);
// }
