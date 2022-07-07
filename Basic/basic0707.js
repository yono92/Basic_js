const func1 = function func1() {
  console.log("함수형 프로그래밍");
};
// 기본 함수형
func1();

let func = function (arg1, arg2) {
  return arg1, arg2;
};

// 인자가 두개 이상일때
let sum = (a, b) => console.log(a + b);

sum(1, 2);

// 인자가 하나일 떄
let double = (n) => console.log(n * 2);

double(100);

let sayHello = () => console.log("Hello");

sayHello();
