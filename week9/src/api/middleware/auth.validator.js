const { body } = require("express-validator");

// 로그인(email, password), 회원가입(email, password, name)
const authValidator = {
  loginValidator: async (req, res, next) => {
    await Promise.all([
      await body("email").exists().withMessage("이미엘 없음").isEmail().withMessage("이메일 아님").run(req),
      await body("password").exists().exists().withMessage("비밀번호 없음").run(req),
    ]);
    const errors = validatorResult(req);
    if (!errors.isEmpty()) res.status(422).json({ success: true, errors: errors.array() });
    else next();
  },
  registerValidator: (req, res, next) => {
    await Promise.all([
      await body("email").exists().withMessage("이미엘 없음").isEmail().withMessage("이메일 아님").run(req),
      await body("password").exists().exists().withMessage("비밀번호 없음").run(req),
      await body("name").exists().exists().withMessage("이름 없음").run(req),
    ]);
    const errors = validatorResult(req);
    if (!errors.isEmpty()) res.status(422).json({ success: true, errors: errors.array() });
    else next();
  },
};

module.exports = authValidator;
