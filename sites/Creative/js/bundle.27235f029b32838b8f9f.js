!function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"/"+({}[e]||e)+".27235f029b32838b8f9f.js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([133,1]),r()}({133:function(e,t,r){r(134),e.exports=r(333)},331:function(e,t,r){},332:function(e,t,r){var n={"./1.jpg":[334,2],"./2.jpg":[335,3],"./3.jpg":[336,4],"./4.jpg":[337,5],"./5.jpg":[338,6],"./6.jpg":[339,7],"./fill-heart.svg":[340,8],"./heart.svg":[341,9]};function o(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((function(){return r(o)}))}o.keys=function(){return Object.keys(n)},o.id=332,e.exports=o},333:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(63),i=r.n(a),c=r(40),u=r(130);function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e,t){return[].concat(l(e.slice(0,t.index)),[t.item],l(e.slice(t.index+1)))},p="GET_CARDS",d="UPDATE_CARD",m=function(e){return{type:p,payload:e}},y=function(e){return{type:d,payload:e}};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={cards:null};var O=Object(c.combineReducers)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return v(v({},e),{},{cards:t.payload});case d:return v(v({},e),{},{cards:s(e.cards,t.payload)});default:return e}}}),j=[{id:1,filename:"1.jpg",liked:!1},{id:2,filename:"2.jpg",liked:!1},{id:3,filename:"3.jpg",liked:!1},{id:4,filename:"4.jpg",liked:!1},{id:5,filename:"5.jpg",liked:!1},{id:6,filename:"6.jpg",liked:!1}],w=Object(c.createStore)(O,Object(u.composeWithDevTools)());window.setTimeout((function(){w.dispatch(m(j))}),3e3);var P=w,E=r(64),_=(r(331),r(8)),k=r.n(_),S=function(e){return e.cards.cards},C=r(95),D=r.n(C);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var o=U(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return H(this,r)}}function H(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(c,e);var t,n,a,i=R(c);function c(){var e;A(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return B(L(e=i.call.apply(i,[this].concat(n))),"state",{src:null,itemHover:!1}),B(L(e),"componentDidMount",(function(){var t=e.props.elem.filename;e.loadImage(t)})),B(L(e),"loadImage",(function(t){r(332)("./".concat(t)).then((function(t){e.setState({src:t.default})}))})),B(L(e),"handleButtonClick",(function(t){t.preventDefault();var r=e.props,n=r.elem,o=r.index;(0,r.updateCard)({index:o,item:M(M({},n),{},{liked:!n.liked})})})),B(L(e),"handleItemMouseEnter",(function(t){t.target.closest(".apartments__item")&&e.setState((function(e){return{itemHover:!e.itemHover}}))})),B(L(e),"handleItemMouseLeave",(function(){e.setState((function(e){return{itemHover:!e.itemHover}}))})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.elem,r=e.index,n=this.state,a=n.src,i=n.itemHover,c=t.liked,u=D()({apartments__button:!0,"active-button":c}),l=D()({apartments__item:!0,"hover-item":i});return o.a.createElement("li",{className:l,onMouseEnter:this.handleItemMouseEnter,onMouseLeave:this.handleItemMouseLeave},a&&o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"apartments__image",src:a,alt:"Апартаменты ".concat(r+1)}),o.a.createElement("button",{className:u,type:"button","aria-label":c?"Убрать лайк":"Поставить лайк",onClick:this.handleButtonClick})))}}])&&N(t.prototype,n),a&&N(t,a),c}(o.a.PureComponent),J=function(e){var t=e.cards,r=e.updateCard;return o.a.createElement("ul",{className:"apartments__list"},t.map((function(e,t){return o.a.createElement(F,{key:e.id,index:t,elem:e,updateCard:r})})))};F.propTypes={elem:k.a.shape({id:k.a.number,filename:k.a.string,liked:k.a.bool}),index:k.a.number,updateCard:k.a.func},J.propTypes={cards:k.a.arrayOf(k.a.shape({id:k.a.number,filename:k.a.string,liked:k.a.bool})),updateCard:k.a.func};var q=J,G="квартир";var W=function(e){var t,r,n,a=e.cards,i=e.updateCard;return o.a.createElement("section",{className:"apartments"},o.a.createElement("div",{className:"site-wrapper"},a&&a.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"apartments__title"},"Найдено ",a.length," ",(t=a.length,r=["".concat(G,"а"),"".concat(G,"ы"),"".concat(G)],n=(t=Math.abs(t)%100)%10,t>10&&t<20?r[2]:n>1&&n<5?r[1]:1==n?r[0]:r[2])),o.a.createElement("div",{className:"apartments__list-wrapper"},o.a.createElement(q,{cards:a,updateCard:i})))))};W.propTypes={cards:k.a.arrayOf(k.a.shape({id:k.a.number,filename:k.a.string,liked:k.a.bool})),updateCard:k.a.func};var $=Object(E.b)((function(e){return{cards:S(e)}}),(function(e){return{updateCard:function(t){e(y(t))}}}))(W),z=function(){return o.a.createElement("main",{className:"main"},o.a.createElement($,null))};i.a.render(o.a.createElement(E.a,{store:P},o.a.createElement(z,null)),document.getElementById("root"))}});