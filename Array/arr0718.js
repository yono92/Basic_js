let arr = [1, 23, 12, 412, 42, 512, 5];

console.log(arr.slice(0, 4));

function callback() {
  console.log("일");
  setTimeout(() => console.log("둘"), 0);
  console.log("삼");
}

callback();

// 자바스크립트 프로토타입

function gi() {
  this.q = "sejong";
  this.w = "yoon";
}

let person = new gi();
