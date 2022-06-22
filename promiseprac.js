console.log("콜백지옥 벗어나기");

/**
 * 기존에 콜백을 처리 하던 방식
 * @param {*} id
 * @param {*} callback
 */
function findeuser(id, callback) {
  setTimeout(function () {
    const user = {
      id: id,
      name: "my name is " + id,
    };
    callback(user);
  }, 1000);
}

findeuser("foo", function (user) {
  console.log(user);
});

/**
 * 프로미스 패턴
 */

function findUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const user = {
        id: id,
        name: "my name is" + id,
      };
      resolve(user);
    }, 1000);
  });
}

findUser("foo").then(function (user) {
  console.log(user);
});

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "mydata";
      if (data) {
        resolve(data);
      }
      reject(new Error("Request is failed"));
    }, 3000);
  });
}

getData()
  .then((data) => {
    console.log(data); // 'mydata'
  })
  .catch((err) => {
    console.log(err);
  });
