let age = 20;

if(age < 19){
  msg = "The user is not an adult.";
}else{
  msg = "The user is an adult.";
}

console.log(msg);

msg_another = age < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another);