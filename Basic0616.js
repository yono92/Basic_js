console.log("벨로퍼트 블로그 callback개념");
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 10000000; i++) {}
    const end = Date.now();
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

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject(new Error());
  }, 1000);
});

myPromise
  .then((n) => {
    console.log(n);
  })
  .catch((error) => {
    console.log(error);
  });

function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });

/* 위 코드를 아래와 같이 정리 할 수 있다. */
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch((e) => {
    console.error(e);
  });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요");
  await sleep(1000);
  console.log("반갑습니다");
}

process();
