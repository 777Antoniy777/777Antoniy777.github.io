!function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],m=0,C=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&C.push(l[a][0]),l[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(i&&i(t);C.length;)C.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==l[u]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},l={0:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var i=u;n.push([133,1]),o()}({133:function(e,t,o){o(134),e.exports=o(320)},320:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(45),l=o(322);o(326);var n=o(327);l.render(r.createElement(n.default,null),document.getElementById("root"))},326:function(e,t,o){},327:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(45),l=o(328);t.default=function(){return r.createElement(l.default,null)}},328:function(e,t,o){"use strict";var r,l=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0});var n=o(45),a=o(329),c=o(330),u=o(348),s=o(90),i=o(349),m=o(350),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={colorControlsValues:null,data:null},t.getColorsData=function(e){c.default.get(u.BASE_URL).then((function(t){e.setState({data:t.data.data})})).catch((function(e){throw new Error(e)}))},t.getActualState=function(e){var t,o=((t={})[s.ColorControlValue.COLOR_ID]=!0,t[s.ColorControlValue.COLOR_NAME]=!0,t[s.ColorControlValue.COLOR_YEAR]=!0,t[s.ColorControlValue.COLOR_VALUE]=!0,t[s.ColorControlValue.COLOR_PANTONE]=!0,t);for(var r in window.localStorage)for(var l in o)r===l&&(o[l]=JSON.parse(window.localStorage[r]));e.setState({colorControlsValues:o})},t}return l(t,e),t.prototype.componentDidMount=function(){this.getColorsData(this),this.getActualState(this)},t.prototype.render=function(){var e=this,t=this.state,o=t.colorControlsValues,r=t.data,l=function(){for(var e in o)if(!o[e])return!1;return!0},c=a.default({"colors__reset-button":!0,"active-reset-button":!l(),"disabled-reset-button":l()}),u=function(e){var t,r={};for(var l in o){var n=e+"--"+l.split("-")[1],c=a.default(((t={})[e]=!0,t[n]=!0,t.hidden=!o[l],t));r[l]=c}return r};return n.createElement("main",null,n.createElement("section",{className:"colors"},n.createElement("div",{className:"site-wrapper"},n.createElement("form",{className:"colors__form"},n.createElement("div",{className:"colors__title-wrapper"},n.createElement("h1",{className:"colors__title"},"Pantone colors"),n.createElement("button",{className:c,type:"reset",onClick:function(){var t={};for(var r in o){var l=r.toString();t[r]=!0,window.localStorage.setItem(l,"true")}e.setState({colorControlsValues:t})},disabled:l()},"Reset")),r&&n.createElement("table",{className:"colors__table"},n.createElement("tbody",null,n.createElement(i.default,{colorControlsValues:o,setColorItemsClasses:u,handleCheckboxChange:function(t){var r=t.target,l=r.name,n=r.checked,a={};for(var c in o){var u=c.toString();a[c]=o[c],window.localStorage.setItem(u,o[c]),c===l&&(a[c]=n,window.localStorage.setItem(u,n))}e.setState({colorControlsValues:a})}}),n.createElement(m.default,{data:r,setColorItemsClasses:u})))))))},t}(n.PureComponent);t.default=C},348:function(e,t,o){"use strict";o.r(t),o.d(t,"BASE_URL",(function(){return r}));var r="https://reqres.in/api/unknown?per_page=12"},349:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(45),l=o(90);t.default=function(e){var t=e.colorControlsValues,o=e.handleCheckboxChange,n=(0,e.setColorItemsClasses)("colors__table-header");return r.createElement("tr",{className:"colors__table-row"},r.createElement("th",{className:n[l.ColorControlValue.COLOR_ID]},r.createElement("label",{htmlFor:"color-id"},"Id"),r.createElement("input",{type:"checkbox",id:"color-id",name:"color-id",onChange:o,checked:t[l.ColorControlValue.COLOR_ID]})),r.createElement("th",{className:n[l.ColorControlValue.COLOR_NAME]},r.createElement("label",{htmlFor:"color-name"},"Name"),r.createElement("input",{type:"checkbox",id:"color-name",name:"color-name",onChange:o,checked:t[l.ColorControlValue.COLOR_NAME]})),r.createElement("th",{className:n[l.ColorControlValue.COLOR_YEAR]},r.createElement("label",{htmlFor:"color-year"},"Year"),r.createElement("input",{type:"checkbox",id:"color-year",name:"color-year",onChange:o,checked:t[l.ColorControlValue.COLOR_YEAR]})),r.createElement("th",{className:n[l.ColorControlValue.COLOR_VALUE]},r.createElement("label",{htmlFor:"color-value"},"Color"),r.createElement("input",{type:"checkbox",id:"color-value",name:"color-value",onChange:o,checked:t[l.ColorControlValue.COLOR_VALUE]})),r.createElement("th",{className:n[l.ColorControlValue.COLOR_PANTONE]},r.createElement("label",{htmlFor:"color-pantone"},"Pantone value"),r.createElement("input",{type:"checkbox",id:"color-pantone",name:"color-pantone",onChange:o,checked:t[l.ColorControlValue.COLOR_PANTONE]})))}},350:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(45),l=o(90),n=function(e){var t=e.elem,o=e.setColorItemsClasses,n=t.id,a=t.color,c=t.year,u=t.name,s=t.pantone_value,i=o("colors__table-cell");return r.createElement("tr",{className:"colors__table-row"},r.createElement("td",{className:i[l.ColorControlValue.COLOR_ID]},n),r.createElement("td",{className:i[l.ColorControlValue.COLOR_NAME]},r.createElement("span",null,u)),r.createElement("td",{className:i[l.ColorControlValue.COLOR_YEAR]},c),r.createElement("td",{className:i[l.ColorControlValue.COLOR_VALUE]},r.createElement("span",null,a),r.createElement("div",{style:{backgroundColor:""+a}})),r.createElement("td",{className:i[l.ColorControlValue.COLOR_PANTONE]},s))};t.default=function(e){var t=e.data,o=e.setColorItemsClasses;return r.createElement(r.Fragment,null,t&&t.map((function(e){return r.createElement(n,{key:e.id,elem:e,setColorItemsClasses:o})})))}},90:function(e,t,o){"use strict";o.r(t),o.d(t,"ColorControlValue",(function(){return r}));var r={COLOR_ID:"color-id",COLOR_NAME:"color-name",COLOR_YEAR:"color-year",COLOR_VALUE:"color-value",COLOR_PANTONE:"color-pantone"}}});