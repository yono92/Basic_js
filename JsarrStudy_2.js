console.log("배열 탐색하기 ");

/**
 * indexOf, lastindexOf , includes
 */

let arr = [1, 2, false];

console.log("인덱스 어레이 (0)");
console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.includes(1));

const arr2 = [NaN];
console.log(arr2.indexOf(NaN)); // 완전 항들 비교 === 는 동작하지 않으므로 0이 출력

console.log(arr2.includes(NaN)); //true NaN의 여부를 확인하게 됨

let user = [
  { id: 1, name: "sejong" },
  { id: 2, name: "wook" },
];

let users = user.find((item) => item.id == 1);
console.log(users);

console.log("배열을 변형시키는 메서드");

// let result = arr2.map(function (item,index,array) {
//     // 요소 대신 새로운 값을 반환
// })

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);

console.log("sort(fn)");
/**
 * arr.sort() 는 배열의 요소를 정렬해준다.
 * 배열 자체가 변경됨
 */

let arr3 = [15, 112, 5125];
arr3.sort();
console.log("문자열로 취급되어 제대로 솔팅이 되지 않는다.");

arr3.sort(function (a, b) {
  return a - b;
});

console.log(arr3);
