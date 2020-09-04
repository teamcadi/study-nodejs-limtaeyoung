const express = require("express");
const { query, json } = require("express");
const app = express();

/*
 * 루트 경로인 / 에 요청했을 대 요청 정보는 req 담겨오고,
 * 응답해야할 정보는 res 객체 안에 담아서 보내줌
 */
app.get("/", function (req, res) {
  //   res.send("<h1>Hello Express</h1>"); // 렌더링은 파편화된 데이터를 모아서 하나의 페이지를 만들어줌.
  //   console.log(req, hostname);
  //   console.log(req, query);
  //   console.log(req, originalUrl);
  let { a, b } = req.query; // 구조 분해 할당
  let result = Number(a) + Number(b);
  if (!result) res.send("result 없음");
  res.send(result.toString());
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.send(name + "님 환영합니다.");
});

app.listen(9000, function () {
  console.log("server start");
});
