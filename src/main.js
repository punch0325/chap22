


//출력메소드를 이용한 함수
function mian() {
	console.log("함수 시작!");

	console.log(isNaN(NaN))
	
	console.log(parseInt(Math.random()*10+1));

	console.log("함수 끝!");
}

mian();


let num = 10;
process.stdout.write(num+""); // process.stdout.write 메소드는 문자열만 출력이 가능하기 때문에 숫자를 출력하려면 문자열도 넣어주어야함