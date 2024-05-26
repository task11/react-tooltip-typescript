<div align="center">
  <h1>Tooltip 🚧</h1>
  React-Typescript 으로 구현된 툴팁 컴포넌트 (with. CRA)
</div>
<br/>
<div align="center">
  <img src="https://img.shields.io/badge/react-v18.3.1-61DAFB">
  <img src="https://img.shields.io/badge/typescript-v4.9.5-3178C6">
</div>

<hr/>

## 📦 프로젝트 설정 및 실행 방법

1. 프로젝트 받아오기

```bash
git clone https://github.com/task11/react-tooltip-typescript.git
cd react-tooltip-typescript
```

2. 실행

```bash
npm install

npm run start
```

3. 접속

[로컬 서버](http://localhost:3000/) 데모 페이지에 접속하세요.

## 📄 폴더 구조

```bash
📦 src
┣ 📂 components
┃ ┣ 📂 Tooltip
┃ ┃ ┃ 📜 TooltipFrame.tsx /- Tooltip Portal 컴포넌트
┃ ┃ ┃ 📜 TooltipContent.tsx /- Tooltip UI 컴포넌트
┃ ┃ ┃ 📜 Tooltip.tsx /- Tooltip Container 컴포넌트
┃ ┃ ┃ 📜 Tooltip.css /- CSS 스타일
┃ ┃ ┗ 📜 index.ts
┃ ┣ 📂 ConfirmTooltip /- Custom tooltip
┃ ┃ ┃ 📜 ConfirmTooltip.tsx /- Tooltip UI 컴포넌트
┃ ┃ ┃ 📜 ConfirmTooltip.css /- CSS 스타일
┃ ┃ ┗ 📜 index.ts
┃ ┗ ...
┣ 📂 types
┃ ┃ 📜 tooltip.ts /- 툴팁 관련 타입
┃ ┗ 📜 index.ts
┣ 📂 config
┃ ┗ 📜 constants.ts /- 상수 집합
┣ 📂 hooks
┃ ┃ 📜 useTooltip.tsx /- Custom hooks
┃ ┗ 📜 useTooltipPosotion.tsx /- Custom hooks
┣ 📂 utils
┃ ┗ 📜 tooltip.helpers.ts /- Tooltip logic 헬퍼 함수
┣ 📜 App.css
┣ 📜 App.tsx
┣ 📜 index.css
┗ 📜 index.tsx
```

## 🧱 Tooltip

### Basic tooltip

```tsx
<Tooltip title="Something">
  <Button />
</Tooltip>
```

### Positioned tooltip

```tsx
<Tooltip direction="top" title="Something">
  <Button />
</Tooltip>
```

### Plain tooltip

```tsx
<Tooltip title="Something" arrow={false}>
  <Button />
</Tooltip>
```

### Customization tooltip

```tsx
<Tooltip
  title="Something"
  classes={{
    tooltip: {
      backgroundColor: "#fff",
      color: "#999",
    },
    arrow: {
      backgroundColor: "#fff",
    },
  }}
>
  <Button />
</Tooltip>
```

### Delay tooltip

> Enter delay

```tsx
<Tooltip title="Something" enterDelay={1000}>
  <Button />
</Tooltip>
```

> Leave delay

```tsx
<Tooltip title="Something" leaveDelay={1000}>
  <Button />
</Tooltip>
```

### Hover not hidden

```tsx
<Tooltip title="Something" hoverNotHidden>
  <Button />
</Tooltip>
```

### Disable

```tsx
<Tooltip title="Something" disable>
  <Button />
</Tooltip>
```

## 🚥 API

| Property       | Description                              | Type                                                                                                                                                         | Default |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| children       | 툴팁 기준 요소                           | `React.ReactNode`                                                                                                                                            | -       |
| title          | 툴팁 안 컨텐츠 요소                      | `React.ReactNode` \| `string` \| `number`                                                                                                                    | -       |
| direction      | 툴팁이 나타나는 방향                     | `top` \| `left` \| `right`\| `bottom`\| `topLeft` \| `topRight` \| `bottomLeft` \| `bottomRight` \| `leftTop` \| `leftBottom` \| `rightTop` \| `rightBottom` | `top`   |
| enterDelay     | 툴팁이 나타날 때 딜레이(ms)              | `number`                                                                                                                                                     | `0`     |
| leaveDelay     | 툴팁이 사라질 때 딜레이(ms)              | `number`                                                                                                                                                     | `0`     |
| hoverNotHidden | 툴팁에 마우스가 올라가있는동안 툴팁 유지 | `boolean`                                                                                                                                                    | `false` |
| arrow          | 툴팁의 화살표 유무                       | `boolean`                                                                                                                                                    | `true`  |
| classes        | 툴팁 커스텀 스타일 객체                  | `{ tooltip?: React.CSSProperties, arrow?: React.CSSProperties }`                                                                                             | `{}`    |
| disalbe        | 툴팁 비활성화 여부                       | `boolean`                                                                                                                                                    | `false` |

## 🖥️ 아키텍쳐

> customHooks 패턴

**customHooks** 패턴으로 컴포넌트를 구현했고, 주요 함수들은 관심사를 분리하여 `*.helpers.ts` 파일로 분리하였습니다.

로직의 재사용성을 위해 **customHooks** 패턴을 사용했다기보다는 코드의 가독성과 관심사 분리를 위해 사용해 보았습니다.

![tooltip_architecture](https://github.com/task11/react-tooltip-typescript/assets/89209626/d3734d35-50b4-47ce-99ed-903212a2a7f4)

## ✨ 요구 사항

- 툴팁 컴포넌트로 감싸진 요소에 마우스 오버 시 툴팁이 떠야 하고 마우스 아웃 시 툴팁이 사라져야 합니다.
- 툴팁 컴포넌트로 감싸진 요소의 부모 요소가 overflow hidden 혹은 scroll 일 경우에도 퉅팁이 최상위에서 제대로 보여야 합니다.
- 툴팁 방향은(`left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`) 으로 뜰 수 있어야 합니다.
- 툴팁이 나타남 혹은 사라짐은 사용가 원하면 delay로 동작 가능해야 합니다.
- delay 시간은 사용자가 custom 하게 값을 넘겨 줄 수 있어야 합니다.
- 툴팁 내용은 string , number, icon, icon & string, 클릭 할 수있는 button 등 여러가지 형태의 데이터를 표현 할 수 있어야 합니다.
- 특정 툴팁은 스타일을 커스텀하게 설정할 수 있어야합니다.
- 특정 state 값에 의해 툴팁이 안뜨게 처리할 수 있어야 합니다.

## ⚙️ 구현 로직

### 툴팁 마우스 오버/아웃

> 툴팁 컴포넌트로 감싸진 요소에 마우스 오버 시 툴팁이 떠야 하고 마우스 아웃 시 툴팁이 사라져야 합니다.

**Mouse Enter**, **Mouse Leave** 이벤트 리스너에 `isVisible` 이라는 툴팁 상태 값을 핸들링하는 함수를 주입하여 구현했습니다.

### 툴팁의 부모 요소 의존성 제거

> 툴팁 컴포넌트로 감싸진 요소의 부모 요소가 overflow hidden 혹은 scroll 일 경우에도 퉅팁이 최상위에서 제대로 보여야 합니다.

부모 요소의 `overflow: hidden` or `scroll` 상태에 영향을 받지 않아야 하기 때문에, 부모 요소에 의존하지 않고 렌더링이 가능하게 구현했습니다.

**React Portal**을 활용하여 `index.html`의 `tooltip-root` 엘리먼트 아래에 렌더링되게 구현하여 문제를 해결했습니다.

### 툴팁 방향

> 툴팁 방향은('left' 'right' 'bottom' 'topLeft' 'topRight' 'bottomLeft' 'bottomRight' 'leftTop' 'leftBottom' 'rightTop' 'rightBottom') 으로 뜰 수 있어야 합니다.

**12 방향 툴팁**을 구현하기 위해 툴팁에 감싸져있는 엘리먼트를 기준으로 툴팁을 배치하였습니다.

`ReactPortal`을 활용하여 툴팁을 구현했기 때문에, 부모 엘리먼트와의 의존성이 없어 기준 엘리먼트(이하 `ref`)와 툴팁 엘리먼트(이하 `target`) 간의 `position:relative, absolute`를 활용한 좌표 `top`, `left` 등을 설정하는 방식을 사용할 수 없다고 판단했습니다.

`target` 엘리먼트는 사용자의 **Viewport**를 기준으로 렌더링 되기 때문에 `ref` 엘리먼트가 렌더링 된 좌표, 넓이, 높이 값과 `target` 엘리먼트의
넓이, 높이 값을 방향에 따라 계산하여 `target` 엘리먼트가 배치될 `X`, `Y` 좌표를 찾아 적용시키는 방식으로 구현했습니다.

또한, **Viewport** 기준으로 렌더링 되는 특성상 Scroll이 된 페이지에서 툴팁 위치가 정상적으로 렌더링이 되지 않을 수 있습니다.

이 부분을 고려하여 `window.scrollX`, `window.scrollY` 값을 적절히 조합하여 계산식에 적용하였습니다.

#### 툴팁 방향 계산식

> `ref`엘리먼트와 `target`엘리먼트의 기본 여백인 `Default gap` 값은 10px로 설정했습니다.

Top 방향 구현 예시를 들어보겠습니다.

**Top**

```
좌표 TargetX = `window.scrollX` + `ref` 엘리먼트의 `left` 값 - ( `target` 엘리먼트의 `width` / 2 - `ref` 엘리먼트의 `width` / 2 )

좌표 TargetY = `window.scrollY` + `ref` 엘리먼트의 `top` 값 - `target` 엘리먼트의 `height` - `Default gap`
```

![tooltip_coord](https://github.com/task11/react-tooltip-typescript/assets/89209626/c19cd7bc-248f-4c0f-88e3-64076e86b4af)

### 툴팁 딜레이 기능

> 툴팁이 나타남 혹은 사라짐은 사용가 원하면 delay로 동작 가능해야 합니다.

컴포넌트에 `enterDelay` & `leaveDelay`를 상태 값으로 받을 수 있게 설계하였습니다.(단위 ms)

```tsx
interface Props {
  enterDelay?: number;
  leaveDelay?: number;
  //...
}
```

`setTimeout` API를 사용하여 `isVisible` 의 상태 값 변화를 상태 값으로 받은 시간 만큼 지연시켰습니다.

또한, `hoverNotHidden` 여부를 상태 값으로 받아 `true`일 때 `leaveDelay` 의 값을 `1000ms` 으로 설정하는 로직을 추가하였습니다.

### 툴팁 컨텐츠에 여러 타입의 엘리먼트 적용 가능

> 툴팁 내용은 string , number, icon, icon & string, 클릭 할 수있는 button 등 여러가지 형태의 데이터를 표현 할 수 있어야 합니다.

툴팁에 다양한 엘리먼트를 주입 가능하게 하기 위해 아래와 같이 타입을 선언했습니다.

```tsx
type TooltipTitle = React.ReactNode | string | number;
```

```tsx
<Tooltip title="string">
  <Button />
</Tooltip>
```

```tsx
<Tooltip
  title={
    <>
      <div>ReactNode</div>
    </>
  }
>
  <Button />
</Tooltip>
```

```tsx
<Tooltip title={1000}>
  <Button />
</Tooltip>
```

### 툴팁 커스텀 스타일

> 특정 툴팁은 스타일을 커스텀하게 설정할 수 있어야합니다.

툴팁의 커스텀 스타일링을 가능하게 하기 위해 `classes` 라는 객체를 받을 수 있게 설계하였습니다.

```tsx
interface Props {
  classes?: ITooltipClasses;
}

interface ITooltipClasses {
  tooltip?: React.CSSProperties;
  arrow?: React.CSSProperties;
}
```

```tsx
<div className="tooltip-container">
  <div className="tooltip-inner" style={{ ...classes.tooltip }}>
    {title}
  </div>
  <div className="tooltip-arrow" style={{ ...classes.arrow }} />
</div>
```

컴포넌트 사용자가 `tooltip-inner` 엘리먼트와 `tooltip-arrow` 엘리먼트를 각각 인라인 스타일로 커스텀할 수 있게 구현했습니다.

```tsx
<Tooltip
  title="Custom Tooltip"
  classes={{
    tooltip: {
      backgroundColor: "#fff",
      color: "#999",
    },
    arrow: {
      backgroundColor: "#fff",
    },
  }}
>
  <Button />
</Tooltip>
```
