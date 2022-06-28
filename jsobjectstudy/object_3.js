// 메서드와 this

//메서드는 객체에 저장된 정보에 접근할 수 있어야 제 역할을 할 수 있다. 모든 메서드가 그런건 아니지만, 대부분의 메서드가 객체 프로퍼티의 값을 활용한다.

let user = {
  name: "sejong",
  age: 31,
  sayHI() {
    console.log(user.name);
  },
};

user.sayHI();

/**
 * 외부 변수에 사용해 객체를 참조하면 에러가 발생한다.
 */
// let admin = user;
// user = null;
// admin.sayHI();
