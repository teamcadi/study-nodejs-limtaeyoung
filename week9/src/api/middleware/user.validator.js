const { body, param, validationResult } = require("express-validator");

const userValidator = {
  getUserValidator: async (req, res, next) => {
    await param("id").isNumeric().withMessage("숫자가 아님").run(req);
    const errors = validatorResult(req);
    if (!errors.isEmpty()) res.status(422).json({ success: true, errors: errors.array() });
    else next();
  },
  modifyUserValidator: async (req, res, next) => {
    await Promise.all([
      await param("id").isNumeric().withMessage("숫자가 아님").run(req),
      await param("name").exists().withMessage("이름이 없음").run(req),
    ]);
    const errors = validatorResult(req);
    if (!errors.isEmpty()) res.status(422).json({ success: true, errors: errors.array() });
    else next();
  },
  modifyUserPwValidator: async (req, res, next) => {
    await Promise.all([
      await param("id").isNumeric().withMessage("숫자가 아님").run(req),
      await param("password").exists().withMessage("비밀번호 없음").run(req),
      await param("newPassword").exists().withMessage("새로운 비밀번호 없음").run(req),
    ]);
    const errors = validatorResult(req);
    if (!errors.isEmpty()) res.status(422).json({ success: true, errors: errors.array() });
    else next();
  },
};

module.exports = userValidator;
