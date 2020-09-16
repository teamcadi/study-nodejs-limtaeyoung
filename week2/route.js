const router = require("express").Router();

// 더미데이터, 가상 데이터베이스
// const user = { id: "1", name: "태영", password: "1234", nickname: "tang" };
const users = [
  { id: "1", name: "태영", password: "1234", nickname: "tang" },
  { id: "2", name: "태우", password: "2222", nickname: "우" },
  { id: "3", name: "채은", password: "3333", nickname: "은" },
  { id: "4", name: "해미", password: "4444", nickname: "미" },
  { id: "5", name: "태호", password: "5555", nickname: "호" },
];

/**
 * @description 유저들 조회
 * @route GET /
 */
router.get("/", (req, res, next) => {
  const members = users;
  res.status(200).json(members); // 200: 조회 성공
});

/**
 * @description 유저 가입
 * @route POST /
 * @request @body {name, password, nickname}
 */
router.post("/", function (req, res, next) {
  if (!req.body.name) {
    // throw Error
    res.status(400).json({ success: false, message: "name 없음" });
  }
  const { name, password, nickname } = req.body;
  const lastId = users[users.length - 1].id;
  const userId = Number(lastId) + 1 + "";
  const user = { id: userId, name, password, nickname }; // key와 value가 같으면 둘 중 하나만 작성해도 됨
  //   Array.prototype.push()
  users.push(user);
  res.status(201).json({ success: true, message: "가입 성공" }); // 201: 생성 성공
}); //get(), post() 경로 같은지 확인

// http/1.1

module.exports = router;
