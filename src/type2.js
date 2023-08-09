

/* 자바스크립트 데이터의 타입 종류!  */


// 1. number (수치 타입)
console.log(`10 type = ${typeof 10}`)
console.log(`10.5 type = ${typeof 10.5}`)

// 2. bigint (정수 타입)
console.log(`10n type = ${typeof 10n}`)
let big = 10n/3n
console.log(`10n/3n type = ${typeof big}`)

// 3. string (문자열 타입)
console.log(`'A' type = ${typeof 'A'}`)
console.log(`"AA" type = ${typeof "AA"}`)

// 4. boolean (논리형 타입)
console.log(`true type = ${typeof true}`)
console.log(`false type = ${typeof false}`) 

// 5. undefined
let un; // 변수에 초기값을 넣지 않으면 undefined 가 된다
console.log(`un type = ${typeof un}`) 

// 6. function (함수 타입)
console.log(`function() {} type = ${typeof function() {}}`)    //이름 없는 함수 선언

// 7. object (객체 타입) : 위 6종류의 타입이 아니면 대부분 다 object 타입이다
console.log(`[1,2,3] type = ${typeof [1,2,3]}`)
console.log(`null type = ${typeof null}`)
console.log(`new Date() type = ${typeof new Date()}`)

// 일치 연산자(=== , !==)  : 자료형과 자료의 값까지 비교하는 연산자 
// 자바스크립트에서 문자열과 수치값이 같이 연산되면 문자열이 수치값으로 비교가  되기 때문에 값만 같다면 그냥 일반 비교연산자를 쓰면 true가 나오지만.
// 일치 연산자는 자료형까지 비교하는 것이기 때문에 자료형까지 같지 않다면 false가 나온다
console.log(`"123" == 123 : ${"123" == 123}`)
console.log(`"123" === 123 : ${"123" === 123}`)
console.log(`"123" != 123 : ${"123" != 123}`)
console.log(`"123" !== 123 : ${"123" !== 123}`)



