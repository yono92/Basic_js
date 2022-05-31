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
