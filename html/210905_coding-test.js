// 문제 2 : 아재 개그
// 애초에 전제부터 틀린 것 같은데 어떻게 풀어야할지 아예 감이 안 온다 ;ㅅ;.... 몇시간째 붙잡고 있다가 결국 포기했다..... 왜... 왜 계속 안 돌아가는 걸까..? 코드가 꼬여있단 생각은 드는데 영... 기초가 안 잡혀 있는데 문제부터 풀려니 하나도 모르겠다..😂.......
var i, j, word
var puzzle = new Array();
var wordSplit = new Array();
var hasWord = false;
puzzle = [
['가', '나', '콜', '사'],
['라', '기', '로', '세'],
['미', '모', '리', '움'],
['상', '지', '곤', '타']
];
leng=puzzle.length;
word='콜로세움'
for(var i=0;i<word.length;i++){
  if(puzzle[i].includes(word[0])){
    j = puzzle[i].indexOf(word[0])
    break;
  }
}
for(x=1;x<word.length;x++){
  if(puzzle[i+1][j] == word[x] || puzzle[i][j+1] == word[x]){
    hasWord = true;
    console.log(puzzle[i+1][j],word[x],puzzle[i][j+1])
    continue;
  }
  console.log(hasWord)
}


// 문제 3 : N번째 주자

// 문제 4 : 기차놀이

// 문제 5 : 구글 세미나 참석

// 문제 6 : 디펜스 게임
// 엄청!! 오래 걸렸고.. 시간 복잡도를 봤을 때 그다지 효율적이지 않은 것 같은 코드가 되었지만 우선은 이게 최선이다 ;ㅅ;.. 뭔가 더 효율적이고 좋은 방법이 있을 것 같은데😂...
// enermy 배열을 새로 만들어서 그 배열로 값을 비교하며 찾는 방식으로 풀었다. 같은 시간에 오는 적은 한명만 처리 가능하다는 부분을 짜려고 지금 값과 다음 값이 같은지를 확인해보다가.. 값을 비교하는 과정이 없어도 모든 배열의 값을 1씩 줄이면 확인이 가능하다는 사실을 깨달았다....😂..
// 원래는 item에 Math.ceil(distance[i]/time[i])를 넣고 값이 이상해서 floor나 round도 넣어봤었는데 생각해보면 ceil이 맞고, 더 정확히는 어차피 0과 비교해서 낮으면 for문을 종료하기 때문에 굳이 필요한 부분이 아니어서 삭제했다..😂..
var time = new Array();
var distance = new Array();
var enermy = new Array();
var clear = 0;
time = [1,1,1,1]
distance = [1,2,3,3]
leng=time.length;
for(i=0;i<leng;i++){
  item = distance[i]/time[i];
  enermy.push(item);
  enermy.sort();
}
for(i=0;i<leng;i++){
  if(enermy[i] <= 0){
    break;
  }else{
    for(j=0;j<leng;j++){
      enermy[j] -= 1;
    }
    clear += 1;
  }
}
clear