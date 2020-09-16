const todos = require("../database/todo");

module.exports = {
  /** @route GET /todo */
  getTodos: (req, res, next) => {
    const list = todos;
    res.status(200).json(list);
    console.log("할일들 조회!");
  },

  /** @route POST /todo */
  addTodo: (req, res, next) => {
    const { title, date } = req.body;
    const todoId = todos.length + 1;
    const todo = { id: todoId, title, date, completed: false };
    todos.push(todo);
    res.status(201).json({ success: true, message: "할일 추가 ok" }); //201: 생성 성공
    console.log('할일 "' + title + '" 추가!'); // \"
  },

  /** @route DELETE /todo/:id */
  removeTodo: (req, res, next) => {
    // console.log(req.params); // { id: ':id' }
    // https://gongbu-ing.tistory.com/26
    const todoId = req.params.id - 1;
    const removed = todos.splice(todoId, 1); // index [paramId-1]부터 요소 1개를 제거
    res.status(200).json({ success: true, message: "할일 삭제 ok" }); //https://restfulapi.net/http-methods/
    console.log('할일 "' + removed[0].title + '" 삭제!');
  },

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
  },
};
