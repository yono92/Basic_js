let arr = [15, 21, 35, 123, 512, 36, 12, 36];

// camelize("list-style-image") == "listStyleImage";
// camelize("-webkit-transition") == "WebkitTransition";

// 자바스크립트에서 1은 true 0은 false를 의미한다.

console.log("while문");

let i = 0;
while (i <= 3) {
  console.log(i);
  i++;
}

// 반복문 본문이 한번 실행되는 것을 반복 (iteration) 이라고 한다.

console.log("do while문");

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 3);

console.log("for 문");
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let user = {
  name: "sejong",
  age: 31,
  job: "devloper",
};

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
