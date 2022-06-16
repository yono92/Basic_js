const nameWithDog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal?.name ?? "이름이 없는 동물입니다.";
}

console.log(getName()); // 이름이 없는 동물입니다.
console.log(getName(nameWithDog)); // 멍멍이
