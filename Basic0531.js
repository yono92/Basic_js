// 객체를 위한 반복분 for...in

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
  console.log(`${key} : ${doggy[key]}`);
}

// break 와 continue

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
  if (i === 5) break;
}

// 배열 내장함수

const keyboard = ["realforce", "happyhacking", "leopold"];

keyboard.forEach((boadr) => {
  console.log(boadr);
});

// Map
// Map은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// for 문 사용사
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

// foreach 문 사용시
array.forEach((n) => {
  squared.push(n * n);
});

console.log(squared);

// Map 사용시
const square = (n) => n * n;
const square2 = array.map(square);
console.log(square2);

// 배열의 내장함수
// indexOf
console.log("indexOf");
const hero = ["호날두", "메시", "즐라탄"];

const index = hero.indexOf("즐라탄");
console.log(index);

// findindex
console.log("findindex function");
const todos = [
  {
    id: 1,
    text: "자바스크립트",
    done: true,
  },
  {
    id: 2,
    text: "파이썬",
    done: false,
  },
  {
    id: 3,
    text: "자바",
    done: true,
  },
];

const index2 = todos.findIndex((todo) => todo.id === 3);
console.log(index2);

console.log("find");
const index3 = todos.find((todo) => todo.id === 3);
console.log(index3);

// 필터

const index4 = todos.filter((todo) => todo.done === false);
console.log(index4);

let array10 = [1, 2, 3, 5, 12, 612, 6, 123];
array10.sort(function (a, b) {
  return b - a;
});
console.log(array10);
