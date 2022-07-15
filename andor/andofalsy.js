/*
|| (OR)
'OR' 연산자는 두 개의 수직선 기호로 만들수 있다.
 */

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log("영업시간이 아닙니다.");
}

let time = 12;
let isWeekend = true;

if (time < 10 || time > 18 || isWeekend) {
  console.log("영업시간이 아니다.");
}

/*
첫 번째 truthy를 찾는 Or 연산자 '||'
OR ||  연산자는 다음 순서에 따라 연산을 수행한다.
- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가한다.
- 각 피연산자를 불린형으로 변환한다. 그 값이 true 면 이 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환 한다.
-  피연산자 모두를 평간한 경우엔 마지막 피연산자를 반환한다.
 */

let firstName = "";
let lastName = "";
let nickName = "";

console.log(firstName || lastName || nickName || "익명"); // 바이올렛

// true 로 판정되는 trthy

let truthy1 = "string";
let truthy2 = Infinity;
let truthy3 = "0";
let truthy4 = 13;
let truthy5 = [];

// trueCheck(truthy1);
// trueCheck(truthy2);
// trueCheck(truthy3);
// trueCheck(truthy4);
// trueCheck(truthy5);

let falsy1 = undefined;
let falsy2 = "";
let falsy3 = 0;
let falsy4 = null;
let falsy5 = NaN;

// trueCheck(falsy1);
// trueCheck(falsy2);
// trueCheck(falsy3);
// trueCheck(falsy4);
// trueCheck(falsy5);

// 간단한 사용 예제
/*
레퍼런스 블로그 :https://shoney.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Truthy-Falsy-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95
 */

let person = { name: "sejong" };
let personUndefined;

const getname = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.name;
};

console.log(getname(person));
console.log(getname(personUndefined));
