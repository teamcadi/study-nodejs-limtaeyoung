const { getTodos, addTodo, removeTodo, doneTodo } = require("../controllers/todo.controller");

const router = require("express").Router();

// * ----- router 미들웨어 -----
router.use((req, res, next) => {
  console.log("todo 라우터 접근");
  next();
});
// * ---------------------------

/**
 * @description 일정 모두 소화
 * @route GET /todo
 */
router.get("/", getTodos);

/**
 * @description 일정 생성
 * @route POST /todo
 * @request @body {title, completed, date}
 */
router.post("/", addTodo);

/**
 * @description 일정 삭제
 * @route DELETE /todo/:id
 */
router.delete("/:id", removeTodo);

/**
 * @description 일정 수행 여부 (토글 동작)
 * @route PATCH /todo/:id
 */
router.patch("/:id", doneTodo);

module.exports = router;
