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
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/scroll.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/show-more */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/show-more.js");
/* harmony import */ var _components_show_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_show_more__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_functions.js":
/*!*********************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_functions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/burger.js");
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

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/scroll.js":
/*!****************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/scroll.js ***!
  \****************************************************************************************/
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

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/show-more.js":
/*!*******************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/components/show-more.js ***!
  \*******************************************************************************************/
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
  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector("[data-burger]");
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector("[data-menu]");
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll("[data-menu-item]");
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector("[data-menu-overlay]");
  burger === null || burger === void 0 ? void 0 : burger.addEventListener("click", e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle("burger--active");
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle("menu--active");
    if (menu !== null && menu !== void 0 && menu.classList.contains("menu--active")) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-expanded", "true");
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-label", "Закрыть меню");
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-expanded", "false");
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-label", "Открыть меню");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", () => {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-expanded", "false");
    burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
    el.addEventListener("click", () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-expanded", "false");
      burger === null || burger === void 0 ? void 0 : burger.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
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

/***/ }),

/***/ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/mobile-check.js":
/*!*********************************************************************************************!*\
  !*** ../../../ #Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/functions/mobile-check.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "../../../\u0000#Проекты/My_Portfolio_v2.0/My_Portfolio2.0/src/js/_vars.js");

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


})();

/******/ })()
;
//# sourceMappingURL=main.js.map