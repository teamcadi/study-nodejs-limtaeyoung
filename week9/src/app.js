const express = require("express"); // import express
const loaders = require("./loaders"); // express 필요한 부분들을 탑재하는 함수

// server 함수
const server = () => {
  const app = express();
  app.set("PORT", process.env.NODE_ENV || 9000);

  loaders(app);

  // port binding
  app.listen(app.get("PORT"), (err) => {
    if (err) {
      console.error(err.message);
      process.exit();
    } else {
      console.log("서버 실행중");
    }
  });
};

// server 실행
server();
