function solution(array, commands) {
    var answer = [];

    for(let i=0;i<commands.length;i++){
      let cmdList = array.slice(commands[i][0] - 1, commands[i][1]);
      cmdList.sort(function(x,y){return x-y});
      answer.push(cmdList[commands[i][2]-1]);
    }

    return answer;
}

// map 활용
// function solution(array, commands) {
//     return commands.map((command) => {
//       const [s,e,p] = command;
//       return array.slice(s-1, e).sort((x,y) => x-y)[p-1]
//     });
// }