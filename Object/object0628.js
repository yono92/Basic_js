let user1 = new Object(); // 객체 생성자 문법
let user2 = {}; //객체 리터럴 문법

/**
 * 리터럴과 프로퍼티
 */

let user3 = {
  name: "Sejong",
  age: 31,
};

// 프로퍼티 값 얻기
console.log(user3.age);
console.log(user3.name);

// 프로퍼티 값에는 모든 자료형이 올 수 있다. 불리언 프로퍼티를 추가해보자

user3.isAdmin = true;

// delete 연산자를 사용하면 프로터피를 삭제할수 있다.

delete user3.age;

// 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 한다.
let user4 = {
  name: "sejong",
  age: 31,
  "like birds": false,
};

/**
 * 상수 객체는 수정될 수 있다.
 * const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
 */
