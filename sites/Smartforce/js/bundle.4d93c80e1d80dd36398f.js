!function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=c;a.push([149,1]),r()}({149:function(e,t,r){r(150),e.exports=r(362)},361:function(e,t,r){},362:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(68),i=r.n(a),u=r(32),c=r(142),s=r(144),p=r(145),l=r.n(p).a.create({baseURL:"https://api.github.com",timeout:5e3}),f="GET_REPOSITORIES",m="GET_CURRENT_REPOSITORY",g="SET_REPOSITORIES_PAGE",b="SET_REPOSITORIES_REQUEST_DATA",y=function(e){return{type:f,payload:e}},d=function(e){return{type:m,payload:e}},h=function(e){return{type:g,payload:e}},v=function(e){return{type:b,payload:e}};function O(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=function(e,t){var r=t.array;if(t.flag)return O(r);var n=t.startIndex,o=t.endIndex,a=t.reposAmount;return e.length=a,[].concat(O(e.slice(0,n)),O(r),O(e.slice(o)))};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={repositories:[],currentRepository:"",repositoriesPerPage:7,page:null,requestData:{status:null,message:""}};var S="GET_REPOS_AMOUNT",D="SET_USERNAME",T="SET_USER_REQUEST_DATA",_=function(e){return{type:S,payload:e}},A=function(e){return{type:D,payload:e}},k=function(e){return{type:T,payload:e}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q={username:"",reposAmount:null,requestData:{status:null,message:""}};var U=Object(u.combineReducers)({repositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return E(E({},e),{},{repositories:j(e.repositories,t.payload)});case m:return E(E({},e),{},{currentRepository:t.payload});case g:return E(E({},e),{},{page:t.payload});case b:return E(E({},e),{},{requestData:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return I(I({},e),{},{reposAmount:t.payload});case D:return I(I({},e),{},{username:t.payload});case T:return I(I({},e),{},{requestData:t.payload});default:return e}}}),F=l,M=Object(u.createStore)(U,Object(c.composeWithDevTools)(Object(u.applyMiddleware)(s.a.withExtraArgument(F)))),B=r(50),G=(r(361),r(7)),N="#ffffff",J="#000000",L="#add8e6",Q="#d3d3d3",Y="#e32636",W="1152px";function $(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  width: 90%;\n  max-width: ",";\n  margin-right: auto;\n  margin-left: auto;\n"]);return $=function(){return e},e}var H={margin:0,padding:0,"list-style":"none"},K=G.a.div($(),W);function V(){var e=ee(["\n  ","\n"]);return V=function(){return e},e}function X(){var e=ee(["\n  min-height: inherit;\n  padding: 20px;\n"]);return X=function(){return e},e}function Z(){var e=ee(["\n  min-height: 100vh;\n  background-color: ",";\n"]);return Z=function(){return e},e}function ee(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var te=G.a.main(Z(),Q),re=Object(G.a)(K)(X()),ne=G.a.h1(V(),{position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:0,border:0,opacity:0,clip:"rect(0 0 0 0)",overflow:"hidden"}),oe=r(2),ae=r.n(oe),ie=function(e){return e.repositories.repositories},ue=function(e){return e.repositories.currentRepository},ce=function(e){return e.repositories.page},se=function(e){return e.repositories.repositoriesPerPage},pe=function(e){return e.repositories.requestData},le=function(e){return e.user.reposAmount},fe=function(e){return e.user.username},me=function(e){return e.user.requestData},ge="Something error. Repeat later",be=200,ye=404,de=function(e,t,r,n,o){return function(a,i,u){return u.get("users/".concat(e,"/repos?page=").concat(r,"&per_page=").concat(t),{accept:"application/vnd.github.v3+json"}).then((function(i){var u=i.data.map((function(e){return e.name})),c=(r-1)*t;a(y(n?{array:u,flag:n}:{array:u,startIndex:c,endIndex:c+t,reposAmount:o})),a(d("")),a(A(e)),a(v({status:be,message:""}))})).catch((function(e){throw a(d("")),a(A("")),a(v({status:ye,message:ge})),e}))}},he=function(e,t){return function(r,n,o){return o.get("repos/".concat(e,"/").concat(t),{accept:"application/vnd.github.v3+json"}).then((function(t){var n=t.data;r(d(n.name)),r(A(e)),r(v({status:be,message:""}))})).catch((function(e){throw r(d("")),r(A("")),r(v({status:ye,message:ge})),e}))}},ve=function(e){return function(t,r,n){return n.get("users/".concat(e),{accept:"application/vnd.github.v3+json"}).then((function(e){var r=e.data;t(_(r.public_repos)),t(k({status:be,message:""}))})).catch((function(e){throw t(k({status:ye,message:ge})),e}))}};function Oe(){var e=Re(["\n  font-size: 12px;\n  line-height: 14px;\n  color: ",";\n"]);return Oe=function(){return e},e}function Pe(){var e=Re(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 150px;\n  min-height: 30px;\n  margin-top: auto;\n  padding: 5px 10px;\n  text-align: center;\n  background-color: ",";\n  border: none;\n  border-radius: 5px;\n  transition: opacity 0.3s;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n\n  &:active {\n    opacity: 0.6;\n  }\n"]);return Pe=function(){return e},e}function je(){var e=Re(["\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  input {\n    width: 180px;\n    height: 30px;\n  }\n\n  label {\n    display: block;\n    margin-bottom: 6px;\n    cursor: pointer;\n  }\n"]);return je=function(){return e},e}function we(){var e=Re(["\n  display: flex;\n  flex-direction: column;\n"]);return we=function(){return e},e}function Ee(){var e=Re(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 10px;\n  border: 2px solid ",";\n"]);return Ee=function(){return e},e}function xe(){var e=Re(["\n  display: flex;\n  width: 244px;\n  margin: 0 auto 20px;\n  padding: 20px;\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  background-color: ",";\n  border-radius: 15px;\n"]);return xe=function(){return e},e}function Re(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Se=G.a.section(xe(),J,N),De=G.a.div(Ee(),J),Te=G.a.form(we()),_e=G.a.div(je()),Ae=G.a.button(Pe(),L),ke=G.a.p(Oe(),Y);function Ce(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin: 0;\n  color: ",";\n"]);return Ce=function(){return e},e}var Ie=G.a.p(Ce(),Y),ze=function(e){for(var t=e.requestData,r=null,n=null,a=0;a<t.length&&(r=t[a].status,n=t[a].message,r!==ye);a++);return o.a.createElement(o.a.Fragment,null,r===ye&&o.a.createElement(Ie,null,n))};ze.propTypes={requestData:ae.a.arrayOf(ae.a.shape({status:ae.a.oneOfType([ae.a.number,null]),message:ae.a.string}))};var qe=ze;function Ue(e){return(Ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){We(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ge(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Ye(e);if(t){var o=Ye(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Le(this,r)}}function Le(e,t){return!t||"object"!==Ue(t)&&"function"!=typeof t?Qe(e):t}function Qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function We(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $e=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(i,e);var t,r,n,a=Je(i);function i(){var e;Be(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return We(Qe(e=a.call.apply(a,[this].concat(r))),"state",{name:{value:"777Antoniy777",message:""},search:{value:"",message:""}}),We(Qe(e),"handleFormSubmit",(function(e){e.preventDefault()})),We(Qe(e),"handleInputChange",(function(t){var r=t.target,n=r.name,o=r.value.trim();e.setState(We({},n,{value:o,message:""}))})),We(Qe(e),"handleButtonClick",(function(t){t.preventDefault();var r=e.state,n=r.name,o=r.search;e.sendFormData(n,o)})),We(Qe(e),"validateInput",(function(e,t,r){e.value.length||r.setState(We({},t.toLowerCase(),Me(Me({},e),{},{message:"".concat(t," should not be empty")})))})),We(Qe(e),"sendFormData",(function(t,r){var n=e.props,o=n.repositoriesPerPage,a=n.getRepositories,i=n.getCurrentRepository,u=n.setRepositoriesPage,c=n.getUserData,s=t.value,p=r.value;e.validateInput(t,"Name",Qe(e)),s&&(p?i(s,p):(a(s,o,1,!0),u(1),c(s)))})),e}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.repositoriesRequestData,r=e.userRequestData,n=this.state,a=n.name,i=n.search,u=a.value,c=a.message,s=i.value,p=i.message;return o.a.createElement(Se,null,o.a.createElement(De,null,o.a.createElement(Te,{action:"#",method:"POST",onSubmit:this.handleFormSubmit},o.a.createElement(_e,null,o.a.createElement("label",{htmlFor:"name"},"User name"),o.a.createElement("input",{id:"name",type:"text",value:u,name:"name",placeholder:"Type user name",onChange:this.handleInputChange}),c&&o.a.createElement(ke,null,c)),o.a.createElement(_e,null,o.a.createElement("label",{htmlFor:"search"},"Repository"),o.a.createElement("input",{id:"search",type:"search",value:s,name:"search",placeholder:"Type repository",onChange:this.handleInputChange}),p&&o.a.createElement(ke,null,p)),o.a.createElement(Ae,{type:"submit",onClick:this.handleButtonClick},s?"Search":"Download"),o.a.createElement(qe,{requestData:[t,r]}))))}}])&&Ge(t.prototype,r),n&&Ge(t,n),i}(o.a.PureComponent);$e.propTypes={repositoriesPerPage:ae.a.number,repositoriesRequestData:ae.a.arrayOf(ae.a.shape({status:ae.a.oneOfType([ae.a.number,null]),message:ae.a.string})),userRequestData:ae.a.arrayOf(ae.a.shape({status:ae.a.oneOfType([ae.a.number,null]),message:ae.a.string})),getRepositories:ae.a.func,setRepositoriesPage:ae.a.func,getUserData:ae.a.func,getCurrentRepository:ae.a.func};var He=Object(B.b)((function(e){return{repositoriesPerPage:se(e),repositoriesRequestData:pe(e),userRequestData:me(e)}}),(function(e){return{getRepositories:function(t,r,n,o){e(de(t,r,n,o))},getCurrentRepository:function(t,r){e(he(t,r))},setRepositoriesPage:function(t){e(h(t))},getUserData:function(t){e(ve(t))}}}))($e);function Ke(){var e=et(["\n  margin: 0;\n  padding: 0 10px 20px;\n  font-size: 22px;\n  line-height: 24px;\n"]);return Ke=function(){return e},e}function Ve(){var e=et(["\n  padding: 10px;\n  background-color: ",";\n  border-radius: 15px;\n"]);return Ve=function(){return e},e}function Xe(){var e=et(["\n  margin-bottom: 20px;\n  padding-top: 10px;\n  background-color: ",";\n  border-radius: 15px;\n"]);return Xe=function(){return e},e}function Ze(){var e=et(["\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 22px;\n  color: ",";\n"]);return Ze=function(){return e},e}function et(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var tt=G.a.section(Ze(),J),rt=G.a.div(Xe(),N),nt=G.a.div(Ve(),N),ot=G.a.h2(Ke());function at(){var e=ut(["\n  position: relative;\n  padding: 5px;\n  padding-left: 20px;\n  text-align: center;\n  border-bottom: 1px solid ",';\n\n  &::before {\n    content: counter(list) ".";\n    counter-increment: list;\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transform: translateY(-50%);\n  }\n']);return at=function(){return e},e}function it(){var e=ut(["\n  ","\n  counter-reset: list;\n"]);return it=function(){return e},e}function ut(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ct=G.a.ol(it(),H),st=G.a.li(at(),Q),pt=function(e){var t=e.elem;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(st,null,t))},lt=function(e){var t=e.repositories;return o.a.createElement(ct,null,t.length>0&&t.map((function(e){return o.a.createElement(pt,{key:e,elem:e})})))};pt.propTypes={elem:ae.a.string},lt.propTypes={repositories:ae.a.arrayOf(ae.a.string)};var ft=lt;function mt(){var e=yt(["\n  width: 50px;\n  height: 50px;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 50%;\n  transition: color 0.3s, background-color 0.3s;\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: ",";\n    background-color: ",";\n  }\n"]);return mt=function(){return e},e}function gt(){var e=yt(["\n  margin-right: 10px;\n  margin-bottom: 10px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return gt=function(){return e},e}function bt(){var e=yt(["\n  ","\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return bt=function(){return e},e}function yt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var dt=G.a.ul(bt(),H),ht=G.a.li(gt()),vt=G.a.button(mt(),(function(e){return e.ispressed?"".concat(N):"".concat(J)}),(function(e){return e.ispressed?"".concat(J):"".concat(N)}),J,N,J);function Ot(e){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function wt(e,t){return(wt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Et(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=St(e);if(t){var o=St(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return xt(this,r)}}function xt(e,t){return!t||"object"!==Ot(t)&&"function"!=typeof t?Rt(e):t}function Rt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function St(e){return(St=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Dt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Tt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&wt(e,t)}(i,e);var t,r,n,a=Et(i);function i(){var e;Pt(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Dt(Rt(e=a.call.apply(a,[this].concat(r))),"state",{index:e.props.index,isPressed:!1}),Dt(Rt(e),"handleButtonClick",(function(t){var r=e.props,n=r.username,o=r.repositoriesPerPage,a=r.reposAmount,i=r.elem,u=r.getRepositories,c=r.setRepositoriesPage;t.preventDefault();var s=e.checkArray();c(i),1===i||s||u(n,o,i,null,a)})),Dt(Rt(e),"checkArray",(function(){var t=e.props,r=t.repositories,n=t.repositoriesPerPage,o=(t.elem-1)*n;return r.find((function(e,t){return t===o}))})),e}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.elem,r=e.repositoriesPage,n=this.state.isPressed;return r===t?this.setState({isPressed:!0}):this.setState({isPressed:!1}),o.a.createElement(ht,null,o.a.createElement(vt,{ispressed:n,type:"button",onClick:this.handleButtonClick},t))}}])&&jt(t.prototype,r),n&&jt(t,n),i}(o.a.PureComponent),_t=function(e){for(var t=e.repositories,r=e.username,n=e.repositoriesPerPage,a=e.repositoriesPage,i=e.reposAmount,u=e.getRepositories,c=e.setRepositoriesPage,s=[],p=Math.ceil(i/n),l=0;l<p;l++)s.push(o.a.createElement(Tt,{key:l,elem:l+1,index:l,repositories:t,username:r,repositoriesPerPage:n,repositoriesPage:a,reposAmount:i,getRepositories:u,setRepositoriesPage:c}));return o.a.createElement(o.a.Fragment,null,i&&o.a.createElement(dt,null,s))};Tt.propTypes={elem:ae.a.number,index:ae.a.number,repositories:ae.a.arrayOf(ae.a.string),username:ae.a.string,repositoriesPerPage:ae.a.number,repositoriesPage:ae.a.number,reposAmount:ae.a.number,getRepositories:ae.a.func,setRepositoriesPage:ae.a.func},_t.propTypes={repositories:ae.a.arrayOf(ae.a.string),username:ae.a.string,repositoriesPerPage:ae.a.number,repositoriesPage:ae.a.number,reposAmount:ae.a.number,getRepositories:ae.a.func,setRepositoriesPage:ae.a.func};var At=_t,kt=function(e){var t,r=e.username,n=e.repositories,a=e.currentRepository,i=e.repositoriesPage,u=e.repositoriesPerPage,c=e.reposAmount,s=e.getRepositories,p=e.setRepositoriesPage,l=(i-1)*u,f=l+u,m=n.slice(l,f);return o.a.createElement(tt,null,(t=null,r&&(t=o.a.createElement(rt,null,o.a.createElement(ot,null,"У вас ",c," репозиториев"),o.a.createElement(ft,{repositories:m}))),r&&a&&(t=o.a.createElement(rt,null,o.a.createElement(ot,null,"Найден репозиторий"),o.a.createElement(ft,{repositories:[a]}))),t),r&&!a&&o.a.createElement(nt,null,o.a.createElement(At,{repositories:n,username:r,repositoriesPerPage:u,repositoriesPage:i,reposAmount:c,getRepositories:s,setRepositoriesPage:p})))};kt.propTypes={username:ae.a.string,repositories:ae.a.arrayOf(ae.a.string),currentRepository:ae.a.string,repositoriesPage:ae.a.number,repositoriesPerPage:ae.a.number,reposAmount:ae.a.number,getRepositories:ae.a.func,setRepositoriesPage:ae.a.func};var Ct=Object(B.b)((function(e){return{username:fe(e),repositories:ie(e),currentRepository:ue(e),repositoriesPage:ce(e),repositoriesPerPage:se(e),reposAmount:le(e)}}),(function(e){return{getRepositories:function(t,r,n,o,a){e(de(t,r,n,o,a))},setRepositoriesPage:function(t){e(h(t))}}}))(kt),It=function(){return o.a.createElement(te,null,o.a.createElement(re,null,o.a.createElement(ne,null,"React App"),o.a.createElement(He,null),o.a.createElement(Ct,null)))},zt=function(){return o.a.createElement(It,null)};i.a.render(o.a.createElement(B.a,{store:M},o.a.createElement(zt,null)),document.getElementById("root"))}});