// 자바스크립트의 클래스는 똑같이 자바스크립트 파일로 새로 열고 직접 클래스를 입력해주면 됨ㄴ
class VT100{
	
	//자바스크립트에서의 메소드나 함수는 타입이 없다. 그래서 void도 명시하지 않음
	static clearScreen(){
		process.stdout.write("\u001B[2J")
	}
	
	static cursorMove(line, col){
		process.stdout.write(`\u001B[${line};${col}H`)
	}
	
	static setForeground(fg){
		process.stdout.write(`\u001B[${fg}m`)
	}
	
	static setBackground(bg){
		process.stdout.write(`\u001B[${bg}m`)
	}
	
	static reset(){
		process.stdout.write(`\u001B[0m`)
	}
	
	static print(str){
		console.log(str+" ")
	}
	
}

export default VT100
// export를 명시해주어야 다른 파일에서 사용가능함 