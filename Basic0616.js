console.log("벨로퍼트 블로그 callback개념");
function work(callback) {
  setTimeout(() => {
    const start = Date.now;
    for (let i = 0; i < 10000000; i++) {}
    const end = Date.now;
    console.log(end - start + "ms");
    callback();
  }, 0);
}

console.log("작업시작");
work(() => {
  console.log("작업이 끝!");
});
console.log("작업종료");

console.log("Promise 시작");

const myPromise = new Promise((reselve, reject) => {
  setTimeout(() => {
    reselve(1);
  }, 1000);
});

myPromise.then((n) => {
  console.log(n);
});
