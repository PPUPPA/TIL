// 빵틀
function FishBread(flavor, price){
  if(!new.target){
    return new FishBread(flavor, price);
  }
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

/* new.target */
function User(name){
  if(!new.target){
    return new User(name);
  }
  this.name = name;
}
let result_1 = User("john");
console.log(result_1);
// output: User{name:'john'}
let result_2 = new User("john");
console.log(result_2);
// output: User{name:'john'}