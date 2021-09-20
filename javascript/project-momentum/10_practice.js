const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

// 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용함!
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.inputText = "Hello "+username;
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerHTML = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}