const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const http = require("http").Server(app);
/*
http
- app api
- socket 양방향 통신
*/

// // 어플리케이션 레벨에서 미들웨어 등록
// app.use((req, res, next) => {
//   console.log("미들웨어 동작");
//   //   next(); // if 주석처리, 라우터로 가지 않음. so "조회" 뜨지 않음.
// });

// 로거 만들기
// 클라이언트에서 요청이 왔을 때, 응답 여부를 남겨서 로그를 수집하는 것.
// app.use((req, res, next) => {
//   next(); // 순서1
//   const date = new Date(); //
//   const method = req.method;
//   const uri = req.originalUrl;
//   const ip = req.ip;

//   console.log(`${method} ${uri} ${ip} ${date}`); //순서2
// });
app.use(morgan("dev"));

// api 구현
app.get("/", (req, res, next) => {
  console.log("api");
  res.status(200);
  res.send("비밀 데이터");
});

// 라우터 등록
app.use("/user", require("./route"));

app.listen(9001, () => {
  console.log("9001 실행중");
});
