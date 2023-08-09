


console.log(typeof 100);
console.log(typeof 10.5);// typeof : 자료(데이터, 값)의 타입을 알려주는 명령어, 변수의 타입이 아니다!!
// 자바스크립트는 자바의 int 나 double처럼 정수와 실수의 타입이 따로 나뉘어지지 않고 number타입으로 통합이다. 그리고 기본적으로 실수로 나타난다.


console.log(typeof 100n); // 숫자 뒤에 n을 붙여주면 정수형이 된다. (bigint)
console.log(parseInt(10n/3n));


console.log(typeof '꺄');
console.log(typeof "꺄꺄꺄");

// `` (탭 위에 있는 기호, 백틱이라고 함 ) : 백팁도 문자열 타입을 표현할 수 있고 new line도 먹힌다
console.log( `
Hello World,
Hello JavaScript
`);



console.log(`

Hello?
${10+5} 
`);    //백틱안에 자바스크립트의 템플릿 문자열 $ {   }을 넣으면 연산식의 결과나 number형 변수 값도 출력가능



const num = 100;  //const : 상수 선언, 자바의 final과 같다
console.log(num) 
//num = 200; ▷ num이 const 변수이기 때문에 값을 다시 대입하려고 하면 오류난다.





