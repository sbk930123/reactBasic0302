// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자에 대해서 연습
// let person = {
//   name : 'seungbin',
//   age : 31,
// }

// 조건문
// person이라는게 존재 한다면 person.name 이 보이게, 없다면
// 없다면 '없다'라고 만드는 if문 작성

// if (person) {
//   console.log(person.name);
// } else {
//   console.log('없다');
// }

// 1
// age가 18살 이상이라면 '성인 입니다' 아니라면, '미성년자 입니다.'

// if(person.age >= 18) {
//   console.log('성인 입니다.');
// } else {
//   console.log('미성년자 입니다.');
// }

// console.log(person.age >= 18 ? '성인 입니다.' : '미성년자 입니다.');

// 2
// 아무 배열이나 만들고, 그 배열의 길이가 5이상일 경우 '길다' 아니라면 '짧다'

// let arr = [1, 2, 3, 4, 5, 6];

// if(arr.length >= 5) {
//   console.log('길다');
// } else {
//   console.log('짧다');
// }

// console.log(arr.length >= 5 ? '길다' : '짧다');

// 3
// age가 65세 이상일 경우에 '노인 입니다.', 18세 이상일 경우에 '성인 입니다.' 
let person = {
  name : 'seungbin',
  age : 68,
}


// if(person.age >= 18 && person.age < 65) {
//   console.log('성인 입니다.');
// } else if(person.age >= 65) {
//   console.log('노인 입니다.');
// } else {
//   console.log('미성년자 입니다.');
// }

// console.log((person.age >= 18 && person.age < 65) ? '성인 입니다.' : (person.age >= 65) ? '노인 입니다.' : '미성년자 입니다.');

// 4
// num1이 num2 보다 큰 경우, 'num1 > num2'
// num2이 num3 보다 큰 경우, 'num2 > num3'
// num3이 제일 큰 경우, '숫자가 같거나 num3이 가장 크다.'

let num1 = 30;
let num2 = 20;
let num3 = 30;

let result3 = (num1 > num2 ? 'num1 > num2' : num2 > num3 ? 'num2 > num3' : '숫자가 같거나 num3이 가장 크다.')

console.log(result3);

// 삼항 연산자 논리 계산(true, false)
// person 이라는게 있으면 person.name을 출력하고 없으면 '없다'라고 출력 (삼항 연산자)

console.log(person ? '이름 : ' + person.name : '없다');