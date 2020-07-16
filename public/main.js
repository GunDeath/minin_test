/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log('JS is working ... '); //index.html
//letter send form

var letterForm_hePay = document.getElementById('he_pay'),
    letterForm_wePay = document.getElementById('we_must_pay');
var btn_back = document.getElementById('btn_back'); //money form

var first_field = document.getElementById('first_field'),
    second_field = document.getElementById('second_field'),
    coefficient_one = 0.95,
    coefficient_two = 1.05; // const change_btn = document.getElementById('change_btn'); // btn form HeWePay
////////////////////////////////////////////////////////////////////
//about_two.html

var field_value = document.getElementById('form_input_one'),
    phone_number = document.getElementById('form_input_two'),
    my_pay = document.getElementById('form_input_tree');

if (first_field) {
  first_field.addEventListener('input', function () {
    if (first_field.value >= 100) {
      second_field.value = (first_field.value * coefficient_one).toFixed(1);
    } else {
      second_field.value = 0;
    }
  });
}

if (second_field) {
  second_field.addEventListener('input', function () {
    if (second_field.value >= 100) {
      first_field.value = (second_field.value * coefficient_two).toFixed(1);
    } else {
      first_field.value = 0;
    }
  });
} // if(change_btn){
//     change_btn.addEventListener('click', () => {
//         document.getElementById('fields_id').style.display = 'none'
//         document.getElementById('text_main_block').style.display = 'none'
//         document.getElementById('number_form').style.display = 'block'
//
//         letterForm_hePay.value = Number(first_field.value);
//         letterForm_wePay.value = Number(second_field.value);
//         console.log(`HePay: ${letterForm_hePay.value}; WePay: ${letterForm_wePay.value}`)
//     })
// }


if (btn_back) {
  btn_back.addEventListener('click', function () {
    document.getElementById('fields_id').style.display = null;
    document.getElementById('text_main_block').style.display = null;
    document.getElementById('number_form').style.display = 'none';
    console.log('click');
  });
}

if (field_value) {
  console.log(Number(field_value.value));
  console.log(_typeof(field_value.value));
  console.log(_typeof(Number(field_value.value)));
  console.log(Number(phone_number.value));
  console.log(_typeof(phone_number.value));
  console.log(_typeof(Number(phone_number.value)));
  console.log(Number(my_pay.value));
  console.log(_typeof(my_pay.value));
  console.log(_typeof(Number(my_pay.value)));
}

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/script */ "./js/script.js");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map