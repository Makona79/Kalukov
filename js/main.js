/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#Проекты/anime/src/js/_components.js":
/*!***************************************************!*\
  !*** ../../ #Проекты/anime/src/js/_components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "../../\u0000#Проекты/anime/src/js/components/modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "../../\u0000#Проекты/anime/src/js/components/scroll.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/show-more */ "../../\u0000#Проекты/anime/src/js/components/show-more.js");
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_show_more__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/_functions.js":
/*!**************************************************!*\
  !*** ../../ #Проекты/anime/src/js/_functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "../../\u0000#Проекты/anime/src/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "../../\u0000#Проекты/anime/src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

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
// import SmoothScroll from "smooth-scroll";
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

/***/ "../../\u0000#Проекты/anime/src/js/_vars.js":
/*!*********************************************!*\
  !*** ../../ #Проекты/anime/src/js/_vars.js ***!
  \*********************************************/
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

/***/ "../../\u0000#Проекты/anime/src/js/_vendor.js":
/*!***********************************************!*\
  !*** ../../ #Проекты/anime/src/js/_vendor.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "../../\u0000#Проекты/anime/src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/particles.js */ "../../\u0000#Проекты/anime/src/js/vendor/particles.js");
/* harmony import */ var _vendor_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/app.js */ "../../\u0000#Проекты/anime/src/js/vendor/app.js");
/* harmony import */ var _vendor_app_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_app_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/components/modal.js":
/*!********************************************************!*\
  !*** ../../ #Проекты/anime/src/js/components/modal.js ***!
  \********************************************************/
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

/***/ "../../\u0000#Проекты/anime/src/js/components/scroll.js":
/*!*********************************************************!*\
  !*** ../../ #Проекты/anime/src/js/components/scroll.js ***!
  \*********************************************************/
/***/ (() => {

let scr_body = document.querySelector("body");
let scr_blocks = document.querySelectorAll("._scr-sector");
let scr_items = document.querySelectorAll("._scr-item");
let scr_fix_block = document.querySelectorAll("._side-wrapper");
let scr_min_height = 750;
let scrolling = true;
let scrolling_full = true;
let scrollDirection = 0;
let currentScroll;

//ScrollOnScroll
window.addEventListener("scroll", scroll_scroll);
function scroll_scroll() {
  let src_value = currentScroll = pageYOffset;
  let header = document.querySelector("header.header");
  if (header !== null) {
    if (src_value > 10) {
      header.classList.add("_scroll");
    } else {
      header.classList.remove("_scroll");
    }
  }
  if (scr_blocks.length > 0) {
    for (let index = 0; index < scr_blocks.length; index++) {
      let block = scr_blocks[index];
      let block_offset = offset(block).top;
      let block_height = block.offsetHeight;

      /*
      if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
      let scrProcent = (src_value - block_offset) / block_height * 100;
      scrParallax(block, scrProcent, block_height);
      }
      */

      if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        block.classList.add("_scr-sector_active");
      } else {
        if (block.classList.contains("_scr-sector_active")) {
          block.classList.remove("_scr-sector_active");
        }
      }
      if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        if (!block.classList.contains("_scr-sector_current")) {
          block.classList.add("_scr-sector_current");
        }
      } else {
        if (block.classList.contains("_scr-sector_current")) {
          block.classList.remove("_scr-sector_current");
        }
      }
    }
  }
  if (scr_items.length > 0) {
    for (let index = 0; index < scr_items.length; index++) {
      let scr_item = scr_items[index];
      let scr_item_offset = offset(scr_item).top;
      let scr_item_height = scr_item.offsetHeight;
      let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }
      if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
        scr_item.classList.add("_active");
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove("_active");
      }
      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll("._lazy").length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }
  if (scr_fix_block.length > 0) {
    fix_block(scr_fix_block, src_value);
  }
  let custom_scroll_line = document.querySelector("._custom-scroll__line");
  if (custom_scroll_line) {
    let window_height = window.innerHeight;
    let content_height = document.querySelector(".wrapper").offsetHeight;
    let scr_procent = pageYOffset / (content_height - window_height) * 100;
    let custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
  }
  if (src_value > scrollDirection) {
    // downscroll code
  } else {
    // upscroll code
  }
  scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);
function scroll_lazy(scr_item) {
  let lazy_src = scr_item.querySelectorAll("*[data-src]");
  if (lazy_src.length > 0) {
    for (let index = 0; index < lazy_src.length; index++) {
      const el = lazy_src[index];
      if (!el.classList.contains("_loaded")) {
        el.setAttribute("src", el.getAttribute("data-src"));
        el.classList.add("_loaded");
      }
    }
  }
  let lazy_srcset = scr_item.querySelectorAll("*[data-srcset]");
  if (lazy_srcset.length > 0) {
    for (let index = 0; index < lazy_srcset.length; index++) {
      const el = lazy_srcset[index];
      if (!el.classList.contains("_loaded")) {
        el.setAttribute("srcset", el.getAttribute("data-srcset"));
        el.classList.add("_loaded");
      }
    }
  }
}
function scroll_load_item(scr_item) {
  if (scr_item.classList.contains("_load-map") && !scr_item.classList.contains("_loaded-map")) {
    let map_item = document.getElementById("map");
    if (map_item) {
      scr_item.classList.add("_loaded-map");
      map();
    }
  }
}
function scrParallax(block, scrProcent, blockHeight) {
  let prlxItems = block.querySelectorAll("._prlx-item");
  if (prlxItems.length > 0) {
    for (let index = 0; index < prlxItems.length; index++) {
      const prlxItem = prlxItems[index];
      let prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
      const prlxItemValue = -1 * (blockHeight / 100 * scrProcent / prlxItemAttr);
      prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
    }
  }
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener("wheel", full_scroll);
  let swiperScrolls = document.querySelectorAll("._swiper_scroll");
  if (swiperScrolls.length > 0) {
    for (let index = 0; index < swiperScrolls.length; index++) {
      const swiperScroll = swiperScrolls[index];
      swiperScroll.addEventListener("mouseenter", function (e) {
        window.removeEventListener("wheel", full_scroll);
      });
      swiperScroll.addEventListener("mouseleave", function (e) {
        window.addEventListener("wheel", full_scroll);
      });
    }
  }
}
function getPrevBlockPos(current_block_prev) {
  let viewport_height = window.innerHeight;
  let current_block_prev_height = current_block_prev.offsetHeight;
  let block_pos = offset(current_block_prev).top;
  if (current_block_prev_height >= viewport_height) {
    block_pos = block_pos + (current_block_prev_height - viewport_height);
  }
  return block_pos;
}
function full_scroll(e) {
  let viewport_height = window.innerHeight;
  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      let current_block = document.querySelector("._scr-sector._scr-sector_current");
      let current_block_pos = offset(current_block).top;
      let current_block_height = current_block.offsetHeight;
      let current_block_next = current_block.nextElementSibling;
      let current_block_prev = current_block.previousElementSibling;
      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_prev) {
            full_scroll_to_sector(getPrevBlockPos(current_block_prev));
          }
        } else {
          enableScroll();
          if (currentScroll <= current_block_pos) {
            if (current_block_prev) {
              full_scroll_to_sector(getPrevBlockPos(current_block_prev));
            }
          }
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            full_scroll_to_sector(block_pos);
          }
        } else {
          enableScroll();
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            if (currentScroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}
function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;
  _goto(pos, 800);
  let scr_pause = 500;
  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  }
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}
function full_scroll_pagestart() {}
function full_scroll_pageend() {}

//ScrollOnClick (Navigation)
let link = document.querySelectorAll("._goto-block");
if (link) {
  let blocks = [];
  for (let index = 0; index < link.length; index++) {
    let el = link[index];
    let block_name = el.getAttribute("href").replace("#", "");
    if (block_name != "" && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }
    el.addEventListener("click", function (e) {
      if (document.querySelector(".menu__body._active")) {
        menu_close();
        body_lock_remove(500);
      }
      let target_block_class = el.getAttribute("href").replace("#", "");
      let target_block = document.querySelector("." + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
  window.addEventListener("scroll", function (el) {
    let old_current_link = document.querySelectorAll("._goto-block._active");
    if (old_current_link) {
      for (let index = 0; index < old_current_link.length; index++) {
        let el = old_current_link[index];
        el.classList.remove("_active");
      }
    }
    for (let index = 0; index < blocks.length; index++) {
      let block = blocks[index];
      let block_item = document.querySelector("." + block);
      if (block_item) {
        let block_offset = offset(block_item).top;
        let block_height = block_item.offsetHeight;
        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
          for (let index = 0; index < current_links.length; index++) {
            let current_link = current_links[index];
            current_link.classList.add("_active");
          }
        }
      }
    }
  });
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll("._goto");
if (goto_links) {
  for (let index = 0; index < goto_links.length; index++) {
    let goto_link = goto_links[index];
    goto_link.addEventListener("click", function (e) {
      let target_block_class = goto_link.getAttribute("href").replace("#", "");
      let target_block = document.querySelector("." + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
}
function _goto(target_block, speed) {
  let offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let header = "";
  //OffsetHeader
  //if (window.innerWidth < 992) {
  //	header = 'header';
  //}
  let options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: "easeOutQuad"
  };
  let scr = new SmoothScroll();
  scr.animateScroll(target_block, "", options);
}

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}
function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener) window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
  preventDefault(e);
  return false;
  }*/
}
function fix_block(scr_fix_block, scr_value) {
  let window_width = parseInt(window.innerWidth);
  let window_height = parseInt(window.innerHeight);
  let header_height = parseInt(document.querySelector("header").offsetHeight) + 15;
  for (let index = 0; index < scr_fix_block.length; index++) {
    const block = scr_fix_block[index];
    let block_width = block.getAttribute("data-width");
    const item = block.querySelector("._side-block");
    if (!block_width) {
      block_width = 0;
    }
    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
        } else {
          gotoRelative(item);
        }
        if (scr_value > block.offsetHeight + offset(block).top - (item.offsetHeight + (header_height + 15))) {
          block.style.cssText = "position:relative;";
          item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
        }
      } else {
        gotoRelative(item);
      }
    }
  }
  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}
function custom_scroll(event) {
  scr_body.style.overflow = "hidden";
  let window_height = window.innerHeight;
  let custom_scroll_line = document.querySelector("._custom-scroll__line");
  let custom_scroll_content_height = document.querySelector(".wrapper").offsetHeight;
  let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      let custom_scroll = document.createElement("div");
      custom_scroll_line = document.createElement("div");
      custom_scroll.setAttribute("class", "_custom-scroll");
      custom_scroll_line.setAttribute("class", "_custom-scroll__line");
      custom_scroll.appendChild(custom_scroll_line);
      scr_body.appendChild(custom_scroll);
    }
    custom_scroll_line.style.height = custom_cursor_height + "px";
  }
}
let new_pos = pageYOffset;
function scroll_animate(event) {
  let window_height = window.innerHeight;
  let content_height = document.querySelector(".wrapper").offsetHeight;
  let start_position = pageYOffset;
  let pos_add = 100;
  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }
  if (new_pos > content_height - window_height) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;
  if (scrolling) {
    scrolling = false;
    _goto(new_pos, 1000);
    let scr_pause = 100;
    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = scr_pause * 2;
    }
    setTimeout(function () {
      scrolling = true;
      _goto(new_pos, 1000);
    }, scr_pause);
  }
  //If native scroll
  //disableScroll();
}

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/components/show-more.js":
/*!************************************************************!*\
  !*** ../../ #Проекты/anime/src/js/components/show-more.js ***!
  \************************************************************/
/***/ (() => {

console.log("кнопка");
const showMore = document.querySelector(".show-more");
const productsLength = document.querySelectorAll(".portfolio__item").length;
let items = 6;
showMore.addEventListener("click", () => {
  items += 6;
  const array = Array.from(document.querySelector(".portfolio__content").children);
  const visItems = array.slice(0, items);
  visItems.forEach(el => el.classList.add("is-visible"));
  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
});

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/functions/burger.js":
/*!********************************************************!*\
  !*** ../../ #Проекты/anime/src/js/functions/burger.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "../../\u0000#Проекты/anime/src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "../../\u0000#Проекты/anime/src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  burger?.addEventListener("click", e => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/functions/disable-scroll.js":
/*!****************************************************************!*\
  !*** ../../ #Проекты/anime/src/js/functions/disable-scroll.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../\u0000#Проекты/anime/src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
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

/***/ "../../\u0000#Проекты/anime/src/js/functions/enable-scroll.js":
/*!***************************************************************!*\
  !*** ../../ #Проекты/anime/src/js/functions/enable-scroll.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../\u0000#Проекты/anime/src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
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

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/functions/mobile-check.js":
/*!**************************************************************!*\
  !*** ../../ #Проекты/anime/src/js/functions/mobile-check.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../\u0000#Проекты/anime/src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/vendor/app.js":
/*!**************************************************!*\
  !*** ../../ #Проекты/anime/src/js/vendor/app.js ***!
  \**************************************************/
/***/ (() => {

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS("hero", {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover"
  }
});

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/vendor/focus-visible.js":
/*!************************************************************!*\
  !*** ../../ #Проекты/anime/src/js/vendor/focus-visible.js ***!
  \************************************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "../../\u0000#Проекты/anime/src/js/vendor/particles.js":
/*!********************************************************!*\
  !*** ../../ #Проекты/anime/src/js/vendor/particles.js ***!
  \********************************************************/
/***/ (() => {

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function (tag_id, params) {
  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var pJS = this.pJS;

  /* params settings */
  if (params) {
    Object.deepExtend(pJS, params);
  }
  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };
  pJS.fn.retinaInit = function () {
    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }
    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };

  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };
  pJS.fn.canvasSize = function () {
    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;
    if (pJS && pJS.interactivity.events.resize) {
      window.addEventListener('resize', function () {
        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;

        /* resize canvas */
        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        /* repaint canvas on anim disabled */
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };
  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };
  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function (color, opacity, position) {
    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if (typeof color.value == 'object') {
      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {};
    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = {
          x: 0,
          y: -1
        };
        break;
      case 'top-right':
        velbase = {
          x: 0.5,
          y: -0.5
        };
        break;
      case 'right':
        velbase = {
          x: 1,
          y: -0
        };
        break;
      case 'bottom-right':
        velbase = {
          x: 0.5,
          y: 0.5
        };
        break;
      case 'bottom':
        velbase = {
          x: 0,
          y: 1
        };
        break;
      case 'bottom-left':
        velbase = {
          x: -0.5,
          y: 1
        };
        break;
      case 'left':
        velbase = {
          x: -1,
          y: 0
        };
        break;
      case 'top-left':
        velbase = {
          x: -0.5,
          y: -0.5
        };
        break;
      default:
        velbase = {
          x: 0,
          y: 0
        };
        break;
    }
    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if (typeof shape_type == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }
    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);
        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };
  pJS.fn.particle.prototype.draw = function () {
    var p = this;
    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }
    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }
    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }
    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();
    switch (p.shape) {
      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;
      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;
      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;
      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5),
        // startX
        p.y - radius / (2.66 / 3.5),
        // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3),
        // sideLength
        pJS.particles.shape.polygon.nb_sides,
        // sideCountNumerator
        1 // sideCountDenominator
        );

        break;
      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4),
        // startX
        p.y - radius / (2 * 2.66 / 3.5),
        // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3),
        // sideLength
        pJS.particles.shape.polygon.nb_sides,
        // sideCountNumerator
        2 // sideCountDenominator
        );

        break;
      case 'image':
        function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        }
        if (pJS.tmp.img_type == 'svg') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }
        if (img_obj) {
          draw();
        }
        break;
    }
    pJS.canvas.ctx.closePath();
    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    pJS.canvas.ctx.fill();
  };
  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };
  pJS.fn.particlesUpdate = function () {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }
      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }

      /* events */
      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }
      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }
      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];

          /* link particles */
          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }

          /* attract particles */
          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }

          /* bounce particles */
          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };
  pJS.fn.particlesDraw = function () {
    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };
  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };
  pJS.fn.particlesRefresh = function () {
    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();

    /* restart */
    pJS.fn.vendors.start();
  };

  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
      dy = p1.y - p2.y,
      dist = Math.sqrt(dx * dx + dy * dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if (dist <= pJS.particles.line_linked.distance) {
      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;
      if (opacity_line > 0) {
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };
  pJS.fn.interact.attractParticles = function (p1, p2) {
    /* condensed particles */
    var dx = p1.x - p2.x,
      dy = p1.y - p2.y,
      dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= pJS.particles.line_linked.distance) {
      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
        ay = dy / (pJS.particles.move.attract.rotateY * 1000);
      p1.vx -= ax;
      p1.vy -= ay;
      p2.vx += ax;
      p2.vy += ay;
    }
  };
  pJS.fn.interact.bounceParticles = function (p1, p2) {
    var dx = p1.x - p2.x,
      dy = p1.y - p2.y,
      dist = Math.sqrt(dx * dx + dy * dy),
      dist_p = p1.radius + p2.radius;
    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;
      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };

  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function (nb, pos) {
    pJS.tmp.pushing = true;
    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));
      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }
  };
  pJS.fn.modes.removeParticles = function (nb) {
    pJS.particles.array.splice(0, nb);
    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };
  pJS.fn.modes.bubbleParticle = function (p) {
    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
        dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
        dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
        ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
      function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {
          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }

          /* opacity */
          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }

      /* mouseleave */
      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }

    /* on click event */else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
      if (pJS.tmp.bubble_clicking) {
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;
        if (time_spent > pJS.interactivity.modes.bubble.duration) {
          pJS.tmp.bubble_duration_end = true;
        }
        if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }
      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
        if (bubble_param != particles_param) {
          if (!pJS.tmp.bubble_duration_end) {
            if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
              if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;
              if (obj != bubble_param) {
                var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            } else {
              if (id == 'size') p.radius_bubble = undefined;
              if (id == 'opacity') p.opacity_bubble = undefined;
            }
          } else {
            if (p_obj_bubble != undefined) {
              var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                dif = bubble_param - value_tmp;
              value = bubble_param + dif;
              if (id == 'size') p.radius_bubble = value;
              if (id == 'opacity') p.opacity_bubble = value;
            }
          }
        }
      }
      if (pJS.tmp.bubble_clicking) {
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }
    }
  };
  pJS.fn.modes.repulseParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
        dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
        dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      var normVec = {
          x: dx_mouse / dist_mouse,
          y: dy_mouse / dist_mouse
        },
        repulseRadius = pJS.interactivity.modes.repulse.distance,
        velocity = 100,
        repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };
      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;
        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }
      if (pJS.tmp.repulse_clicking) {
        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);
        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
          dy = pJS.interactivity.mouse.click_pos_y - p.y,
          d = dx * dx + dy * dy;
        var force = -repulseRadius / d * 1;
        function process() {
          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);
          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        }

        // default
        if (d <= repulseRadius) {
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
      } else {
        if (pJS.tmp.repulse_clicking == false) {
          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };
  pJS.fn.modes.grabParticle = function (p) {
    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {
      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
        dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
        dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;
        if (opacity_line > 0) {
          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };

  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function () {
    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }

    /* detect mouse pos - on hover / click event */
    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {
        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
            pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
            pos_y = e.offsetY || e.clientY;
        }
        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;
        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }
        pJS.interactivity.status = 'mousemove';
      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function (e) {
        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }

    /* on click event */
    if (pJS.interactivity.events.onclick.enable) {
      pJS.interactivity.el.addEventListener('click', function () {
        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();
        if (pJS.interactivity.events.onclick.enable) {
          switch (pJS.interactivity.events.onclick.mode) {
            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
              break;
            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;
            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;
            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;
          }
        }
      });
    }
  };
  pJS.fn.vendors.densityAutoParticles = function () {
    if (pJS.particles.number.density.enable) {
      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };
  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];
      var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };
  pJS.fn.vendors.createSvgImg = function (p) {
    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
      rgbHex = /#([0-9A-F]{3,6})/gi,
      coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
        if (p.color.rgb) {
          var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
        } else {
          var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
        }
        return color_value;
      });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {
        type: 'image/svg+xml;charset=utf-8'
      }),
      DOMURL = window.URL || window.webkitURL || window,
      url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };
  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };
  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();
  };
  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };
  pJS.fn.vendors.loadImg = function (type) {
    pJS.tmp.img_error = undefined;
    if (pJS.particles.shape.image.src != '') {
      if (type == 'svg') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {
        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };
  pJS.fn.vendors.draw = function () {
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg') {
        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {
        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };
  pJS.fn.vendors.checkBeforeDraw = function () {
    // if shape is image
    if (pJS.particles.shape.type == 'image') {
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };
  pJS.fn.vendors.init = function () {
    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };
  pJS.fn.vendors.start = function () {
    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };

  /* ---------- pJS - start ------------ */

  pJS.fn.vendors.eventsListeners();
  pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function (destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};
window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();
window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
;
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
;
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];
window.particlesJS = function (tag_id, params) {
  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if (!tag_id) {
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
    pJS_canvas_class = 'particles-js-canvas-el',
    exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};
window.particlesJS.load = function (tag_id, path_config_json, callback) {
  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();
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
/*!********************************************!*\
  !*** ../../ #Проекты/anime/src/js/main.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "../../\u0000#Проекты/anime/src/js/_vendor.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "../../\u0000#Проекты/anime/src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "../../\u0000#Проекты/anime/src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map