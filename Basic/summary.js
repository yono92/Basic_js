// 자바스크립트 생성자 함수

function Developer(name, stack, city) {
  this.name = name;
  this.stack = stack;
  this.city = city;
}

let dev = new Developer("sejong", "backend", "seoul");

console.log(dev);

// instanceof를 활용한 생성자 함수 구분법

function Func(arg) {
  // instanceof 로 생성자 함수임을 확인
  if (!(this instanceof arguments.callee))
    // this instanceof 함수명도 가능하다.
    return new Func(arg);
  this.value = arg || 0;
}

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(12, 412, 1, 621, 6, 12));

//this 바인딩
// 일반적으로 함수 내부에서 this를 사용하면 전역 스코프(window)에 접근한다.

// 함수 선언식
let text = "global";
function binding() {
  let text = "local";
  console.log(this.text);
  console.log(this);
}

binding();

console.log("함수 표현식 부분 ");
// 함수 표현식
let text2 = "global";
const binding2 = function () {
  let text2 = "local";
  console.log(this.text2);
  console.log(this);
};

binding2();
