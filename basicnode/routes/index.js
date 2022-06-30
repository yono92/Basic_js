const express = require("express");

const router = express.Router();

// GET 라우터
router.get("/", (req, res) => {
  console.log("userRouter 탔음");
  res.send("Hello Express");
});

router.get("/user/:id", (req, rse) => {
  console.log(req.params, req.query);
});

module.exports = router;
