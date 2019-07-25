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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/application.js":
/*!****************************************!*\
  !*** ./src/javascripts/application.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// ページ遷移機能\nvar hundle=document.querySelector(\".hundle\");var view=document.querySelector(\".main-container\");hundle.children[0].addEventListener(\"click\",function num1(){view.children[0].style.display=\"block\";view.children[1].style.display=\"none\";view.children[2].style.display=\"none\";console.log(view.children[0]);});hundle.children[1].addEventListener(\"click\",function num2(){view.children[0].style.display=\"none\";view.children[1].style.display=\"block\";view.children[2].style.display=\"none\";console.log(view.children[1]);});hundle.children[2].addEventListener(\"click\",function num3(){view.children[0].style.display=\"none\";view.children[1].style.display=\"none\";view.children[2].style.display=\"block\";console.log(view.children[2]);});// contact機能\nvar screen=document.querySelector(\".message-container\");var textInput=document.querySelector(\".text-input\");var nameInput=document.querySelector(\".name-input\");var submit=document.querySelector(\".submit\");console.log(submit);var modal=document.querySelector(\".modal\");var modalOverLay=document.querySelector(\".modal-overlay\");var dModal=document.querySelector(\".x-mark\");// モーダル出現\nscreen.addEventListener(\"click\",function(evt){modalOverLay.style.display=\"block\";modal.style.display=\"block\";});// モーダル消える\ndModal.addEventListener(\"click\",function(evt){modalOverLay.style.display=\"none\";modal.style.display=\"none\";});// チャット入力\n// nameがmasterなら左側に出力それ以外なら右側に出力\n// textが空なら表示されない\nsubmit.addEventListener(\"click\",function(evt){if(textInput.value!==''){if(nameInput.value==='master'){screen.innerHTML+='<div class=\"master-comment\"><div class=\"output-name\"><p class=\"on\">'+nameInput.value+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}else if(nameInput.value===''){screen.innerHTML+='<div class=\"comment\"><div class=\"output-name\"><p class=\"on\">'+'user'+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}else{screen.innerHTML+='<div class=\"comment\"><div class=\"output-name\"><p class=\"on\">'+nameInput.value+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}modalOverLay.style.display=\"none\";modal.style.display=\"none\";}});// エンターキーでも発火\nmodal.addEventListener(\"keypress\",function(evt){if(evt.key==='Enter'){if(textInput.value!==''){if(nameInput.value==='master'){screen.innerHTML+='<div class=\"master-comment\"><div class=\"output-name\"><p class=\"on\">'+nameInput.value+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}else if(nameInput.value===''){screen.innerHTML+='<div class=\"comment\"><div class=\"output-name\"><p class=\"on\">'+'user'+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}else{screen.innerHTML+='<div class=\"comment\"><div class=\"output-name\"><p class=\"on\">'+nameInput.value+'</p></div><div class=\"output-text\"><p class=\"ot\">'+textInput.value+'</p></div></div>';textInput.value=\"\";nameInput.value=\"\";}modalOverLay.style.display=\"none\";modal.style.display=\"none\";}}});\n\n//# sourceURL=webpack:///./src/javascripts/application.js?");

/***/ })

/******/ });