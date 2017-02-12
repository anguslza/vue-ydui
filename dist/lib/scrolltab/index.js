/*! vue-ydui v0.1.9 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/dist/",e(0)}({0:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollTabPanel=e.ScrollTab=void 0;var o=i(74),r=n(o),s=i(73),l=n(s);e.ScrollTab=r.default,e.ScrollTabPanel=l.default},1:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},2:function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r],e))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(t){for(var e=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],s=o[1],l=o[2],a=o[3],c={css:s,media:l,sourceMap:a};i[r]?i[r].parts.push(c):e.push(i[r]={id:r,parts:[c]})}return e}function r(t,e){var i=b(),n=m[m.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t,e){var i,n,o;if(e.singleton){var r=v++;i=h||(h=l(e)),n=c.bind(null,i,r,!1),o=c.bind(null,i,r,!0)}else i=l(e),n=f.bind(null,i),o=function(){s(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function c(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function f(t,e){var i=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=u(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(t);return n(i,e),function(t){for(var r=[],s=0;s<i.length;s++){var l=i[s],a=d[l.id];a.refs--,r.push(a)}if(t){var c=o(t);n(c,e)}for(var s=0;s<r.length;s++){var a=r[s];if(0===a.refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete d[a.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},29:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,'.m-scrolltab{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.scrolltab-nav{height:100%;background-color:#f5f5f5;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;z-index:1}.scrolltab-nav:after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item{padding:0 .3rem;height:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;z-index:1}.scrolltab-item.scrolltab-active{background-color:#fff}.scrolltab-item.scrolltab-active:before{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #fff;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item.scrolltab-active:active{background-color:#fff}.scrolltab-item:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #dfdfdf;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item:before{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #dfdfdf;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.scrolltab-item:active{background:none}.scrolltab-icon{margin-right:.2rem;font-size:.32rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.scrolltab-icon>img{height:.4rem;display:inline-block}.scrolltab-title{font-size:.3rem;color:#666;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:1.6rem}.scrolltab-content{height:100%;background-color:#fff;overflow-y:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 .24rem .24rem;position:relative}.scrolltab-content-title{font-size:.3rem;font-weight:400;color:#555;display:block;padding-bottom:.1rem;padding-top:.32rem;margin-bottom:.2rem;position:relative;z-index:1}.scrolltab-content-title:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}',""])},47:function(t,e,i){var n=i(29);"string"==typeof n&&(n=[[t.id,n,""]]);i(2)(n,{});n.locals&&(t.exports=n.locals)},73:function(t,e,i){var n,o;n=i(146);var r=i(84);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},74:function(t,e,i){var n,o;i(47),n=i(147);var r=i(118);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=n},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scrolltab-content-item"},[i("strong",{staticClass:"scrolltab-content-title"},[t._v(t._s(t.label))]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-scrolltab"},[i("div",{staticClass:"scrolltab-nav"},t._l(t.navList,function(e){return i("a",{staticClass:"scrolltab-item",class:t.activeIndex==e._uid?"scrolltab-active":"",attrs:{href:"javascript:;"},on:{click:function(i){t.moveHandler(e._uid)}}},[i("div",{staticClass:"scrolltab-icon"},[i("i",{class:e.icon})]),t._v(" "),i("div",{staticClass:"scrolltab-title"},[t._v(t._s(e.label))])])})),t._v(" "),i("div",{ref:"scrollView",staticClass:"scrolltab-content"},[t._t("default")],2)])},staticRenderFns:[]}},146:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab-panel",props:{label:String,icon:String,active:Boolean}}},147:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"yd-scrolltab",data:function(){return{scrolling:!1,navList:[],activeIndex:0,timer:null}},methods:{getPanels:function(){return this.$children.filter(function(t){return"yd-scrolltab-panel"===t.$options.name})},init:function(){this.scrollView=this.$refs.scrollView,this.contentOffsetTop=this.scrollView.getBoundingClientRect().top,this.bindEvent(),this.setDefault()},bindEvent:function(){this.scrollView.addEventListener("scroll",this.checkInview),this.scrollView.addEventListener("resize",this.checkInview)},setDefault:function(){var t=this,e=this.getPanels(),i=0;e.forEach(function(n){t.navList.push({label:n.label,_uid:n._uid,icon:n.icon}),n.active?(t.activeIndex=n._uid,t.moveHandler(n._uid)):(++i,i>=e.length&&(t.activeIndex=e[0]._uid))})},moveHandler:function(t){var e=this;if(!this.scrolling){this.scrolling=!0;var i=this.getPanels(),n=i.filter(function(e){return e._uid==t})[0].$el.getBoundingClientRect().top;this.scrollView.scrollTop=n+this.scrollView.scrollTop-this.contentOffsetTop+2,this.activeIndex=t,setTimeout(function(){e.scrolling=!1},6)}},checkInview:function(){var t=this;if(!this.scrolling){var e=this.getPanels(),i=e.length,n=this.scrollView,o=n.offsetHeight,r=n.scrollTop,s=e[0].$el.offsetHeight;return r>=s*i-o?void(this.activeIndex=e[i-1]._uid):void e.forEach(function(e){e.$el.getBoundingClientRect().top<=t.contentOffsetTop&&(t.activeIndex=e._uid)})}}},mounted:function(){this.init()},destroyed:function(){this.scrollView.removeEventListener("scroll",this.checkInview),this.scrollView.removeEventListener("resize",this.checkInview)}}}})});