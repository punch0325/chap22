import VT100 from "./VT100.js";   //import할때 확장자가 안붙으면 직접 붙여주어야 함

class Alpha{
	//자바스크립트에서 필드를 선언할 땐 let을 붙이지 않는다.
	line = 0;
	col = 0;
	fg = 0;
	bg = 0;
	ch = "";
	
	//자바는 생성자의 이름이 클래스 이름과 동일해야하지만, 자바스크립트는 그냥 무조건 constructor임
	constructor(){
		// 자바스크립트는 this를 무조건 붙여주어야함
		this.line = parseInt(Math.random()*20+1);
		this.col = parseInt(Math.random()*40+1);
		
		do{
			this.fg= parseInt(Math.random()*8+30);
			this.bg = parseInt(Math.random()*8+40);
		}while(this.fg+10==this.bg)
		
		this.ch = parseInt(Math.random()*26+"A".charCodeAt());
		this.ch = String.fromCharCode(this.ch);
	}
	
	show(){
		VT100.cursorMove(this.line, this.col)
		VT100.setForeground(this.fg)
		VT100.setBackground(this.bg)
		VT100.print(this.ch)
	}
	
	hide(){
		VT100.cursorMove(this.line, this.col)
		VT100.reset()
		VT100.print(" ")
	}	
}


export default Alpha