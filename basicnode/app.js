const express = require("express");
const path = require("path");
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
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

app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((res, req, next) => {
  res.status(404).send("Not Found");
});

const multer = require("multer");
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("upload 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limit: { fileSize: 5 * 1024 * 1024 },
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});

app.post(
  "/upload",
  upload.fields([{ name: "image1" }, { name: "image2" }]),
  (req, res) => {
    console.log(req.files, req.body);
    res.send("ok");
  }
);

// app.use((req, res, next) => {
//   console.log("모든 요청에 다 실행됩니다.");
//   next();
// });
//
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("GET / 요청에서만 실행됩니다.");
//     next();
//   },
//   (req, res) => {
//     throw new Error("에러는 에러처리 미들웨어로 간다.");
//   }
// );

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send(err.message);
// });

// app.get("/", (req, res) => {
//   // res.send("Hello World");
//   // __dirname 경로에 파일로 보냄
//   res.sendFile(path.join(__dirname, "./index.html"));
// });

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번에서 포트 대기중 ");
});
