# HTML & CSS

## HTML
### 개요
#### HTML과 웹브라우저

파일은 각 확장자마다 구동(읽어내는)하는 프로그램이 있다.

> `.pdf` 는 PDF 뷰어, `.doc`, `.docx`는 MS Word 등.

`.html` 파일은 웹브라우저(크롬, 엣지, 인터넷 익스플로러, 사파리, 파이어폭스, ...)로 읽어내는 문서이다.

<br>

#### HTML : HyperText Markup Language

하이퍼텍스트 파크업 언어.

> **하이퍼텍스트**: 다른 페이지나 위치로 이동하도록 만들어진 요소이나, 지금은 웹페이지를 이루는 요소 하나하나를 말함.

> **프로그래밍 언어** : 데이터를 가공하거나 명령하는 action에 관련된 언어
>
> **마크업 언어** : 데이터를 어디에 어떻게 표현할지 구조적 의미를 정의하는 언어

<br>

#### HTML, CSS 그리고 JavaScript

**[구조]** HTML : 웹 문서의 기본적인 **골격**을 담당

**[표현]** CSS : 각 요소들의 **레이아웃, 스타일링** 담당 (각 웹페이지의 아이덴티티를 강조할 수 있음)

**[동작]** JavaScript : **동적** 요소로, 사용자와의 **인터랙션**을 담당 (웹 어플리케이션의 형태를 띄게 할 수 있음)

> 지금은 javascript가 할 수 있는 영역이 커져서 html과 css로 하는 역할을 어느 정도 위임하고 있다. 하지만 자바스크립트의 범위가 늘어났을 뿐 각각의 문법과 역할을 정확하게 알고 있어야 한다.
<br>

#### 웹 표준과 웹 접근성, 웹 호환성

같은 html 문서라도 브라우저마다 구동 방식, 기본 디자인이 다르다. 그렇기 때문에 입력창 형식의 버튼 등 사용자가 이해하기 힘든 형태나 방식으로 제작되면 사용자에게 혼동을 줄 수 있고, 이를 방지하기 위해 만들어진 규칙이 웹 표준이다.
<br>

**[ 웹 표준 ]**

- HTML5는 W3C에서 2014년에 공식 표준화

- 2019년 WHATWG에 의해 HTML이 표준화 됨

  > 표준화 이전에는 인터넷 익스플로러의 엑티브X처럼 독자적 플러그인이 존재하기도 했음
  >
  > 웹 표준을 준수해 작성하면 운영체제나 브라우저에 관련없이 의도한 대로 보여지는 웹페이지를 만들 수 있음!
<br>


**[ 웹 접근성 ]**

장애를 가졌거나, 가지지 않았거나 상관 없이 잠시 키보드나 마우스 등의 입출력장치를 사용할 수 없게 되었을 때도 동일하게 웹 페이지를 사용할 수 있도록 하는 것(접근성을 높인다.)

<br>


**[ 웹 호환성 ] (Cross Browsing)**

웹 브라우저의 버전이나 종류와 관계 없이 웹 사이트를 접근할 수 있게 하는 것.

- 웹 표준을 준수하면 브라우저간 호환성을 확보할 수 있다.
  - HTML, CSS 문법 준수
  - 동작, 레이아웃, 플러그인 호환성
<br>
<br>
<br>
<br>

### HTML이란?-01

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
<br>

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
<br>
<br>

### HTML이란?-02

#### 주석(Comments)

- 브라우저가 무시함
- 주석의 목적은 코드에 메모를 추가하거나, 사용하지 않는 코드를 임시처리하기 위함!

```html
<p>I'm not inside a comment</p>
<!-- <p>I am!</p> -->
```

<br>

#### HTML 문서의 구조

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- HEAD 영역 -->
  </head>
  <body>
    <!-- BODY 영역 -->
  </body>
</html>
```
**[html 문서의 골격]**

- `<!DOCTYPE html>` : 문서 타입 명시, html5를 의미. 생략해도 문제 없으나 선언하고 시작하는 게 관습화되어 사용하고 있다.
- `html` : 실제 태그 영역. 하나의 문서에 하나만 있으며, 모든 요소가 이 안에 위치해야 한다. 최상위 요소, root요소라고 불린다.
  - `head` : 웹페이지 화면에 직접 노출되지 않는 **웹페이지의 정보** 영역
    - meta tag : 문서의 일반적인 정보와 문자 인코딩 등을 명시한다
    - title : 웹페이지의 제목
  - `body` : `head`외의 웹브라우저 화면에 노출되는 모든 콘텐츠.


> [MDN](https://developer.mozilla.org/ko/) : 파이어폭스를 만든 모질라 재단에서 만든 웹 개발과 관련된(html,css,javascript) 정보를 담고 있는 사이트.

<br>

#### `<head>`
기계가 식별할 수 있는 문서 정보(메타데이터)를 담고 있음.
사용자가 보는 게 아닌 웹 문서의 제목, 페이지 제작자 등의 정보를 담고 있다.

- 제목, 스크립트, 스크립트 등.
- 하나의 `<title>` 요소를 포함해야 함.
- html5에서는 `<head>`태그가 없는 경우 자동으로 생성되나 구형 브라우저에서는 생성되지 않기 때문에 꼭 작성하도록 한다.

> [<head>, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/head)

<br>

#### `<body>`
사용자에게 보여지는 화면 내 모든 요소를 나타냄.

- 한 문서에 하나의 `<body>`요소만 존재함
- html5에서는 생략 가능하나, `<head>`와 동일하게 구형 브라우저 등의 이슈 방지를 위해 오프닝, 클로징 태그를 모두 갖춰 사용한다.

> [<body>, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/body)

<br>

#### 태그를 구분짓는 특성(body)
1. 구획을 나누는 태그(layout)
    - 단독으로 사용했을 땐 눈에 보이지 않는다.
    - 컨테이너 역할을 하는, **그룹화** 태그.
2. 그 자체로 요소인 태그
    - 단독으로 사용해도 눈으로 보인다.

<br>

#### 블록(block)과 인라인(inline)
- 구획을 나누는 요소이면서 블록이거나 인라인일 수 있고, 그 반대일 수도 있다.
- css를 통해 디폴트 값을 변경(block <-> inline)할 수 있다.
- 태그는 문서의 흐름에 따라 왼쪽 상단부터 차지한다.
- 직전 요소가 블록인지 인라인인지에 따라 다음 태그의 위치가 정해진다.

1. 블록(block)
    - 언제나 새로운 줄에서 시작하며, 좌우 양쪽으로 최대한 늘어나 가능한 모든 너비를 차지 (부모가 차지한 영역의 한 줄 차지)
    - 상자를 아래로 쌓는 것
2. 인라인(inline)
    - 줄의 어느 곳에서나 시작함
    - 바로 이전 요소가 끝나는 지점부터, 요소의 내용(content)만큼만 차지!

> **[포함 규칙]**
> - 같은 형태의 다른 요소를 안에 포함할 수 있음(블록>블록 / 인라인>인라인)
> - 대부분의 블록 요소는 인라인 요소도 포함할 수 있음
> - !! 인라인 요소는 블록 요소를 포함할 수 없다!

<br>

#### 콘텐츠 카테고리
- html5 부터 비슷한 특징을 가진 요소를 묶어 7개의 카테고리로 세분화 함
- 하나의 html요소가 여러 콘텐츠 카테고리 내의 포함관계에 들어갈 수도 있다

|카테고리|내용|
|----|-----|
|메타데이터 콘텐츠(Metadata Content)|문서의 메타 데이터(정보), 다른 문서를 가리키는 링크 등을 나타내는 요소|
|플로우 콘텐츠(Flow Content)|웹페이지 상의 메타데이터를 제외한 거의 모든 요소. 보통 텍스트나 임베디드 콘텐츠를 포함한다|
|섹션 콘텐츠(Section Content)|문서 구획(Section)을 나눌 때 사용|
|헤딩 콘텐츠(Heading Content)|섹션의 제목(heading)과 관련된 요소|
|프레이징 콘텐츠(Phrasing Content)|구문 콘텐츠. 문단에서 텍스트를 마크업할 때 사용함|
|임베디드 콘텐츠(Embeded Content)|내장 콘텐츠. 외부 소스(이미지, 비디오 등)를 가져오거나 삽입할 때 사용|
|인터렉티브 콘텐츠(Interactive Content)|대화형 콘텐츠. 사용자와의 상호작용을 위한 콘텐츠 요소|

> [콘텐츠 카테고리, W3C](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html)
<br>
<br>
<br>
<br>

### 메타데이터
> [HTML head, MDN](https://developer.mozilla.org/ko/docs/Glossary/Head)

- `<head>`에 들어가는 정보 영역
- **메타데이터** : 데이터를 설명하는 데이터, 데이터를 위한 데이터.
- 검색 엔진이 문서의 정보를 분류할 때 사용하기도 한다


#### `<title>` : 문서 제목 요소

> [title, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/title)

- 문자열만 작성, 안쪽에 태그가 있어도 무시한다.
- 문서에 하나만 들어가며, 브라우저 상단의 제목에 해당한다.
- 결과 페이지의 순서를 결정하는 구성 요소 중 하나가 페이지의 제목이다. (SEO와도 관련)
- 단순한 단어 나열 제목은 검색 알고리즘이 광고 등으로 인식해 검색 순위를 낮추므로 설명할 수 있도록 한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이 곳은 송아선의 웹페이지 입니다!</title>
  </head>
  <body>
    
    </body>
</html>
```
<br>

#### `<meta>` : 메타데이터 요소

> [meta, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta)

- 빈 요소로 내용을 가질 수 없으며 속성으로 정보를 나열한다.

<br>

##### [메타 태그의 속성]

###### `name`

[표준 메타데이터 이름](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name)으로 사용

- `application-name` : 웹페이지 전체를 아우를 수 있는 제목. (ex: 페이스북 / 타이틀 : 페이스북 - 대쉬보드 등.. 타이틀에는 메뉴에 따라 정보가 달라질 수 있음)
- `description` : 페이지에 대한 짧은 요약. 일부 브라우저에서는 즐겨찾기 내 기본 설명값으로 사용하기도 한다.
- `generator` : 페이지를 생성한 소프트웨어의 식별자
- `keywords` : 문서를 설명할 수 있는 키워드. 인스타그램의 해시태그와 유사함.
- `referrer` : 링크를 통해 페이지를 이동하면 흔적이 남기 때문에, 그 흔적을 어떻게 남길지에 대한 속성. (아직 서버나 http에 대한 개념이 부족하니 이 정도로 알고 넘어감)

<br>

###### `charset`

- 언어 세팅, 타이틀 전이나 **`<head>`영역의 가장 첫번째로 작성**하는 것을 권장한다.
- UTF-8 : 모든 나라의 언어셋을 사용함

<br>

###### `[name="viewport"]`

- 전체 브라우저에서 웹 페이지를 볼 수 있는 영역을 말함.
- 모바일 장치에서 사용.
- 쉼표로 구분

|값|하위값|설명|
|----|--|-----|
|width|정수(+) 혹은 device-width|브라우저가 모바일 화면(디바이스)의 가로너비와 동일하게 적용하고자 할 때 device-width를 사용하며, 그 외에는 정수를 입력해 사이즈를 정의할 수 있다.|
|height|정수(+) 혹은 device-height|width와 동일한 내용(단 높이)이나, width를 설정하면 height는 따라오기 때문에 따로 설정하지 않는 경우가 많음|
|initial-scale|0.0 ~ 10.0|초기 비율. 실제 디바이스의 가로와 뷰포트 너비의 비율을 정의한다. 일반적으로 쓰이는 건 1.0|
|user-scalable|yes / no|웹페이지 확대 축소 가능 여부, 기본값은 yes|
|maximum-scale|0.0 ~ 10.0|웹페이지 최대 확대 비율|
|minimum-scale|0.0 ~ 10.0|웹페이지 최대 축소 비율|

<br>

#### MIME 타입

> [MIME 타입, MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

- 파일을 해석하지 못하는 걸 방지하기 위해 타입을 명시해주는 것
- `type/subtype` 형태로 작성
- `type`에는 `text`, `image`, `video`, `audio` 등이 있다.
- 사용할 때마다 적절한 MIME 타입을 찾아 사용한다.

<br>

#### `<style>`

- 외부 파일을 `<link>` 형태로 불러와 사용하는 것을 권장하지만 내부 `<head>`영역에도 작성할 수 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      p {color:red;}
    </style>
  </head>
  <body>
    <p>안녕하세요. 반갑습니다</p>
  </body>
</html>
```

<br>

#### `<script>`

- 외부 파일(src속성)을 불러와 사용하기도 하고, 직접 내부에 자바스크립트 문법을 작성할 수도 있다.
- 스크립트 파일을 만나 해석하는 동안 브라우저의 랜더링은 중단된다.
- 위의 이슈 때문에 가능한 스크립트는 `</body>` 의 바로 위에서 작성하는 것을 권장한다. (다른 방법이 있으나 이는 지금 다루지 않는다!)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script>
      // 자바스크립트
    </script>
  </head>
  <body>
    <p>안녕하세요. 반갑습니다</p>

    <script>
      // 자바스크립트
    </script>
  </body>
</html>
```

<br>
<br>
<br>
<br>

### 텍스트 요소-01
> [실습 문서](210830_index.html)

#### 제목 태그(h1 ~ h6)
> [제목태그, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements)
> [HTML5 Outliner](https://gsnedders.html5.org/outliner/)에서 html5 문서의 제목 태그 구성을 확인할 수 있다.

- heading 태그로 `<h1>`이 가장 높고 `<h6>`이 가장 낮다
- 유저 에이전트에서 제목을 분석해 목차를 만드는 등의 작업을 수행할 수 있다(스크린모드, html읽기 모드 등)
- 제목 단계를 건너뛰는 것(`<h2>` 직후 `<h6>`을 사용하는 등)을 지양할 것.
- 글씨 크기를 위해 제목 태그 사용 금지. 글씨 크기는 브라우저에서 기본적으로 지정된 크기일 뿐, 브라우저에 따라 다를 수도 있다.
- `<h1>`은 여러번 써도 오류가 나지는 않지만 단일로 사용하는 것을 권장한다. (웹접근성, SEO와도 연관됨)

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

<br>

#### 본문
##### p
> [p, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/p)

- 하나의 문단을 의미함
- 블록 레벨 요소.
- `<p>`태그와 `<p>`태그 사이엔 문장 한줄 높이가 자동으로 여백으로 들어감.
- 정확하게 비슷한 내용으로 문단을 묶어줘야 문단 띄어넘기(스크린 리더 등)를 했을 때 문제가 없으니 고려해서 작성한다.
- 빈 `<p>` 태그를 이용해 여백을 만들지 말고 css를 사용한다.

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisi a neque consectetur porta vitae ut ligula. Suspendisse et est sit amet mi hendrerit dapibus. Phasellus pretium quam at placerat fermentum. Mauris ac dui sit amet ligula fermentum faucibus vitae quis est. Sed eget sem tortor. Praesent hendrerit purus in enim imperdiet, sed mollis tellus mollis. In malesuada pharetra felis eu dignissim. Sed suscipit nisi a turpis venenatis imperdiet. Quisque ac mi eu est ullamcorper accumsan. Nulla scelerisque elit quis luctus vehicula. Quisque ac mauris nec dui viverra luctus in id ante. Curabitur non accumsan quam. Maecenas a libero laoreet leo congue eleifend nec nec tellus. Quisque interdum turpis at mauris euismod, nec porttitor massa aliquam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisi a neque consectetur porta vitae ut ligula. Suspendisse et est sit amet mi hendrerit dapibus. Phasellus pretium quam at placerat fermentum. Mauris ac dui sit amet ligula fermentum faucibus vitae quis est. Sed eget sem tortor. Praesent hendrerit purus in enim imperdiet, sed mollis tellus mollis. In malesuada pharetra felis eu dignissim. Sed suscipit nisi a turpis venenatis imperdiet. Quisque ac mi eu est ullamcorper accumsan. Nulla scelerisque elit quis luctus vehicula. Quisque ac mauris nec dui viverra luctus in id ante. Curabitur non accumsan quam. Maecenas a libero laoreet leo congue eleifend nec nec tellus. Quisque interdum turpis at mauris euismod, nec porttitor massa aliquam.</p>
```

<br>

##### br
> [br, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/br)

- 줄바꿈(line break) 태그
- 빈 요소
- 문단 사이 여백을 위해 여러개의 `<br>`을 두는 대신 css로 여백을 조정한다.
- 내용이 나눠지는 경우 `<br>` 대신 `<p>` 태그를 여러개 사용하여 나눈다.

```html
<p> O’er all the hilltops<br>
  Is quiet now,<br>
  In all the treetops<br>
  Hearest thou<br>
  Hardly a breath;
</p>
<p>
  The birds are asleep in the trees:<br>
  Wait, soon like these<br>
  Thou too shalt rest.
</p>
```

<br>

##### blockquote, q
> [blockquote, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote)
> [q, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/q)

- `<blockquote>` : 인용 블록 요소
- `<q>` : 인라인 인용문 요소
- `cite` : 인용문의 출처나 메세지를 가리키는 속성, url 값을 넣는다.

```html
<!-- blockquote, q 태그 -->
<!-- blockquote 예제 -->
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>
    Words can be like X-rays, if you use them properly–they'll go through anything. You read and you're pierced.
  </p>
</blockquote>

<!-- p 태그 안에는 blockquote가 올 수 없음! / 오류 코드 -->
<p>
  선택의 조건 (행복을 어디서 찾을 것인가)라는 도서에서는 아래와 같이 이야기한다.
  <blockquote>
    사람들은 이제 휴식을 부끄러워한다. 오랜 사색에 대해선 양심의 가책까지 느낀다. 시계를 바라보며 점심 식사는 어떻게 할 것인지 생각하고, 눈은 주식 시세가 나와있는 신문을 향해있다.
  </blockquote>
</p>
<!-- //p 태그 안에는 blockquote가 올 수 없음! / 오류 코드 -->
<!-- // blockquote 예제 -->

<!-- q 예제 -->
<p><q>이건 나는 게 아냐, 아주 멋있게 떨어지는 거지.</q> - 토이스토리</p>
<!-- // q 예제 -->
<!-- // blockquote, q 태그 -->
```

<br>

##### pre
> [pre, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/pre)

- 미리 서식을 지정한 텍스트(preformatted text).
- 작성한 내용 그대로 표현(요소 내 공백을 그대로 유지함)
- 고정폭 글꼴로 렌더링.
- 하나의 스냅샷 이미지와 유사하다.

```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

<br>

##### figure, figcaption
> [figure, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figure)

- 독립적인 콘텐츠
- `<figure>`태그로 묶어 사용하면 하나의 영역으로 묶어줄 수 있다.

<br>

> [figcaption, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/figcaption)

- `<figure>` 태그 내에 설명을 붙이기 위한 태그

```html
<figure>
  <p>
    Bid me discourse, I will enchant thine ear,
    Or, like a fairy, trip upon the green,
    Or, like a nymph, with long dishevelled hair,
    Dance on the sands, and yet no footing seen:
    Love is a spirit all compact of fire,
    Not gross to sink, but light, and will aspire.
  </p>
  <figcaption>by William Shakespeare</figcaption>
</figure>
```


<br>

##### hr
> [hr, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/hr)

- 수평선(horizon)태그.

```html
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr>

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```


<br>