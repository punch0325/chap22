import { sprintf } from "sprintf-js";
import VT100 from "./util/VT100.js";
import Alpha from "./util/alpha.js";
import sleep from 'es7-sleep'


async function main(){
	VT100.clearScreen();
	
	for(let i=0; i<1000; i++){
		let alpha = new Alpha();
		alpha.show();	
		await sleep(10);
		
		VT100.cursorMove(1,43)
		VT100.reset()
		VT100.print(sprintf("count = [%04d]",i));
	}

	VT100.reset();
	VT100.cursorMove(21,1);
	VT100.print("프로그램 끝")

}


main();

