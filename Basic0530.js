console.log("자바스크립트 기본 공부하기 ");

// 일반적인 반복문

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const names = ["멍멍이", "야옹이", "멍뭉이"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//  for ... of
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
console.log(numbers);
