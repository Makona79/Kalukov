/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_components.js":
/*!**********************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_components.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_functions.js":
/*!*********************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_functions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
//import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form', rules1, afterForm);

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_vars.js":
/*!****************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_vars.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/modal.js":
/*!***************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/modal.js ***!
  \***************************************************************************************/
/***/ (() => {

console.log('Modal');
class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {}
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.events();
  }
  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-path]');
        if (clickedElement) {
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }
        if (e.target.closest('.modal-close')) {
          this.close();
          return;
        }
      }.bind(this));
      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }
        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));
      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }
  open() {
    this.previousActiveElement = document.activeElement;
    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();
    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);
    setTimeout(() => {
      this.options.isOpen(this);
      this.modalContainer.classList.add('animate-open');
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }
  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');
      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  }
  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);
    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }
  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }
  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }
  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }
  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }
  unlockPadding() {
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}
const modal = new Modal();

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/burger.js":
/*!***************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/burger.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/enable-scroll.js");


(function () {
  var _document, _document2, _document3, _document4;
  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/disable-scroll.js":
/*!***********************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/disable-scroll.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_vars.js");

const disableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/enable-scroll.js":
/*!**********************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/enable-scroll.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_vars.js");

const enableScroll = () => {
  var _document;
  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/main.js ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_components.js");
// import './_vendor';
// import vars from './_vars';


})();

/******/ })()
;
//# sourceMappingURL=main.js.map