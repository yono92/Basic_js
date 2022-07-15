/*
캡틴 판교님 블로그 자바스크립트 중급 
https://joshua1988.github.io/web-development/javascript/javascript-best-practices/
삼항조건 연산자 
 */
let isArtur = true;
// let weapon;
//
// if (isArtur) {
//   weapon = "a";
// } else {
//   weapon = "b";
// }

// 위와 같은 코드를 삼항연사자를 이용하면 if else 문을 아래와 같이 바꿀수 있다.

let weapon = isArtur ? "a" : "b";

// 삼항 연산자를 다음과 같은 형태로도 사용이 가능하다.
isArtur && isKing
  ? ((weapon = "ex"), (helmet = "goos"))
  : ((weapon = "ln"), (helmet = "Iron"));

/*
 Logical Assignment1 (OR)
 OR 연산자 : "falsy" 하지 않은 가장 첫번째 마주친 값을 갖는다. 
 아래의 삼항 연산자를 OR 연산자를 이용하여 다음과 같이 줄일 수 있다.
 */

// 삼항연산자 사용
function addSword(sword) {
  this.swords = this.swords ? this.swords : [];
  this.swords = push(sword);
}
