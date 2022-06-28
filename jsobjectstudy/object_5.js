// 프로퍼티 getter 와 setter

let obj = {
  get propName() {
    // getter. obj.propName을 실행할 때 실행되는 코드
  },
  set propName(value) {
    // setter ,obj.propName =value를 실행할 때 실행되는 코드
  },
};

let user = {
  name: "Sejong",
  surname: "Yoon",

  get FullName() {
    return `${this.name} ${this.surname}`;
  },
  set FullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

user.FullName = "Messi Ronaldo";

console.log(user.name);
console.log(user.surname);
console.log(user.FullName);
