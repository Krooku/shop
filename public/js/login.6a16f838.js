(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"6d09":function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=37)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(30)("wks"),o=e(34),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(13),o=e(29);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(23)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(0),o=e(3),i=e(10),u=e(4),a=function(t,n,e){var s,c,f,l=t&a.F,p=t&a.G,d=t&a.S,v=t&a.P,h=t&a.B,m=t&a.W,g=p?o:o[n]||(o[n]={}),y=g.prototype,b=p?r:d?r[n]:(r[n]||{}).prototype;for(s in p&&(e=n),e)(c=!l&&b&&void 0!==b[s])&&s in g||(f=c?b[s]:e[s],g[s]=p&&"function"!=typeof b[s]?e[s]:h&&c?i(f,r):m&&b[s]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[s]=f,t&a.R&&y&&!y[s]&&u(y,s,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2),o=e(45),i=e(65),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(6),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=o(n),this.reject=o(e)}var o=e(8);t.exports.f=function(t){return new r(t)}},function(t,n,e){var r=e(13).f,o=e(12),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(30)("keys"),o=e(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(47),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){"use strict";var r=e(26),o=e(11),i=e(60),u=e(4),a=e(12),s=e(7),c=e(50),f=e(17),l=e(56),p=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,m,g,y){c(e,n,h);var b,x,w,_=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},k=n+" Iterator",S="values"==m,j=!1,A=t.prototype,C=A[p]||A["@@iterator"]||m&&A[m],L=C||_(m),O=m?S?_("entries"):L:void 0,R="Array"==n&&A.entries||C;if(R&&(w=l(R.call(new t)))!==Object.prototype&&w.next&&(f(w,k,!0),r||a(w,p)||u(w,p,v)),S&&C&&"values"!==C.name&&(j=!0,L=function(){return C.call(this)}),r&&!y||!d&&!j&&A[p]||u(A,p,L),s[n]=L,s[k]=v,m)if(b={values:S?L:_("values"),keys:g?L:_("keys"),entries:O},y)for(x in b)x in A||i(A,x,b[x]);else o(o.P+o.F*(d||j),n,b);return b}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(2),o=e(6),i=e(16);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(2),o=e(8),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(10),a=e(46),s=e(24),c=e(15),f=e(0),l=f.process,p=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=f.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){y.call(t.data)};p&&d||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++m]=function(){a("function"==typeof t?t:Function(t),n)},r(m),m},d=function(t){delete g[t]},"process"==e(9)(l)?r=function(t){l.nextTick(u(y,t,1))}:h&&h.now?r=function(t){h.now(u(y,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){s.appendChild(c("script")).onreadystatechange=function(){s.removeChild(this),y.call(t)}}:function(t){setTimeout(u(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){function r(t){e(79)}var o=e(77)(e(38),e(78),r,"data-v-0af1f3c3",null);t.exports=o.exports},function(t,n,e){"use strict";function r(t,n){return new s.a((function(e){window.fbAsyncInit=function(){FB.init({appId:t,xfbml:!1,version:n,cookie:!0}),FB.AppEvents.logPageView(),e("SDK Loaded!")},function(t,n,e){var r=t.getElementsByTagName(n)[0];if(!t.getElementById(e)){var o=t.createElement(n);o.id=e,o.src="//connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r)}}(document,"script","facebook-jssdk")}))}function o(){return new s.a((function(t){window.FB.getLoginStatus((function(n){t(n)}))}))}function i(t){return new s.a((function(n){window.FB.login((function(t){return n(t)}),t)}))}function u(){return new s.a((function(t){window.FB.logout((function(n){return t(n)}))}))}n.c=r,n.d=o,n.b=i,n.a=u;var a=e(39),s=e.n(a)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"facebookLoginPlugin",(function(){return i}));var r=e(35),o=e.n(r),i={install:function(t,n){t.component(o.a.name,o.a)}};n.default=o.a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(36),o=e(76),i=e.n(o);n.default={name:"facebook-login",data:function(){return{isWorking:!1,isConnected:!1,icon:i.a}},computed:{getButtonText:function(){switch(this.isConnected){case!0:return this.logoutLabel;case!1:return this.loginLabel;default:return"this is default"}}},methods:{buttonClicked:function(){this.$emit("click"),this.isConnected?this.logout():this.login()},logout:function(){var t=this;this.isWorking=!0,e.i(r.a)().then((function(n){t.isWorking=!1,t.isConnected=!1,t.$emit("logout",n)}))},login:function(){var t=this;this.isWorking=!0,e.i(r.b)(this.loginOptions).then((function(n){"connected"===n.status?t.isConnected=!0:t.isConnected=!1,t.isWorking=!1,t.$emit("login",{response:n,FB:window.FB})}))}},props:{appId:{type:String,required:!0},version:{type:String,default:"v2.10"},logoutLabel:{type:String,default:"Log out from Facebook"},loginLabel:{type:String,default:"Log In To Facebook"},loginOptions:{type:Object,default:function(){return{scope:"email"}}}},mounted:function(){var t=this;this.isWorking=!0,e.i(r.c)(this.appId,this.version).then((function(t){})).then((function(){return e.i(r.d)()})).then((function(n){"connected"===n.status&&(t.isConnected=!0),t.isWorking=!1,t.$emit("get-initial-status",n),t.$emit("sdk-loaded",{isConnected:t.isConnected,FB:window.FB})}))}}},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){e(68),e(70),e(73),e(69),e(71),e(72),t.exports=e(3).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(20),o=e(33),i=e(63);t.exports=function(t){return function(n,e,u){var a,s=r(n),c=o(s.length),f=i(u,c);if(t&&e!=e){for(;c>f;)if((a=s[f++])!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(10),o=e(49),i=e(48),u=e(2),a=e(33),s=e(66),c={},f={};n=t.exports=function(t,n,e,l,p){var d,v,h,m,g=p?function(){return t}:s(t),y=r(e,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=a(t.length);d>b;b++)if((m=n?y(u(v=t[b])[0],v[1]):y(t[b]))===c||m===f)return m}else for(h=g.call(t);!(v=h.next()).done;)if((m=o(h,y,v.value,n))===c||m===f)return m};n.BREAK=c,n.RETURN=f},function(t,n,e){t.exports=!e(5)&&!e(23)((function(){return 7!=Object.defineProperty(e(15)("div"),"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(7),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){"use strict";var r=e(54),o=e(29),i=e(17),u={};e(4)(u,e(1)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(0),o=e(32).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,s="process"==e(9)(u);t.exports=function(){var t,n,e,c=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(c)};else if(i){var f=!0,l=document.createTextNode("");new i(c).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(a&&a.resolve){var p=a.resolve();e=function(){p.then(c)}}else e=function(){o.call(r,c)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(2),o=e(55),i=e(22),u=e(18)("IE_PROTO"),a=function(){},s=function(){var t,n=e(15)("iframe"),r=i.length;for(n.style.display="none",e(24).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(13),o=e(2),i=e(58);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),a=u.length,s=0;a>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(12),o=e(64),i=e(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(12),o=e(20),i=e(43)(!1),u=e(18)("IE_PROTO");t.exports=function(t,n){var e,a=o(t),s=0,c=[];for(e in a)e!=u&&r(a,e)&&c.push(e);for(;n.length>s;)r(a,e=n[s++])&&(~i(c,e)||c.push(e));return c}},function(t,n,e){var r=e(57),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(4);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var r=e(0),o=e(3),i=e(13),u=e(5),a=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[a]&&i.f(n,a,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(19),o=e(14);t.exports=function(t){return function(n,e){var i,u,a=String(o(n)),s=r(e),c=a.length;return s<0||s>=c?t?"":void 0:(i=a.charCodeAt(s),i<55296||i>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):i:t?a.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(21),o=e(1)("iterator"),i=e(7);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(41),o=e(52),i=e(7),u=e(20);t.exports=e(25)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r,o,i,u,a=e(26),s=e(0),c=e(10),f=e(21),l=e(11),p=e(6),d=e(8),v=e(42),h=e(44),m=e(31),g=e(32).set,y=e(53)(),b=e(16),x=e(27),w=e(28),_=s.TypeError,k=s.process,S=s.Promise,j="process"==f(k),A=function(){},C=o=b.f,L=!!function(){try{var t=S.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(A,A)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof n}catch(t){}}(),O=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},R=function(t,n){if(!t._n){t._n=!0;var e=t._c;y((function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=o?n.ok:n.fail,a=n.resolve,s=n.reject,c=n.domain;try{u?(o||(2==t._h&&T(t),t._h=1),!0===u?e=r:(c&&c.enter(),e=u(r),c&&c.exit()),e===n.promise?s(_("Promise-chain cycle")):(i=O(e))?i.call(e,a,s):a(e)):s(r)}catch(t){s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&E(t)}))}},E=function(t){g.call(s,(function(){var n,e,r,o=t._v,i=M(t);if(i&&(n=x((function(){j?k.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=j||M(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},M=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!M(n.promise))return!1;return!0},T=function(t){g.call(s,(function(){var n;j?k.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})}))},P=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),R(n,!0))},I=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw _("Promise can't be resolved itself");(n=O(t))?y((function(){var r={_w:e,_d:!1};try{n.call(t,c(I,r,1),c(P,r,1))}catch(t){P.call(r,t)}})):(e._v=t,e._s=1,R(e,!1))}catch(t){P.call({_w:e,_d:!1},t)}}};L||(S=function(t){v(this,S,"Promise","_h"),d(t),r.call(this);try{t(c(I,this,1),c(P,this,1))}catch(t){P.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(59)(S.prototype,{then:function(t,n){var e=C(m(this,S));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?k.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&R(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(I,t,1),this.reject=c(P,t,1)},b.f=C=function(t){return t===S||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!L,{Promise:S}),e(17)(S,"Promise"),e(61)("Promise"),u=e(3).Promise,l(l.S+l.F*!L,"Promise",{reject:function(t){var n=C(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!L),"Promise",{resolve:function(t){return w(a&&this===u?S:this,t)}}),l(l.S+l.F*!(L&&e(51)((function(t){S.all(t).catch(A)}))),"Promise",{all:function(t){var n=this,e=C(n),r=e.resolve,o=e.reject,i=x((function(){var e=[],i=0,u=1;h(t,!1,(function(t){var a=i++,s=!1;e.push(void 0),u++,n.resolve(t).then((function(t){s||(s=!0,e[a]=t,--u||r(e))}),o)})),--u||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=C(n),r=e.reject,o=x((function(){h(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},function(t,n,e){"use strict";var r=e(62)(!0);e(25)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){"use strict";var r=e(11),o=e(3),i=e(0),u=e(31),a=e(28);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){"use strict";var r=e(11),o=e(16),i=e(27);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(67);for(var r=e(0),o=e(4),i=e(7),u=e(1)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<a.length;s++){var c=a[s],f=r[c],l=f&&f.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,n,e){n=t.exports=e(75)(!1),n.push([t.i,"\nbutton[data-v-0af1f3c3] {\n  position: relative;\n  padding: 0 15px 0px 46px;\n  border: none;\n  line-height: 34px;\n  font-size: 16px;\n  color: #FFF;\n  min-width: 225px;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n}\n.spinner[data-v-0af1f3c3] {\n  box-sizing: border-box;\n  width: 30px;\n  height: 90%;\n  border-radius: 50%;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  -webkit-animation: spin-data-v-0af1f3c3 2s linear infinite;\n          animation: spin-data-v-0af1f3c3 2s linear infinite;\n  position: absolute;\n  left: 5px;\n}\nimg[data-v-0af1f3c3] {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 30px;\n}\n@-webkit-keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-0af1f3c3 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n",""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}))).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmYyZjIyZi04ZDdlLTQzNjEtYjM2Zi02NGFiYmI2Nzg3ZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTREMzBERkE2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTREMzBERjk2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNGZlZTRmMS0wMGNjLTRlZTEtYTY5MS00MjJmOGUxY2VmYjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmZmMmYyMmYtOGQ3ZS00MzYxLWIzNmYtNjRhYmJiNjc4N2Q1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F7pueQAAAKpJREFUeNpi+P//PwM2jA0AxZWBeA4QP/2PCl5j6CfWYKCYJRB//o8boOhnxOU6RkZGZENZgNQNIFZmwA0YkTksDMQBOyyGvgfic0D8BZsGYg3WQeP/AGItoK9eIPkKRQETkQYLofHvIxuKDRBrMDr4RUgBuQYTBDhTBSjYSDDnGhBr08LFd2kVFPdoZfBdbFmVYJYG8hvQsu8FQubQLFWMGjxq8HAwGCDAAM8dwEI+7fo0AAAAAElFTkSuQmCC"},function(t,n){t.exports=function(t,n,e,r,o){var i,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,u=t.default);var s,c="function"==typeof u?u.options:u;if(n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),r&&(c._scopeId=r),o?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=s):e&&(s=e),s){var f=c.functional,l=f?c.render:c.beforeCreate;f?c.render=function(t,n){return s.call(n),l(t,n)}:c.beforeCreate=l?[].concat(l,s):[s]}return{esModule:i,exports:u,options:c}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("button",{on:{click:t.buttonClicked}},[t.isWorking?e("div",{staticClass:"spinner"}):t._e(),t._v(" "),t.isWorking?t._e():e("img",{attrs:{src:t.icon}}),t._v(" "+t._s(t.getButtonText)+"\n  ")])])},staticRenderFns:[]}},function(t,n,e){var r=e(74);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),e(80)("05ca2c48",r,!0)},function(t,n,e){function r(t){for(var n=0;n<t.length;n++){var e=t[n],r=f[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(i(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var u=[];for(o=0;o<e.parts.length;o++)u.push(i(e.parts[o]));f[e.id]={id:e.id,refs:1,parts:u}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=d++;r=p||(p=o()),n=u.bind(null,r,i,!1),e=u.bind(null,r,i,!0)}else r=o(),n=a.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}function u(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}function a(t,n){var e=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=e(81),f={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){v=e;var o=c(t,n);return r(o),function(n){for(var e=[],i=0;i<o.length;i++){var u=o[i],a=f[u.id];a.refs--,e.push(a)}n?(o=c(t,n),r(o)):o=[];for(i=0;i<e.length;i++){a=e[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete f[a.id]}}}};var g=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],u=i[0],a=i[1],s=i[2],c=i[3],f={id:t+":"+o,css:a,media:s,sourceMap:c};r[u]?r[u].parts.push(f):e.push(r[u]={id:u,parts:[f]})}return e}}])}))},"8fa2":function(t,n,e){},"9d45":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"view_template",staticClass:"view_container"},[t._t("default")],2)},o=[],i=e("cffa"),u={data:function(){return{nav:this.$parent.$parent.$refs.navigation.$refs.nav}},computed:{currentRouteName:function(){return this.$route.name}},mounted:function(){"homepage"===this.currentRouteName?(i["a"].set(this.nav,{x:0,opacity:0}),i["a"].to(this.nav,{opacity:1,duration:.5})):(i["a"].set(this.nav,{x:"-100%",opacity:1}),i["a"].to(this.nav,{x:0,duration:.5}))},methods:{beforeRouteLeave:function(t,n){var e=this;return new Promise((function(t,n){"homepage"===e.currentRouteName?i["a"].to(e.nav,{opacity:0,duration:.5,onComplete:t}):i["a"].to(e.nav,{x:"-400px",duration:.5,onComplete:t})}))}}},a=u,s=(e("b372"),e("2877")),c=Object(s["a"])(a,r,o,!1,null,null,null);n["a"]=c.exports},a55b:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view-template",{attrs:{id:"login_site"}},[e("div",{attrs:{id:"logo"}},[t._v(" Saritagun ")]),e("div",{staticClass:"login"},[e("form",{attrs:{method:"post"},on:{submit:function(n){return n.preventDefault(),t.handleLogin(n)}}},[e("h1",[t._v("LOGOWANIE")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:"Nazwa użytkownika",required:""},domProps:{value:t.user.username},on:{input:function(n){n.target.composing||t.$set(t.user,"username",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Hasło",required:""},domProps:{value:t.user.password},on:{input:function(n){n.target.composing||t.$set(t.user,"password",n.target.value)}}}),t.error?e("p",{staticClass:"message message--error"},[t._v(" "+t._s(t.error)+" ")]):t._e(),e("button",{attrs:{type:"submit"}},[t._v(" Zaloguj się ")])]),e("a",{attrs:{role:"button"},on:{click:function(n){return t.fbLogin("test")}}},[e("i",{staticClass:"fab fa-facebook"}),t._v(" Zaloguj się przez facebook ")]),e("facebook-login",{staticClass:"button",attrs:{"app-id":"1369553153510750"},on:{login:t.getUserData,logout:t.onLogout,"get-initial-status":t.getUserData}})],1)])},o=[],i=e("a34a"),u=e.n(i),a=e("d722"),s=e("9d45"),c=e("6d09"),f=e.n(c);function l(t,n,e,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void e(c)}a.done?n(s):Promise.resolve(s).then(r,o)}function p(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function u(t){l(i,r,o,u,a,"next",t)}function a(t){l(i,r,o,u,a,"throw",t)}u(void 0)}))}}var d={name:"Homepage",components:{ViewTemplate:s["a"],facebookLogin:f.a},data:function(){return{error:null,user:{username:"",password:""}}},beforeRouteLeave:function(t,n,e){this.$children[0].beforeRouteLeave(t,n).then((function(){e()})),e(!1)},methods:{fbLogin:function(){var t=p(u.a.mark((function t(n){var e;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return alert(n),t.next=3,a["a"].loginFacebook();case 3:e=t.sent,console.log(e);case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),handleLogin:function(){var t=p(u.a.mark((function t(){var n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].login(this.user);case 2:if(n=t.sent,200===n.status){t.next=5;break}return t.abrupt("return",this.error=n.data.message);case 5:this.$store.dispatch("login",n.data),this.$router.push({name:"homepage"});case 7:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),getUserData:function(t){console.log(t)},onLogout:function(t){console.log(t)}}},v=d,h=e("2877"),m=Object(h["a"])(v,r,o,!1,null,null,null);n["default"]=m.exports},b372:function(t,n,e){"use strict";var r=e("8fa2"),o=e.n(r);o.a}}]);
//# sourceMappingURL=login.6a16f838.js.map