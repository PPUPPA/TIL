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

### 자바스크립트 객체
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

#### 변수(variable)
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

#### Boolean
- 0, -0, null, false, NaN, undefined, 빈 문자열 은 false로 취급된다.
```javascript
const amIFat = null; // null : 절대 자연적으로는 생기지 않음. 아무것도 없다는 걸 의도적으로 표현한 것.
let something; // undefined : 변수는 있지만 정의되지 않은 상태
const isHere = true; // Boolean : true or false
console.log(amIFat, something);
```

<br>
<br>

#### Array
기본적으로는 `new` 키워드와 `Array()` 생성자 함수를 사용하여 배열 인스턴스(객체)를 생성한다.
- 배열은 값을 순서대로 나열한 목록이며, 0부터 시작하는 색인(index)값을 통해 배열안에 값을 저장하고 가져다 사용한다.
- 배열의 값으로는 문자, 숫자, 불리언(Boolean), 개체, 배열, 함수 등 모든 것이 올 수 있다.
  - ```javascript
      nonsense = [1, 2,'hello', false, null, true, undefined, "sunny"]
    ```

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

#### Objects
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