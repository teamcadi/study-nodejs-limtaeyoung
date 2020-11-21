const commentRouter = require("../api/comments/routes");
const postRouter = require("../api/posts/routes");
const userRouter = require("../api/users/routes");
const authRouter = require("../api/auth/routes");

const loadRouter = (app) => {
  // 없는 경로 처리
  app.use("/auth", authRouter);
  app.use("/users".userRouter);

  app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Not Found" });
  });
};

module.exports = loadRouter;
