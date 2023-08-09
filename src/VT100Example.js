import VT100 from "./util/VT100.js";


VT100.clearScreen()

VT100.cursorMove(10,20)
VT100.setForeground(31)
VT100.setBackground(44)
VT100.print("Hello")


VT100.cursorMove(12,27)
VT100.setForeground(34)
VT100.setBackground(43)
VT100.print("JavaScript")



VT100.reset()
VT100.print("")
VT100.print("프로그램 끝!")