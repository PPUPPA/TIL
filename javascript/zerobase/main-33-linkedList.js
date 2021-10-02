// Node() : data와 point를 가진 객체
function Node(data){
  this.data=data;
  this.next=null;
}

// LinkedList() : head와 length를 가진 객체
function LinkedList(){
  this.head=null;
  this.length=0;
}

// size() : 연결 리스트 내 노드 개수
LinkedList.prototype.size = function(){
  return this.length;
};

// isEmpty() : 객체 내 노드 존재 여부
LinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

// printNode() : 노드 출력
LinkedList.prototype.printNode = function(){
  for(let node=this.head;node!=null;node=node.next){
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value){
  let node=new Node(value), current=this.head;

  if(this.head === null){
    this.head=node;
  }else{
    while(current.next != null){
      current=current.next;
    }
    current.next=node;
  }

  this.length++;
};

// insert() : position 위치에 노드 추가 (중간 삽입도 가능)
LinkedList.prototype.insert = function (value, position=0){
  if(position<0 || position>this.length) {
    return false;
  }

  let node=new Node(value),
    current=this.head,
    index=0,
    prev;

  if(position === 0) {
    node.next=current;
    this.head=node;
  }else{
    while(index++ < position){
      prev=current;
      current=current.next;
    }
    node.next=current;
    prev.next=node;
  }
  this.length++;
  return true;
};

// remove() : value데이터를 찾아 노드 제거
LinkedList.prototype.remove = function(value){
  let current=this.head, prev=current;

  while(current.data != value && current.next != null){
    prev=current;
    current=current.next;
  }

  if(current.data != value){
    return null;
  }

  if(current === this.head){
    this.head = current.next;
  }else{
    prev.next = current.next;
  }

  this.length--;
  return current.data;
};

// removeAt() : position 위치의 노드 삭제
LinkedList.prototype.removeAt = function(position=0){
  if(position<0 || position>=this.length){
    return null;
  }

  let current=this.head,
      index=0,
      prev;

  if(position===0){
    this.head=current.next;
  }else{
    while(index++ < position){
      prev=current;
      current=current.next;
    }

    prev.next=current.next;
  }

  this.length--;
  return current.data;
};

// indexOf() : value값을 가진 노드 위치 반환
LinkedList.prototype.indexOf = function(value){
  let current=this.head,
      index=0;

  while(current != null){
    if(current.data === value){
      return index;
    }

    index++;
    current=current.next;
  }

  return -1;
};

// remove2() : indexOf + remoteAt = remove
LinkedList.prototype.remove2 = function(value){
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let ll = new LinkedList();
// console.log(ll);

// ll.head = new Node(123);
// ll.length++;
// console.log(ll);

// ll.head.next = new Node(456);
// ll.length++;
// console.log(ll);

// ll.append(1);
// ll.append(10);
// ll.append(100); // 뒤로 추가됨
ll.insert(1);
ll.printNode();
ll.insert(10);
ll.insert(100); // append와 달리 앞으로 붙음!
ll.printNode();

ll.insert(2, 1); // 2를 1번째 포지션(0부터 시작)에 넣겠다
ll.insert(3, 3); // 3를 3번째 포지션(0부터 시작)에 넣겠다
ll.printNode();
console.log(ll.size());

// console.log(ll.remove(1000));
// ll.printNode();
// console.log(ll.remove(1));
// ll.printNode();
// console.log(ll.remove(2));
// ll.printNode();
// console.log(ll.remove(100));
// console.log(ll.removeAt(1000));
// ll.printNode();
// console.log(ll.removeAt(4));
// ll.printNode();
// console.log(ll.removeAt()); // 기본 포지션 값 = 0;
// ll.printNode();
// console.log(ll.removeAt(1));

console.log(ll.indexOf(1000));
console.log(ll.indexOf(1));
console.log(ll.indexOf(100));
console.log(ll.indexOf(10));

console.log(ll.remove2(1000));
ll.printNode();
console.log(ll.remove2(1));
ll.printNode();
console.log(ll.remove2(2));
ll.printNode();
console.log(ll.remove2(100));
ll.printNode();
console.log(ll.size());