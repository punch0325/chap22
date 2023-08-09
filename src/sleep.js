import sleep from 'es7-sleep'


/*
- 터미널에서 npm install es7-sleep을 사용하여 sleep을 설치 (package.json에 추가 되었는지 확인) 
*/


async function main(){
	console.log("프로그램 시작...");
	
	for(let i =0; i<10; i++){
		await sleep(1000);
		console.log(i);
	}
	
	console.log("프로그램 종료...");
}

main();