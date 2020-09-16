# 2주차 과제

## _var_ vs. _let_ vs. _const_

variable : 변수

constant : 상수

let : English word 'let'

```javascript
// Hey computer, can you please
let // this
  night = "wonderful";
```

| .           |   var    |  let  | const |
| :---------- | :------: | :---: | :---: |
| scope       | function | block | block |
| 변수 재선언 |    Ｏ    |  Ｘ   |  Ｘ   |
| 변수 재할당 |    Ｘ    |  Ｘ   |  Ｏ   |

\* scope : 변수 유효(hoisting) 범위

\* block means { }

hoisting

**var**

원래 function-scoped 여서 func 벗어나면 변수는 undefined가 되지만<br> hoisting돼 global variable이 되고 이를 막기 위해선 `'use strict'`를 사용한다.

ES6부터 let, const 추가

**let**

let은 값을 할당하기전에 변수가 선언 되어있어야 한다.<br>
선언과 초기화 단계 동시X so 먼저 선언하고 나중에 값 할당 가능

**const**

hoisting 단위가 block-scoped이기 때문에 { } 내부(외부)에 변수를 선언했더라도, 외부(내부)에는 다시 선언할 수 있다.
<br>

> 변수 선언시, 기본적으로 **const** 를 사용하고<br>
> 재할당이 필요한 경우에 한정해 **let** 을 사용하는 것이 좋다.

<br>

- gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
- stackoverflow.com/questions/33090193

<br>

## todoList 완성 :ballot_box_with_check:

`week2\todoList\controllers\todo.controller.js`

```javascript
const todos = require("../database/todo");
module.exports = {
```

```javascript
  /** @route GET /todo */
  getTodos: (req, res, next) => {
    const list = todos;
    res.status(200).json(list);
    console.log("할일들 조회!");
  },
```

![image](https://user-images.githubusercontent.com/41332126/93385311-0d03d700-f8a1-11ea-93a2-848628dead82.png)

<br>

```javascript
  /** @route POST /todo */
  addTodo: (req, res, next) => {
    const { title, date } = req.body;
    const todoId = todos.length + 1;
    const todo = { id: todoId, title, date, completed: false };
    todos.push(todo);
    res.status(201).json({ success: true, message: "할일 추가 ok" }); //201: 생성 성공
    console.log('할일 "' + title + '" 추가!'); // \"
  },
```

![image](https://user-images.githubusercontent.com/41332126/93387999-07a88b80-f8a5-11ea-8438-7fcf9bbf1c2d.png)

<br>

```javascript
  /** @route DELETE /todo/:id */
  removeTodo: (req, res, next) => {
    // console.log(req.params); // { id: ':id' }
    // https://gongbu-ing.tistory.com/26
    const todoId = req.params.id - 1;
    const removed = todos.splice(todoId, 1); // index [paramId-1]부터 요소 1개를 제거
    res.status(200).json({ success: true, message: "할일 삭제 ok" }); //https://restfulapi.net/http-methods/
    console.log('할일 "' + removed[0].title + '" 삭제!');
  },
```

![image](https://user-images.githubusercontent.com/41332126/93388207-50604480-f8a5-11ea-9421-d4efc04fb606.png)

<br>

```javascript
  /** @route PATCH /todo/:id */
  doneTodo: (req, res, next) => {
    const paramsId = req.params.id;
    //*방법1
    const todo = todos.find((item) => item.id == paramsId); /// === value와 data type 비교
    //*방법2
    // const todo = todos.find(function (item, index, array) {
    //   return item.id === paramsId;
    // });
    todo.completed = true;
    res.status(200).json({ success: true, message: "할일 완료 ok" });
    console.log('할일 "' + todo.title + '" 완료!');
  }

};
```

![image](https://user-images.githubusercontent.com/41332126/93388229-5d7d3380-f8a5-11ea-8b60-c6d5394ca189.png)
