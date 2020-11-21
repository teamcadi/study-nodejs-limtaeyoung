const router = require("express").Router();

/**
 * @description 댓글 등록 => ../../posts/routes
 * @routes POST /comments
 */
// router.post("/");

/**
 * @description 댓글 수정
 * @routes PUT /comments/:id
 */
router.put("/:id");

/**
 * @description 댓글 삭제
 * @routes DELETE /comments/:id
 */
router.delete("/:id");

module.exports = router;
