(self.webpackChunk_wixc3_stylable_playground_feature=self.webpackChunk_wixc3_stylable_playground_feature||[]).push([[1680],{7210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>o,cssStates:()=>c,keyframes:()=>i,namespace:()=>n,st:()=>f,stVars:()=>a,style:()=>s,vars:()=>u});const n="o46",o={root:"s190",envData:"s36"},i={},a={},u={},c=r.stc.bind(null,n),s=r.sts.bind(null,n),f=s},64750:(e,t,r)=>{"use strict";r.r(t),r.d(t,{classes:()=>o,cssStates:()=>c,keyframes:()=>i,namespace:()=>n,st:()=>f,stVars:()=>a,style:()=>s,vars:()=>u});const n="o4",o={root:"s33",envData:"s36",button:"s37",copyButton:"s38"},i={},a={},u={},c=r.stc.bind(null,n),s=r.sts.bind(null,n),f=s},72321:(e,t,r)=>{e.exports=globalThis.performance||r(44378)},44378:e=>{const t=new Map,r=Date.now(),n=`__init__${Math.random().toString(16).slice(2)}`,o={duration:0,entryType:"mark",name:n,startTime:r,toJSON:()=>({name:n,initialStartTime:r})},i=new Map;function a({defaultMark:e,markName:t}){const{startTime:r}=t&&i.get(t)?i.get(t).slice(-1)[0]:e;return r}function u(){return{name:this.name,startTime:this.startTime,duration:this.duration,entryType:this.type}}e.exports={mark:e=>{const t=i.get(e),r={duration:0,entryType:"mark",name:e,startTime:Date.now()-o.startTime,toJSON:u};t?t.push(r):i.set(e,[r])},measure:(e,r,n)=>{const i={startTime:Date.now()},c=a({markName:r,defaultMark:o}),s=a({markName:n,defaultMark:i}),f=t.get(e),l={duration:s-c,startTime:c,entryType:"measure",name:e,toJSON:u};f?f.push(l):t.set(e,[l])},getEntriesByType:e=>{switch(e){case"mark":return[].concat(...i.values());case"measure":return[].concat(...t.values());default:return[]}},clearMarks:e=>{e?i.delete(e):i.clear()},clearMeasures:e=>{e?t.delete(e):t.clear()}}},50340:(e,t)=>{function r(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(e){return!!e&&!!e[Y]}function o(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===q}(e)||Array.isArray(e)||!!e[U]||!!e.constructor[U]||l(e)||p(e))}function i(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:H)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function a(e){var t=e[Y];return t?t.t>3?t.t-4:t.t:Array.isArray(e)?1:l(e)?2:p(e)?3:0}function u(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){return 2===a(e)?e.get(t):e[t]}function s(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){return B&&e instanceof Map}function p(e){return $&&e instanceof Set}function v(e){return e.i||e.u}function h(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Q(e);delete t[Y];for(var r=H(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function d(e,t){return void 0===t&&(t=!1),m(e)||n(e)||!o(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=y),Object.freeze(e),t&&i(e,(function(e,t){return d(t,!0)}),!0)),e}function y(){r(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function g(e){var t=Z[e];return t||r(18,e),t}function b(e,t){Z[e]||(Z[e]=t)}function O(){return G}function _(e,t){t&&(g("Patches"),e.o=[],e.v=[],e.s=t)}function P(e){E(e),e.p.forEach(D),e.p=null}function E(e){e===G&&(G=e.l)}function w(e){return G={p:[],l:G,h:e,_:!0,m:0}}function D(e){var t=e[Y];0===t.t||1===t.t?t.j():t.O=!0}function M(e,t){t.m=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.S||g("ES5").P(t,e,i),i?(n[Y].M&&(P(t),r(4)),o(e)&&(e=A(t,e),t.l||j(t,e)),t.o&&g("Patches").g(n[Y].u,e,t.o,t.v)):e=A(t,n,[]),P(t),t.o&&t.s(t.o,t.v),e!==J?e:void 0}function A(e,t,r){if(m(t))return t;var n=t[Y];if(!n)return i(t,(function(o,i){return S(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.M)return j(e,n.u,!0),n.u;if(!n.R){n.R=!0,n.A.m--;var o=4===n.t||5===n.t?n.i=h(n.k):n.i;i(3===n.t?new Set(o):o,(function(t,i){return S(e,n,o,t,i,r)})),j(e,o,!1),r&&e.o&&g("Patches").F(n,r,e.o,e.v)}return n.i}function S(e,t,r,i,a,c){if(n(a)){var f=A(e,a,c&&t&&3!==t.t&&!u(t.D,i)?c.concat(i):void 0);if(s(r,i,f),!n(f))return;e._=!1}if(o(a)&&!m(a)){if(!e.h.K&&e.m<1)return;A(e,a),t&&t.A.l||j(e,a)}}function j(e,t,r){void 0===r&&(r=!1),e.h.K&&e._&&d(t,r)}function x(e,t){var r=e[Y];return(r?v(r):e)[t]}function k(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.M||(e.M=!0,e.l&&N(e.l))}function R(e){e.i||(e.i=h(e.u))}function T(e,t,r){var n=l(t)?g("MapSet").$(t,r):p(t)?g("MapSet").C(t,r):e.S?function(e,t){var r=Array.isArray(e),n={t:r?1:0,A:t?t.A:O(),M:!1,R:!1,D:{},l:t,u:e,k:null,i:null,j:null,I:!1},o=n,i=ee;r&&(o=[n],i=te);var a=Proxy.revocable(o,i),u=a.revoke,c=a.proxy;return n.k=c,n.j=u,c}(t,r):g("ES5").J(t,r);return(r?r.A:O()).p.push(n),n}function L(e){return n(e)||r(22,e),function e(t){if(!o(t))return t;var r,n=t[Y],u=a(t);if(n){if(!n.M&&(n.t<4||!g("ES5").N(n)))return n.u;n.R=!0,r=C(t,u),n.R=!1}else r=C(t,u);return i(r,(function(t,o){n&&c(n.u,t)===o||s(r,t,e(o))})),3===u?new Set(r):r}(e)}function C(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}function I(){function e(e,t){var r=a[e];return r?r.enumerable=t:a[e]=r={configurable:!0,enumerable:t,get:function(){return ee.get(this[Y],e)},set:function(t){ee.set(this[Y],e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var n=e[t][Y];if(!n.M)switch(n.t){case 5:o(n)&&N(n);break;case 4:r(n)&&N(n)}}}function r(e){for(var t=e.u,r=e.k,n=H(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Y){var a=t[i];if(void 0===a&&!u(t,i))return!0;var c=r[i],s=c&&c[Y];if(s?s.u!==a:!f(c,a))return!0}}var l=!!t[Y];return n.length!==H(t).length+(l?0:1)}function o(e){var t=e.k;if(t.length!==e.u.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var a={};b("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=Q(r);delete i[Y];for(var a=H(i),u=0;u<a.length;u++){var c=a[u];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={t:n?5:4,A:r?r.A:O(),M:!1,R:!1,D:{},l:r,u:t,k:o,i:null,O:!1,I:!1};return Object.defineProperty(o,Y,{value:i,writable:!0}),o},P:function(e,r,a){a?n(r)&&r[Y].A===e&&t(e.p):(e.o&&function e(t){if(t&&"object"==typeof t){var r=t[Y];if(r){var n=r.u,a=r.k,c=r.D,s=r.t;if(4===s)i(a,(function(t){t!==Y&&(void 0!==n[t]||u(n,t)?c[t]||e(a[t]):(c[t]=!0,N(r)))})),i(n,(function(e){void 0!==a[e]||u(a,e)||(c[e]=!1,N(r))}));else if(5===s){if(o(r)&&(N(r),c.length=!0),a.length<n.length)for(var f=a.length;f<n.length;f++)c[f]=!1;else for(var l=n.length;l<a.length;l++)c[l]=!0;for(var p=Math.min(a.length,n.length),v=0;v<p;v++)a.hasOwnProperty(v)||(c[v]=!0),void 0===c[v]&&e(a[v])}}}}(e.p[0]),t(e.p))},N:function(e){return 4===e.t?r(e):o(e)}})}function V(){function e(t){if(!o(t))return t;if(Array.isArray(t))return t.map(e);if(l(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],e(t[1])]})));if(p(t))return new Set(Array.from(t).map(e));var r=Object.create(Object.getPrototypeOf(t));for(var n in t)r[n]=e(t[n]);return u(t,U)&&(r[U]=t[U]),r}function t(t){return n(t)?e(t):t}var s="add";b("Patches",{W:function(t,n){return n.forEach((function(n){for(var o=n.path,i=n.op,u=t,f=0;f<o.length-1;f++){var l=a(u),p=""+o[f];0!==l&&1!==l||"__proto__"!==p&&"constructor"!==p||r(24),"function"==typeof u&&"prototype"===p&&r(24),"object"!=typeof(u=c(u,p))&&r(15,o.join("/"))}var v=a(u),h=e(n.value),d=o[o.length-1];switch(i){case"replace":switch(v){case 2:return u.set(d,h);case 3:r(16);default:return u[d]=h}case s:switch(v){case 1:return"-"===d?u.push(h):u.splice(d,0,h);case 2:return u.set(d,h);case 3:return u.add(h);default:return u[d]=h}case"remove":switch(v){case 1:return u.splice(d,1);case 2:return u.delete(d);case 3:return u.delete(n.value);default:return delete u[d]}default:r(17,i)}})),t},F:function(e,r,n,o){switch(e.t){case 0:case 4:case 2:return function(e,r,n,o){var a=e.u,f=e.i;i(e.D,(function(e,i){var l=c(a,e),p=c(f,e),v=i?u(a,e)?"replace":s:"remove";if(l!==p||"replace"!==v){var h=r.concat(e);n.push("remove"===v?{op:v,path:h}:{op:v,path:h,value:p}),o.push(v===s?{op:"remove",path:h}:"remove"===v?{op:s,path:h,value:t(l)}:{op:"replace",path:h,value:t(l)})}}))}(e,r,n,o);case 5:case 1:return function(e,r,n,o){var i=e.u,a=e.D,u=e.i;if(u.length<i.length){var c=[u,i];i=c[0],u=c[1];var f=[o,n];n=f[0],o=f[1]}for(var l=0;l<i.length;l++)if(a[l]&&u[l]!==i[l]){var p=r.concat([l]);n.push({op:"replace",path:p,value:t(u[l])}),o.push({op:"replace",path:p,value:t(i[l])})}for(var v=i.length;v<u.length;v++){var h=r.concat([v]);n.push({op:s,path:h,value:t(u[v])})}i.length<u.length&&o.push({op:"replace",path:r.concat(["length"]),value:i.length})}(e,r,n,o);case 3:return function(e,t,r,n){var o=e.u,i=e.i,a=0;o.forEach((function(e){if(!i.has(e)){var o=t.concat([a]);r.push({op:"remove",path:o,value:e}),n.unshift({op:s,path:o,value:e})}a++})),a=0,i.forEach((function(e){if(!o.has(e)){var i=t.concat([a]);r.push({op:s,path:i,value:e}),n.unshift({op:"remove",path:i,value:e})}a++}))}(e,r,n,o)}},g:function(e,t,r,n){r.push({op:"replace",path:[],value:t===J?void 0:t}),n.push({op:"replace",path:[],value:e})}})}function z(){function e(e,t){function r(){this.constructor=e}u(e,t),e.prototype=(r.prototype=t.prototype,new r)}function t(e){e.i||(e.D=new Map,e.i=new Map(e.u))}function n(e){e.i||(e.i=new Set,e.u.forEach((function(t){if(o(t)){var r=T(e.A.h,t,e);e.p.set(t,r),e.i.add(r)}else e.i.add(t)})))}function a(e){e.O&&r(3,JSON.stringify(v(e)))}var u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},c=function(){function r(e,t){return this[Y]={t:2,l:t,A:t?t.A:O(),M:!1,R:!1,i:void 0,D:void 0,u:e,k:this,I:!1,O:!1},this}e(r,Map);var n=r.prototype;return Object.defineProperty(n,"size",{get:function(){return v(this[Y]).size}}),n.has=function(e){return v(this[Y]).has(e)},n.set=function(e,r){var n=this[Y];return a(n),v(n).has(e)&&v(n).get(e)===r||(t(n),N(n),n.D.set(e,!0),n.i.set(e,r),n.D.set(e,!0)),this},n.delete=function(e){if(!this.has(e))return!1;var r=this[Y];return a(r),t(r),N(r),r.u.has(e)?r.D.set(e,!1):r.D.delete(e),r.i.delete(e),!0},n.clear=function(){var e=this[Y];a(e),v(e).size&&(t(e),N(e),e.D=new Map,i(e.u,(function(t){e.D.set(t,!1)})),e.i.clear())},n.forEach=function(e,t){var r=this;v(this[Y]).forEach((function(n,o){e.call(t,r.get(o),o,r)}))},n.get=function(e){var r=this[Y];a(r);var n=v(r).get(e);if(r.R||!o(n))return n;if(n!==r.u.get(e))return n;var i=T(r.A.h,n,r);return t(r),r.i.set(e,i),i},n.keys=function(){return v(this[Y]).keys()},n.values=function(){var e,t=this,r=this.keys();return(e={})[X]=function(){return t.values()},e.next=function(){var e=r.next();return e.done?e:{done:!1,value:t.get(e.value)}},e},n.entries=function(){var e,t=this,r=this.keys();return(e={})[X]=function(){return t.entries()},e.next=function(){var e=r.next();if(e.done)return e;var n=t.get(e.value);return{done:!1,value:[e.value,n]}},e},n[X]=function(){return this.entries()},r}(),s=function(){function t(e,t){return this[Y]={t:3,l:t,A:t?t.A:O(),M:!1,R:!1,i:void 0,u:e,k:this,p:new Map,O:!1,I:!1},this}e(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return v(this[Y]).size}}),r.has=function(e){var t=this[Y];return a(t),t.i?!!t.i.has(e)||!(!t.p.has(e)||!t.i.has(t.p.get(e))):t.u.has(e)},r.add=function(e){var t=this[Y];return a(t),this.has(e)||(n(t),N(t),t.i.add(e)),this},r.delete=function(e){if(!this.has(e))return!1;var t=this[Y];return a(t),n(t),N(t),t.i.delete(e)||!!t.p.has(e)&&t.i.delete(t.p.get(e))},r.clear=function(){var e=this[Y];a(e),v(e).size&&(n(e),N(e),e.i.clear())},r.values=function(){var e=this[Y];return a(e),n(e),e.i.values()},r.entries=function(){var e=this[Y];return a(e),n(e),e.i.entries()},r.keys=function(){return this.values()},r[X]=function(){return this.values()},r.forEach=function(e,t){for(var r=this.values(),n=r.next();!n.done;)e.call(t,n.value,n.value,this),n=r.next()},t}();b("MapSet",{$:function(e,t){return new c(e,t)},C:function(e,t){return new s(e,t)}})}var F;Object.defineProperty(t,"__esModule",{value:!0});var G,K="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),B="undefined"!=typeof Map,$="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=K?Symbol.for("immer-nothing"):((F={})["immer-nothing"]=!0,F),U=K?Symbol.for("immer-draftable"):"__$immer_draftable",Y=K?Symbol.for("immer-state"):"__$immer_state",X="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",q=""+Object.prototype.constructor,H="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Q=Object.getOwnPropertyDescriptors||function(e){var t={};return H(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Z={},ee={get:function(e,t){if(t===Y)return e;var r=v(e);if(!u(r,t))return function(e,t,r){var n,o=k(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.R||!o(n)?n:n===x(e.u,t)?(R(e),e.i[t]=T(e.A.h,n,e)):n},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,r){var n=k(v(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.M){var o=x(v(e),t),i=null==o?void 0:o[Y];if(i&&i.u===r)return e.i[t]=r,e.D[t]=!1,!0;if(f(r,o)&&(void 0!==r||u(e.u,t)))return!0;R(e),N(e)}return e.i[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.i)||(e.i[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==x(e.u,t)||t in e.u?(e.D[t]=!1,R(e),N(e)):delete e.D[t],e.i&&delete e.i[t],!0},getOwnPropertyDescriptor:function(e,t){var r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.t||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.u)},setPrototypeOf:function(){r(12)}},te={};i(ee,(function(e,t){te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),te.deleteProperty=function(e,t){return te.set.call(this,e,t,void 0)},te.set=function(e,t,r){return ee.set.call(this,e[0],t,r,e[0])};var re=function(){function e(e){var t=this;this.S=W,this.K=!0,this.produce=function(e,n,i){if("function"==typeof e&&"function"!=typeof n){var a=n;n=e;var u=t;return function(e){var t=this;void 0===e&&(e=a);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return u.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(o))}))}}var c;if("function"!=typeof n&&r(6),void 0!==i&&"function"!=typeof i&&r(7),o(e)){var s=w(t),f=T(t,e,void 0),l=!0;try{c=n(f),l=!1}finally{l?P(s):E(s)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return _(s,i),M(e,s)}),(function(e){throw P(s),e})):(_(s,i),M(c,s))}if(!e||"object"!=typeof e){if(void 0===(c=n(e))&&(c=e),c===J&&(c=void 0),t.K&&d(c,!0),i){var p=[],v=[];g("Patches").g(e,c,p,v),i(p,v)}return c}r(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,i=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,n,o]})):[i,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){o(e)||r(8),n(e)&&(e=L(e));var t=w(this),i=T(this,e,void 0);return i[Y].I=!0,E(t),i},t.finishDraft=function(e,t){var r=(e&&e[Y]).A;return _(r,t),M(void 0,r)},t.setAutoFreeze=function(e){this.K=e},t.setUseProxies=function(e){e&&!W&&r(20),this.S=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var o=t[r];if(0===o.path.length&&"replace"===o.op){e=o.value;break}}r>-1&&(t=t.slice(r+1));var i=g("Patches").W;return n(e)?i(e,t):this.produce(e,(function(e){return i(e,t)}))},e}(),ne=new re,oe=ne.produce,ie=ne.produceWithPatches.bind(ne),ae=ne.setAutoFreeze.bind(ne),ue=ne.setUseProxies.bind(ne),ce=ne.applyPatches.bind(ne),se=ne.createDraft.bind(ne),fe=ne.finishDraft.bind(ne);t.Immer=re,t.applyPatches=ce,t.castDraft=function(e){return e},t.castImmutable=function(e){return e},t.createDraft=se,t.current=L,t.default=oe,t.enableAllPlugins=function(){I(),z(),V()},t.enableES5=I,t.enableMapSet=z,t.enablePatches=V,t.finishDraft=fe,t.freeze=d,t.immerable=U,t.isDraft=n,t.isDraftable=o,t.nothing=J,t.original=function(e){return n(e)||r(23,e),e[Y].u},t.produce=oe,t.produceWithPatches=ie,t.setAutoFreeze=ae,t.setUseProxies=ue},30412:(e,t,r)=>{"use strict";e.exports=r(50340)},28354:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nodeVersionContextName=void 0;const n=r(5163),o=r(93849),i=n.__importDefault(r(93208)),a=n.__importDefault(r(1529)),u=n.__importStar(r(2206));t.nodeVersionContextName="nodeVersionProvider",t.default=new o.Feature({id:"envLogger",dependencies:[u.default.asEntity,i.default.asEntity,a.default.asEntity],api:{itemProviders:o.Slot.withType().defineEntity(u.processingEnv),dataService:o.Service.withType().defineEntity(u.processingEnv).allowRemoteAccess()},context:{[t.nodeVersionContextName]:u.processingEnv.withContext()}})},69379:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163),o=n.__importDefault(r(87363)),i=r(62202),a=r(5689),u=n.__importDefault(r(28354)),c=r(17063),s=r(1251);u.default.setup(a.mainEnv,(({dataService:e},{shortcuts:{shortcutService:t},gui:{overlayPanelFactory:r,panelStore:n}})=>{t.on([i.KEYBOARD.UNIVERSAL_CONTROL,i.KEYBOARD.I],(e=>{e.preventDefault(),a()}),{forcedGlobal:!0});const a=async()=>{const t=await async function(){try{return await e.getItems()}catch(e){return[{title:"Error",text:`Error occurred while trying to get logged items:\n${String(e||"")}`}]}}();n.openOverlay({id:c.ENV_LOGGER_MODAL,panelType:c.ENV_LOGGER_MODAL,panelProps:{items:t}})};r.register({id:c.ENV_LOGGER_MODAL,factory:e=>o.default.createElement(s.EnvLoggerModal,{...e})})}))},1251:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EnvLoggerModal=void 0;const n=r(5163).__importDefault(r(87363)),o=r(70268),i=r(83135),a=r(63372),u=r(4117),c=r(64750),s=r(17063);r(7210),t.EnvLoggerModal=function({items:e}){const{close:t}=(0,i.useOverlay)(s.ENV_LOGGER_MODAL),r=Array.from(function(e){return e.reduce(((e,{title:t,text:r})=>(e.has(t)?e.get(t).push(r):e.set(t,[r]),e)),new Map)}(e).entries()).map((([e,t])=>`${e}\n${t.sort().join("\n")}`)).join("\n\n"),f=n.default.createElement(o.VerticalScrollView,{className:c.classes.envData},r);return n.default.createElement(o.ActionModal,{className:c.classes.root,dismissButton:!0,onClose:t,title:s.MODAL_TITLE,onCancel:t,cancelButtonText:"Close",content:f,closeOnClickOutside:!0,additionalActions:n.default.createElement(o.Button,{className:(0,c.style)(u.classes.action,a.classes.primaryButton,c.classes.button)},n.default.createElement(o.CopyToClipboardButton,{className:c.classes.copyButton,textToCopy:r,beforeCopyMessage:"Copy",afterCopyMessage:"Copied"}))})}},76267:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SECTIONS=t.MODAL_TITLE=t.ENV_LOGGER_MODAL=void 0,t.ENV_LOGGER_MODAL="envLoggerModal",t.MODAL_TITLE="Environment Information",t.SECTIONS={OWN_DEPENDENCIES:"Own Dependencies",USER_ENVIRONMENT:"User Environment",PROJECT_DEPS:"Project Dependencies",ERROR:"Error"}},71853:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractDeps=void 0,t.extractDeps=function(e,t){var r;const n=[],o={...e.dependencies,...e.devDependencies};if(e.dependencies)for(const e of t)n.push(`${e}: ${null!==(r=o[e])&&void 0!==r?r:"Not found"}`);return n}},17063:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5163);n.__exportStar(r(76267),t),n.__exportStar(r(71853),t),n.__exportStar(r(24994),t)},24994:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},83135:(e,t,r)=>{e.exports=r(77467)},43934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=r(5163);n.__exportStar(r(31434),t);var o=r(31434);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.__importDefault(o).default}})},2206:(e,t,r)=>{e.exports=r(43934)}}]);