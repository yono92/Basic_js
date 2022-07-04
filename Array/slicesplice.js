// slice() 함수
num = Array(20)
  .fill()
  .map((key, i) => i);

console.log(num);

let num1 = num.slice(5, 10);

console.log("인자가 모두 있는 슬라이스", num1);

let num2 = num.slice(10);

console.log("두번째 인자가 없는 슬라이스", num2);

// splice() 함수

nums = Array(20)
  .fill()
  .map((k, i) => i);

console.log(nums);

let nums1 = nums.splice(5, 3);

console.log("인자가 모두 있는 스플라이스", nums1);
