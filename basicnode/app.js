const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3001);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("GET / 요청에서만 실행됩니다.");
    next();
  },
  (req, res) => {
    throw new Error("에러는 에러처리 미들웨어로 간다.");
  }
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

// app.get("/", (req, res) => {
//   // res.send("Hello World");
//   // __dirname 경로에 파일로 보냄
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 포트 대기중 ");
});
