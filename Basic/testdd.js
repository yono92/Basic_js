console.log("테스트 코드 만들기");

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
let expected = 3;

// if (result !== expected) {
//   throw new Error(result + "is not equals" + expected);
// }

function expect(result) {
  return {
    tobe: function (expected) {
      if (result !== expected) {
        throw new Error(result + " is not equals" + expected);
      } else {
        console.log(result + "is equals " + expected);
      }
    },
  };
}

expect(sum(1, 2)).tobe(3);
