/**
 * 프라미스로 지연 만들기
 * 내장 함수 setTimeout은 콜백을 사용합니다. 프라미스를 기반으로 하는 동일 기능 함수를 만들어보세요.
 * 함수 delay(ms)는 프라미스를 반환해야 합니다. 반환되는 프라미스는 아래와 같이 .then을 붙일 수 있도록 ms 이후에 이행되어야 합니다.
 */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("3초후 실행"));
