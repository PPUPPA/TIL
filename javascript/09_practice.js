const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
// const loginButton = document.querySelector('#login-form button')

const link = document.querySelector("a");

/*
function onLoginBtnClick(){
  const username = loginInput.value;
  console.log(username);
  // only javascript
  // if(username === ""){
  //   alert("Please write your name!")
  // }else if(username.length > 15){
  //   alert("Your name is too long.")
  // }
}
*/

// addEventListener가 실행하는 함수의 첫번째 아규먼트는 해당 이벤트에 대한 정보를 갖고 있음!
function onLoginSubmit(event){
  event.preventDefault(); // 어떤 이벤트의 기본 행동(브라우저의 기본동작)이든 실행되지 않도록 막음.
  // const username = loginInput.value;
  console.log(loginInput.value);
}
// loginButton.addEventListener("click", onLoginBtnClick);

function handleLinkClick(event){
  event.preventDefault();
  console.log(event);
  // alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);