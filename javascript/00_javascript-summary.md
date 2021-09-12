# JavaScript

## INTRODUCTION
### JavaScript?
> 자바 스크립트는 **모든 브라우저에 내장**되어있고 프론트엔드 개발자가 사용할수 있는 유일한 프로그래밍 언어이다.

### console
> console은 자바스크립트와 상호작용하기는 좋지만 긴 코드를 작성하기엔 적합하지 않으며, 유지되는 게 아니므로 테스트 용도로 사용함.

```javascript
// 'hi' 팝업 생성
alert('hi')

// 1+1 값을 브라우저 콘솔창에 노출
// console.log(1+1)
1+1
```

## 자바스크립트 객체
자바스크립트의 객체는 크게 내장 객체, 브라우저 객체 모델(BOM), 문서 객체 모델(DOM)로 나누어 볼 수 있음.

- 내장 객체 : 브라우저의 자바스크립트 엔진에 내장된 객체를 의미. (9개의 객체 생성자가 있음.)
- String() : 문자 객체
- Number() : 숫자 객체
- Boolean() : 불리언 객체
- Object() : 오브젝트 객체
- Date() : 날짜 객체
- Array() : 배열 객체
- Function() : 함수 객체
- Math() : 수학 객체
- RegExp() : 정규 표현 객체

<br>
- 브라우저 객체 : 브라우저에 계층적으로 내장되어 있는 객체들을 의미.
  - window, screen, location, history, navigator, console 객체 등이 있음.
- 문서 객체 : HTML의 문서 구조를 의미.
  - 최상위 객체로 `<html>`이 있고, 하위 객체로 `<head>` 와 `<body>`가 있음. 이하 나머지 요소들도 객체임.

<br>
<br>

### 변수(variable)
- 값을 저장하거나 유지하는 역할을 함.
- `const`(상수; constant) 를 통해 선언.
  - 상수 : 바뀌지 않는 값
  - ```javascript
      // console.log(123123);
      // console.log('lalalalalala');
      const a = 5;
      const b = 2;
      const myName = "Sunny";
      console.log(a+b);
      console.log(a*b);
      console.log(a/b);
      console.log('hello ' + myName);
    ```
- 혹은 `let`을 통해 선언.
  - ```javascript
      let a = 5;
      let b = 2;
      let myName = "Sunny";
      console.log(a+b);
      console.log(a*b);
      console.log(a/b);
      console.log('hello ' + myName);
      myName = "Sunny-as";
      console.log('my name is '+ myName);
    ```

> **[const와 let의 차이점]**
> `const`는 상수로 변하지 않는 값에 사용
> `let`은 새로운 값을 대입할 수 있는 변수에 사용.

<br>
<br>

### Boolean
- 0, -0, null, false, NaN, undefined, 빈 문자열 은 false로 취급된다.
```javascript
const amIFat = null; // null : 절대 자연적으로는 생기지 않음. 아무것도 없다는 걸 의도적으로 표현한 것.
let something; // undefined : 변수는 있지만 정의되지 않은 상태
const isHere = true; // Boolean : true or false
console.log(amIFat, something);
```

<br>
<br>

### Array
기본적으로는 `new` 키워드와 `Array()` 생성자 함수를 사용하여 배열 인스턴스(객체)를 생성한다.
- 배열은 값을 순서대로 나열한 목록이며, 0부터 시작하는 색인(index)값을 통해 배열안에 값을 저장하고 가져다 사용한다.
- 배열의 값으로는 문자, 숫자, 불리언(Boolean), 개체, 배열, 함수 등 모든 것이 올 수 있다.
  - ```javascript
      nonsense = [1, 2,'hello', false, null, true, undefined, "sunny"]
    ```
- `push(값)`를 통해 배열 끝에 요소 추가도 가능하다.

<br>
<br>

> `Array()` 생성자 함수와 `new` 키워드를 사용해 만든 인스턴스는 실제로는 복합 객체를 만들어낸다.
> 따라서 typeof 연산자와 관련한 문제가 발생할 수 있으므로 가능하다면 리터널 문법을 권장한다.
> 그리고 리터널이 빠르고 간편하게 작성할 수 있다.
<br>

```javascript
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// Get Item from Array
console.log(daysOfWeek[4]);
// Add one more day to the array
daysOfWeek.push('sun');
```

<br>
<br>

### Objects
객체 안의 속성(property)는 `이름:값`(name:value) 으로 표현하고, 속성과 속성사이는 `,`로 구분함.
<br>

```javascript
const player = {
  name: 'sunny',
  points: 10,
  fat: true,
}
console.log(player);
console.log(player.name);
console.log(player['name']);
player.fat = false;
console.log(player);
player.lastName = 'potato';
```

<br>
<br>

### Function
반복해서 사용할 수 있는 코드 조각. 어떤 코드를 캡슐화해서 여러번 실행할 수 있게 만들어줌.
<br>
- 인수(argument) : 함수를 실행하는 동안 어떤 정보를 함수에 보낼 수 있는 방법.

<br>

```javascript
function sayHello(nameOfPerson, age){
  console.log('Hello my name is ' + nameOfPerson + ' and I\'m ' + age);
}
sayHello('sunny', 26);
sayHello('dada', 22);
```
```javascript
const player = {
  name:'sunny',
  sayHello: function(otherPersonsName){
    console.log('hello '+otherPersonsName+' nice to meet you!');
  }
}
console.log(player.name);
player.sayHello('lynn');
```

<br>
<br>

### Conditionals
`if`, `else if`, `else` 를 사용한 조건문.
- 조건 내에 여러 조건을 함께 체크할 수 있다.
  - `&&`(and) : 여러 조건을 동시에 만족해야 함.
  - `||`(or) : 여러 조건 중 하나만 만족해도 됨.

```javascript
// else 생략 가능
if(condition){
  // condition === true
}else{
  // condition === false
}
```
<br>

**[ 조건문 예제 ]**

```javascript
const age = parseInt(prompt("How old are you?"));
if(isNaN(age) || age < 0){
  console.log("Please write a real positive number.");
}else if(age < 18){
  console.log("You are too young.");
}else if(age >= 18 && age <= 50){
  console.log("You can drink.")
}else if(age > 50 && age <= 80){
  console.log("You should exercise.");
}else if(age === 100){
  console.log("Wow. You are wise.")
}else if(age > 80){
  console.log("You can do whatever you want.")
}
```

> prompt는 구형이라 사용하지 않는 추세임.
> 1. 커스텀 불가. 2. 브라우저나 사용자가 막을 수 있음. 3. 값 입력 전까지 로딩을 중지함.
>
> parseInt : String -> Number 타입 변환
>
> isNaN 함수 : boolean 값을 리턴함. (true : NaN, false : Number)
<br>
<br>

### Document
자바스크립트에는 document라는 오브젝트가 이미 내장되어 있고, 해당 html에 접근할 수 있음.
(ex: console창에서 document.title을 입력하면 페이지의 타이틀 값을 불러오며, 재정의할 수 있음.)

```javascript
// 페이지의 타이틀 값을 불러옴
document.title
// 페이지 타이틀 재정의 가능
document.title = "Hello! From JS!"
```

#### getElement
html element 가져오기
<br>

```javascript
// 요소도 불러올 수 있음
document.body
document.getElementById("title");
document.getElementsByClassName("hello");
document.getElementsByTagName("h1");
// css와 유사한 형태로 사용하는 querySelector
// 최초의 하나만 가져옴!
document.querySelector(".hello");
// 전부 가져옴!
document.querySelectorAll(".hello");
```
<br>
<br>

### events
#### addEventListener 아규먼트 사용.
- 첫번째 인자 : "이벤트"
- 두번째 인자 : 실행시킬 함수
  - 함수()는 함수를 즉시 실행시킬 때 사용하는 형태로, **()를 통해 실행버튼을 누른 것과 같은 효과.** 따라서, ***지금은 이벤트가 발생했을 때 실행되는 것으로, ()를 넣지 않는다.***
<br>

```javascript
const title = document.getElementsByTagName("h1");
// 이벤트 함수
function handleTitleClick(){
  console.log("title was clicked!");
}
// 이벤트
// 요소.addEvnetListener("이벤트", 실행시킬 함수);
title.addEventListener("click", handleTitleClick);
console.dir(title) // 사용 가능한 이벤트 확인 가능, on~ 이벤트로, 이벤트로 사용시 on을 제외하고 넣는다.
```
<br>

> [HTMLHeadingElemtn, MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)

<br>
<br>

#### oneventname 사용
`addEventListener` 아규먼트 대신 사용할 수 있으나, 권장하지는 않는다.
> `addEventListener`는 이후 `removeEventListener`를 통해서 제거 가능하기 때문.
<br>

```javascript
const title = document.getElementsByTagName("h1");
// 이벤트 함수
function handleTitleClick(){
  console.log("title was clicked!");
}
// 이벤트
title.onclick =  handleTitleClick;
```
<br>
<br>

### css in javascript
#### change color
**[ only javascript ]**
```javascript
function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
}
```
<br>

**[ with css ]**
> className : getter & setter
> 값을 가져올 수도 있고, 새로 값을 세팅해줄 수도 있음!
```css
h1{
  color:cornflowerblue;
  transition:color .5s ease-in-out;
}
.clicked{
  color:tomato;
}
```
```javascript
function handleTitleClick(){
  const clickedClass = "clicked";
  if(h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass);
  }else{
    h1.classList.add(clickedClass);
  }
}
```
<br>

**[ with css more simply ]**
> use `classList.toggle()`
<br>

```javascript
function handleTitleClick(){
  h1.classList.toggle("clicked");
}
```

<br>
<br>

#### check input value
```html
<div id="login-form">
  <input type="text" placeholder="What is your name?">
  <button type="button">Log In</button>
</div>
```
```javascript
const loginInput = document.querySelector('#login-form input')
const loginButton = document.querySelector('#login-form button')
function onLoginBtnClick(){
  const username = loginInput.value;
  if(username === ""){
    alert("Please write your name!")
  }else if(username.length > 15){
    alert("Your name is too long.")
  }
}
loginButton.addEventListener("click", onLoginBtnClick);
```
<br>

**[ with html ]**
```html
<form id="login-form">
  <input type="text" placeholder="What is your name?" required maxlength="15">
  <button type="submit">Log In</button>
</form>
```
> `form` 태그를 사용하면 유효성(길이, 빈값) 체크를 따로 javascript로 하지 않아도 됨
> 더불어 submit 버튼(or Enter키)을 통해 폼이 작동하므로 click 이벤트를 신경쓰지 않아도 됨!
```javascript
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
function onLoginSubmit(event){
  event.preventDefault(); // 어떤 이벤트의 기본 행동(브라우저의 기본동작)이든 실행되지 않도록 막음.
  console.log(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);
```
<br>

> `addEventListener`로 호출된 함수의 첫번째 인자 `x` 해당 이벤트에 대한 정보를 갖고 있음!
> `x.preventDefault()`를 통해 이벤트의 기본 행동(브라우저의 기본 동작)이 실행되지 않게 막을 수 있음.