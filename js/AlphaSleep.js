/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/es7-sleep/index.js":
/*!*****************************************!*\
  !*** ./node_modules/es7-sleep/index.js ***!
  \*****************************************/
/***/ ((module, exports) => {

"use strict";
eval("\n\nfunction sleep(time) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve();\n        }, time)\n    });\n}\n\nmodule.exports = exports = sleep;\n\n\n//# sourceURL=webpack://chap22/./node_modules/es7-sleep/index.js?");

/***/ }),

/***/ "./node_modules/sprintf-js/src/sprintf.js":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */\n\n!function() {\n    'use strict'\n\n    var re = {\n        not_string: /[^s]/,\n        not_bool: /[^t]/,\n        not_type: /[^T]/,\n        not_primitive: /[^v]/,\n        number: /[diefg]/,\n        numeric_arg: /[bcdiefguxX]/,\n        json: /[j]/,\n        not_json: /[^j]/,\n        text: /^[^\\x25]+/,\n        modulo: /^\\x25{2}/,\n        placeholder: /^\\x25(?:([1-9]\\d*)\\$|\\(([^)]+)\\))?(\\+)?(0|'[^$])?(-)?(\\d+)?(?:\\.(\\d+))?([b-gijostTuvxX])/,\n        key: /^([a-z_][a-z_\\d]*)/i,\n        key_access: /^\\.([a-z_][a-z_\\d]*)/i,\n        index_access: /^\\[(\\d+)\\]/,\n        sign: /^[+-]/\n    }\n\n    function sprintf(key) {\n        // `arguments` is not an array, but should be fine for this call\n        return sprintf_format(sprintf_parse(key), arguments)\n    }\n\n    function vsprintf(fmt, argv) {\n        return sprintf.apply(null, [fmt].concat(argv || []))\n    }\n\n    function sprintf_format(parse_tree, argv) {\n        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign\n        for (i = 0; i < tree_length; i++) {\n            if (typeof parse_tree[i] === 'string') {\n                output += parse_tree[i]\n            }\n            else if (typeof parse_tree[i] === 'object') {\n                ph = parse_tree[i] // convenience purposes only\n                if (ph.keys) { // keyword argument\n                    arg = argv[cursor]\n                    for (k = 0; k < ph.keys.length; k++) {\n                        if (arg == undefined) {\n                            throw new Error(sprintf('[sprintf] Cannot access property \"%s\" of undefined value \"%s\"', ph.keys[k], ph.keys[k-1]))\n                        }\n                        arg = arg[ph.keys[k]]\n                    }\n                }\n                else if (ph.param_no) { // positional argument (explicit)\n                    arg = argv[ph.param_no]\n                }\n                else { // positional argument (implicit)\n                    arg = argv[cursor++]\n                }\n\n                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {\n                    arg = arg()\n                }\n\n                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {\n                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))\n                }\n\n                if (re.number.test(ph.type)) {\n                    is_positive = arg >= 0\n                }\n\n                switch (ph.type) {\n                    case 'b':\n                        arg = parseInt(arg, 10).toString(2)\n                        break\n                    case 'c':\n                        arg = String.fromCharCode(parseInt(arg, 10))\n                        break\n                    case 'd':\n                    case 'i':\n                        arg = parseInt(arg, 10)\n                        break\n                    case 'j':\n                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)\n                        break\n                    case 'e':\n                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()\n                        break\n                    case 'f':\n                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)\n                        break\n                    case 'g':\n                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)\n                        break\n                    case 'o':\n                        arg = (parseInt(arg, 10) >>> 0).toString(8)\n                        break\n                    case 's':\n                        arg = String(arg)\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 't':\n                        arg = String(!!arg)\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'T':\n                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'u':\n                        arg = parseInt(arg, 10) >>> 0\n                        break\n                    case 'v':\n                        arg = arg.valueOf()\n                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)\n                        break\n                    case 'x':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16)\n                        break\n                    case 'X':\n                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()\n                        break\n                }\n                if (re.json.test(ph.type)) {\n                    output += arg\n                }\n                else {\n                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {\n                        sign = is_positive ? '+' : '-'\n                        arg = arg.toString().replace(re.sign, '')\n                    }\n                    else {\n                        sign = ''\n                    }\n                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '\n                    pad_length = ph.width - (sign + arg).length\n                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''\n                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)\n                }\n            }\n        }\n        return output\n    }\n\n    var sprintf_cache = Object.create(null)\n\n    function sprintf_parse(fmt) {\n        if (sprintf_cache[fmt]) {\n            return sprintf_cache[fmt]\n        }\n\n        var _fmt = fmt, match, parse_tree = [], arg_names = 0\n        while (_fmt) {\n            if ((match = re.text.exec(_fmt)) !== null) {\n                parse_tree.push(match[0])\n            }\n            else if ((match = re.modulo.exec(_fmt)) !== null) {\n                parse_tree.push('%')\n            }\n            else if ((match = re.placeholder.exec(_fmt)) !== null) {\n                if (match[2]) {\n                    arg_names |= 1\n                    var field_list = [], replacement_field = match[2], field_match = []\n                    if ((field_match = re.key.exec(replacement_field)) !== null) {\n                        field_list.push(field_match[1])\n                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {\n                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {\n                                field_list.push(field_match[1])\n                            }\n                            else {\n                                throw new SyntaxError('[sprintf] failed to parse named argument key')\n                            }\n                        }\n                    }\n                    else {\n                        throw new SyntaxError('[sprintf] failed to parse named argument key')\n                    }\n                    match[2] = field_list\n                }\n                else {\n                    arg_names |= 2\n                }\n                if (arg_names === 3) {\n                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')\n                }\n\n                parse_tree.push(\n                    {\n                        placeholder: match[0],\n                        param_no:    match[1],\n                        keys:        match[2],\n                        sign:        match[3],\n                        pad_char:    match[4],\n                        align:       match[5],\n                        width:       match[6],\n                        precision:   match[7],\n                        type:        match[8]\n                    }\n                )\n            }\n            else {\n                throw new SyntaxError('[sprintf] unexpected placeholder')\n            }\n            _fmt = _fmt.substring(match[0].length)\n        }\n        return sprintf_cache[fmt] = parse_tree\n    }\n\n    /**\n     * export to either browser or node.js\n     */\n    /* eslint-disable quote-props */\n    if (true) {\n        exports.sprintf = sprintf\n        exports.vsprintf = vsprintf\n    }\n    if (typeof window !== 'undefined') {\n        window['sprintf'] = sprintf\n        window['vsprintf'] = vsprintf\n\n        if (true) {\n            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {\n                return {\n                    'sprintf': sprintf,\n                    'vsprintf': vsprintf\n                }\n            }).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n        }\n    }\n    /* eslint-enable quote-props */\n}(); // eslint-disable-line\n\n\n//# sourceURL=webpack://chap22/./node_modules/sprintf-js/src/sprintf.js?");

/***/ }),

/***/ "./src/AlphaExample2.js":
/*!******************************!*\
  !*** ./src/AlphaExample2.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sprintf-js */ \"./node_modules/sprintf-js/src/sprintf.js\");\n/* harmony import */ var _util_VT100_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/VT100.js */ \"./src/util/VT100.js\");\n/* harmony import */ var _util_alpha_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/alpha.js */ \"./src/util/alpha.js\");\n/* harmony import */ var es7_sleep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! es7-sleep */ \"./node_modules/es7-sleep/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nasync function main(){\r\n\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearScreen();\r\n\t\r\n\tfor(let i=0; i<1000; i++){\r\n\t\tlet alpha = new _util_alpha_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\t\talpha.show();\t\r\n\t\tawait es7_sleep__WEBPACK_IMPORTED_MODULE_3__(10);\r\n\t\t\r\n\t\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cursorMove(1,43)\r\n\t\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reset()\r\n\t\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].print((0,sprintf_js__WEBPACK_IMPORTED_MODULE_0__.sprintf)(\"count = [%04d]\",i));\r\n\t}\r\n\r\n\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].reset();\r\n\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cursorMove(21,1);\r\n\t_util_VT100_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].print(\"프로그램 끝\")\r\n\r\n}\r\n\r\n\r\nmain();\r\n\r\n\n\n//# sourceURL=webpack://chap22/./src/AlphaExample2.js?");

/***/ }),

/***/ "./src/util/VT100.js":
/*!***************************!*\
  !*** ./src/util/VT100.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 자바스크립트의 클래스는 똑같이 자바스크립트 파일로 새로 열고 직접 클래스를 입력해주면 됨ㄴ\r\nclass VT100{\r\n\t\r\n\t//자바스크립트에서의 메소드나 함수는 타입이 없다. 그래서 void도 명시하지 않음\r\n\tstatic clearScreen(){\r\n\t\tprocess.stdout.write(\"\\u001B[2J\")\r\n\t}\r\n\t\r\n\tstatic cursorMove(line, col){\r\n\t\tprocess.stdout.write(`\\u001B[${line};${col}H`)\r\n\t}\r\n\t\r\n\tstatic setForeground(fg){\r\n\t\tprocess.stdout.write(`\\u001B[${fg}m`)\r\n\t}\r\n\t\r\n\tstatic setBackground(bg){\r\n\t\tprocess.stdout.write(`\\u001B[${bg}m`)\r\n\t}\r\n\t\r\n\tstatic reset(){\r\n\t\tprocess.stdout.write(`\\u001B[0m`)\r\n\t}\r\n\t\r\n\tstatic print(str){\r\n\t\tconsole.log(str+\" \")\r\n\t}\r\n\t\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VT100);\r\n// export를 명시해주어야 다른 파일에서 사용가능함 \n\n//# sourceURL=webpack://chap22/./src/util/VT100.js?");

/***/ }),

/***/ "./src/util/alpha.js":
/*!***************************!*\
  !*** ./src/util/alpha.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _VT100_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VT100.js */ \"./src/util/VT100.js\");\n   //import할때 확장자가 안붙으면 직접 붙여주어야 함\r\n\r\nclass Alpha{\r\n\t//자바스크립트에서 필드를 선언할 땐 let을 붙이지 않는다.\r\n\tline = 0;\r\n\tcol = 0;\r\n\tfg = 0;\r\n\tbg = 0;\r\n\tch = \"\";\r\n\t\r\n\t//자바는 생성자의 이름이 클래스 이름과 동일해야하지만, 자바스크립트는 그냥 무조건 constructor임\r\n\tconstructor(){\r\n\t\t// 자바스크립트는 this를 무조건 붙여주어야함\r\n\t\tthis.line = parseInt(Math.random()*20+1);\r\n\t\tthis.col = parseInt(Math.random()*40+1);\r\n\t\t\r\n\t\tdo{\r\n\t\t\tthis.fg= parseInt(Math.random()*8+30);\r\n\t\t\tthis.bg = parseInt(Math.random()*8+40);\r\n\t\t}while(this.fg+10==this.bg)\r\n\t\t\r\n\t\tthis.ch = parseInt(Math.random()*26+\"A\".charCodeAt());\r\n\t\tthis.ch = String.fromCharCode(this.ch);\r\n\t}\r\n\t\r\n\tshow(){\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cursorMove(this.line, this.col)\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setForeground(this.fg)\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setBackground(this.bg)\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].print(this.ch)\r\n\t}\r\n\t\r\n\thide(){\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cursorMove(this.line, this.col)\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reset()\r\n\t\t_VT100_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].print(\" \")\r\n\t}\t\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alpha);\n\n//# sourceURL=webpack://chap22/./src/util/alpha.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/AlphaExample2.js");
/******/ 	
/******/ })()
;