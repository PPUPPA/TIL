# GRID GARDEN
<cite><a href="https://cssgridgarden.com/#ko">cssgridgarden.com</a></cite>

## STEP 01
Grid garden에 오신것을 환영합니다. 여러분들은 CSS 코드를 작성하여 여러분의 당근 정원을 키우실 수 있습니다. 당근이 있는 지역에 `grid-column-start` 속성을 이용하여 물을 주십시오.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start:3;
}
```

<br>
<br>

## STEP 02
저런, 정원에 잡초가 자라고 있습니다. `grid-column-start`을 사용하여 잡초를 제거하세요. 잡초는 5번째 열(column)에서 자라고 있습니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
  grid-column-start:5;
}
```

<br>
<br>

## STEP 03
`grid-column-start`이 단독으로 사용될때는, 한개의 그리드 열(column)을 나타냅니다. 하지만, `grid-column-end` 속성을 같이 사용하면 여러 열(column)에 걸쳐 확장이 가능합니다.

`grid-column-end`를 이용하여, 먼지를 피해 모든 당근에 물을 주세요. 물이 낭비되지 않도록 주의하세요! 당근은 첫번째 수직선에서 네번째 수직선까지 이어져있습니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
  grid-column-end:4;
}
```

<br>
<br>

## STEP 04
`grid-column-start` 와 `grid-column-end`를 같이 사용할때, 시작 값보다 마지막 값이 더 커야한다고 생각하실 수 있습니다. 하지만 꼭 그렇지만 않습니다!

`grid-column-end`를 5보다 낮은 값으로 설정하여 당근에 물을 주시기 바랍니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 5;
  grid-column-end:2;
}
```

<br>
<br>

## STEP 05
그리드 왼쪽의 기준이 아닌 오른쪽으로 기준을 하고싶다면, `grid-column-start` 와 `grid-column-end`를 음수로 설정하시면 됩니다. 예를들어, -1로 오른쪽 첫뻔재 세로선을 지정하실 수 있습니다.

`grid-column-end`를 음수로 설정해보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
  grid-column-end:-2;
}
```

<br>
<br>

## STEP 06
이번에는 `grid-column-start`를 음수로 설정해보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
  grid-column-start:-3;
}
```

<br>
<br>

## STEP 07
그리드 선의 시작과 끝 위치를 기준으로 그리드 항목을 정의하는 대신, `span`을 이용하여 열(column)의 넓이를 지정할 수 있습니다. `span`은 양수만 설정 가능합니다.
<br>

예를 들어, `grid-column-end: span 2;`와 같이 당근에 물을 주십시오.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 2;
  grid-column-end:span 2;
}
```

<br>
<br>

## STEP 08
다시한번 `grid-column-end`에 `span`을 이용하여 당근에 물을 주십시오.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start: 1;
  grid-column-end:span 5;
}
```

<br>
<br>

## STEP 09
또한 `span keyword`와 `grid-column-start`를 이용하여 마지막 위치에서 상대적으로 항목의 넓이를 설정이 가능합니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column-start:span 3;
  grid-column-end: 6;
}
```

<br>
<br>

## STEP 10
매번 `grid-column-start`와 `grid-column-end`를 입력하는 것은 불편합니다. 다행스럽게, `grid-column`는 한번에 입력가능한 단축해서 설정으로, /(슬래쉬)로 구분됩니다.

예를 들면, `grid-column: 2 / 4;`는 그리드 항목을 두번째 수직선에서 네번째 수직선까지로 설정합니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:4/6;
}
```

<br>
<br>

## STEP 11
`grid-column`를 이용하여 당근에 물을 주십시오. `span` keyword도 그대로 사용이 가능합니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:2 / span 3;
}
```

<br>
<br>

## STEP 12
`flexbox`와 별개로 CSS 그리드를 설정하면 컬럼과 행 두가지 측면에서 쉽게 그리드 항목을 배치할 수 있습니다. `grid-row-start`는 `grid-column-start` 수직선을 제외하곤 동일하게 작동합니다.
<br>

`grid-row-start`를 이용하여 당근에 물을 주십시오.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row-start:3;
}
```

<br>
<br>

## STEP 13
이번에는 `grid-row` 속성을 이용하여 물을 주세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-row:3/span 3;
}
```

<br>
<br>

## STEP 14
`grid-column`와 `grid-row`를 동시에 사용해서 위치를 지정해보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#poison {
  grid-column-start:2;
  grid-row-end:-1;
}
```

<br>
<br>

## STEP 15
또한 `grid-column`와 `grid-row`를 `span`과 함께 사용하여 넓은 영역을 지정할 수 있습니다. 한번 시도해보세요!

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column:2/span 4;
  grid-row:1/span 5;
}
```

<br>
<br>

## STEP 16
`grid-column`와 `grid-row` 모두를 입력하는게 너무 많은경우, 다른 속성을 이용하여 줄일 수 있습니다. `grid-area`은 /(슬래쉬)로 구분지어 `grid-row-start, grid-column-start, grid-row-end, grid-column-end`순으로 입력 가능합니다.

한가지로 예로 다음과 같습니다. `grid-area: 1 / 1 / 3 / 6;`

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area:1/2/4/6;
}
```

<br>
<br>

## STEP 17
여러 항목은 어떤가요? 아무문제 없이 겹치도록 설정이 가능합니다. `grid-area`를 사용하여 두번째 영역을 아직 물이 없는 당근영역에 포함시키세요!

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water-1 {
  grid-area: 1 / 4 / 6 / 5;
}

#water-2 {
  grid-area:2/3/5/6;
}
```

<br>
<br>

## STEP 18
그리드 요소들이 `grid-area`, `grid-column`, `grid-row`, 기타 등을 사용하지 않고, 표시될 경우 소스코드에 기입된 순서대로 표기됩니다. table 레이아웃에 비해 grid 시스템의 장점인 `order` 속성을 이용하면 이를 재정의가 가능합니다.
<br>

기본적으로, 그리드의 모든 요소들은 `order`의 값이 `0`이지만, `z-index`와 같이 양수와 음수의 값 모두 설정이 가능합니다.
<br>

지금 바로, `poison`의 `order`를 변경하여 두번째 열에 있는 당근에 물을 주고 마지막 열에 있는 잡초를 제거하세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

#poison {
  order:1;
}
```

<br>
<br>

## STEP 19
모든 잡초가 정원의 맨앞에 위치해 있으며, 물과 독은 교대로 위치해 있습니다. poison의 `order`를 변경하여 정원을 정리해봅시다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

.water {
  order: 0;
}

.poison {
  order:-1;
}
```

<br>
<br>

## STEP 20
지금까지의 정원은 열(column)과 행(row)이 각각 20% 너비의 5개 요소로 설정되어있습니다.
<br>

이 설정은 `grid-template-columns: 20% 20% 20% 20% 20%;`과 `grid-template-rows: 20% 20% 20% 20% 20%;`로 각 속성에는 5개의 열을 만드는 5개 값이 있으며, 각 열은 정원의 20% 너비 설정되었습니다.
<br>

하지만 지금부터는 그리드의 설정을 원하는대로 설정할 수 있습니다. `grid-template-columns`를 새로운 값을 설정하여 당근에 물을 주세요. 첫번째 열(column)의 넓이를 50%로 설정하세요.
<br>

```css
#garden {
  display: grid;
  grid-template-columns:50% 1fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

<br>
<br>

## STEP 21
동일한 너비의 열(column)들을 지정할려면 불편할 수 있습니다. 다행스럽게도 `repeat` 함수가 이 문제를 해결해줍니다.

예를 들면, `grid-template-columns: 20% 20% 20% 20% 20%;`와 같이 이전에는 설정했었지만, `grid-template-columns: repeat(5, 20%);`와 같이 설정해도 동일합니다.

`grid-template-columns`과 함께 `repeat` 함수를 사용하여, 8개의 12.5% 동일한 너비를 가진 열을 만들어보세요. 이렇게하면 당신은 물을 더 낭비하지 않게됩니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns:repeat(8, 12.5%);
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

<br>
<br>

## STEP 22
`grid-template-columns`은 백분율 같은 값뿐만 아니라, 픽셀 및 em과 같은 길이 단위도 허용합니다. 또한 서로 다른 단위를 함께 사용할 수도 있습니다.
<br>

해당 정원에 3개 열을 각각 `100px`, `3em` 및 `40%`로 설정해보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns:100px 3em 40%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

<br>
<br>

## STEP 23
또한 Grid는 새로운 단위인 `fractional fr`를 소개하고 있습니다. 각 `fr` 단위들은 사용가능한 공간을 하나로 공유하여 할당합니다. 예시로, 두개의 element들을 `1fr`과 `3fr`로 설정시, 공간이 4개의 동일한 크기로 공유됩니다. 첫번째 element는 사용가능한 공간의 1/4 크기로 그리고 두번째 element는 3/4 크기를 차지합니다.
<br>

여길보면 잡초가 첫 번째 줄의 `1/6`를 차지하고 있고 당근은 나머지 `5/6`를 차지하고 있습니다. `fr` 단위를 사용하여 이 너비로 두 개의 열을 만들어보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns:1fr 5fr;
  grid-template-rows: 20% 20% 20% 20% 20%;
}
```

<br>
<br>

## STEP 24
열(column)을 `pixel`, `percentage`, 혹은 `em`으로 설정시, `fr`로 설정된 다른 열(column)의 남은 공간으로 나뉘어집니다.

여기에 당근은 왼쪽에 50px, 잡초는 오른쪽에 50px로 되어있습니다. `grid-template-columns`를 사용하여 2개의 열(column), 그리고 `fr`를 사용하여 나머지 공간을 차지하는 3개의 열(column)까지 만들어보세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns:50px 1fr 1fr 1fr 50px;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  grid-area: 1 / 1 / 6 / 2;
}

#poison {
  grid-area: 1 / 5 / 6 / 6;
}
```

<br>
<br>

## STEP 25
이제 당신의 정원 왼쪽 75px에 잡초가 있습니다. 나머지 공간의 3/5에는 당근이 자라고 있으며, 반대인 2/5에는 잡초가 넘치고있습니다.
<br>

`grid-template-columns`를 `px`와 `fr`단위와 함께 사용하여 필요한 열(column)을 만드세요.

<br>

```css
#garden {
  display: grid;
  grid-template-columns:75px 3fr 2fr;
  grid-template-rows: 100%;
}
```

<br>
<br>

## STEP 26
`grid-template-rows`은 `grid-template-columns`와 거의 동일하게 작동합니다.

`grid-template-rows`을 사용하여 정원 상단의 50px를 제외하고 물을 주세요. 물이 5번째 행(row)만 설정되어있으므로, 5개의 행(row)을 생성해야합니다.

<br>

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows:repeat(4, 12.5px) 1fr;
}

#water {
  grid-column: 1 / 6;
  grid-row: 5 / 6;
}
```

<br>
<br>

## STEP 27
`grid-template`은 `grid-template-rows`와 `grid-template-columns`를 조합한 단축 속성입니다.
<br>

예를 들어, `grid-template: 50% 50% / 200px;`은 각각 50% 인 두개의 행(row)과 200px 너비의 한개의 열(column)의 그리드를 생성합니다.

`grid-template`을 사용하여 상단 60%와 왼쪽 200px를 포함하는 영역에 물을주세요.

<br>

```css
#garden {
  display: grid;
  grid-template:6fr 4fr/200px 1fr;
}

#water {
  grid-column: 1;
  grid-row: 1;
}
```

<br>
<br>

## STEP 28
당신의 정원은 멋지다. 여기 정원 바닥 50px을 남겨두고 나머지 모두를 당근으로 채웠습니다.
<br>

불행하게도, 당신의 당근 왼쪽 20%는 잡초로 우거져 있습니다. 정원의 치료를 위해 CSS grid를 사용해보시기 바랍니다.

<br>

```css
#garden {
  display: grid;
  grid-template:1fr 50px/20% 1fr;
}
```

<br>
<br>