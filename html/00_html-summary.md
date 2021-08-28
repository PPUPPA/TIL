# HTML & CSS

## HTML

### 개요

#### HTML과 웹브라우저

파일은 각 확장자마다 구동(읽어내는)하는 프로그램이 있다.

> `.pdf` 는 PDF 뷰어, `.doc`, `.docx`는 MS Word 등.

`.html` 파일은 웹브라우저(크롬, 엣지, 인터넷 익스플로러, 사파리, 파이어폭스, ...)로 읽어내는 문서이다.



#### HTML : HyperText Markup Language

하이퍼텍스트 파크업 언어.

> **하이퍼텍스트**: 다른 페이지나 위치로 이동하도록 만들어진 요소이나, 지금은 웹페이지를 이루는 요소 하나하나를 말함.

> **프로그래밍 언어** : 데이터를 가공하거나 명령하는 action에 관련된 언어
>
> **마크업 언어** : 데이터를 어디에 어떻게 표현할지 구조적 의미를 정의하는 언어



#### HTML, CSS 그리고 JavaScript

**[구조]** HTML : 웹 문서의 기본적인 **골격**을 담당

**[표현]** CSS : 각 요소들의 **레이아웃, 스타일링** 담당 (각 웹페이지의 아이덴티티를 강조할 수 있음)

**[동작]** JavaScript : **동적** 요소로, 사용자와의 **인터랙션**을 담당 (웹 어플리케이션의 형태를 띄게 할 수 있음)

> 지금은 javascript가 할 수 있는 영역이 커져서 html과 css로 하는 역할을 어느 정도 위임하고 있다. 하지만 자바스크립트의 범위가 늘어났을 뿐 각각의 문법과 역할을 정확하게 알고 있어야 한다.



#### 웹 표준과 웹 접근성, 웹 호환성

같은 html 문서라도 브라우저마다 구동 방식, 기본 디자인이 다르다. 그렇기 때문에 입력창 형식의 버튼 등 사용자가 이해하기 힘든 형태나 방식으로 제작되면 사용자에게 혼동을 줄 수 있고, 이를 방지하기 위해 만들어진 규칙이 웹 표준이다.



**[ 웹 표준 ]**

- HTML5는 W3C에서 2014년에 공식 표준화

- 2019년 WHATWG에 의해 HTML이 표준화 됨

  > 표준화 이전에는 인터넷 익스플로러의 엑티브X처럼 독자적 플러그인이 존재하기도 했음
  >
  > 웹 표준을 준수해 작성하면 운영체제나 브라우저에 관련없이 의도한 대로 보여지는 웹페이지를 만들 수 있음!



**[ 웹 접근성 ]**

장애를 가졌거나, 가지지 않았거나 상관 없이 잠시 키보드나 마우스 등의 입출력장치를 사용할 수 없게 되었을 때도 동일하게 웹 페이지를 사용할 수 있도록 하는 것(접근성을 높인다.)



**[ 웹 호환성 ] (Cross Browsing)**

웹 브라우저의 버전이나 종류와 관계 없이 웹 사이트를 접근할 수 있게 하는 것.

- 웹 표준을 준수하면 브라우저간 호환성을 확보할 수 있다.
  - HTML, CSS 문법 준수
  - 동작, 레이아웃, 플러그인 호환성



### HTML이란?

- 요소(element) 태그로 표기
- 태그를 통해 어떤 요소인지 명시(제목, 본문, 이미지 등)
- 태그의 이름은 html5 웹 표준에 맞게 작성


#### 태그

- **여는 태그(opening tag)**: `<요소명>`
- **닫는 태그(closing tag)**: `</요소명>`
- **내용(content)**: 요소 내용
- **요소(element)**: 여는 태그와 닫는 태그, 내용을 모두 통틀어 요소(element)라고 한다.

```html
<h1>This is Title!</h1>
<h2>fix you</h2>
<p>
Lights will guide you home, And ignite your bones, And I will try to fix you.
</p>
```

> 태그는 대소문자를 구분하지는 않지만, HTML5에서는 모두 **소문자**로 작성하는 것을 권장한다!



#### 빈 요소(Empty elements)

- 내용이 없는 이미지, 수평선, 줄바꿈 등의 요소를 빈 요소(Empty element)라 부른다.

- 닫는 태그를 추가로 명사하지 않는다.

- 부르는 이름이 다양하다.
  Empty element, Self-Closing element, Void element, Single tag, ...

  > `<br>`
  >
  > `<br />`
  >
  > 모두 br태그로 작동하지만 명시적으로 `<br />` 태그처럼 작성했다면 문서 내에 모두 공통적으로 명시적으로 빈 요소를 작성해준다.

```html
<br> <!-- 줄바꿈 -->
<hr> <!-- 수평선 -->
<img src="http://image.url/images/icon.jpg"> <!-- 이미지 -->
<meta chaset="utf-8"> <!-- 메타태그 -->
<input type="text" name="name"> <!-- 입력요소 -->
```
