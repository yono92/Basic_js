console.log("비동기 처리인 async/awit를 알아보자");

function getData() {
  let data = " ";
  return new Promise((resolve) => {
    setTimeout(() => {
      data = "my-data";
      console.log(data);
    }, 1000);
  });
}

async function getResult() {
  const result = await getData();
  console.log(result);
}

getResult();

// 예최 처리는 try/catch 로 한다.

function getData2() {
  let data2 = " ";
  return new Promise((resolve) => {
    setTimeout(() => {
      data2 = "my-data2";
      console.log("첫 async이후 2초뒤" + data2);
    }, 3000);
  });
}

async function getResult2() {
  try {
    const result2 = await getData2();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

getData2();
