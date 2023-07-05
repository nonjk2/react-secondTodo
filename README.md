- [react-secondTodo](#react-secondtodo)
  - [\<코드 컨벤션\>](#코드-컨벤션)
    - [규칙](#규칙)
  - [\<역할분배\>](#역할분배)
  - [파일구조](#파일구조)

# react-secondTodo

## <코드 컨벤션>

### 규칙

- 네이밍은 camelCase이용
- 들여쓰기-prettier기본옵션 사용

## <역할분배>

- 은석: add,delete,item main 스타일링
  - add: action함수 작성, dispatch
  - delete: action함수 작성, dispatch
  - item: item component 작성, mainpage 스타일링
  -
- 민지:update기능, 상세페이지,input창 스타일링
  - update: action함수 작성, dispatch
  - 상세페이지: 수정,삭제 기능 생성 및 스타일링
  - input: input 스타일링, input handle

공통:리덕스형태구조,라우팅,파일생성

## 파일구조

- src
  - components
    - todolist
      - `todoInput.jsx`
      - `todoIsDone.jsx`
      - `todoItemDetail.jsx`
      - `todoworking.jsx`
      - `todoworkingItem.jsx`
  - hooks
    - `useInput.js`
  - layout
    - header
      - `index.jsx`
  - modules
    - `index.js`
    - `todo.js`
  - pages
    - todolist
      - `index.jsx`
  - util
    - `globalStyle.js`
  - `App.jsx`
  - `main.jsx`
