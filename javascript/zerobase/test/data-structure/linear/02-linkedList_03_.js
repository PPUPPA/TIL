/*
대표 선출

아래 규칙을 통해 대표를 선출하기로 했다.
원탁에 둘러앉아 시계방향으로 1번부터 n번까지 번호를 부여한다.
그리고 주사위를 통해 굴려나온 숫자 m의 사람을 제외하고, 그 다음으로 나온 주사위 숫자 k만큼 이동해가며 대표 후보에서 제외시킨다. 반복하며 1명이 남을때까지 순회해 대표를 선출한다.
n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력하는 프로그램을 제작하시오.
입력은 자연수로 주어지며, 순차적으로 반환한다.

8 2 3 > 총 8명의 후보, 시작번호 2 > 3씩 건너가며 제외 >> [2,5,8,4,1,7,3,6]
*/

/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  // 코드 구현 시작 영역

  // Circular Linked List 제작
  let ll = new LinkedList();
  let current,prev;

  for(let i=1;i<=n;i++){
    current=new Node(i);

    if(i === 1){
      ll.head=current;
    }else{
      prev.next=current;
    }

    prev=current;
  }
  current.next=ll.head;

  // Start node 위치 설정
  current=ll.head;
  while(--m){
    prev=current;
    current=current.next;
  }

  // 후보자들 중 k만큼 움직이면서 제거 > 혼자 남을 때
  let count;
  while(current.next != current){
    result.push(current.data);
    prev.next=current.next;

    count=k;

    while(count--){
      prev=current;
      current=current.next;
    }
  }

  // 혼자 남은 후보 번호를 result에 추가
  result.push(current.data);

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
