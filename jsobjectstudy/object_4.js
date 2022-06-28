// 프로퍼티 플래그의 설명자
// 객체엔 프로퍼티가 저장된다.
// 프로퍼티를 단순히 '키-값' 쌍의 관점에서만 다뤘지만 생가보다 유연하고 강력한 자료구조이다.

/**
 * 프로퍼티 플래그
 * 객체 프로퍼티는 값(value)와 플래그(Flag)라 불리는 특별한 속성 세 가지를 갖는다.
 *
 * writable - true 이면 값을 수정할 수 있다. 아니라면 읽기만 가능하다.
 * enumerable - true 이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복물을 사용해 나열할 수 없습니다.
 * configurable - true 이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
 */

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj
// 정보를 얻고자 하는 객체

//propertyName
// 정보를 얻고자 하는 객체 내 프로퍼티

let user = {
  name: "Sejong",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(descriptor, null, 2));

/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
