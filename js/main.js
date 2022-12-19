(()=>{var e={515:()=>{console.log("Modal"),new class{constructor(e){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},e),this.modal=document.querySelector(".modal"),this.speed=!1,this.animation=!1,this.isOpen=!1,this.modalContainer=!1,this.previousActiveElement=!1,this.fixBlocks=document.querySelectorAll(".fix-block"),this.focusElements=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}events(){this.modal&&(document.addEventListener("click",function(e){const t=e.target.closest("[data-path]");if(t){let e=t.dataset.path,i=t.dataset.animation,a=t.dataset.speed;return this.animation=i||"fade",this.speed=a?parseInt(a):300,this.modalContainer=document.querySelector(`[data-target="${e}"]`),void this.open()}e.target.closest(".modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.keyCode&&this.isOpen&&this.focusCatch(e)}.bind(this)),this.modal.addEventListener("click",function(e){e.target.classList.contains("modal__container")||e.target.closest(".modal__container")||!this.isOpen||this.close()}.bind(this)))}open(){this.previousActiveElement=document.activeElement,this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),this.disableScroll(),this.modalContainer.classList.add("modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("modal-open"),this.enableScroll(),this.options.isClose(this),this.isOpen=!1,this.focusTrap())}focusCatch(e){const t=this.modalContainer.querySelectorAll(this.focusElements),i=Array.prototype.slice.call(t),a=i.indexOf(document.activeElement);e.shiftKey&&0===a&&(i[i.length-1].focus(),e.preventDefault()),e.shiftKey||a!==i.length-1||(i[0].focus(),e.preventDefault())}focusTrap(){const e=this.modalContainer.querySelectorAll(this.focusElements);this.isOpen?e[0].focus():this.previousActiveElement.focus()}disableScroll(){let e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}enableScroll(){let e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let e=window.innerWidth-document.body.offsetWidth+"px";this.fixBlocks.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}unlockPadding(){this.fixBlocks.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}}},595:()=>{document.querySelector("body");let e,t=document.querySelectorAll("._scr-sector"),i=document.querySelectorAll("._scr-item"),a=document.querySelectorAll("._side-wrapper"),n=!0,s=0;function o(){let n=e=pageYOffset,o=document.querySelector("header.header");if(null!==o&&(n>10?o.classList.add("_scroll"):o.classList.remove("_scroll")),t.length>0)for(let e=0;e<t.length;e++){let i=t[e],a=h(i).top,n=i.offsetHeight;pageYOffset>a-window.innerHeight/1.5&&pageYOffset<a+n-window.innerHeight/5?i.classList.add("_scr-sector_active"):i.classList.contains("_scr-sector_active")&&i.classList.remove("_scr-sector_active"),pageYOffset>a-window.innerHeight/2&&pageYOffset<a+n-window.innerHeight/5?i.classList.contains("_scr-sector_current")||i.classList.add("_scr-sector_current"):i.classList.contains("_scr-sector_current")&&i.classList.remove("_scr-sector_current")}if(i.length>0)for(let e=0;e<i.length;e++){let t=i[e],a=h(t).top,s=t.offsetHeight,o=window.innerHeight-(window.innerHeight-s/3);window.innerHeight>s&&(o=window.innerHeight-s/3),n>a-o&&n<a+s?(t.classList.add("_active"),c(t)):t.classList.remove("_active"),n>a-window.innerHeight&&t.querySelectorAll("._lazy").length>0&&r(t)}a.length>0&&function(e,t){let i=parseInt(window.innerWidth),a=parseInt(window.innerHeight),n=parseInt(document.querySelector("header").offsetHeight)+15;for(let o=0;o<e.length;o++){const r=e[o];let c=r.getAttribute("data-width");const l=r.querySelector("._side-block");c||(c=0),i>c&&(l.offsetHeight<a-(n+30)?(t>h(r).top-(n+15)?l.style.cssText="position:fixed;bottom:auto;top:"+n+"px;width:"+r.offsetWidth+"px;left:"+h(r).left+"px;":s(l),t>r.offsetHeight+h(r).top-(l.offsetHeight+(n+15))&&(r.style.cssText="position:relative;",l.style.cssText="position:absolute;bottom:0;top:auto;left:0px;width:100%")):s(l))}function s(e){e.style.cssText="position:relative;bottom:auto;top:0px;left:0px;"}}(a,n);let l=document.querySelector("._custom-scroll__line");if(l){let e=window.innerHeight,t=document.querySelector(".wrapper").offsetHeight,i=pageYOffset/(t-e)*100,a=l.offsetHeight;l.style.transform="translateY("+(e-a)/100*i+"px)"}s=n<=0?0:n}function r(e){let t=e.querySelectorAll("*[data-src]");if(t.length>0)for(let e=0;e<t.length;e++){const i=t[e];i.classList.contains("_loaded")||(i.setAttribute("src",i.getAttribute("data-src")),i.classList.add("_loaded"))}let i=e.querySelectorAll("*[data-srcset]");if(i.length>0)for(let e=0;e<i.length;e++){const t=i[e];t.classList.contains("_loaded")||(t.setAttribute("srcset",t.getAttribute("data-srcset")),t.classList.add("_loaded"))}}function c(e){e.classList.contains("_load-map")&&!e.classList.contains("_loaded-map")&&document.getElementById("map")&&(e.classList.add("_loaded-map"),map())}if(window.addEventListener("scroll",o),setTimeout((function(){o()}),100),t.length>0&&!isMobile.any()){f(),window.addEventListener("wheel",d);let e=document.querySelectorAll("._swiper_scroll");if(e.length>0)for(let t=0;t<e.length;t++){const i=e[t];i.addEventListener("mouseenter",(function(e){window.removeEventListener("wheel",d)})),i.addEventListener("mouseleave",(function(e){window.addEventListener("wheel",d)}))}}function l(e){let t=window.innerHeight,i=e.offsetHeight,a=h(e).top;return i>=t&&(a+=i-t),a}function d(t){let i=window.innerHeight;if(i>=750)if(n){let a=document.querySelector("._scr-sector._scr-sector_current"),n=h(a).top,s=a.offsetHeight,o=a.nextElementSibling,r=a.previousElementSibling;if(40==t.keyCode||34==t.keyCode||t.deltaX>0||t.deltaY<0)s<=i?r&&u(l(r)):(y(),e<=n&&r&&u(l(r)));else if(38==t.keyCode||33==t.keyCode||t.deltaX<0||t.deltaY>0)if(s<=i)o&&u(h(o).top);else if(y(),o){let t=h(o).top;e>=t-i&&u(t)}}else f();else y()}function u(e){f(),n=!1,p(e,800);let t=500;-1!=navigator.appVersion.indexOf("Mac")&&(t=1e3),setTimeout((function(){n=!0}),t)}let v=document.querySelectorAll("._goto-block");if(v){let e=[];for(let t=0;t<v.length;t++){let i=v[t],a=i.getAttribute("href").replace("#","");""==a||~e.indexOf(a)||e.push(a),i.addEventListener("click",(function(e){document.querySelector(".menu__body._active")&&(menu_close(),body_lock_remove(500));let t=i.getAttribute("href").replace("#","");p(document.querySelector("."+t),300),e.preventDefault()}))}window.addEventListener("scroll",(function(t){let i=document.querySelectorAll("._goto-block._active");if(i)for(let e=0;e<i.length;e++)i[e].classList.remove("_active");for(let t=0;t<e.length;t++){let i=e[t],a=document.querySelector("."+i);if(a){let e=h(a).top,t=a.offsetHeight;if(pageYOffset>e-window.innerHeight/3&&pageYOffset<e+t-window.innerHeight/3){let e=document.querySelectorAll('._goto-block[href="#'+i+'"]');for(let t=0;t<e.length;t++)e[t].classList.add("_active")}}}}))}let m=document.querySelectorAll("._goto");if(m)for(let e=0;e<m.length;e++){let t=m[e];t.addEventListener("click",(function(e){let i=t.getAttribute("href").replace("#","");p(document.querySelector("."+i),300),e.preventDefault()}))}function p(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a="",n={speedAsDuration:!0,speed:t,header:a,offset:i,easing:"easeOutQuad"},s=new SmoothScroll;s.animateScroll(e,"",n)}function h(e){var t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+a,left:t.left+i}}function f(){window.addEventListener&&window.addEventListener("DOMMouseScroll",b,!1),document.addEventListener("wheel",b,{passive:!1}),window.onwheel=b,window.onmousewheel=document.onmousewheel=b,window.ontouchmove=b,document.onkeydown=g}function y(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",b,!1),document.removeEventListener("wheel",b,{passive:!1}),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function b(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function g(e){}pageYOffset},540:()=>{console.log("кнопка");const e=document.querySelector(".show-more"),t=document.querySelectorAll(".portfolio__item").length;let i=6;e.addEventListener("click",(()=>{i+=6;const a=Array.from(document.querySelector(".portfolio__content").children).slice(0,i);a.forEach((e=>e.classList.add("is-visible"))),a.length===t&&(e.style.display="none")}))},598:()=>{particlesJS("hero",{particles:{number:{value:300,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"bottom",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})},61:()=>{function e(e){var t=!0,i=!1,a=null,n={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function o(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",(function(i){i.metaKey||i.altKey||i.ctrlKey||(s(e.activeElement)&&o(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(i&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var i,a,r;s(e.target)&&(t||(a=(i=e.target).type,"INPUT"===(r=i.tagName)&&n[a]&&!i.readOnly||"TEXTAREA"===r&&!i.readOnly||i.isContentEditable))&&o(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(i=!0,window.clearTimeout(a),a=window.setTimeout((function(){i=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},17:()=>{var e=function(e,a){var n=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var s=this.pJS;a&&Object.deepExtend(s,a),s.tmp.obj={size_value:s.particles.size.value,size_anim_speed:s.particles.size.anim.speed,move_speed:s.particles.move.speed,line_linked_distance:s.particles.line_linked.distance,line_linked_width:s.particles.line_linked.width,mode_grab_distance:s.interactivity.modes.grab.distance,mode_bubble_distance:s.interactivity.modes.bubble.distance,mode_bubble_size:s.interactivity.modes.bubble.size,mode_repulse_distance:s.interactivity.modes.repulse.distance},s.fn.retinaInit=function(){s.retina_detect&&window.devicePixelRatio>1?(s.canvas.pxratio=window.devicePixelRatio,s.tmp.retina=!0):(s.canvas.pxratio=1,s.tmp.retina=!1),s.canvas.w=s.canvas.el.offsetWidth*s.canvas.pxratio,s.canvas.h=s.canvas.el.offsetHeight*s.canvas.pxratio,s.particles.size.value=s.tmp.obj.size_value*s.canvas.pxratio,s.particles.size.anim.speed=s.tmp.obj.size_anim_speed*s.canvas.pxratio,s.particles.move.speed=s.tmp.obj.move_speed*s.canvas.pxratio,s.particles.line_linked.distance=s.tmp.obj.line_linked_distance*s.canvas.pxratio,s.interactivity.modes.grab.distance=s.tmp.obj.mode_grab_distance*s.canvas.pxratio,s.interactivity.modes.bubble.distance=s.tmp.obj.mode_bubble_distance*s.canvas.pxratio,s.particles.line_linked.width=s.tmp.obj.line_linked_width*s.canvas.pxratio,s.interactivity.modes.bubble.size=s.tmp.obj.mode_bubble_size*s.canvas.pxratio,s.interactivity.modes.repulse.distance=s.tmp.obj.mode_repulse_distance*s.canvas.pxratio},s.fn.canvasInit=function(){s.canvas.ctx=s.canvas.el.getContext("2d")},s.fn.canvasSize=function(){s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s&&s.interactivity.events.resize&&window.addEventListener("resize",(function(){s.canvas.w=s.canvas.el.offsetWidth,s.canvas.h=s.canvas.el.offsetHeight,s.tmp.retina&&(s.canvas.w*=s.canvas.pxratio,s.canvas.h*=s.canvas.pxratio),s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s.particles.move.enable||(s.fn.particlesEmpty(),s.fn.particlesCreate(),s.fn.particlesDraw(),s.fn.vendors.densityAutoParticles()),s.fn.vendors.densityAutoParticles()}))},s.fn.canvasPaint=function(){s.canvas.ctx.fillRect(0,0,s.canvas.w,s.canvas.h)},s.fn.canvasClear=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h)},s.fn.particle=function(e,i,a){if(this.radius=(s.particles.size.random?Math.random():1)*s.particles.size.value,s.particles.size.anim.enable&&(this.size_status=!1,this.vs=s.particles.size.anim.speed/100,s.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=a?a.x:Math.random()*s.canvas.w,this.y=a?a.y:Math.random()*s.canvas.h,this.x>s.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>s.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),s.particles.move.bounce&&s.fn.vendors.checkOverlap(this,a),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var n=e.value[Math.floor(Math.random()*s.particles.color.value.length)];this.color.rgb=t(n)}else null!=e.value.r&&null!=e.value.g&&null!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),null!=e.value.h&&null!=e.value.s&&null!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=t(this.color.value));this.opacity=(s.particles.opacity.random?Math.random():1)*s.particles.opacity.value,s.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=s.particles.opacity.anim.speed/100,s.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var o={};switch(s.particles.move.direction){case"top":o={x:0,y:-1};break;case"top-right":o={x:.5,y:-.5};break;case"right":o={x:1,y:-0};break;case"bottom-right":o={x:.5,y:.5};break;case"bottom":o={x:0,y:1};break;case"bottom-left":o={x:-.5,y:1};break;case"left":o={x:-1,y:0};break;case"top-left":o={x:-.5,y:-.5};break;default:o={x:0,y:0}}s.particles.move.straight?(this.vx=o.x,this.vy=o.y,s.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=o.x+Math.random()-.5,this.vy=o.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=s.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var l=s.particles.shape;this.img={src:l.image.src,ratio:l.image.width/l.image.height},this.img.ratio||(this.img.ratio=1),"svg"==s.tmp.img_type&&null!=s.tmp.source_svg&&(s.fn.vendors.createSvgImg(this),s.tmp.pushing&&(this.img.loaded=!1))}},s.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(null!=e.opacity_bubble)var i=e.opacity_bubble;else i=e.opacity;if(e.color.rgb)var a="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+i+")";else a="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+i+")";switch(s.canvas.ctx.fillStyle=a,s.canvas.ctx.beginPath(),e.shape){case"circle":s.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":s.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":s.fn.vendors.drawShape(s.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":s.fn.vendors.drawShape(s.canvas.ctx,e.x-t/(s.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,1);break;case"star":s.fn.vendors.drawShape(s.canvas.ctx,e.x-2*t/(s.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==s.tmp.img_type)var n=e.img.obj;else n=s.tmp.img_obj;n&&s.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}s.canvas.ctx.closePath(),s.particles.shape.stroke.width>0&&(s.canvas.ctx.strokeStyle=s.particles.shape.stroke.color,s.canvas.ctx.lineWidth=s.particles.shape.stroke.width,s.canvas.ctx.stroke()),s.canvas.ctx.fill()},s.fn.particlesCreate=function(){for(var e=0;e<s.particles.number.value;e++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value))},s.fn.particlesUpdate=function(){for(var e=0;e<s.particles.array.length;e++){var t=s.particles.array[e];if(s.particles.move.enable){var a=s.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(s.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=s.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=s.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),s.particles.size.anim.enable&&(1==t.size_status?(t.radius>=s.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=s.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==s.particles.move.out_mode)var n={x_left:t.radius,x_right:s.canvas.w,y_top:t.radius,y_bottom:s.canvas.h};else n={x_left:-t.radius,x_right:s.canvas.w+t.radius,y_top:-t.radius,y_bottom:s.canvas.h+t.radius};if(t.x-t.radius>s.canvas.w?(t.x=n.x_left,t.y=Math.random()*s.canvas.h):t.x+t.radius<0&&(t.x=n.x_right,t.y=Math.random()*s.canvas.h),t.y-t.radius>s.canvas.h?(t.y=n.y_top,t.x=Math.random()*s.canvas.w):t.y+t.radius<0&&(t.y=n.y_bottom,t.x=Math.random()*s.canvas.w),"bounce"===s.particles.move.out_mode&&((t.x+t.radius>s.canvas.w||t.x-t.radius<0)&&(t.vx=-t.vx),(t.y+t.radius>s.canvas.h||t.y-t.radius<0)&&(t.vy=-t.vy)),i("grab",s.interactivity.events.onhover.mode)&&s.fn.modes.grabParticle(t),(i("bubble",s.interactivity.events.onhover.mode)||i("bubble",s.interactivity.events.onclick.mode))&&s.fn.modes.bubbleParticle(t),(i("repulse",s.interactivity.events.onhover.mode)||i("repulse",s.interactivity.events.onclick.mode))&&s.fn.modes.repulseParticle(t),s.particles.line_linked.enable||s.particles.move.attract.enable)for(var o=e+1;o<s.particles.array.length;o++){var r=s.particles.array[o];s.particles.line_linked.enable&&s.fn.interact.linkParticles(t,r),s.particles.move.attract.enable&&s.fn.interact.attractParticles(t,r),s.particles.move.bounce&&s.fn.interact.bounceParticles(t,r)}}},s.fn.particlesDraw=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h),s.fn.particlesUpdate();for(var e=0;e<s.particles.array.length;e++)s.particles.array[e].draw()},s.fn.particlesEmpty=function(){s.particles.array=[]},s.fn.particlesRefresh=function(){cancelRequestAnimFrame(s.fn.checkAnimFrame),cancelRequestAnimFrame(s.fn.drawAnimFrame),s.tmp.source_svg=void 0,s.tmp.img_obj=void 0,s.tmp.count_svg=0,s.fn.particlesEmpty(),s.fn.canvasClear(),s.fn.vendors.start()},s.fn.interact.linkParticles=function(e,t){var i=e.x-t.x,a=e.y-t.y,n=Math.sqrt(i*i+a*a);if(n<=s.particles.line_linked.distance){var o=s.particles.line_linked.opacity-n/(1/s.particles.line_linked.opacity)/s.particles.line_linked.distance;if(o>0){var r=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+o+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(e.x,e.y),s.canvas.ctx.lineTo(t.x,t.y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}},s.fn.interact.attractParticles=function(e,t){var i=e.x-t.x,a=e.y-t.y;if(Math.sqrt(i*i+a*a)<=s.particles.line_linked.distance){var n=i/(1e3*s.particles.move.attract.rotateX),o=a/(1e3*s.particles.move.attract.rotateY);e.vx-=n,e.vy-=o,t.vx+=n,t.vy+=o}},s.fn.interact.bounceParticles=function(e,t){var i=e.x-t.x,a=e.y-t.y;Math.sqrt(i*i+a*a)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},s.fn.modes.pushParticles=function(e,t){s.tmp.pushing=!0;for(var i=0;i<e;i++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value,{x:t?t.pos_x:Math.random()*s.canvas.w,y:t?t.pos_y:Math.random()*s.canvas.h})),i==e-1&&(s.particles.move.enable||s.fn.particlesDraw(),s.tmp.pushing=!1)},s.fn.modes.removeParticles=function(e){s.particles.array.splice(0,e),s.particles.move.enable||s.fn.particlesDraw()},s.fn.modes.bubbleParticle=function(e){if(s.interactivity.events.onhover.enable&&i("bubble",s.interactivity.events.onhover.mode)){var t=e.x-s.interactivity.mouse.pos_x,a=e.y-s.interactivity.mouse.pos_y,n=1-(d=Math.sqrt(t*t+a*a))/s.interactivity.modes.bubble.distance;function o(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}if(d<=s.interactivity.modes.bubble.distance){if(n>=0&&"mousemove"==s.interactivity.status){if(s.interactivity.modes.bubble.size!=s.particles.size.value)if(s.interactivity.modes.bubble.size>s.particles.size.value)(c=e.radius+s.interactivity.modes.bubble.size*n)>=0&&(e.radius_bubble=c);else{var r=e.radius-s.interactivity.modes.bubble.size,c=e.radius-r*n;e.radius_bubble=c>0?c:0}var l;s.interactivity.modes.bubble.opacity!=s.particles.opacity.value&&(s.interactivity.modes.bubble.opacity>s.particles.opacity.value?(l=s.interactivity.modes.bubble.opacity*n)>e.opacity&&l<=s.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l):(l=e.opacity-(s.particles.opacity.value-s.interactivity.modes.bubble.opacity)*n)<e.opacity&&l>=s.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l))}}else o();"mouseleave"==s.interactivity.status&&o()}else if(s.interactivity.events.onclick.enable&&i("bubble",s.interactivity.events.onclick.mode)){if(s.tmp.bubble_clicking){t=e.x-s.interactivity.mouse.click_pos_x,a=e.y-s.interactivity.mouse.click_pos_y;var d=Math.sqrt(t*t+a*a),u=((new Date).getTime()-s.interactivity.mouse.click_time)/1e3;u>s.interactivity.modes.bubble.duration&&(s.tmp.bubble_duration_end=!0),u>2*s.interactivity.modes.bubble.duration&&(s.tmp.bubble_clicking=!1,s.tmp.bubble_duration_end=!1)}function v(t,i,a,n,o){if(t!=i)if(s.tmp.bubble_duration_end)null!=a&&(c=t+(t-(n-u*(n-t)/s.interactivity.modes.bubble.duration)),"size"==o&&(e.radius_bubble=c),"opacity"==o&&(e.opacity_bubble=c));else if(d<=s.interactivity.modes.bubble.distance){if(null!=a)var r=a;else r=n;if(r!=t){var c=n-u*(n-t)/s.interactivity.modes.bubble.duration;"size"==o&&(e.radius_bubble=c),"opacity"==o&&(e.opacity_bubble=c)}}else"size"==o&&(e.radius_bubble=void 0),"opacity"==o&&(e.opacity_bubble=void 0)}s.tmp.bubble_clicking&&(v(s.interactivity.modes.bubble.size,s.particles.size.value,e.radius_bubble,e.radius,"size"),v(s.interactivity.modes.bubble.opacity,s.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},s.fn.modes.repulseParticle=function(e){if(s.interactivity.events.onhover.enable&&i("repulse",s.interactivity.events.onhover.mode)&&"mousemove"==s.interactivity.status){var t=e.x-s.interactivity.mouse.pos_x,a=e.y-s.interactivity.mouse.pos_y,n=Math.sqrt(t*t+a*a),o={x:t/n,y:a/n},r=s.interactivity.modes.repulse.distance,c=(p=1/r*(-1*Math.pow(n/r,2)+1)*r*100,0,50,Math.min(Math.max(p,0),50)),l={x:e.x+o.x*c,y:e.y+o.y*c};"bounce"==s.particles.move.out_mode?(l.x-e.radius>0&&l.x+e.radius<s.canvas.w&&(e.x=l.x),l.y-e.radius>0&&l.y+e.radius<s.canvas.h&&(e.y=l.y)):(e.x=l.x,e.y=l.y)}else if(s.interactivity.events.onclick.enable&&i("repulse",s.interactivity.events.onclick.mode))if(s.tmp.repulse_finish||(s.tmp.repulse_count++,s.tmp.repulse_count==s.particles.array.length&&(s.tmp.repulse_finish=!0)),s.tmp.repulse_clicking){r=Math.pow(s.interactivity.modes.repulse.distance/6,3);var d=s.interactivity.mouse.click_pos_x-e.x,u=s.interactivity.mouse.click_pos_y-e.y,v=d*d+u*u,m=-r/v*1;v<=r&&function(){var t=Math.atan2(u,d);if(e.vx=m*Math.cos(t),e.vy=m*Math.sin(t),"bounce"==s.particles.move.out_mode){var i={x:e.x+e.vx,y:e.y+e.vy};(i.x+e.radius>s.canvas.w||i.x-e.radius<0)&&(e.vx=-e.vx),(i.y+e.radius>s.canvas.h||i.y-e.radius<0)&&(e.vy=-e.vy)}}()}else 0==s.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i);var p},s.fn.modes.grabParticle=function(e){if(s.interactivity.events.onhover.enable&&"mousemove"==s.interactivity.status){var t=e.x-s.interactivity.mouse.pos_x,i=e.y-s.interactivity.mouse.pos_y,a=Math.sqrt(t*t+i*i);if(a<=s.interactivity.modes.grab.distance){var n=s.interactivity.modes.grab.line_linked.opacity-a/(1/s.interactivity.modes.grab.line_linked.opacity)/s.interactivity.modes.grab.distance;if(n>0){var o=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+n+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(e.x,e.y),s.canvas.ctx.lineTo(s.interactivity.mouse.pos_x,s.interactivity.mouse.pos_y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}}},s.fn.vendors.eventsListeners=function(){"window"==s.interactivity.detect_on?s.interactivity.el=window:s.interactivity.el=s.canvas.el,(s.interactivity.events.onhover.enable||s.interactivity.events.onclick.enable)&&(s.interactivity.el.addEventListener("mousemove",(function(e){if(s.interactivity.el==window)var t=e.clientX,i=e.clientY;else t=e.offsetX||e.clientX,i=e.offsetY||e.clientY;s.interactivity.mouse.pos_x=t,s.interactivity.mouse.pos_y=i,s.tmp.retina&&(s.interactivity.mouse.pos_x*=s.canvas.pxratio,s.interactivity.mouse.pos_y*=s.canvas.pxratio),s.interactivity.status="mousemove"})),s.interactivity.el.addEventListener("mouseleave",(function(e){s.interactivity.mouse.pos_x=null,s.interactivity.mouse.pos_y=null,s.interactivity.status="mouseleave"}))),s.interactivity.events.onclick.enable&&s.interactivity.el.addEventListener("click",(function(){if(s.interactivity.mouse.click_pos_x=s.interactivity.mouse.pos_x,s.interactivity.mouse.click_pos_y=s.interactivity.mouse.pos_y,s.interactivity.mouse.click_time=(new Date).getTime(),s.interactivity.events.onclick.enable)switch(s.interactivity.events.onclick.mode){case"push":s.particles.move.enable||1==s.interactivity.modes.push.particles_nb?s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb,s.interactivity.mouse):s.interactivity.modes.push.particles_nb>1&&s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb);break;case"remove":s.fn.modes.removeParticles(s.interactivity.modes.remove.particles_nb);break;case"bubble":s.tmp.bubble_clicking=!0;break;case"repulse":s.tmp.repulse_clicking=!0,s.tmp.repulse_count=0,s.tmp.repulse_finish=!1,setTimeout((function(){s.tmp.repulse_clicking=!1}),1e3*s.interactivity.modes.repulse.duration)}}))},s.fn.vendors.densityAutoParticles=function(){if(s.particles.number.density.enable){var e=s.canvas.el.width*s.canvas.el.height/1e3;s.tmp.retina&&(e/=2*s.canvas.pxratio);var t=e*s.particles.number.value/s.particles.number.density.value_area,i=s.particles.array.length-t;i<0?s.fn.modes.pushParticles(Math.abs(i)):s.fn.modes.removeParticles(i)}},s.fn.vendors.checkOverlap=function(e,t){for(var i=0;i<s.particles.array.length;i++){var a=s.particles.array[i],n=e.x-a.x,o=e.y-a.y;Math.sqrt(n*n+o*o)<=e.radius+a.radius&&(e.x=t?t.x:Math.random()*s.canvas.w,e.y=t?t.y:Math.random()*s.canvas.h,s.fn.vendors.checkOverlap(e))}},s.fn.vendors.createSvgImg=function(e){var t=s.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,(function(t,i,a,n){if(e.color.rgb)var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return s})),i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),a=window.URL||window.webkitURL||window,n=a.createObjectURL(i),o=new Image;o.addEventListener("load",(function(){e.img.obj=o,e.img.loaded=!0,a.revokeObjectURL(n),s.tmp.count_svg++})),o.src=n},s.fn.vendors.destroypJS=function(){cancelAnimationFrame(s.fn.drawAnimFrame),n.remove(),pJSDom=null},s.fn.vendors.drawShape=function(e,t,i,a,n,s){var o=n*s,r=n/s,c=180*(r-2)/r,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,i),e.moveTo(0,0);for(var d=0;d<o;d++)e.lineTo(a,0),e.translate(a,0),e.rotate(l);e.fill(),e.restore()},s.fn.vendors.exportImg=function(){window.open(s.canvas.el.toDataURL("image/png"),"_blank")},s.fn.vendors.loadImg=function(e){if(s.tmp.img_error=void 0,""!=s.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",s.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(s.tmp.source_svg=e.currentTarget.response,s.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),s.tmp.img_error=!0))},t.send()}else{var i=new Image;i.addEventListener("load",(function(){s.tmp.img_obj=i,s.fn.vendors.checkBeforeDraw()})),i.src=s.particles.shape.image.src}else console.log("Error pJS - No image.src"),s.tmp.img_error=!0},s.fn.vendors.draw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type?s.tmp.count_svg>=s.particles.number.value?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):null!=s.tmp.img_obj?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame))},s.fn.vendors.checkBeforeDraw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type&&null==s.tmp.source_svg?s.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(s.tmp.checkAnimFrame),s.tmp.img_error||(s.fn.vendors.init(),s.fn.vendors.draw())):(s.fn.vendors.init(),s.fn.vendors.draw())},s.fn.vendors.init=function(){s.fn.retinaInit(),s.fn.canvasInit(),s.fn.canvasSize(),s.fn.canvasPaint(),s.fn.particlesCreate(),s.fn.vendors.densityAutoParticles(),s.particles.line_linked.color_rgb_line=t(s.particles.line_linked.color)},s.fn.vendors.start=function(){i("image",s.particles.shape.type)?(s.tmp.img_type=s.particles.shape.image.src.substr(s.particles.shape.image.src.length-3),s.fn.vendors.loadImg(s.tmp.img_type)):s.fn.vendors.checkBeforeDraw()},s.fn.vendors.eventsListeners(),s.fn.vendors.start()};function t(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,i,a){return t+t+i+i+a+a}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function i(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var i in t)t[i]&&t[i].constructor&&t[i].constructor===Object?(e[i]=e[i]||{},arguments.callee(e[i],t[i])):e[i]=t[i];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(t,i){"string"!=typeof t&&(i=t,t="particles-js"),t||(t="particles-js");var a=document.getElementById(t),n="particles-js-canvas-el",s=a.getElementsByClassName(n);if(s.length)for(;s.length>0;)a.removeChild(s[0]);var o=document.createElement("canvas");o.className=n,o.style.width="100%",o.style.height="100%",null!=document.getElementById(t).appendChild(o)&&pJSDom.push(new e(t,i))},window.particlesJS.load=function(e,t,i){var a=new XMLHttpRequest;a.open("GET",t),a.onreadystatechange=function(t){if(4==a.readyState)if(200==a.status){var n=JSON.parse(t.currentTarget.response);window.particlesJS(e,n),i&&i()}else console.log("Error pJS - XMLHttpRequest status: "+a.status),console.log("Error pJS - File config not found")},a.send()}}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,i),s.exports}(()=>{"use strict";i(61),i(17),i(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body},t=()=>{var t;const i=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),a=(document.body,parseInt(e.bodyEl.dataset.position,10));i.forEach((e=>{e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:a,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"};!function(){var i,a,n,s;const o=null===(i=document)||void 0===i?void 0:i.querySelector("[data-burger]"),r=null===(a=document)||void 0===a?void 0:a.querySelector("[data-menu]"),c=null===(n=document)||void 0===n?void 0:n.querySelectorAll("[data-menu-item]"),l=null===(s=document)||void 0===s?void 0:s.querySelector("[data-menu-overlay]");null==o||o.addEventListener("click",(i=>{null==o||o.classList.toggle("burger--active"),null==r||r.classList.toggle("menu--active"),null!=r&&r.classList.contains("menu--active")?(null==o||o.setAttribute("aria-expanded","true"),null==o||o.setAttribute("aria-label","Закрыть меню"),(()=>{var t;const i=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),a=window.scrollY,n=window.innerWidth-e.bodyEl.offsetWidth+"px";e.htmlEl.style.scrollBehavior="none",i.forEach((e=>{e.style.paddingRight=n})),e.bodyEl.style.paddingRight=n,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=a,e.bodyEl.style.top=`-${a}px`})()):(null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"),t())})),null==l||l.addEventListener("click",(()=>{null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"),o.classList.remove("burger--active"),r.classList.remove("menu--active"),t()})),null==c||c.forEach((e=>{e.addEventListener("click",(()=>{null==o||o.setAttribute("aria-expanded","false"),null==o||o.setAttribute("aria-label","Открыть меню"),o.classList.remove("burger--active"),r.classList.remove("menu--active"),t()}))}))}(),console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})()),i(515),i(595),i(540)})()})();