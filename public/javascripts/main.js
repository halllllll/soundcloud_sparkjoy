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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/checkForm.js":
/*!**************************!*\
  !*** ./src/checkForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkForm; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar checkForm =\n/*#__PURE__*/\nfunction () {\n  function checkForm(account_form, form_btn, label_alt, myform) {\n    var _this = this;\n\n    _classCallCheck(this, checkForm);\n\n    this.account_form = account_form;\n    this.form_btn = form_btn;\n    this.label_alt = label_alt;\n    this.myform = myform;\n    this.account_form.addEventListener(\"input\", function (e) {\n      // アンチパターン踏み抜きですかね\n      var self = _this;\n\n      _this.listenOn(self, e);\n    });\n    this.myform.addEventListener(\"keypress\", function (e) {\n      var self = _this;\n\n      _this.preventSubmit(self, e);\n    });\n    this.form_btn.addEventListener(\"click\", function (e) {\n      var self = _this;\n\n      _this.submitAsync(self, e);\n    });\n  }\n\n  _createClass(checkForm, [{\n    key: \"submitAsync\",\n    value: function submitAsync(self, e) {\n      console.log(\"やろうね\");\n      e.preventDefault();\n      e.stopPropagation();\n\n      if (self.form_btn.getAttribute(\"disabled\") === null) {\n        fetch(\"/\", {\n          method: \"POST\",\n          headers: {\n            \"Content-Type\": \"application/json; charset=UTF-8\"\n          },\n          body: JSON.stringify({\n            \"name\": self.account_name,\n            \"age\": 10\n          })\n        }).then(function (res) {\n          console.log(\"post complete!\");\n          console.log(res.headers.get('Content-Type'));\n          return res.json();\n        }).then(function (body) {\n          console.log(body);\n\n          if (body.status === \"success\" && body.name) {\n            self.label_alt.textContent = body.name;\n          }\n        });\n      } else {\n        console.log(\"submitできないよ\");\n      }\n\n      return;\n    }\n  }, {\n    key: \"preventSubmit\",\n    value: function preventSubmit(self, e) {\n      if (e.which === 13) {\n        console.log(\"enter禁止です!\");\n        e.preventDefault(); // this.submitAsync(self, e);\n      }\n    }\n  }, {\n    key: \"listenOn\",\n    value: function listenOn(self, e) {\n      this.account_name = self.account_form.value.trim();\n\n      if (this.isInvalidname(this.account_name)) {\n        self.form_btn.setAttribute(\"disabled\", true);\n        self.label_alt.textContent = \"invalid name.\";\n        if (this.account_name === \"\") self.label_alt.textContent = \" \";\n        return;\n      }\n\n      self.form_btn.removeAttribute(\"disabled\");\n      self.label_alt.textContent = \" \";\n    }\n  }, {\n    key: \"isInvalidname\",\n    value: function isInvalidname(name) {\n      if (!name) {\n        return true;\n      } // 文中に空白なし 英数字とハイフン,アンダースコアのみ\n\n\n      var pattern = /^[-_a-z0-9]+$/g;\n      var blanky = name.indexOf(\" \") >= 1;\n      var regexresult = name.match(pattern);\n\n      if (regexresult == null || blanky) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }]);\n\n  return checkForm;\n}();\n\n\n\n//# sourceURL=webpack:///./src/checkForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkForm */ \"./src/checkForm.js\");\n\nvar sc_account = document.getElementById(\"sc_account\");\nvar label_alt = document.getElementById(\"label_alt\");\nvar form_btn = document.getElementById(\"go_btn\");\nvar myForm = document.getElementById(\"myForm\");\nvar go_btn = new _checkForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"](sc_account, form_btn, label_alt, myForm);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });