!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var i="object"==typeof exports?e(require("vue")):e(t.vue);for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(window,function(t){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=11)}([function(t,e,i){var n=i(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(4).default)("a447d5ae",n,!1,{})},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(4).default)("d73b3c0e",n,!1,{})},function(e,i){e.exports=t},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(o).concat([s]).join("\n")}var r;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];null!=o&&(n[o]=!0)}for(s=0;s<t.length;s++){var r=t[s];null!=r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},s=0;s<e.length;s++){var o=e[s],r=o[0],a={id:t+":"+s,css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):i.push(n[r]={id:r,parts:[a]})}return i}i.r(e),i.d(e,"default",function(){return f});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,h=0,l=!1,c=function(){},u=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,i,s){l=i,u=s||{};var r=n(t,e);return m(r),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s];(h=o[a.id]).refs--,i.push(h)}e?m(r=n(t,e)):r=[];for(s=0;s<i.length;s++){var h;if(0===(h=i[s]).refs){for(var l=0;l<h.parts.length;l++)h.parts[l]();delete o[h.id]}}}}function m(t){for(var e=0;e<t.length;e++){var i=t[e],n=o[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(v(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var r=[];for(s=0;s<i.parts.length;s++)r.push(v(i.parts[s]));o[i.id]={id:i.id,refs:1,parts:r}}}}function g(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function v(t){var e,i,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(p){var s=h++;n=a||(a=g()),e=y.bind(null,n,s,!1),i=y.bind(null,n,s,!0)}else n=g(),e=function(t,e){var i=e.css,n=e.media,s=e.sourceMap;n&&t.setAttribute("media",n);u.ssrId&&t.setAttribute(d,e.id);s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var w,T=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function y(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=T(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,e,i){!function(){function e(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function i(t,i){var n=function(t,i){var n=e(t)*e(i);if(0===n)return 0;var s=function(t,e){return t.x*e.x+t.y*e.y}(t,i)/n;return s>1&&(s=1),Math.acos(s)}(t,i);return function(t,e){return t.x*e.y-e.x*t.y}(t,i)>0&&(n*=-1),180*n/Math.PI}var n=function(t){this.handlers=[],this.el=t};function s(t,e){var i=new n(t);return i.add(e),i}n.prototype.add=function(t){this.handlers.push(t)},n.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},n.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}};var o=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=s(this.element,e.rotate||i),this.touchStart=s(this.element,e.touchStart||i),this.multipointStart=s(this.element,e.multipointStart||i),this.multipointEnd=s(this.element,e.multipointEnd||i),this.pinch=s(this.element,e.pinch||i),this.swipe=s(this.element,e.swipe||i),this.tap=s(this.element,e.tap||i),this.doubleTap=s(this.element,e.doubleTap||i),this.longTap=s(this.element,e.longTap||i),this.singleTap=s(this.element,e.singleTap||i),this.pressMove=s(this.element,e.pressMove||i),this.twoFingerPressMove=s(this.element,e.twoFingerPressMove||i),this.touchMove=s(this.element,e.touchMove||i),this.touchEnd=s(this.element,e.touchEnd||i),this.touchCancel=s(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};o.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};i.x=n.x,i.y=n.y,this.pinchStartLen=e(i),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var n=this.preV,s=t.touches.length,o=t.touches[0].pageX,r=t.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var a=t.touches[1].pageX,h=t.touches[1].pageY,l={x:t.touches[1].pageX-o,y:t.touches[1].pageY-r};null!==n.x&&(this.pinchStartLen>0&&(t.zoom=e(l)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=i(l,n),this.rotate.dispatch(t,this.element)),n.x=l.x,n.y=l.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(o-this.x2+a-this.sx2)/2,t.deltaY=(r-this.y2+h-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=a,this.sy2=h}else{if(null!==this.x2){t.deltaX=o-this.x2,t.deltaY=r-this.y2;var c=Math.abs(this.x1-this.x2),u=Math.abs(this.y1-this.y2);(c>10||u>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=o,this.y2=r,s>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)},0),e.isDoubleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},t.exports=o}()},function(t,e,i){var n;n={install:function(t,e){e=e||{};var i=window.AlloyFinger||e.AlloyFinger,n=!(2!=t.version.substr(0,1));if(!i)throw new Error("you need include the AlloyFinger!");var s={"touch-start":"touchStart","touch-move":"touchMove","touch-end":"touchEnd","touch-cancel":"touchCancel","multipoint-start":"multipointStart","multipoint-end":"multipointEnd",tap:"tap","double-tap":"doubleTap","long-tap":"longTap","single-tap":"singleTap",rotate:"rotate",pinch:"pinch","press-move":"pressMove",swipe:"swipe"},o=[],r={},a=function(t){for(var e=0,i=o.length;e<i;e++)if(o[e].elem===t)return e;return null},h=function(t,e){var n=e.value,r=e.oldValue,h=e.arg;h=s[h],function(t,e){var n=e.eventName,s=e.elem,r=e.func,a=e.oldFunc;t&&t.alloyFinger?(t.alloyFinger.off&&a&&t.alloyFinger.off(n,a),t.alloyFinger.on&&r&&t.alloyFinger.on(n,r)):((e={})[n]=r,o.push({elem:s,alloyFinger:new i(s,e)}))}(o[a(t)],{elem:t,func:n,oldFunc:r,eventName:h})},l=function(t){var e=a(t);if(!isNaN(e)){var i=o.splice(e,1);i.length&&i[0]&&i[0].alloyFinger.destroy&&i[0].alloyFinger.destroy()}};r=n?{bind:h,update:h,unbind:l}:{update:function(t,e){var i={value:t,oldValue:e,arg:this.arg},n=this.el;h.call(this,n,i)},unbind:function(){var t=this.el;l.call(this,t)}},t.directive("finger",r)}},t.exports=n},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){(t.exports=i(3)(!1)).push([t.i,".image-item[data-v-884f6ae6] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.image-item .image-list[data-v-884f6ae6] {\n    position: relative;\n    display: block;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n}\n.image-item .image-list li.image-list-item[data-v-884f6ae6] {\n      float: left;\n      width: 100%;\n      height: 100%;\n}\n.image-item img[data-v-884f6ae6] {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    transition: all 0.2s ease-in;\n}\n.image-item img.on-control[data-v-884f6ae6] {\n      transition: none;\n}\n",""])},function(t,e,i){"use strict";var n=i(1);i.n(n).a},function(t,e,i){(t.exports=i(3)(!1)).push([t.i,".fade-enter-active[data-v-c38b4ce8],\n.fade-leave-active[data-v-c38b4ce8] {\n  transition: all 0.6s cubic-bezier(0.35, 0.75, 0.48, 0.99);\n}\n.fade-enter[data-v-c38b4ce8], .fade-leave-to[data-v-c38b4ce8] {\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n}\n.fade-enter-to[data-v-c38b4ce8],\n.fade-leave[data-v-c38b4ce8] {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.img-viewer[data-v-c38b4ce8] {\n  position: relative;\n  display: inline-block;\n}\n.img-viewer .view-mask[data-v-c38b4ce8] {\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 999;\n    opacity: 1;\n    overflow: auto;\n    justify-content: center;\n    align-items: center;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n",""])},function(t,e,i){"use strict";i.r(e);var n=i(2),s=i.n(n),o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isDisplay,expression:"isDisplay"}],staticClass:"img-viewer",on:{scroll:this.handleScroll}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isDisplay,expression:"isDisplay"}],staticClass:"view-mask"},[e("img-item",{ref:"img",on:{"hide-viewer":this.handleHide}})],1)])],1)};o._withStripped=!0;var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"image-item",on:{click:t.handleClick}},[i("ul",{directives:[{name:"finger",rawName:"v-finger:touch-start",value:t.bindTouchStart,expression:"bindTouchStart",arg:"touch-start"},{name:"finger",rawName:"v-finger:touch-move",value:t.bindTouchMove,expression:"bindTouchMove",arg:"touch-move"},{name:"finger",rawName:"v-finger:touch-end",value:t.bindTouchEnd,expression:"bindTouchEnd",arg:"touch-end"},{name:"finger",rawName:"v-finger:double-tap",value:t.bindDoubleTap,expression:"bindDoubleTap",arg:"double-tap"},{name:"finger",rawName:"v-finger:swipe",value:t.bindSwipe,expression:"bindSwipe",arg:"swipe"}],staticClass:"image-list"},t._l(t.imgSrcs,function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===n,expression:"currentIndex === idx"}],key:n,ref:"imageList",refInFor:!0,staticClass:"image-list-item"},[i("img",{class:{"on-control":t.isTouchMoving},style:t.translateStyle(n),attrs:{src:e.url}})])}),0)])};r._withStripped=!0;var a={data:function(){return{pinchResize:!1,isTouchMoving:!1,currentWidth:0,currentHeight:0,deltaX:0,deltaY:0,imgSrcs:[],currentIndex:0}},computed:{currentImageEl:function(){return this.$refs.imageList[this.currentIndex].children[0]},translateX:function(){return 0===this.currentWidth?"-50%":-1*(this.currentWidth/2+this.deltaX)+"px"},translateY:function(){return 0===this.currentHeight?"-50%":-1*(this.currentHeight/2+this.deltaY)+"px"}},methods:{translateStyle:function(t){if(t===this.currentIndex)return{transform:"translate("+this.translateX+","+this.translateY+")",width:this.currentWidth+"px",height:this.currentHeight+"px","max-width":this.currentWidth+"px"}},getFitInitSize:function(t,e){var i=Math.min(t,window.innerWidth);return{width:i,height:i/t*e}},getPinchSize:function(t,e){var i=window.innerHeight,n=i/e;return{width:t*n,height:i,ratio:n}},bindSwipe:function(t){if(!this.isTouchMoving&&!this.pinchResize){var e=t.direction;console.log(e),"Left"===e?(console.log("next"),this.currentIndex=this.currentIndex+1>=this.imgSrcs.length?this.currentIndex:++this.currentIndex,this.lazyLoad(this.imgSrcs[this.currentIndex])):"Right"===e&&(console.log("last"),this.currentIndex=this.currentIndex-1<0?this.currentIndex:--this.currentIndex,this.lazyLoad(this.imgSrcs[this.currentIndex]))}},bindTouchStart:function(t){this.pinchResize&&!this.isTouchMoving&&t.changedTouches[0].target===this.currentImageEl&&(this.isTouchMoving=!0)},bindTouchMove:function(t){if(this.isTouchMoving&&this.pinchResize){var e=this.currentImageEl.getBoundingClientRect(),i=(e.width,e.height,e.left,e.top,e.bottom,e.right,t.deltaX),n=t.deltaY;this.deltaX=-i+this.deltaX,this.deltaY=-n+this.deltaY,console.log(this.deltaX,this.deltaY)}},bindTouchEnd:function(t){if(this.pinchResize&&this.isTouchMoving){this.isTouchMoving=!1;var e=this.currentImageEl.getBoundingClientRect(),i=(e.width,e.height,e.left),n=e.top,s=e.bottom,o=e.right,r=this.deltaX,a=this.deltaY;i>0&&o>window.innerWidth&&(r+=Math.min(i,o-window.innerWidth)),i<0&&o<window.innerWidth&&(r+=-Math.min(-i,window.innerWidth-o)),n>0&&s>window.innerHeight&&(a+=Math.min(n,s-window.innerHeight)),n<0&&s<window.innerHeight&&(a+=-Math.min(-n,window.innerHeight-s)),this.deltaX=r,this.deltaY=a}},bindDoubleTap:function(t){var e=this.currentImageEl;if(t.target===e){var i=e.getBoundingClientRect(),n=i.width,s=i.height,o=i.left,r=t.changedTouches[0];r.clientX,r.clientY,top;if(console.log(this.pinchResize),this.pinchResize){this.pinchResize=!1;var a=this.imgSrcs[this.currentIndex],h=a.width,l=a.height;this.currentWidth=h,this.currentHeight=l,this.deltaX=0,this.deltaY=0}else{this.pinchResize=!0;var c=this.getPinchSize(n,s),u=c.height,d=c.width;c.ratio;this.currentWidth=d,this.currentHeight=u}}},handleClick:function(t){t.target!==this.currentImageEl&&this.$emit("hide-viewer")},lazyLoad:function(t){var e=this,i=new Image;i.onload=function(){var n=e.getFitInitSize(i.width,i.height),s=n.width,o=n.height;t.width=s,t.height=o,e.currentWidth=t.width,e.currentHeight=t.height},i.src=t.url},showViewer:function(t){var e=t.group,i=t.index;this.pinchResize=!1,this.imgSrcs=e,this.currentIndex=i,this.lazyLoad(e[i])}}};i(7);function h(t,e,i,n,s,o,r,a){var h,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=h):s&&(h=a?function(){s.call(this,this.$root.$options.shadowRoot)}:s),h)if(l.functional){l._injectStyles=h;var c=l.render;l.render=function(t,e){return h.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,h):[h]}return{exports:t,options:l}}var l=h(a,r,[],!1,null,"884f6ae6",null);l.options.__file="src/ImgItem.vue";var c={name:"img-viewer",components:{imgItem:l.exports},data:function(){return{imageSrc:"",isDisplay:!1}},methods:{handleHide:function(t){this.isDisplay=!1},toggleScroll:function(){this.isDisplay?document.body.style.overflow="hidden":document.body.style.overflow=""},showViewer:function(t){this.$children[0].showViewer(t),this.isDisplay=!0},handleScroll:function(){console.log("scroll")}},mounted:function(){}},u=(i(9),h(c,o,[],!1,null,"c38b4ce8",null));u.options.__file="src/ImgViewer.vue";var d=u.exports,p=i(5),f=i.n(p),m=i(6),g=i.n(m);s.a.use(g.a,{AlloyFinger:f.a});e.default={install:function(){var t=(new(s.a.extend(d))).$mount();document.body.appendChild(t.$el),console.log("install");var e={},i=0;s.a.directive("viewer",{bind:function(n,s){var o=s.arg;console.log("bind directives"),console.log("args: ",o),o||(o="default"+i++),e[o]||(e[o]=[]),e[o].push({url:n.src,width:0,height:0});var r,a=e[o].length-1;console.log("arg:",o),n.$viewerHandler=(r={group:e[o],index:a},function(e){t.showViewer(r)}),n.addEventListener("click",n.$viewerHandler)},unbind:function(t){t.removeEventListener("click",t.$viewerHandler)}})}}}])});