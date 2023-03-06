// spread

// let person = {
//   name : 'seungbin',
//   age : 31,
// }

// person 이라는 객체를 그대로 복사하고 싶다.
// ... 사용시 [객체의 깊은 복사 = deep copy]
// 깊은 복사시 기존 객체가 그대로 복사되어서 새로운 객체가 생성된다.
// 내용은 또같지만 객체가 두 개 (서로 완전 다른 객체)
// let person2 = {...person};

// console.log(person2);

// deep copy 없이 얕은 복사를 한다면 (shallow copy)
// let person3 = person;

// console.log(person3);

// log 결과 값은 비슷하지만 deep copy와 shallow copy 가 다른점은

// shallow copy는 기존 객체에 주소값만 가져오는 것이다.
// 즉 객체는 하나고, 그 객체를 참조하는 객체가 2개가 되는 것 이다.

// console.log(person === person2);
// console.log(person === person3);


// array(배열)

let a = [1, 2, 3];
let b = [...a, 4];

let c = [...a, ...b];

console.log(c);