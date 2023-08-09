import { sprintf } from "sprintf-js";


let line = parseInt(Math.random()*20+1); //parseInt는 자바의 casting처럼 형변환을 시키는 게 아니라 그냥 소수 부분을 잘라내주는 것
let col = parseInt(Math.random()*40+1);
let fg = parseInt(Math.random()*8+30);
let bg = parseInt(Math.random()*8+40);
let ch = parseInt(Math.random()*26+'A'.charCodeAt()); // char타입이 없기 때문에 charCodeAt메소드로 해당 알파벳의 아스키코드를 얻어냄
ch = String.fromCharCode(ch); //얻어낸 아스키 코드를 문자열로 변환


console.log(`[${line}, ${col}, ${fg}, ${bg}, ${ch}]`); //Back tic 사용 예제
console.log(sprintf("[%02d, %02d, %02d, %02d, %s]" , line ,col, fg, bg, ch))


console.log("A".codePointAt()); //A알파벳의 아스키 코드를 얻어내는 문법

console.log("ABCD"[1]); // 자바스크립트는 문자열을 배열처럼 사용 가능 ABCD라는 문자열 중에서 1 인덱스의 값을 출력
console.log("ABCD"[1].charCodeAt()); // 이런식으로 배열에서도 아스키코드를 얻어낼 수 있음