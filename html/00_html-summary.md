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
> **마크업 언어** : 데이터를 어디에 어떻게 표현할지 구조적 의미를 정의하는 언어

<br>

#### HTML, CSS 그리고 JavaScript

**[ 구조 ]** HTML : 웹 문서의 기본적인 **골격**을 담당

**[ 표현 ]** CSS : 각 요소들의 **레이아웃, 스타일링** 담당 (각 웹페이지의 아이덴티티를 강조할 수 있음)

**[ 동작 ]** JavaScript : **동적** 요소로, 사용자와의 **인터랙션**을 담당 (웹 어플리케이션의 형태를 띄게 할 수 있음)

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
  - `lang` : `html lang="언어"` 속성을 통해 페이지 언어를 지정할 수 있다.
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

> **inline-block?**
> inline과 block 외에도 inline-block 요소가 존재한다.
> 기본적으로 inline과 유사하게 줄의 어느 곳에서나 시작하고, 바로 이전 요소가 끝나는 지점부터 요소의 내용만큼 공간을 차지하지만 **width, height, margin, padding, line-height** 등을 사용해 크기를 커스텀할 수 있다.
> inline-block은 기본적으로 공백을 갖고 있는데 부모 요소에 `font-size:0`을 적용하면 공백이 제거되며, 폰트사이즈는 요소 자체에 직접 적용한다.

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

- `property` 속성의 `og:title`, `og:description`, `og:image` 등을 이용하면 오픈 그래프 메타 데이터를 설정할 수 있다. 페이스북, 네이버, 트위터 등에서 사용되는 링크의 미리보기에 사용되는 메타데이터!

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

> 스크립트에서 시작하는 시점을 설정해줄 수 있다.
> 대표적으로 페이지가 준비 되었을 때(document.ready) / 전부 로딩되었을 때(window.load)가 있다.
> document.ready의 경우 DOM이 트리를 생성한 직후 실행되며,
> window.load의 경우 html의 모든 요소가 페이지에 로딩된 후 동작한다. 외부 리소스 이슈 등으로 페이지 로딩시간이 길어질 경우 그만큼 스크립트를 불러오기까지의 대기 시간도 길어진다.

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

> 잘 사용하지 않아서 잊고 있던 태그라, 개인 복습을 위해 W3Schools 등의 문제를 인용할 때 사용해서 익혀두면 좋을 것 같다.

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

> 잘 사용하지 않아 잊고 있던 태그인데, 기억해뒀더라면 더 잘 사용할 수 있었을 것 같다. 다른 날 정리해둔 `audio`, `video` 태그 등의 임베드 요소들이나 위에서 사용한 인용 요소(`blockquote`, `q`), 코드문(`pre`, `code`)과 함께 사용하면 좋을 것 같다.

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
<br>
<br>
<br>

### 텍스트 요소-02
> [실습 문서](210831_index.html)

#### 본문
##### abbr, address, cite, bdo
> 스타일 지정을 위해 해당 태그를 사용하지 않도록 한다.

- `abbr` : 약어로, `title` 속성에 전체 내용을 적어 사용한다.
- `address` : 주소. 예전에는 지역 등의 주소를 나타내는 데 많이 사용했으나, 현재는 메일이나 사이트 주소를 모두 통틀어 사용한다.
- `cite` : 인용의 출처를 밝힐 때 사용하는 태그. `q`, `blockquote` 등의 코드에서 속성 값으로도 사용하지만 눈에 보이도록 출처를 남기도록 할 땐 `cite` 태그를 사용한다.
- `bdo` : 양방향. 텍스트를 반대 방향으로 표현할 때 사용한다. `dir`(디렉션) 속성에 `ltr`, `rtl` 등으로 방향을 지정해서 사용한다.

> `address`를 제외하고는 전부 생소한 태그라서 잘 기억해둬야 할 것 같다. 자주 사용하지 않더라도 잘 기억해두면 필요할 때 활용할 수 있을 듯! 특히 `abbr`이나 `cite`는 잘 기억해두면 활용도가 좋을 것 같다!

<br>
<br>

#### 포매팅
##### b, strong
> [b, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/b)
> [strong, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/strong)

- `<b>` 태그는 단순히 '굵게 표시할 부분'에 사용하며, 전체가 아닌 부분적 강조를 위해 사용하는 태그다.
- `<strong>` 태그는 '중요한 요소'에 사용한다.
- 둘은 완전히 다른 태그지만 형태만 유사하게 보일 뿐!

<br>

##### i, em
> [i, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/i)
> [em, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/em)

- `<i>` 태그는 기술용어, 외국어 등 앞뒤와 톤이 다르게 읽혀야 하는 부분에 사용.
- `<em>` 태그는 '중요한 요소'에 사용한다. `<strong>`보다 더 긴급하게 강조하는 느낌!
- 둘은 완전히 다른 태그지만 형태만 유사하게 보일 뿐!

<br>

##### mark, small, sub, sup

**mark**
> [mark, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/mark)
- 텍스트를 강조(하이라이트) 처리를 위한 태그.
- 검색결과나 `q`, `blockquote` 등의 태그에서도 사용함
<br>

**small**
> [small, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/small)
- 덧붙임 요소. 저작권, 법률표기 등을 작은 글씨로 표기해줌
<br>

**sup, sub**
> [sup, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sup)
> [sub, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/sub)
- `<sup>` : 위 첨자 태그 (지수 표기, 외국어 서수 표기 등)
- `<sub>` : 아래 첨자 태그 (화학식, 각주 등)

<br>

##### del, ins, code, kbd
**del, ins**
> [del, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/del)
> [ins, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ins)
- 사용 범위 및 속성이 유사하다 (cite, datetime)
- `<del>` : 제거된 텍스트 범위 (취소선 등)
- `<ins>` : 삽입된 텍스트 범위 (밑줄 등)
- `cite` : 변경점을 설명하는 리소스의 url 속성
- `datetime` : 변경 일시에 대한 속성
<br>

**code**
> [code, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/code)
- 고정폭 글씨체, `<pre>`의 인라인 요소 버전!
<br>

**kbd**
> [kbd, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/kbd)
- 고정폭 글씨체, 키보드 입력 등의 사용자 입력을 나타냄

<br>
<br>

#### a태그와 하이퍼링크
> [a, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)

- `<a>`는 anker 요소를 의미함.
- `href` 속성을 통해 위치, 파일, 주소, 전화번호(`tel:`), 메일주소(`mailto:`) 등을 **url**로 연결할 수 있다.
  - 절대경로 : 현재 위치와 관련없이 동일한 곳으로 이동
  - 상대경로 : 현재 위치를 기준으로 이동
  - `<a href="https://www.mozilla.com">Mozilla</a>`
- `target` : url을 표시할 위치(열 위치)
  - `_self` : 기본 값, 현재 창에 연다.
  - `_blank` : 새 탭/새 창에 연다.
  - `_parent` : 현재 영역의 창의 부모 영역에 표시(iframe 등)하나, 부모가 없을 경우 `_self`와 동일하게 동작.
  - `_top` : 최상단 브라우징 맥락에 표시하며, 없을 경우 `_self`와 동일하게 동작함
  - `<a href="https://www.mozilla.com" target="_blank">Mozilla</a>`

> `title` 속성을 이용해 툴팁을 작성한다. 특히 `target="_blank"`와 같이 새 창으로 열리는 경우, 새창으로 열린다는 사실을 고지하는 것이 사용자 경험에 좋다.


<br>

#### 엔티티(Entity)
> [entity, MDN](https://developer.mozilla.org/en-US/docs/Glossary/Entity)
> [entity(국문 문서, 중하단에 위치), MDN](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

- &(앰퍼시티)로 시작해서 ;(세미콜론)으로 끝난다.

```html
<p>다섯개의 스페이싱 (     )</p>
<pre>문단을 나타내는 태그는 &lt;p&gt;&lt;/p&gt;태그입니다.</pre>
```

|값|엔티티 코드|
|---|----|
|`<`|`&lt;`|
|`>`|`&gt;`|
|`"`|`&quot;`|
|`'`|`&apos;`|
|`&`|`&amp;`|
|` (spacing)`|`&nbsp;`|

<br>
<br>
<br>
<br>

### 구조를 나타내는 요소
> [실습 문서](210831_construction.html)

#### 컨테이너(div, span)

##### div
- 순수컨테이너로 아무것도 표현하지 않음.
- 아무런 의미가 없는 블록 요소로, 여러 요소를 묶어 스타일링 하거나 레이아웃을 짜기 위해 사용.
- 특정 구역에 lang 속성을 이용해 다른 언어로 표현할 수 있음.

##### span
- div와 동일하게 순수 컨테이너로 아무것도 표현하지 않음.
- 아무 의미가 없는 인라인 요소.

<br>

#### 시멘틱 웹이란
- Semantic : 의미의, 의미론적인
- 요소의 의미를 고려하여 구조를 설계하고 코드를 작성한다.
```html
<body>
  <!-- 시멘틱 마크업 O -->
  <header><!-- Header --></header>

  <nav><!-- 메뉴 --></nav>

  <main>
    <article><!-- 본문 --></article>
    <aside><!-- 사이드바 --></aside>
  </main>

  <footer><!-- Footer --></footer>
</body>
```
```html
<body>
  <!-- 시멘틱 마크업 X -->
  <div><!-- Header --></div>

  <div><!-- 메뉴 --></div>

  <div>
    <div><!-- 본문 --></div>
    <div><!-- 사이드바 --></div>
  </div>

  <div><!-- Footer --></div>
</body>
```

##### 시멘틱 마크업의 장점
- 검색엔진이 시멘틱 마크업을 분석해 페이지의 SEO에 영향을 주는 중요 키워드로 간주한다.
- 시각장애가 있는 사용자가 스크린 리더 등의 장치로 페이지를 탐색할 때 푯말로 사용할 수 있다. (웹접근성!)
- 의미 없는 `div`들을 탐색하는 것보다 의미 있는 코드블록을 찾는 것이 쉽다. (유지보수 측면)
- 개발자에게 태그 안에 채워질 데이터 유형을 제안한다.
- 의미있는 이름 짓기(Semantic naming)는 적절한 사용자 정의 요소 / 구성요소의 이름짓기(naming)를 반영한다.


<br>

#### header, footer
##### header
> [header, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/header)

- 소개 및 탐색에 도움을 주는 콘텐츠
- 제목, 로고, 검색 폼, 작성자 명 등의 요소도 포함
- 웹 페이지에 하나만 있으며, 일반적으로 웹페이지 내 어떤 곳을 탐색해도 동일한 헤더를 갖는다.
- 내부에 `header`또는 `footer`를 자식으로 가질 수 없다.
<br>

##### footer
> [footer, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer)
- 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 정보를 담고 있음.
- 웹 페이지에 하나만 있으며, 일반적으로 웹페이지 내 어떤 곳을 탐색해도 동일한 푸터를 갖는다.
- 내부에 `header`또는 `footer`를 자식으로 가질 수 없다.


<br>

#### nav
> [nav, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav)
- 내비게이션 바.
- 일반적인 내비게이션이 내가 있는 위치나, 가야할 방향을 알려주듯 내가 어느 페이지에 있고, 상위 페이지는 어디인지 위치를 보여준다.
- 현재 페이지에서의 탐색도 용이하게 만들어준다.
- 메뉴, 목차, 색인 등으로 쓰인다.
- 일반적으로 목록(`ul`, `li`)의 형태를 갖는다.

> 푸터는 사이트 내 공통사항, 내비게이션은 페이지 내의 링크로 다른 점을 기억해두자.

<br>

#### aside
> [aside, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside)

- 사이드바를 만들 때 사용.
- 본문과 크게 직접적인 연관은 없으나 간접적인 연관이 있을 때 사용한다.
- 본문 내 단어를 추가적/부가적으로 설명할 때나, 광고 등의 영역!
- 없어도 메인 영역의 내용을 읽는데 문제가 없다.

<br>

#### main
> [main, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main)

- `body`태그의 바로 하위 자식으로 사용하며, 페이지 내 단 하나만 사용 가능.
  - hidden 속성으로 숨길 경우엔 여러개로 사용 가능.
- 전체 컨텐츠를 아우른다.
- IE 11 이하 버전에서 지원되지 않으므로, IE 11 이하에서 사용 시 ARIA 속성을 이용해 `<main role="main">`과 같이 사용한다. (접근성)

<br>

#### article
> [article, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)

- 한 페이지에 여러개 사용 가능
- 독립적으로 구분해 재포하거나 재사용할 수 있는 구획.
- 뉴스의 기사, 블로그 포스팅, 주간 날씨의 일일 날씨 정보 등.
- 페이지 내의 독립적인 컨텐츠.
- 내부에 여러개의 `section`이 있을 수 있고, 반대로 `section` 내부에 `article`이 존재할 수도 있음.
- `article` 내부에 제목 요소(h태그)를 사용해 식별할 수 있는 제목을 넣어줌.
- 독립적인 요소이기 때문에 내부에 `header`, `footer`를 사용할 수도 있다.

<br>

#### section
> [section, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)

- `article`과 유사하나 다르다!
- 가장 쉬운 구분점은 독립적 요소로 `article`로 묶을 수 있다면 `article`로 사용하고, 그게 아니라면 `section`으로 사용한다.
- `div`를 사용하지 않는 이유는 일반적으로 레이아웃, 스타일을 위해 사용하는 `div`와 달리 *전체 글의 흐름에 있어 문맥적으로 호흡이 끊겨 바뀌는 부분*에서 구분하기 위해 사용한다.
- 접근성을 위해 제목 요소(h태그)를 사용해 식별한다.

```html
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>

<section>
    <h2>Criteria</h2>
    <p>There are many different criteria to be considered when choosing an Apple — size, color, firmness, sweetness, tartness...</p>
</section>
```

> `section`과 `article`이 구분하기 어렵기도 하고, 잘못 사용하게 될까봐 확실한 상황이 아니면 잘 사용하지 않았는데 이번 기회에 확실하게 정리가 된 것 같다! 잘 활용해보는 습관을 길러야겠다.
> 기본적으로 `section`, `article`을 포함해 `main`, `header`, `footer` 등 시멘틱하게 고안된 태그들은 제목 요소(h태그)를 활용하여 해당 영역을 밝혀주는 것이 접근성상 좋다.

<br>
<br>
<br>
<br>

### 목록과 표
#### 목록
##### ol
**[ 순서가 있는 목록 ]**
- **O**rdered **L**ist, 정렬 목록 : 기본적으로 숫자 목록으로 표현됨
- 순위를 나타내거나 단계적 수행이 필요한 요리 레시피 등에 사용!

###### ol 속성
**type**
- 리스트를 나타내는 타입(기본값: 1)
```html
<!-- type : A, a, I, i, 1 등이 있음 -->
<ol type="A">
  <li>first</li>
  <li>second</li>
  <li>third</li>
  <li>fourth</li>
</ol>
```
<br>

**start**
- 리스트를 시작하는 번호(기본값: 1)
- 숫자로 입력한다.
```html
<!-- start -->
<ol type="A" start="4">
  <li>first</li>
  <li>second</li>
  <li>third</li>
  <li>fourth</li>
</ol>

<!-- 다른 방법 -->
<ol type="A">
  <li value="3">first</li>
  <li>second</li>
  <li>third</li>
  <li>fourth</li>
</ol>

<ol type="A">
  <li>first</li>
  <li>second</li>
  <li value="100">third</li>
  <li>fourth</li>
</ol>
```
<br>

**reversed**
- 목록 순서가 역전되어 표기된다.
```html
<!-- reversed -->
<ol reversed>
  <li>first</li>
  <li>second</li>
  <li>third</li>
  <li>fourth</li>
</ol>
```

> `ol`의 속성과 관련된 부분들을 아예 처음 알았다. 지금까지는 스타일 지정 외에도 줄머리 번호를 변경하고 싶을 때도 매번 `css`로 지우고 `li` 내부 텍스트나, `li`의 `:before` 등을 이용해 처리했는데 이렇게 간단하고 접근성에도 좋은 방법이 있었다니 😥...

> [ol, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ol)

<br>

##### ul
**[ 순서가 없는 목록 ]**
- **U**nordered **L**ist, 비정렬 목록
- 메뉴 등 순서가 정해지지 않은, 아이템을 나열할 때 사용하는 태그!
- 요소 중첩(Nesting)이 가능함(ul과 ol을 섞어서 표현할 수도 있다.)
- 불렛 포인트가 들어가며 깊이에 따라 브라우저가 차등 지급한다.

```html
<ul>
  <li>Top</li>
  <li>Left</li>
  <li>Right</li>
  <li>Bottom</li>
</ul>

<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese
                <ul>
                    <li>Blue cheese</li>
                    <li>Feta</li>
                </ul>
            </li>
            <li>Feta</li>
        </ul>
    </li>
</ul>

<ol>
  <li>first item</li>
  <li>second item
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <li>third item</li>
</ol>
```

> [ul, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/ul)

<br>

##### li
- **L**ist **I**tem
- ul과 ol 에서 사용하는 아이템 태그

<br>

#### 정의 목록
##### dl, dt, dd
**[ 정의형 목록, 정의 목록 ]**
- **D**efinition **L**ist or **D**escription **L**ist
- 용어를 정의하거나 설명하는 목록
- 자식으로 dt(- term)와 dd(- description)를 갖는다.
- 용어(key)와 설명(value)를 쌍으로 갖는다.
- 사전 구현이나 메타데이터를 표시할 때 주로 사용한다.
- 스타일링이나 레이아웃을 위해 `dt`와 `dd`를 `div`로 감쌀 수 있다. (단, 형제 요소로 사용할 수는 없다.)
- `dt`와 `dd`의 형제는 언제나 `dt`와 `dd`만 가능(웹 표준에 의거)하다.

> `dl`의 자식으로는 `dt`와 `dd`만 가능하다고 알고 있었어서 매번 스타일링을 할 때 어려움을 겪었는데 `div`로 묶을 수 있다는 걸 진작 알았으면 좋았을 것 같다😥...! 이번에라도 알아서 다행이다. 잘 기억해두자!

```html
<!-- 1:1매칭 -->
<dl>
  <dt>ol</dt>
  <dd>순서가 있는 목록</dd>
  <dt>ul</dt>
  <dd>순서가 없는 목록</dd>
  <dt>dl</dt>
  <dd>정의형 목록</dd>
</dl>

<!-- 여러 용어와 하나의 정의 -->
<dl>
  <dt>계란</dt>
  <dt>달걀</dt>
  <dd>닭이 낳은 알. 이것이 부화하면 병아리가 된다.</dd>
</dl>

<!-- 하나의 용어와 여러 정의 -->
<dl>
  <dt>눈</dt>
  <dd>사람이나 동물의 몸에서, 빛의 자극을 받아 물체를 볼 수 있는 기관.</dd>
  <dd>주로, 겨울에 대기 중의 수증기가 찬 기운을 만나 얼어서 하늘에서 땅 위로 떨어지는 흰빛의 얼음의 결정.</dd>
</dl>

<!-- 하나의 용어와 여러 정의 -->
<dl>
  <div>
    <dt>ol</dt>
    <dd>순서가 있는 목록</dd>
  </div>
  <div>
    <dt>ul</dt>
    <dd>순서가 없는 목록</dd>
  </div>
  <div>
    <dt>dl</dt>
    <dd>정의형 목록</dd>
    <!-- 아래 div는 웹표준에 맞지 않음! -->
    <div>추가 정보</div>
  </div>
</dl>
```

<br>

#### 표
##### table, tr, th, td
- 이전에는 표를 이용해서 레이아웃을 잡기도 했다(...)
- **절대 레이아웃을 잡기 위해 표를 사용하지 말 것!**
- `table > tr(table row : 행) > th, td`
<br>

**[ th ]**
- table head라는 뜻으로 행이나 열을 대표하는 태그.
- 기본적으로 굵은 글씨로 표현된다.
- `scope` 속성 : col(열 대표), row(행 대표) / `th`에만 사용한다.
- scope 속성은 보이는 부분이 변경되는 건 아니고 스크린 리더 등의 단말에서 접근성을 높일 수 있다.

<br>

**[th, td]**
- `colspan` : 열 묶음 (ex: `<td colspan="2">`)
- `rowspan` : 행 묶음 (ex: `<td rowspan="2">`)

```html
<table>
  <tr>
    <th scope="col">나라</th>
    <th scope="col">수도</th>
    <th scope="col">인구</th>
  </tr>
  <tr>
    <th scope="row">한국</th>
    <td>서울</td>
    <td>5100만</td>
  </tr>
  <tr>
    <th scope="row">미국</th>
    <td>워싱턴 D.C.</td>
    <td>3억</td>
  </tr>
  <tr>
    <th scope="row">태국</th>
    <td>방콕</td>
    <td>6900만</td>
  </tr>
  <tr>
    <td colspan="2">합계</td>
    <td>4억 2000만</td>
  </tr>
</table>
```


<br>

##### thead, tbody, tfoot
- 테이블의 구획을 나누는 부분
- 테이블의 헤더 영역, 본문 영역, 푸터 영역을 나눈다.
- `thead`의 형제는 무조건 `tbody`혹은 `tfoot`이어야 한다.
- `tbody`는 **여러 개**가 나올 수 있다.

> tbody가 한 테이블에 여러 개 나올 수 있다는 건 처음 알았다. 앞으로는 유용하게 쓸 수 있을 것 같다😂...

```html
<table>
  <thead>
    <tr>
      <th scope="col">품목</th>
      <th scope="col">지출</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" colspan="2">식재료</th>
    </tr>
    <tr>
      <th scope="row">대파</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">달걀</th>
      <td>4,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" colspan="2">생활용품</th>
    </tr>
    <tr>
      <th scope="row">칫솔</th>
      <td>1,000</td>
    </tr>
    <tr>
      <th scope="row">쓰레기통</th>
      <td>3,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">합계</th>
      <td>11,000</td>
    </tr>
  </tfoot>
</table>
```

<br>

##### caption
- 표를 설명하기 위한 태그
- 별도 스타일링을 하지 않으면 중앙에 가운데 정렬로 들어감!
- `table`의 첫번째 자식이어야 함

```html
<table>
  <caption>일일 가계부</caption>
  <thead>
    <tr>
      <th scope="col">품목</th>
      <th scope="col">지출</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" colspan="2">식재료</th>
    </tr>
    <tr>
      <th scope="row">대파</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">달걀</th>
      <td>4,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" colspan="2">생활용품</th>
    </tr>
    <tr>
      <th scope="row">칫솔</th>
      <td>1,000</td>
    </tr>
    <tr>
      <th scope="row">쓰레기통</th>
      <td>3,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">합계</th>
      <td>11,000</td>
    </tr>
  </tfoot>
</table>
```

> [caption, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/caption)

<br>
<br>
<br>
<br>

### 임베디드 요소
#### img
- 빈 요소
- 속성을 통해 어떤 이미지를 사용할지 지정할 수 있음

> [img, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img)

##### src
- `img` 태그의 필수 속성으로, 이미지의 경로를 지정한다.
- 절대 경로/상대 경로 모두 가능.

```html
<!-- 절대 경로 -->
<img src="https://via.placeholder.com/350x150">

<!-- 상대 경로 -->
<img src="images/sample-dogs.jpeg">
```

<br>

##### alt, width, height
**[ alt ]**
- 대체 텍스트(alternative text)
- 이미지에 대한 설명을 넣으며, 접근성을 위해 넣는다.
- 스크린 리더, 네트워크 오류, 콘텐츠 차단 등에서 어떤 이미지인지, 혹은 어떤 이미지가 있었는지를 표현해준다.

> title을 이용하면 마우스를 올렸을 때 뜨는 툴팁을 작성할 수 있다.

```html
<!-- 상대 경로 -->
<img src="images/sample-dogs.jpeg" alt="강아지 두 마리" title="강아지 두 마리">
```

**[width, height]**
- 이미지의 픽셀기준 고유 너비 및 높이를 지정한다.
- width 혹은 height 하나만 지정하면 비율대로 같이 줄어든다.

> css로 지정해도 되나, width, height 속성을 사용할 경우 별도 css없이 이미지의 크기 처리가 가능하다.

```html
<!-- width -->
<img src="images/sample-dogs.jpeg" width="100" alt="강아지 두 마리" title="강아지 두 마리">

<!-- width, height -->
<img src="images/sample-dogs.jpeg" width="100" height="200" alt="강아지 두 마리" title="강아지 두 마리">
```

<br>

#### 이미지 유형
- svg를 제외하곤 전부 래스터 타입 이미지다.

|유형|MIME 타입|확장자|내용|
|--|--|--|-----|
|JPEG|image/jpeg|`.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp`|정지 이미지 손실 압축에 적합 (가장 많이 사용됨!)|
|PNG|image/png|`.png`|배경 투명 파일, 로고 등 투명도가 필요한 경우, 혹은 원본 이미지를 jpg보다 더 정확하게 보여주고자 할 때 사용|
|GIF|image/gif|`.gif`|애니메이션, 혹은 간단한 단색 아이콘 표현 등에 적합|
|WEBP|image/webp|`.webp`|구글에서 만든 이미지 포맷. 품질, 압축률 등이 우수하나 지원 브라우저가 [제한적](https://caniuse.com/?search=webp)이다.|
|SVG|image/svg+xml|`.svg`|다양한 크기로 정확하게 나타나야 하는 아이콘, 다이어그램 등에 사용된다. (벡터 타입!)|

<br>

#### 반응형 이미지
##### srcset
> [img[srcset], MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img#attr-srcset)

- !! IE에서는 지원되지 않는 속성으로, `src` 속성을 함께 작성해 IE에서도 이슈가 없도록 한다!
- 캐싱되는 환경에서는 css 미디어쿼리처럼 바로바로 변경되지는 않는다.
- 가장 큰 해상도의 이미지를 불러온 후에는 작은 해상도의 이미지로 변경하지 않는다. (브라우저가 불필요하다 판단/작은 해상도에서 큰 해상도로 늘려보고 반대로도 해보면 바로 알 수 있다!)

<br>

1. 이미지의 URL
2. (선택) 공백과 함께 아래 서술자를 기입한다. (기입하지 않는 경우 기본값인 1x로 간주)
    - 너비 서술자(NNNw)
    - 픽셀 밀도 서술자(N.Nx)

```html
<img src="images/sample-large.png"
     srcset="images/sample-small.png 300w,
             images/sample-medium.png 450w
             images/sample-large.png 600w"
     alt="responsive images">
```

> css의 미디어쿼리를 통해서만 이미지를 작업해서, 뷰포트에 따라 다른 크기의 이미지를 보여줘야 할 땐 이미지 태그를 두 개 넣어두고 미디어쿼리를 통해 `display:none;` <-> `display:block(or inline-block);` 처리를 해줬는데 `srcset` 속성을 사용하면 이미지 태그를 굳이 여러개 사용하지 않고도 처리할 수 있어 좋을 것 같다! 안 그래도 포털사이트에서 사용하는 걸 보고 배워서 써야지.. 하고 있던 속성이라 앞으로 잘 사용할 수 있을 것 같다!

<br>

##### sizes
> [img[sizes], MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img#attr-sizes)

1. 미디어 조건(마지막 항목 생략)
    - 이미지에 대한 게 아니라 뷰포트 속성을 말함(css 미디어쿼리와 유사)!
2. 소스크기 값

```html
<img src="images/sample-large.png"
     srcset="images/sample-small.png 300w,
             images/sample-medium.png 450w
             images/sample-large.png 600w"
     sizes="(min-width:600px) 600px,
            (min-width:450px) 450px,
            300px"
     alt="responsive images">
```
<br>

> css 미디어쿼리와 유사하게 작동한다. css를 통해 작업했을 때 더 할 수 있는 부분이 많아서 srcset까지는 최적화를 위해 사용되나, sizes보다는 css 미디어쿼리를 통한 작업을 더 많이한다.

> css media query 와 img 속성의 차이
> - `img[sizes]`는 `html`단에서 뷰포트별 이미지 크기를 지정해준다.
> - `img` 태그의 속성(width, height, srcset, sizes 등)이 명시되어 있으면 페이지 로딩 시 이미지의 크기를 고려해 미리 적절한 공간을 남겨두지만 그렇지 않은 경우 로딩이 완료된 후 이미지 크기가 적용되는 이슈가 있을 수 있다.
> - `img` 태그의 속성으로 이미지를 선택할 경우, 큰 해상도의 이미지를 다운로드 받으면 작은 해상도의 이미지는 추가로 다운받지 않으며, 큰 해상도에서 작은 해상도로 줄일 때는 다른 해상도의 이미지가 적용되지 않는다.
> - 기본적으로 브라우저가 페이지를 읽는 것을 최적화하기 위해 `srcset`이나 `sizes`, `width`, `height` 등의 속성을 사용해 명시하는 것이 좋지만, 뷰포트에 따라 이미지가 반드시 달라져야 하는 경우 css의 media query를 함께 사용한다.

<br>

#### video
- 이미지와 달리 빈 요소가 아니며, `<video>` 태그 안의 내용은 비디오 태그를 정상적으로 노출할 수 없는 상황에서 보여진다!
- `src` 속성이 필수사항이 아니며, `src`를 사용하지 않는 경우 자식 요소로 `<source>` 태그를 사용해 비디오 경로를 넣어준다.
<br>

```html
<video src="video/sample-mp4-file.mp4">
Sorry, your browser doesn't support embedded videos.
</video>

<!-- source 태그 이용 -->
<video>
  <source src="video/sample-mp4-file.mp4">
  Sorry, your browser doesn't support embedded videos.
</video>
```
<br>

**[ 비디오 태그 속성 ]**
|속성|값|내용|
|--|--|--|
|`controls`|boolean (기본값:false)|비디오의 컨트롤 패널 노출 여부|
|`autoplay`|boolean (기본값:false)|비디오 자동 재생. 영상이 소리를 가지고 있는 경우 `autoplay`를 브라우저에서 막기 때문에, `muted` 속성과 함께 사용한다.|
|`muted`|boolean (기본값:false)|비디오 음소거. 영상이 소리를 가지고 있는 경우 `autoplay`를 브라우저에서 막기 때문에, 이 속성과 함께 사용한다.|
|`loop`|boolean (기본값:false)|반복 재생 여부|
|`poster`|이미지 경로|동영상 썸네일. 없는 경우 첫번째 프레임을 poster로 사용한다.|

> `poster` 속성이 없는 경우 모바일 일부 브라우저에서는 재생 버튼만 노출되는 현상이 있어 가능한 꼭 넣어주도록 한다.
> 또한 video에 `playsinline` 속성을 넣어줄 경우 IOS 환경에서 비디오가 전체화면으로 뜨는 현상을 막을 수 있다.

> [video, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/video)
<br>

#### audio
- 비디오와 비슷한 속성을 갖고 있음!
- 여러 소스를 같이 사용할 수 있으며, 위에서 아래로 내려가며 사용 가능한 형식의 오디오를 재생한다.
- `autoplay` 속성이 제대로 동작하지 않는다: 사용자 환경에 좋지 않기 때문.

```html
<!-- figure 태그로 감싸고 figcaption 태그를 이용해 컨텐츠 설명과 함께 한 덩어리로 작성 가능하다. -->
<figure>
  <figcaption>audio sample:</figcaption>
  <!-- source 태그 이용 -->
  <audio>
    <source src="audio/foo.opus" type="audio/ogg; codecs=opus">
    <source src="audio/foo.ogg" type="audio/ogg; codecs=vorbis">
    <source src="audio/foo.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</figure>
```

> [audio, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio)
<br>

#### canvas
> [canvas, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/canvas)
> 이런 마크업 정보가 있다 정도로 알아두면 좋다. javascript로 그리는 내용!

#### iframe
- 인라인 프레임 요소
- 외부 소스를 불러와서 프레임 안에 띄워주는 형태.
- `width`, `height`, `title`, **`src`** 등의 속성이 있다.
- *지도나 웹페이지, pdf 등의 자료*를 띄우는 데 주로 쓰이나, 외부 사이트의 지도 등은 api를 사용하기 때문에 보안상의 이유로 보이지 않는 경우도 더러 있다.

> [iframe, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/iframe)

<br>
<br>
<br>
<br>

### form
> [form, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/form)
> 디테일한 유효성 체크는 자바스크립트로! required 속성을 사용하면 최소한의 체크는 가능하다!

- [form 연습](210903_form.html)
<br>

#### `<form>`
- 사용자에게 값을 전달받아 페이지나 서버로 전송할 수 있게끔 하는 요소로, 인터렉션(대화형) 요소이다.
- `action` : 양식 데이터를 처리할 페이지, 서버의 주소(URI)
- `method` : 데이터 처리 방식
    - `get`  : 보내려는 페이지의 주소 뒤에 붙음! 비밀번호 등 보안이 필요한 정보는 `get`으로 처리하면 보안상 좋지 않고, **검색** 등에 사용한다.
    - `post` : 보안이 필요한 경우 주로 사용. post가 정보를 받는 건 **서버**로, 회원가입, 설문 등 보안이 필요한 경우 사용한다.
<br>

#### input과 label
- `label`의 `for` 속성과 `input`의 `id` 값이 세트!
- `input`의 `name`은 서버에 전송할 때 폼데이터를 구분하기 위한 값이고 `id`는 전체 문서 내에서의 구분 값. 아예 다른 속성이기 때문에 동일할 필요는 없다!
- 인라인 요소!
- label 안에는 텍스트로 정확하게 요소를 설명해줘야 인식 가능.

```html
<!-- 별개로 사용 -->
<label for="foodname">음식 이름 :</label>
<input type="text" name="foodname" id="foodname">

<!-- label의 자식으로 사용 -->
<!-- label[for], input[id] 생략 가능! -->
<label>색깔 :
  <input type="text" name="color">
</label>
```

<br>

#### fieldset, legend
> [fieldset, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset)

- `fieldset` : form 요소를 그룹핑함 (블록 요소).
- `legend` : form 그룹의 범례. `fieldset`의 첫번째 자식요소!


<br>

#### input[type]
> [input, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input)

- [form 연습](210903_input.html)
- 타입에 따라 형태도 달라지고, 타입에 따라 사용 가능한 속성도 달라진다.
- `text` : 한 줄만 작성되며, 엔터를 치면 데이터가 전송된다.
  - `minlength` : 최소 입력 글자수
  - `maxlength` : 최대 입력 글자수
- `password` : 마스킹 처리 됨 / get메소드를 사용하면 주소 영역에 비밀번호가 노출됨.
  - `minlength`, `maxlength` 사용 가능
- `email` : @가 없는 경우 형식 안내 툴팁이 뜸. / 모바일에서 자동으로 영문입력창이 기본으로 노출됨
  - 기본적으로 한글이 입력되며, 이후 스크립트로 처리해주지 않으면 유효성 체크가 되진 않음
- `tel` : 모바일에서 자동으로 입력창이 숫자로 노출됨
  - 기본적으로 숫자 외 문자도 입력되며, 이후 스크립트로 처리해주지 않으면 유효성 체크가 되진 않음
- `number` : 숫자를 입력할 수 있음
  - 간혹 영문이 입력되기도 하지만 툴팁으로 숫자만 이용 가능 안내가 뜨니 걱정하지 않아도 됨!
- `range` : 기본값은 0-100으로, 숫자로 반환되어 제출된다.
- `date`, `month`, `week`, `time`
  - `date`, `month`, `week` : 대쉬 형태로 전송됨 (ex: 2021-09-03)
  - `time` : `:`문자가 이스케이프 처리되어 들어감(16:30)
- `checkbox` : 체크된 값만 'on'으로 전송된다.
  - `checked` : 기본 값을 체크상태로 만든다.
- `radio` : 체크된 값의 `value`만 전송된다. (ex: `radio=r2`)
  - 동일 `name` 중 하나만 체크 가능.
  - `checked` : 기본 값을 체크상태로 만든다.

> [canIuse](https://caniuse.com/)에서 호환 범위를 확인 후 사용하자!

<br>

> `input[type="hidden"]` 이라고 전역속성 hidden과 유사하게 동작하는 타입도 있다.
> 페이지 내에서 보이지 않으며, 숨겨진 입력필드로 작동한다.
> 사용자가 변경해서는 안되지만 폼 제출 시 함께 제출되어야 하는 값에 유용하게 사용된다!


<br>

#### input의 다른 속성들
- `placeholder` : 넣어야 할 값에 대한 힌트.
- `autocomplete` : 자동완성 기능 on/off
- `required` : 필수 입력 값.
- `disabled` : 필드 비활성화
  - dimmed 처리되며, 아예 전송되지 않는 값.
- `readonly` : 보기 전용 값
  - 입력은 안 되지만 전송은 된다.
  - 기본 값을 그대로 사용하고자 할 때 `value`와 함께 사용한다.

<br>

##### 숫자 관련 속성
- [숫자 관련 연습](210903_input-2.html)
- `min`,`max` : 최솟값과 최댓값. 텍스트로 범위 밖의 값을 입력 시 툴팁으로 범위를 알려주며, 제출되지 않는다.
- `step` : 기본적으로 1씩 범위가 조정되나, step을 입력 시 조정되는 숫자가 달라진다. (ex: step="2"> 2-4-6-...)

<br>

#### iuput 버튼
- `input[type="submit"]`과 `button[type="submit"]`이 유사하다.
- `input[type="submit"]`의 기본 텍스트 값은 '제출'이며, 텍스트를 변경하고자 할 땐 `value` 속성을 통해 변경할 수 있다.
- `input[type="button"]`은 기본 텍스트 값이 없다.
- `input[type="reset"]`은 기본 텍스트 값이 '초기화'이며, 텍스트를 변경하고자 할 땐 `value` 속성을 통해 변경할 수 있다.
  - 폼 내용을 초기화한다.

<br>

#### button
- `input`에서와 같이 타입은 `button`, `submit`, `reset`이 있다.
- `input`과 달리 자식 요소를 가질 수 있다. (빈 요소가 아니다)
  - 단순 문자열이 아니라 이미지나 다른 태그를 가질 수 있다.
  - 이미지 버튼을 사용할 경우 텍스트를 함께 사용해 접근성을 높인다.

<br>

#### select, option, optgroup
- [select 연습](210903_input-3.html)
- `option` 태그 내에 `value` 속성이 없는 경우 옵션의 값을 그대로 제출하며, `value` 속성을 추가한 경우 `value` 값이 전송된다.
  - **빈 value값을 사용할 경우 선택되지 않는 항목이 된다!**
  - `selected` : 기본 선택값을 지정할 수 있다.
- `optgroup` : `option`값을 그룹핑할 때 사용하며, label 속성으로 그룹명을 지정할 수도 있다.

> 빈 value값을 사용하면 선택되지 않는 항목이 된다는 걸 몰라서 자바스크립트로 해결하려고 애먹었던 기억이 난다...😥... 생각보다 단순한 거였구나...😂😂.. 잘 기억해둬야겠다.

<br>

#### input - list속성과 datalist
- [datalist 연습](210903_input-4.html)
- datalist : 가능한 선택지 **추천** 기능!
  - 추천 값을 입력할 수도 있고, 추천 값에 내용을 더 추가하거나, 추천 값을 사용하지 않아도 된다.

> 처음 사용하는 기능인데, 생각해보니 다른 페이지에서 본 적은 있는 기능이었다. 스크립트를 통해 개발된 기능인 줄 알았는데 html 태그로 있는 기능이었구나..😥 배웠으니 유용하게 사용할 수 있을 것 같다!

<br>

#### textarea
- [textarea 연습](210903_input-4.html)
- `input`과 달리 빈 요소가 아니며, `pre`태그처럼 내부에 글을 쓰면 그대로 반영된다.
- `disabled`, `placeholder`, `readonly` 등의 속성은 동일하게 사용 가능!
- `rows`, `cols`를 통해 보여지는 행/열의 크기를 조정할 수 있다.


<br>
<br>
<br>
<br>

### 전역 속성
> [전역 속성, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes)

<br>

#### class, id
- 식별자.
  - id : 고유 식별자.
    - 문서 내에 유일하게 하나만 가질 수 있는 식별자.
    - 공백 사용 불가.
    - 숫자나 특수문자(-, _, .)가 아닌 영소문자로 시작한다.
  - class
    - 문서 내에 여러개 사용 가능한 식별자(중복 가능).
    - 한 요소가 여러 클래스를 가질 수 있으며, 공백을 통해 구분한다.

<br>

> [class, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/class)
> [id, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/id)

<br>

#### style
- 인라인 스타일.
  - **외부 파일에서 사용하는 것을 권장**함.
  - 테스트 등 빠른 스타일링을 위한 목적 혹은, 자바스크립트를 통한 일시적 스타일로 사용.

<br>

> [style, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/style)

<br>

#### title
- 툴팁으로 설명하는 문구를 안내해줌.
  - pre 태그처럼 띄어쓰기나 줄바꿈을 모두 인식함.
  - 상속되는 속성.
    - 부모 요소로부터 중첩될 경우 가장 하위 요소의 타이틀이 우선적으로 뜸.
<br>

```html
<div title="부모 요소">
  <div title="첫 번째 요소">
  안녕하세요.
  </div>
  <div>반갑습니다.</div>
</div>
```

<br>

> [title, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/title)

<br>

#### lang
- 웹 접근성을 높이기 위한 수단.
- 상속이 되는 속성.
- `html` 태그에 사용될 경우:
  - 전체 문서가 어느 문서로 작성되었는지 안내
- 일부 태그에 사용할 경우, 해당 태그에 한해 언어 설정을 해줄 수 있음.
  - ```html
  <html lang="ko">
  ...
  <div lang="en">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  ...
  </html>
  ```

<br>

> [lang, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/lang)

<br>

#### data
- `data-*` : 지정된 속성이 아니라 사용자가 지정하는 속성.
- 스크립트를 적용할 때 사용함.
  - 사용자 눈에는 보이지 않지만 암시적으로 요소가 가지고 있어야 하는 정보를 넣는 곳.

<br>

```html
<article
  id="test"
  data-columns="3"
  data-index-number="12313"
  data-parent="markup">
  ...
</article>
```

<br>

> [data, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/data)

<br>

#### draggable
- 드래그가 가능한지 여부를 명시해줌.
- 태그별로 기본값이 다르기 때문에 값을 꼭 명시해줘야 함.
  - true, false
- 자바스크립트 이벤트로 활용할 수 있다.
<br>

```html
<img src="images/small.png" draggable="false">
```

<br>

> [draggable, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/draggable)

<br>

#### hidden
- 블라인드 속성
  - 보안상 정보를 가리고자 할 땐 hidden을 사용하지 않는다.
- css로 재정의해서 보이게 할 수도 있다.

<br>

> 🤔.. input 등에서 사용자 눈에는 보이지 않지만 폼 제출 시 함께 제출되어야 하는 값에 유용하게 사용된다.. 고 한다! 아직은 input에서의 사용을 제외한 hidden 속성의 용법을 잘 모르겠다🤔.......

<br>

```html
<img src="images/medium.png">
<img src="images/small.png" hidden>
```
<br>

> [hidden, MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/hidden)

<br>
<br>
<br>
<br>

## CSS
### 개요
#### CSS 소개
- **C**ascading **S**tyle **S**heets
- css3 내에서도 모듈이 각각의 버전을 갖고 있다.
  - 브라우저마다 모듈의 지원 범위가 다를 수 있다.
  - [MDN](https://developer.mozilla.org/ko/docs/Web/CSS), [canIuse](https://caniuse.com/) 등의 사이트에서 확인 후 적용
- cascading : 위에서 아래로 흐른다
  - 하나의 요소에 여러개의 스타일을 적용할 수 있다.
  - 위에서 정의한 스타일이 계속 적용되며, 법칙에 따라 스타일이 적용된다.
- 룰 기반(Rule-based) 언어
- 특정 요소나 특정 요소들의 집합에 대한 스타일 규칙을 선언할 수 있다.
  - 주석 `/* 주석 내용 */`
  - ```css
  /* 선택자(selector) */
  h1{
    /* 선언블럭- 속성:값; */
    color:red;
    font-size:12px;
  }
  ```
- css는 인라인 스타일, 내부 스타일, 외부 스타일이 있지만 외부 스타일을 가장 권장하며, 인라인 스타일은 사용을 지양한다.
  - 외부 스타일
    - ```html
    ...
    <head>
    ...
    <link rel="stylesheet" href="style/main.css">
    <!-- rel : 현재 문서와 불러오는 파일(문서)의 관계
    href : 경로 -->
    </head>
    ...
    ```

> [실습 파일](210906_index.html)

<br>

#### Cascading
1. 스타일 우선 순위
    - 선언된 위치에 따라 우선 순위가 정해진다.
      - 브라우저에 의해 정의된 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일
    - 소스 코드의 순서가 뒤에 있으면 덮어 쓴다.
    - 특정도가 높을수록(적용범위가 적을수록) 우선시된다.
      - `tag` 스타일 < `class` 스타일 < `id` 스타일 < 인라인 스타일
2. 스타일 상속
    - 부모 요소에 있는 스타일 속성이 자식 요소로 전달된다.
      - 자식요소에서 재정의할 경우 부모 스타일을 덮어쓴다.
    - 상속되지 않는 속성도 있다.
      - `background-color`, `background-image` 등...

<br>
<br>

### CSS 선택자
> [CSS 선택자, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors)

<br>

- `*` : 전체 선택자, 모든 요소를 선택함.
- `tag` : 유형 선택자, 동일한 유형(태그)을 모두 선택함
- `.class` : 클래스 선택자, 동일한 클래스를 가진 요소를 모두 선택함
- `#id` : 아이디 선택자, 해당 아이디를 가진 요소를 선택함
  - 아이디는 한 문서 내 한번만 사용하며, 다른 문서에서 동일한 아이디를 사용하는 건 가능하다.
- `[attr]` : 특성 선택자, `input[type="name"]`, `input[type]`, `[type]`, 등등. 특성과 관련된 내용을 지정해 선택할 수 있으며, `[type]`의 경우 `[type]`의 값과는 상관 없이 같은 속성을 가진 요소를 모두 선택함.

<br>

#### 주요 선택자
- 우선 순위 : type selector < class selector < id selector
- 아래와 같이 작성한다.
  - `type{css속성}`
  - `.class{css속성}`
  - `#id{css속성}`
<br>

> [주요 선택자, css연습-01](210906_css-01_Selector.html)
<br>
<br>

#### 속성 선택자
- `[attr]`, `[attr=value]`, `[attr^=value]`, `[attr$=value]`, `[attr*=value]` 형태로 작성 가능하다.
  - `[attr]{css속성}` : 해당 속성을 가진 모든 요소에 적용(속성의 값은 상관X)
  - `[attr=value]{css속성}` : 해당 속성과 값을 가진 모든 요소에 적용(속성의 값 상관O)
  - `[attr^=value]{css속성}` : 해당 속성의 값이 value에 입력한 값으로 시작하는 요소에 적용
  - `[attr$=value]{css속성}` : 해당 속성의 값이 value에 입력한 값으로 끝나는 요소에 적용
  - `[attr*=value]{css속성}` : 해당 속성의 값이 value에 입력한 값이 포함된 요소에 적용
<br>

> [속성 선택자, css연습-02](210906_css-02_Attr.html)
<br>
<br>

#### 가상 클래스 선택자
- `:가상 클래스` 형태로 작성한다
- `first-child`, `last-child`, `nth-child(n)`
  - 타입과 관계없이 각각 요소의 첫번째 자식, 마지막 자식, n번째 자식을 선택한다.
- `first-of-type`, `last-of-type`, `nth-of-type(n)`
  - `-child`와 유사하나 선택한 타입 중에서 선택한다. (타입 관계O)
- `not(선택자)`
  - 선택자 영역에는 타입, 속성, 가상클래스 등 거의 모든 종류의 선택자가 들어갈 수 있다.
  - 해당 선택자 요소를 제외하고 적용한다.
- `link`, `visited`
  - `link` : 아직 방문하지 않은 링크 요소
  - `visited` : 방문한 링크 요소
- `hover`, `active`, `focus`
  - `hover` : 마우스를 올렸을 때
  - `active` : 클릭한 순간
  - `focus` : 탭키를 통한 접근 혹은 클릭 후 등 포커스가 맞춰져 있는 상태
    - 접근성을 위해 hover에서 준 스타일을 동일하게 적용해주는 경우가 많다.
- `enabled`, `disabled`, `checked`
  - `enabled` : (주로 input의) 활성 요소
  - `disabled` : (주로 input의) 비활성 요소
  - `checked` : (input type - checkbox, radio) 체크된 상태
<br>

> [가상 클래스 선택자 01, css연습-03-1](210906_css-03-1_nth-child.html)
> [가상 클래스 선택자 02, css연습-03-2](210906_css-03-2_nth-of-type.html)
> [가상 클래스 선택자 03, css연습-03-3](210906_css-03-3_not+a.html)
> [가상 클래스 선택자 04, css연습-03-4](210906_css-03-4_hover.html)
> [가상 클래스 선택자 05, css연습-03-5](210906_css-03-5_abled.html)
<br>
<br>

#### 가상 요소 선택자
- `::가상 요소` 형태로 작성한다
  - 구형 브라우저 이슈로 인해 `:가상 요소` 형태로 작성하는 경우도 많다.
- 실제로 html 문서 내에 존재하지 않는 가상의 요소로, 주로 장식용으로 사용된다.
- `before`, `after`
  - `before` : 태그의 첫 번째 자식으로 생성
  - `after` : 태그의 마지막 자식으로 생성
  - `content` : `before`, `after`의 필수 공통 속성으로 추가할 컨텐츠(텍스트)를 작성한다.
- `first-letter`, `first-line`
  - 각각 첫 번째 글자, 첫 번째 줄을 선택하며, `first-line`의 줄은 뷰포트 기준으로 자동 적용된다.
- `selection` : 드래그 등을 통해 선택한 영역
<br>

> [가상 요소 선택자, css연습-04](210906_css-04_before+selection.html)
<br>
<br>

#### 선택자 결합
- `선택자 선택자` : 공백을 통해 자손 선택자를 선택할 수 있다.
- `선택자>선택자` : `>`를 통해 자식 선택자를 선택할 수 있다.
- `선택자~선택자` : `~`을 통해 형제 선택자를 선택할 수 있다.
- `선택자+선택자` : `+`를 통해 맞닿아있는 바로 다음 형제 선택자를 선택할 수 있다.
- `선택자,선택자` : `,`를 통해 다른 요소를 함께 선택할 수 있다.
<br>

> [선택자 결합(하위, 자식, 형제, 그룹화), css연습-05](210906_css-05_combinators.html)
<br>
<br>

#### 범용 선택자
- `*` : 범용 선택자로, 선택자 결합을 함께 사용할 수 있다.
<br>

> [범용 선택자, css연습-06](210906_css-06_universal.html)
<br>
<br>

#### 상속 제어
- 상속 내용을 상속 받지 않을 수(초기화 할 수) 있다.
  - `all` 속성 : 태그의 모든 속성에 대한 내용으로, 아래 값들을 함께 사용할 경우 전부 초기화해 태그의 기본 상태로 돌린다.
  - `initial` : 브라우저가 지정한 속성의 초기 기본값을 적용한다.
  - `inherit` : 부모의 값을 상속한다(명시함)
  - `unset`
    - 부모로부터 상속받을 값이 없을 경우 `initial` 처럼 작동한다
    - 부모로부터 상속받을 값이 있을 경우 `inherit` 처럼 작동한다
<br>

> [상속 제어, css연습-07](210906_css-07_initial.html)
<br>
<br>

#### CSS 우선 순위
1. 선언된 곳
2. 명시도 (적용 범위가 적을 수록 높은 것!)
3. 코드 위치

> !important >>
> inline style >
> id >
> class/attribute/Pseudo class >
> type(tag) > 
> * >
> inherited

> [우선 순위, css연습-08](210906_css-08_important.html)

<br>
<br>

### 폰트 관련 속성
> [폰트/텍스트 관련 속성, css연습-09](210907_css-09_font.html)
<br>

- `font-size`는 키워드로도 적용이 가능하다.
  - > [font-size, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
- `line-height` : 줄간격, 기본적으로 폰트에 지정되어 있다.
  - 숫자, 픽셀 등으로 적용 가능하다
  - > [line-height, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/line-height)
- `font` : 축약형으로 폰트 관련 속성을 적용할 수 있다.
  - 숫자, 픽셀 등으로 적용 가능하다.
  - `font-family`, `font-size`는 기본 속성, 나머지는 선택적으로 작성한다.
  - 폰트 상세 속성을 추가하고 싶은 경우 아래에서 선언하지 않으면 초기화 한다.
  - > [font, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font)
- `letter-spacing`, `word-spacing`
  - 글자 간 / 단어 간 여백 조정
    - 기본 간격은 폰트에 기본적으로 지정되어 있다.
  - `word-spacing`은 % 값을 사용 가능하다.
- `text-align` : 글자 정렬
  - 블록 요소에만 적용 가능.
- `text-indent` : 들여쓰기
  - 상속 요소.
  - 블록 요소에만 적용 가능
- `text-decoreation` : shorthand
  - 대부분 단축 형태로 사용
  - 멀티플 적용 가능.
  - `line` : 선 종류
    - `underline` : 밑줄
    - `overline` : 윗줄
    - `line-through` : 삭제선
  - `style` : 선 유형
    - `solid` : 기본 값. 실선
    - `double` : 두줄 실선.
    - `dotted` : 점선
    - `dashed` : 긴 점선
    - `wavy` : 물결 표시
  - `color` : 선 색상
  - `width` : 선 두께
- `word-break` : 줄바꿈
  - `normal` : 기본 값, 나라마다 기본값의 형태는 다르다(아래 참고)
  - `break-all` : 모든 단어를 글자별로 쪼갠다. (CJK의 기본 형태)
  - `keep-all` : 모든 단어를 유지한 채 줄을 바꾼다. (CJK 제외 기본 형태)
- `text-transform` : 사용 가능 언어가 정해져 있으며, 주로 영문, 일본어 일부, 수식용 언어 등에 쓰인다.
  - `uppercase` : 대문자
  - `lowercase` : 소문자
  - `capitalize` : 첫 글자 대문자
- `font-variant` : `text-transform` 처럼 사용 가능 언어가 정해져있다.
  - `normal` : 기본값
  - `small-caps` : 소문자를 소문자 크기의 대문자로 변경함

<br>
<br>

### 단위와 값

- 기본적으로 속성별로 적용되는 단위는 다르기 때문에 각 속성에 대해 MDN 등에 검색해보고 사용한다!
- > [CSS 단위와 값, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Values_and_Units)
- > [폰트/텍스트 관련 속성, css연습-10](210907_css-10_units.html)

#### 절대 길이
`px`, `cm`, `mm`, `in`, `pc`, `pt` 등등 여러 단위가 있으나, 사실상 웹 환경에서는 픽셀`px` 단위만 사용한다.
- 전통적으로 장치의 픽셀(점)을 의미한다.
- 절대 길이를 사용하면 사용자 에이전트(크롬의 설정 등)의 글자 크기 조정에 영향을 받지 않으므로, 접근성이 떨어질 수 있다.
- 그래서 특히 `font-size`를 설정할 땐 `em`, `rem` 등의 상대 길이를 사용하는 게 좋다.
<br>

#### 상대 길이
- `em` : 부모의 폰트 사이즈를 기준으로 폰트 사이즈가 조정됨.
  - `1em` === 부모의 폰트 사이즈
- `rem` : root의 폰트 사이즈를 기준으로 폰트 사이즈가 조정됨.
  - `1rem` === 루트의 폰트 사이즈
- `vw`, `vh` : 뷰포트 대비 백분율 길이
  - 디바이스마다 다른 뷰포트를 기준으로 퍼센테이지 값을 설정한다.
  - `vw` : 뷰포트 가로 너비 기준
  - `vh` : 뷰포트 세로 높이 기준
- `vmin`, `vmax` : `vw`, `vh`와 함께 이해해야 함!
  - `vmin` : 뷰포트 기준 작은 값 기준
  - `vmax` : 뷰포트 기준 큰 값 기준
  - 가로모드/세로모드에 대응해야 할 때 주로 쓰임!
- `%` : 부모요소 기준

<br>

#### 함수 표기법
- `calc()` : 서로 다른 단위의 값을 연산해서 적용
  - 연산자 사이 띄어쓰기 필수!
- `min()` : 두 개의 기준 중 더 작은 값을 선택해서 적용
- `max()` : 두 개의 기준 중 더 큰 값을 선택해서 적용

> IE에서는 `min()`, `max()`가 아예 적용되지 않으며, `calc()`도 적용 범위가 좁으니 확인 후 적용하도록 한다!

<br>
<br>

### 박스 모델
> [박스 모델 정리](boxmodel/box-model.html)
> [박스 모델, css연습-11](210907_css-11_boxmodel.html)
<br>

- 크기
  - 초기값 : `auto`
  - 상속 되지 않음
  - inline 요소는 display 속성을 바꿔주지 않는 이상 자신의 값만큼만 크기를 갖기 때문에 `width`, `height` 속성 사용 불가
  - `width` : 요소의 너비
  - `height` : 요소의 높이
  - `max-width`, `max-height` : 최대 너비/높이
  - `min-width`, `min-height` : 최소 너비/높이
    - IE7 이상부터 사용 가능한 요소!
- 여백
  - margin : 바깥쪽 여백
    - 음수 값 사용 가능!
    - 단일 값 입력 시 : 상하좌우 동일 margin 적용
    - `값 값` 입력 시 : 상하/좌우 margin 으로 적용
    - `값 값 값` 입력 시 : 상/좌우/하 margin 으로 적용
    - `값 값 값 값` 입력 시 : 상/우/하/좌(시계방향) margin 으로 적용
    - margin 값에 `%` 값을 사용할 시, 부모의 `width` 값을 사용
    - margin 상쇄(겹칩, 중복)
      - 두 값 중 더 큰 값으로 합쳐지는 현상.
      - 인접형제 : 위아래 여백이 만나 상쇄됨 (좌우 여백은 합쳐지지 않음)
      - 부모-자식 간
        - 부모 블록에 border, padding, inline content가 없어 부모와 자식의 margin-top이 만나는 경우
        - 부모 블록에 border, padding, inline content가 없고, 부모와 자식을 분리할 height값이 지정되지 않아 margin-bottom이 만나는 경우
      - 빈 블록 : border, padding, inline-content가 없고, height가 0이라면 해당 블록의 margin-top과 margin-bottom이 상쇄된다.
  - padding : 안쪽 여백
    - 음수 값 사용 불가
    - 단일 값 입력 시 : 상하좌우 동일 padding 적용
    - `값 값` 입력 시 : 상하/좌우 padding 으로 적용
    - `값 값 값` 입력 시 : 상/좌우/하 padding 으로 적용
    - `값 값 값 값` 입력 시 : 상/우/하/좌(시계방향) padding 으로 적용
    - padding 값에 `%` 값을 사용할 시, 부모의 `width` 값을 사용
- 테두리 : border
  - 단일 값 입력 시 : 상하좌우 동일 값 적용
  - `값 값` 입력 시 : 상하/좌우 값으로 적용
  - `값 값 값` 입력 시 : 상/좌우/하 값으로 적용
  - `값 값 값 값` 입력 시 : 상/우/하/좌(시계방향) 값으로 적용
  - border-style : 테두리 스타일
    - border-style이 `none`일 경우 border가 적용되지 않음!
    - solid : 실선
    - doubled : 두줄 실선
    - dotted : 점선
    - dashed : 긴 점선
    - [그 외 보더 스타일, MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-style) 참고.
  - border-width : 테두리 두께
    - 값 지정 혹은 키워드로 사용 가능하나, 키워드는 정해진 명세가 없기 때문에 가능한 값을 지정해 사용한다.
  - border-color : 테두리 색상
  - border-radius : 둥근 테두리
    - 다른 속성과 마찬가지로 단일 값, 혹은 여러 값을 지정할 수 있으며, 기준이 상/우/하/좌가 아닌 ***좌상단/우상단/우하단/좌하단*** 으로 적용된다.
- box-sizing : 크기 기준
  - `content-box` : 기본 값
    - padding, border, margin을 포함하지 않는, 컨텐츠의 너비를 기준으로 한다.
  - `border-box`
    - padding과 border를 포함한 너비를 기준으로 한다.
<br>

> outline과 border는 다르다!
> outline은 레이아웃에 영향을 미치지 않으나, border는 레이아웃에 영향을 미친다.

<br>
<br>