# JavaScript

## INTRODUCTION
### JavaScript?
> 자바 스크립트는 **모든 브라우저에 내장**되어있고 프론트엔드 개발자가 사용할수 있는 유일한 프로그래밍 언어이다.

- 객체(Object) 기반의 스트립트 프로그래밍 언어.
- ECMAScript 사양을 준수하는 범용 스크립팅 언어.
- 웹의 동적 동작을 구현하기 위해 제작
- 자바와 직접적인 연관은 없다.

<br>

### 입출력(I/O)
- 운영체제에서 대표적 입출력은 **표준 입력, 표준 출력, 표준 오류 출력**이 있음
- 표준 입력(Standard-In)
  - (일반적으로) 키보드의 응답을 받아 입력
  - 데이터를 추가
  - 알고리즘에서는 문제의 Testcase 입력을 위해 사용
- 표준 출력(Standard-Out)
  - (일반적으로) 모니터에 문자열로 출력
  - 실행 상태 혹은 실행 결과를 보고 판단
  - 알고리즘에서는 문제의 정답 확인, 디버깅 용으로 사용

<br>

### 코드 구성
- 다수의 표현식으로 하나의 명령문이 만들어지며, 명령문으로 프로그램이 수행
- 하나의 명령문 끝은 개행 문자 혹은 세미콜론(권장!)으로 표시.

<br>

> [code, main-01.js](zerobase/main-01.js)

<br>

#### 식별자
- 대소문자 구별, 유니코드 문자셋 이용.
- 식별자 규칙
  - 키워드 사용 불가
  - 숫자로 시작 불가
  - 특수문자는 _, $만 허용
  - 공백 사용 불가
<br>

> [code, main-02.js](zerobase/main-02-identifier.js)

<br>

#### 주석
단일 주석은 `//`로, 다중 행 주석은 `/* */`로 작성한다.

<br>

### console
> console은 자바스크립트와 상호작용하기는 좋지만 긴 코드를 작성하기엔 적합하지 않으며, 유지되는 게 아니므로 테스트 용도로 사용함.

```javascript
// 'hi' 팝업 생성
alert('hi')

// 1+1 값을 브라우저 콘솔창에 노출
// console.log(1+1)
1+1
```

<br>
<br>

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

### 변수(variable)
- 값을 저장하거나 유지하는 역할을 함.
- **변경 가능한 값**을 저장하기 위한 기억공간
- 사용하기 전 반드시 선언 필요!
- 중복해서 선언 불가능.
- `let`을 통해 선언.
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
<br>

### 상수(constant)
- **변경 불가능한 값**을 저장하기 위한 기억공간
- 사용하기 전 반드시 선언 필요!
- 중복해서 선언 불가능.
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

> **[const와 let의 차이점]**
> `const`는 상수로 변하지 않는 값에 사용
> `let`은 새로운 값을 대입할 수 있는 변수에 사용.
```javascript
// 선언 후 할당
let hi;
hi = "hello";
```
```javascript
// 선언과 동시에 초기화
let halo = "Hello!";
```
```javascript
// 한 줄에 여러 변수 선언과 초기화
let name = "john", age = 13, msg = 'hello';
```
```javascript
// 상수는 보통 대문자 표기
const TESTCASE = 5;
const BIRTHDAY = '2000.1.1';
```
<br>

> [code, main-03.js](zerobase/main-03-variable.js)

<br>
<br>

### 호이스팅(Hosting)
- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어올리는 작업
- var로 선언한 변수 및 함수만 위로 올려지고, 할당은 올려지지 않는다.
- let/const로 선언한 변수, 상수, 함수에서는 호이스팅이 발생하지 않으니 let과 const 사용을 지향한다.

```javascript
// var
console.log(name); // output : undefined
var name = "john";
console.log(name); // output : john
```
```javascript
// let / const
// ReferenceError : Cannot access 'name_2' before initialization
console.log(name_2);
let name_2 = "john";
```
<br>

> [code, main-04.js](zerobase/main-04-hosting.js)

<br>
<br>

### 자료형
- 원시타입
  - Boolean : 논리적 값으로 true, false
  - null : 존재하지 않거나 유효하지 않은 주소 표시
  - undefined : 선언 후 값을 할당받지 않은 변수
  - Number : 정수, 실수 등의 숫자. 정수의 한계는 +-2<sup>53</sup>
  - String : 글자들을 표현하는 문자열, 빈 문자열
  - Symbol : 문자열과 함께 객체 property로 사용하며 ES6에서 추가됨
- 객체타입
  - Object : 두개 이상의 복잡한 개체 저장 가능.
<br>

> [code, main-05.js](zerobase/main-05-object01.js)

<br>
<br>

### Boolean
- 논리적 값을 표현하는 자료형
- 참인 true와 거짓인 false의 두가지 값만 존재한다
- 주로 조건문 등에서 동작 판단의 기준으로 사용된다.
- 0, -0, null, false, NaN, undefined, 빈 문자열 은 false로 취급된다.

```javascript
const amIFat = null; // null : 절대 자연적으로는 생기지 않음. 아무것도 없다는 걸 의도적으로 표현한 것.
let something; // undefined : 변수는 있지만 정의되지 않은 상태
const isHere = true; // Boolean : true or false
console.log(amIFat, something);
```
<br>

> [code, main-06.js](zerobase/main-06-boolean.js)

<br>
<br>

### null & undefined
- null
  - 비어있다는 의미로 표현됨
  - 존재하지 않는, 비어있는, 알 수 없는 값을 나타내는 데 사용.
- undefined
  - 값이 할당되지 않은 상태
  - 변수 선언 후 초기화 하지 않으면 undefined가 할당됨.

```javascript
const amIFat = null; // null : 절대 자연적으로는 생기지 않음. 아무것도 없다는 걸 의도적으로 표현한 것.
let something; // undefined : 변수는 있지만 정의되지 않은 상태
```
<br>

> [code, main-07.js](zerobase/main-07-null_undefined.js)
<br>
<br>

### number
- number는 정수, 소숫점 등 숫자를 표현하는 자료형
- 일반적 숫자 외에 Infinity, -Infinity, NaN(Not a Number) 같은 특수 숫자 값을 포함
- number에서는 2<sup>53</sup>-1보다 큰 값을 사용할 수 없으며, 더 큰 정수를 다루면 bigint 자료형 사용 필요

<br>

> [code, main-08.js](zerobase/main-08-number.js)
<br>
<br>

### string
- string은 문자, 문자열을 표현하는 자료형
- 3가지 종류 따옴표로 표현 가능
  - `"hello"`(큰 따옴표), `'hello'`(작은 따옴표), <code>`hello`</code>(백틱, backtick)

<br>

> [code, main-09.js](zerobase/main-09-string.js)

<br>
<br>

### Objects
- 다수의 원시 자료형을 포함하거나 복잡한 개체(entity)를 표현하는 자료형
- Object() 혹은 중괄호`{}`로 생성
- 객체 안의 속성(property)는 `이름:값`(key:value) 으로 표현하고, 속성과 속성사이는 `,`로 구분함.
  - 접근은 object.key 형태로 접근/
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

> [code, main-10.js](zerobase/main-10-object.js)

<br>
<br>

### Objects 복사 문제점
- 오브젝트의 값을 복사할 떄는 대상이 복사되는 게 아니라 주소 값만 복사됨
- 대상 전체를 복사하려면 **얕은 복사(Shallow copy), 깊은 복사(Deep copy)**를 통해 가능

<br>

> [code, main-10-2.js](zerobase/main-10-2-object_problem.js)

<br>
<br>

### 얕은 복사
- for문 사용
  - ```javascript
      let admin = {}

      for(let key in user){
        admin[key] = user[key];
      }
      ```
- Object.assign() 함수 사용
  - ```javascript
      let admin = Object.assign({}, user);
      ```
- 전개연산자 사용(ES6부터 지원)
  - ```javascript
      let admin = { ...user } // user 내의 모든 필드값을 전개시킨다.
                              // {user.name, user.age}
      ```

<br>

> [code, main-11.js](zerobase/main-11-shallow_copy.js)

<br>
<br>

#### 얕은 복사 문제점
- 객체 내 또 다른 객체가 있다면 복제되지 않음
- 너무 복잡해지기 때문..

```javascript
let user = {
  name : "john",
  age : 25,
  size: {
    height:180,
    weight:70,
  }
};
```

<br>
<br>

### 깊은 복사
- 재귀함수 이용
- JSON 객체를 이용
  - stringify는 객체를 문자열로 변환 > 원본 객체와의 참조가 끊김!
  - ```javascript
      let admin = JSON.parse(JSON.stringify(user));
      ```

<br>

> [code, main-11-2.js](zerobase/main-11-2-deep_copy.js)

<br>
<br>

### 형변환
- 자바스크립트는 *느슨한/동적 타입 언어*로, **자료형을 명시적으로 선언할 필요가 없는 언어**다
- 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 **암묵적** 형 변환을 수행한다.
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 **명시적** 형 변환을 수행한다.
  - Number
    - 정수변환 : parseInt(피연산자)
    - 실수변환 : parseFloat(피연산자)

<br>

> [code, main-12.js](zerobase/main-12-casting.js)

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

### combine string
```javascript
// 1
greeting.inputText = "Hello "+username;
// 2
greeting.inputText = ` Hello ${username}!`;
```
<br>

기본적으로 string은 1번 방식으로 합쳤다. 물론 변수는 string 뿐만 아니라 다른 것도 가능하다.
2번 방식은 새롭게 고안된 방식이며, 아래와 같은 규칙을 따른다.
- 변수 + string을 하고 싶다면 `${변수명}`의 형태로 사용한다.
- 백틱(<code>`</code>)기호로 시작하고 끝낸다.
<br>
<br>
<br>

### localStorage
> [localStorage, MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
<br>

- `setItem(key, value)` : 정보 저장하기
- `getItem(key, value)` : 정보 불러오기
- `removeItem(key, value)` : 정보 삭제하기
<br>
<br>
<br>

### intervals
특정 시간마다 함수 호출.
`setInterval(함수명, N(ms));` 형태로 작성, Nms 마다 함수를 호출한다.
<br>
<br>
<br>

### setTimeout()
특정 시간이 지난 후 함수 호출.
`setTimeout(함수명, N(ms));` 형태로 작성, Nms 마다 함수를 호출한다.
<br>
<br>
<br>

### padStart(), padEnd()
String 타입에 사용 가능하며, 글자 수가 x개가 아니라면 y를 앞에 붙여주거나(padStart), 뒤에 붙여주는(padEnd)함수.
```javascript
"1".padStart(2,"0") // 01 / 1이 2글자가 아니라면 앞에 0을 붙인다
```
<br>
<br>
<br>

### Math

#### random
> Math.random();
<br>

0-1 사이의 숫자(소숫점)를 반환한다.
```javascript
Math.random(); // 0 - 1
Math.random() * 10 // 0 - 10
```
<br>

### ceil
> Math.ceil();
소숫점 숫자를 올림처리한다.
```javascript
Math.ceil(1.1) // 2
Math.ceil(1.6) // 2
Math.ceil(Math.random() * 10); // 1 - 11 의 정수
```
<br>

### round
> Math.round();
소숫점 숫자를 반올림처리한다.
```javascript
Math.round(1.1) // 1
Math.round(1.6) // 2
Math.round(Math.random() * 10); // 0 - 11 의 정수
```

<br>

### floor
> Math.floor();
소숫점 숫자를 내림처리한다.
```javascript
Math.floor(1.1) // 1
Math.floor(1.6) // 1
Math.floor(Math.random() * 10); // 0 - 10 의 정수
```

<br>
<br>
<br>

### object to string
`JSON.stringify()`
타입과 관계 없이 String으로 바꿔줌!
<br>

`JSON.parse()`
단순 String을 분석해서 자바스크립트의 객체로 바꿔줌.
```javascript
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

<br>
<br>

### forEach
`배열.forEach(실행할 내용);` 으로 작성.

> JavaScript는 지금 처리되고 있는 아이템을 그냥 제공함! 함수에서 item 키워드 활용!
```javascript
function sayHello(item){
  console.log("This is the turn of", item);
}
...
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(sayHello);
}
```

<br>
<br>
<br>

### Arrow function
화살표 함수. 함수를 간단하게 쓰는 방법
<br>

```javascript
// 기존
function sayHello(item){
  console.log("This is the turn of", item);
}
parsedToDos.forEach(sayHello);

// 화살표함수 이용
parsedToDos.forEach((item) => console.log("This is the turn of", item));
```

<br>
<br>
<br>

### filter
제외하기(걸러내기) 위한 함수.
```javascript
function sexyFilter(){
  // Should return true if you want include item
  // 전부 유지
  // return true;
  // 전부 삭제
  return false;
}
[1,2,3,4].filter(sexyFilter);
sexyFilter(4)
```
```javascript
function sexyFilter(item){
  return item !== 3;
}
[1,2,3,4].filter(sexyFilter); // [1,2,4]
```
```javascript
const arr = [1231,432423,54312,52342,523,1323,4122,3,12,34,323,345,221]
function sexyFunction(potato){
  return potato <= 1000;
}
arr.filter(sexyFunction); // 523,3,12,34,323,345,221
```
```javascript
const todos = [{"text":"asdf","id":1631944047326},{"text":"asfwaf","id":1631944048469},{"text":"asf","id":1631944228165}]
function sexyFunction(todo){
  return todo.id !== 1631944047326;
}
todos.filter(sexyFunction);
```

<br>
<br>
<br>

### geolocation
`navigator.geolocation.getCurrentPosition()` 등의 형태로 사용.
브라우저에서 위치 좌표(WiFi, 위치, GPS 등등).

<br>

`getCurrentPosition()`은 인자가 두개(성공, 에러 시 실행할 함수) 필요함

```javascript
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```

<br>
<br>
<br>

### fetch
자원 가져오기. `fetch("자원주소")` 형태로 입력한다.

```javascript
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url);
}
```