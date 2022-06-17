/**
 * 문자열은 str의 원시값이므로 원시값의 프로퍼티에 접근하는 순간 특별한 객체가 만들어 진다.
 * 이 객체는 문자열의 값을 알고있고 메서드도 가지고있다.
 * 메서드가 실행되고 새로운 문자열이 반환
 * 객체는 파괴도고 원시값만 남음
 */

// arr.splice(index[,deletecount,elem1,....,elemN])

let arr = ["I", "am", "Hungry"];
console.log(arr);
delete arr[1];
console.log(arr);
arr.splice(0, 1);
console.log(arr);
let arr1 = [1, 2, 3, 4];
let arr2 = ["Hello", "I", "AM", "Hungry"];

let removed = arr2.splice(0, 2);
console.log(removed);

let arr3 = ["I", "study", "javascript"];

arr.splice(2, 0, "complex", "language");
console.log("arr3" + arr3);

console.log("slice");
/**
 * arr.slice는 arr.splice와 유사해 보이지만 훨씬 간단함
 * arr.slice(start,end)
 * 이 메서드는 start인덱스 부터 end인덱스 까지의 요소를 복사한 새로운 배열은 반환합니다.
 * arr.slice는 문자열 메서드인 str.slice와 유사하게 작동하는데 arr.slices는  substring 대신 서브 배열은 반환하는 점이 다르다.
 */

let arr4 = ["T", "E", "S", "T"];

arr.slice(1, 3);
arr.slice(-2);

/**
 * concat arr.concat은 기존배열의 요소를 사용해 새로운 배열을 만든거나 기존 배열에 요소를 추가하고자 할 때 사용할 수 있다.
 * arr.concat(arg1,arg2)
 */

console.log("arr concat" + arr.concat(arr1, arr2));
