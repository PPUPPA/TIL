/* user code */
/*
열차연결
열차들이 서로 연결되어 있지 않아 운행이 어려운 상태다.
운행을 위해 열차 찻간을 이어주는 프로그램을 작성하시오.
열차별로 고유의 식별번호가 있어 이를 기준으로 반입된 순서대로 이어준다.
linked list 형태로 반환한다.
*/

function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  // 코드 구현 시작 영역

  let current,prev;
  for(let i=0;i<nums.length;i++){
    current = new Train(nums[i]);

    if(i === 0){
      ll.head=current;
    }else{
      prev.next=current;
    }

    prev=current;
  }

  // 코드 구현 종료 영역

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [4, 7, 1, 10, 6],

  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],

  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  answer(input[i]).printNode();
}
