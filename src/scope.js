


for(var i =1; i<11; i++){
	console.log(i);
}

console.log("for문 밖 i : "+i);
// var 는 초창기 자바스크립트의 변수 선언 명령어이다. 
// 위의 for문에서 만약 let으로 i를 선언했다면, i는 for문 안에서만 쓸 수 있는 지역변수이기 때문에 for문 밖의 실행문에서 i는 에러가 난다.
// 하지만 var로 선언하면 scope의 경계가 없기 때문에 for문 밖에서도 사용 가능하다.

