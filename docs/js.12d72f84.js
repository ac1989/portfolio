parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({32:[function(require,module,exports) {

},{}],33:[function(require,module,exports) {
Array.from||(Array.from=function(){var r=Object.prototype.toString,n=function(n){return"function"==typeof n||"[object Function]"===r.call(n)},t=Math.pow(2,53)-1,e=function(r){var n=function(r){var n=Number(r);return isNaN(n)?0:0!==n&&isFinite(n)?(n>0?1:-1)*Math.floor(Math.abs(n)):n}(r);return Math.min(Math.max(n,0),t)};return function(r){var t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!n(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var i,u=e(t.length),f=n(this)?Object(new this(u)):new Array(u),c=0;c<u;)i=t[c],f[c]=a?void 0===o?a(i,c):a.call(o,i,c):i,c+=1;return f.length=u,f}}());
},{}],16:[function(require,module,exports) {
"use strict";function t(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}require("../sass/index.scss"),require("./polyfills"),window.onload=function(){console.log("hello world");var e=document.getElementsByClassName("project-wrapper"),n=(document.getElementsByClassName("project-buttons"),document.getElementsByClassName("tech-button")),o={github:"#f2f2f2",react:"#61dafb",redux:"#744cbc","redux-saga":"#89d96d",emotion:"#d26ac2",mui:"#2196f3",javascript:"#1a1a1a"},a=e[0].getBoundingClientRect().height;[].concat(t(e)).forEach(function(e){var n=e.querySelector(".project-text"),o=e.getElementsByClassName("tech-button");e.addEventListener("mouseenter",function(e){e.stopPropagation(),e.stopImmediatePropagation(),n.style.transform="translateY(-"+a+"px)",[].concat(t(o)).forEach(function(t){t.style.transform="translateY(0px)",t.style.opacity="1"})}),e.addEventListener("mouseleave",function(e){e.stopPropagation(),n.style.transform="translateY(0px)",[].concat(t(o)).forEach(function(t){t.style.transform="translateY(16px)",t.style.opacity="0"})})}),[].concat(t(n)).forEach(function(t){var e=t.classList[1].substring(7),n=document.createElement("div");n.style.opacity=0,n.style.background=o[e]||"#f2f2f2",n.style.position="absolute",n.style.left=0,n.style.width="100%",n.style.paddingTop="100%",n.style.top=t.getBoundingClientRect().height-t.getBoundingClientRect().width,console.log(t.getBoundingClientRect().height-t.getBoundingClientRect().width),n.style.borderRadius="50%",n.style.animation="ripple 0.6s linear",t.addEventListener("mouseenter",function(e){t.appendChild(n)}),t.addEventListener("mouseleave",function(){n.parentNode.removeChild(n)})}),window.onresize=function(){a=e[0].getBoundingClientRect().height}};
},{"../sass/index.scss":32,"./polyfills":33}]},{},[16], null)
//# sourceMappingURL=js.f281bf5a.map