(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/ComponentIcon.483685cf.svg"},23:function(n,e,t){n.exports=t.p+"static/media/PageIcon.6e637937.svg"},27:function(n,e,t){n.exports=t(56)},56:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),c=t(5),u=t.n(c),i=t(3),l=t(1);function f(){var n=Object(r.a)(["\n      background-color: transparent;\n      color: #123;\n    "]);return f=function(){return n},n}function m(){var n=Object(r.a)(["\n      opacity: 0.2;\n    "]);return m=function(){return n},n}function s(){var n=Object(r.a)(["\n  padding: 0.75em 1em;\n  font-weight: bold;\n  border-radius: 0.25em;\n  background-color: #123;\n  ","\n  color: white;\n  border: 1px solid #123;\n  ","\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n  margin-bottom: 1em;\n"]);return d=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: block;\n  font-weight: 700;\n  margin-bottom: 0.5em;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(['\n  padding: 0.75em;\n  border-radius: 0.25em;\n  border: 1px solid #ccc;\n  width: 100%;\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n']);return b=function(){return n},n}var g=l.default.input(b()),E=l.default.label(p()),v=l.default.div(d()),O=l.default.button(s(),function(n){return n.disabled&&Object(l.css)(m())},function(n){return n.secondary&&Object(l.css)(f())});function h(){var n=Object(r.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n"]);return h=function(){return n},n}function j(){var n=Object(r.a)(["\n  color: #999;\n"]);return j=function(){return n},n}function D(){var n=Object(r.a)(["\n  margin-bottom: 40px;\n"]);return D=function(){return n},n}var k=l.default.div(D());function w(n){var e=n.personalToken,t=n.onClick;return o.a.createElement(C,null,"Personal Token:"," ",o.a.createElement(x,{onClick:t},e&&e.substr(0,5)+"..."))}var C=l.default.div(j()),x=l.default.span(h());function T(n){var e=n.onChange,t=n.personalToken,r=n.onBlur,c=n.onFocus,u=Object(a.useRef)(null);return o.a.createElement(v,null,o.a.createElement(E,{htmlFor:"personalToken"},"Personal Token"),o.a.createElement(g,{autoComplete:"off",spellCheck:!1,name:"personalToken",value:t||"",onChange:function(n){return e(n.target.value)},onBlur:r,onFocus:c,ref:u,placeholder:"e.g. 12345-12345678-1234-1234-1234-123456789012"}),o.a.createElement("p",null,"Generate a token in Figma's Account Settings page and paste it here."))}var y=function(n){var e=n.onChange,t=n.personalToken,r=Object(a.useState)(!1),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(k,null,!t||u?o.a.createElement(T,{onChange:e,personalToken:t,onFocus:function(){return l(!0)},onBlur:function(){return l(!1)}}):o.a.createElement(w,{personalToken:t,onClick:function(){return l(!0)}}))};function N(){var n=Object(r.a)(["\n  margin-bottom: 40px;\n"]);return N=function(){return n},n}var I=l.default.div(N());var M=function(n){var e=n.onSubmit,t=n.noTokenYet,r=Object(a.useState)(""),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(I,null,o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e(u)}},o.a.createElement(v,null,o.a.createElement(E,{htmlFor:"personalToken"},"File ID"),o.a.createElement(g,{autoComplete:"off",spellCheck:!1,name:"personalToken",value:u,onChange:function(n){return l(n.target.value)},placeholder:"e.g. AaBbCcDdEeFfGg12345ABCDE"}),o.a.createElement("p",null,"Use the string of characters inside a Figma file's URL.")),o.a.createElement(v,null,o.a.createElement(O,{type:"submit",disabled:t||!u},"X-Ray this file"))))},L=t(10),R=t.n(L),S=t(21),F=t(22),A=t.n(F),U=t(23),_=t.n(U);function B(){var n=Object(r.a)(["\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #ddd;\n  font-weight: bold;\n  padding: 0.2em 0.5em;\n"]);return B=function(){return n},n}function Y(){var n=Object(r.a)(["\n  cursor: pointer;\n  font-size: 85%;\n"]);return Y=function(){return n},n}function G(){var n=Object(r.a)(["\n  font-weight: bold;\n  color: #7b67fb;\n"]);return G=function(){return n},n}function z(){var n=Object(r.a)(["\n  color: #999;\n  font-size: 85%;\n  margin-bottom: 4px;\n"]);return z=function(){return n},n}function P(){var n=Object(r.a)(["\n  margin: 20px 0;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  img {\n    max-width: 200px;\n    max-height: 200px;\n  }\n"]);return P=function(){return n},n}function J(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return J=function(){return n},n}function W(){var n=Object(r.a)(["\n  margin-bottom: 20px;\n  margin-right: 20px;\n  padding: 20px;\n  border-radius: 3px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(25, 25, 25, 0.06) 0px 7px 15px 0px;\n"]);return W=function(){return n},n}function q(){var n=Object(r.a)([""]);return q=function(){return n},n}function X(){var n=Object(r.a)(["\n  margin: 10px 0 20px 0;\n"]);return X=function(){return n},n}function $(){var n=Object(r.a)(["\n  font-weight: 700;\n  margin: 10px 0 10px 0;\n"]);return $=function(){return n},n}function H(){var n=Object(r.a)(["\n  font-size: 85%;\n  margin-top: 10px;\n  margin-left: 5px;\n"]);return H=function(){return n},n}function K(){var n=Object(r.a)([""]);return K=function(){return n},n}function Q(){var n=Object(r.a)(["\n  font-weight: 900;\n  margin-bottom: 0.5em;\n"]);return Q=function(){return n},n}function V(){var n=Object(r.a)(["\n      background-color: #123;\n      color: white;\n    "]);return V=function(){return n},n}function Z(){var n=Object(r.a)(["\n  padding: 20px;\n  cursor: pointer;\n  border-radius: 0.5em;\n  margin-right: 20px;\n  background-color: #eee;\n  ","\n"]);return Z=function(){return n},n}function nn(){var n=Object(r.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return nn=function(){return n},n}var en=l.default.div(nn());function tn(n){var e=n.name,t=n.count,r=n.onClick,a=n.active;return o.a.createElement(rn,{active:a,onClick:r},o.a.createElement(an,null,e),o.a.createElement(on,null,t))}var rn=l.default.div(Z(),function(n){return n.active&&Object(l.css)(V())}),an=l.default.div(Q()),on=l.default.div(K());function cn(n){n.name;var e=n.subtitle,t=n.components,r=n.imageData,a=t.length;return o.a.createElement(sn,null,o.a.createElement(mn,null,e),o.a.createElement(pn,null,a>0?t.map(function(n){return o.a.createElement(un,{key:n.id,component:n,imageData:r})}):"None."))}function un(n){var e=n.component,t=n.imageData,r=Object(a.useState)(!1),c=Object(i.a)(r,2),u=c[0],l=c[1];return o.a.createElement(dn,null,o.a.createElement(gn,null,e.path&&e.path.join(" > ")),o.a.createElement(En,null,o.a.createElement("img",{src:A.a,alt:"Figma Component Icon"})," ",e.name),o.a.createElement(bn,null,t&&o.a.createElement("img",{srcSet:t[e.id]+" 2w",sizes:"1px",src:t[e.id],alt:"Component Preview"})),o.a.createElement(vn,{onClick:function(){return l(!u)}},o.a.createElement(On,null,e.count)," ",0===e.count?"instances":1===e.count?"instance...":"instances..."),u?o.a.createElement(ln,{instances:e.instances}):null)}function ln(n){var e=n.instances;return o.a.createElement(fn,null,e.map(function(n,e){return n.path&&o.a.createElement("div",null,o.a.createElement("img",{src:_.a,alt:"Figma Page Icon"})," ",n.path.join(" > "))}))}var fn=l.default.div(H()),mn=(l.default.h2($()),l.default.p(X())),sn=l.default.section(q()),dn=l.default.div(W()),pn=l.default.div(J()),bn=l.default.div(P()),gn=l.default.div(z()),En=l.default.div(G()),vn=l.default.div(Y()),On=l.default.span(B()),hn=function(n){var e=n.fileID,t=n.fileData,r=n.summary,c=n.imageData,u=Object(a.useState)("LIBRARY"),l=Object(i.a)(u,2),f=l[0],m=l[1];return null===t||null===r||null===e?null:o.a.createElement("div",null,o.a.createElement(en,null,o.a.createElement(tn,{name:"Library Components",active:"LIBRARY"===f,count:r.LIBRARY.length,onClick:function(){m("LIBRARY")}}),o.a.createElement(tn,{name:"Local Components",active:"DOCUMENT"===f,count:r.DOCUMENT.length,onClick:function(){return m("DOCUMENT")}}),o.a.createElement(tn,{name:"Deleted Components",active:"DELETED_FROM_DOCUMENT"===f,count:r.DELETED_FROM_DOCUMENT.length,onClick:function(){return m("DELETED_FROM_DOCUMENT")}})),"LIBRARY"===f&&o.a.createElement(cn,{name:"Library Components",subtitle:"These are the components you've used from the team library.",components:r.LIBRARY,imageData:c}),"DOCUMENT"===f&&o.a.createElement(cn,{name:"Local Components",subtitle:"If any are not used, consider deleting them.",components:r.DOCUMENT,imageData:c}),"DELETED_FROM_DOCUMENT"===f&&o.a.createElement(cn,{name:"Deleted Components",subtitle:"Undiscoverable components. Consider restoring the master, or replace the instance.",components:r.DELETED_FROM_DOCUMENT,imageData:c}))},jn=t(11);function Dn(n,e){return new Promise(function(t,r){n&&e?jn.a({personalAccessToken:e}).file(n).then(function(n){var e=n.data;t(e)}).catch(r):r()})}function kn(n,e,t){return new Promise(function(r,a){n&&e?jn.a({personalAccessToken:e}).fileImages(n,{ids:t,scale:2,format:"png"}).then(function(n){var e=n.data;r(e.images)}).catch(a):a()})}function wn(n){return"INSTANCE"===n.type?[n]:"children"in n?n.children.map(wn).reduce(function(n,e){return n.concat(e)},[]):[]}function Cn(n,e){return wn(n).filter(function(n){return n.componentId===e})}function xn(n,e){var t=function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];var a=e.name;if(e.id===t)return r;if(!("children"in e))return!1;for(var o=0;o<e.children.length;o+=1){var c=n(e.children[o],t,r.concat(a));if(!1!==c)return c}return!1}(n,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]);return!!t&&t.slice(1)}function Tn(n){var e=function(n){var e=n.components,t={};return Object.keys(e).forEach(function(r){t[r]={component:e[r],count:Cn(n.document,r).length,path:xn(n.document,r)}}),t}(n),t=Object.keys(e).map(function(t){return{id:t,path:e[t].path,name:e[t].component.name,type:e[t].component.key?"LIBRARY":e[t].path?"DOCUMENT":"DELETED_FROM_DOCUMENT",count:e[t].count,instances:Cn(n.document,t).map(function(e){return{path:xn(n.document,e.id)}})}}).filter(function(n){return!("LIBRARY"===n.type&&0===n.count)});return{LIBRARY:t.filter(function(n){return"LIBRARY"===n.type}),DOCUMENT:t.filter(function(n){return"DOCUMENT"===n.type}),DELETED_FROM_DOCUMENT:t.filter(function(n){return"DELETED_FROM_DOCUMENT"===n.type})}}function yn(){var n=Object(r.a)(["\n  color: inherit;\n"]);return yn=function(){return n},n}function Nn(){var n=Object(r.a)(["\n  font-weight: 300;\n  color: #999;\n"]);return Nn=function(){return n},n}function In(){var n=Object(r.a)(["\n  font-weight: 900;\n  margin-bottom: 40px;\n"]);return In=function(){return n},n}function Mn(n){var e=n.fileID,t=n.personalToken,r=Object(a.useState)(null),c=Object(i.a)(r,2),u=c[0],l=c[1],f=Object(a.useState)(null),m=Object(i.a)(f,2),s=m[0],d=m[1],p=Object(a.useState)(null),b=Object(i.a)(p,2),g=b[0],E=b[1],v=Object(a.useState)("NONE"),O=Object(i.a)(v,2),h=O[0],j=O[1],D=Object(a.useState)(null),k=Object(i.a)(D,2),w=k[0],C=k[1];return Object(a.useEffect)(function(){(function(){var n=Object(S.a)(R.a.mark(function n(){var r,a,o,c;return R.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j("LOADING_DOCUMENT"),l(null),C(null),E(null),n.next=6,Dn(e,t);case 6:return r=n.sent,l(r),r&&(a=Tn(r),d(a)),j("LOADING_IMAGES"),o=r?Object.keys(r.components):[],n.next=13,kn(e,t,o);case 13:c=n.sent,C(c),j("NONE");case 16:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}})()().catch(function(n){if(j("NONE"),!n.request)throw n;E(n.message)})},[e,t]),o.a.createElement("div",null,o.a.createElement(Rn,null,u?o.a.createElement(Fn,{target:"_blank",href:"https://www.figma.com/file/".concat(e)},u.name):null," ",o.a.createElement(Sn,null,o.a.createElement(Ln,{loading:h,error:g}))),u?o.a.createElement(hn,{fileID:e,fileData:u,summary:s,imageData:w}):null)}function Ln(n){var e=n.loading,t=n.error;return o.a.createElement(o.a.Fragment,null,t||{NONE:null,LOADING_DOCUMENT:"Loading document...",LOADING_IMAGES:"Loading images...",LINTING:"Linting..."}[e])}var Rn=l.default.h1(In()),Sn=l.default.span(Nn()),Fn=l.default.a(yn());function An(){var n=Object(r.a)(["\n  display: inline-block;\n  text-decoration: underline;\n  margin-bottom: 20px;\n  cursor: pointer;\n"]);return An=function(){return n},n}function Un(){var n=Object(r.a)(["\n  padding: 20px;\n"]);return Un=function(){return n},n}var _n=l.default.div(Un());var Bn=function(){var n=Object(a.useState)(null),e=Object(i.a)(n,2),t=e[0],r=e[1],c=Object(a.useState)(null),u=Object(i.a)(c,2),l=u[0],f=u[1];function m(){var n=window.location.hash.match(/#\/file\/(\w+)/);f(n?n[1]:null)}function s(n){f(n),n?window.history.pushState(null,"","#/file/".concat(n)):window.history.pushState(null,"","#/")}return Object(a.useEffect)(function(){var n=window.localStorage.getItem("personalToken")||"";n&&r(n),m(),window.onpopstate=function(){m()}},[]),o.a.createElement(_n,null,o.a.createElement(y,{personalToken:t,onChange:function(n){r(n),window.localStorage.setItem("personalToken",n)}}),!l&&o.a.createElement(M,{onSubmit:s,noTokenYet:!t}),t&&l&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Yn,{onClick:function(){return s("")}},"Choose another file"),o.a.createElement(Mn,{fileID:l,personalToken:t})))},Yn=l.default.div(An());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Gn=t(25);function zn(){var n=Object(r.a)(['\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        color: #123;\n        font-weight: 300;\n        background-color: #f8f8f8;\n        font-size: 13px;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n            monospace;\n    }\n']);return zn=function(){return n},n}var Pn=Object(l.createGlobalStyle)(zn());u.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(Gn.Normalize,null),o.a.createElement(Pn,null),o.a.createElement(Bn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.5d447ce6.chunk.js.map