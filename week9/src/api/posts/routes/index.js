const router = require("express").Router();

/**
 * todo: 페이지네이션
 * @description 게시물 리스트 조회
 * @routes GET /posts
 */
router.get("/");

/**
 * @description 게시물 조회
 * @routes GET /posts/:id
 */
router.get("/:id");

/**********************************/

/**
 * @description 게시물 댓글 리스트 조회
 * @routes GET /posts/:id/comments
 */
router.get("/:id/comments");

/**********************************/

/**
 * @description 게시물 등록
 * @routes POST /posts
 * @request @body {content, images}
 */
router.post("/");

/**
 * @description 게시물 수정
 * @routes PUT /posts/:id
 * @request @body {content, images}
 */
router.put("/:id");

/**
 * @description 게시물 삭제
 * @routes DELETE /posts/:id
 */
router.delete("/:id");

/**
 * @description 게시물 좋아요
 * @routes PATCH /posts/:id/like
 */
router.patch("/:id/like");

module.exports = router;
