let sejong = {
  name: "sejong",
  sayHi: function () {
    console.log("하이");
  },
};

sejong.sayHi();

/*
객체: 
프로퍼티에 다양한 종류의 값을 저장할 수 있다.
자바스크립트에는 여러 종류의 객체가 있다, 함수도 객체의 일종이다. 

*/

let str = "YOON SE JONG";
console.log(str.toLowerCase());

/**
 * 문자열은 str의 원시값이므로 원시값의 프로퍼티에 접근하는 순간 특별한 객체가 만들어 진다.
 * 이 객체는 문자열의 값을 알고있고 메서드도 가지고있다.
 * 메서드가 실행되고 새로운 문자열이 반환
 * 객체는 파괴도고 원시값만 남음
 */
