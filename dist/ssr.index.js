!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-beautiful-chat"]=e():t["vue-beautiful-chat"]=e()}(global,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n.w={},n(n.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._ssrNode("Prova")])},o=[];r._withStripped=!0},function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(f.functional){f._injectStyles=c;var d=f.render;f.render=function(t,e){return c.call(e),d(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:f}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var i=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o],s=i.media||"default",a=t[s];a?a.ids.indexOf(i.id)<0&&(a.ids.push(i.id),a.css+="\n"+i.css):t[s]={ids:[i.id],css:i.css,media:i.media}}}(i,e):function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var i=r[o];t[i.id]={ids:[i.id],css:i.css,media:i.media}}}(i,e)}}function o(t){var e="";for(var n in t){var r=t[n];e+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return r})},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),s=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[r].concat(s).concat([i]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n",""])},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(3).default;t.exports.__inject__=function(t){o("20373100",r,!1,t)}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var s=n(1),a=n(2),u=Object(a.a)(o.a,s.a,s.b,!1,function(t){var e;(e=n(6)).__inject__&&e.__inject__(t)},"data-v-99a7e85c","446b5434");u.options.__file="src/Try.vue",e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=(r=n(7))&&r.__esModule?r:{default:r},i={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.installed||(this.installed=!0,this.event=new t,this.dynamicContainer=null,this.componentName=e.componentName||"beautiful-chat",t.prototype.$modal={_setDynamicContainer:function(t){i.dynamicContainer=t}},t.component(this.componentName,o.default))}};e.default=i}])});