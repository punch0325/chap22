import VT100 from "./util/VT100.js";
import Alpha from "./util/alpha.js";


VT100.clearScreen();
for(let i=0; i<1000; i++){
	//alpha 클래스 객체를 선언할 때에도 클래스 타입이 아니라 let으로 선언함
	let alpha = new Alpha();
	alpha.show();
	
}

VT100.reset();
VT100.cursorMove(20,1);
VT100.print("프로그램 끝!")

