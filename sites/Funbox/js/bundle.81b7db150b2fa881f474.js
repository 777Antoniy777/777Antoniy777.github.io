!function(e){function t(t){for(var s,a,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={0:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([296,1]),n()}({296:function(e,t,n){n(297),e.exports=n(482)},482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(483),n(498);const s=n(142),r=n(703),o=n(707);n(708);const a=n(709);r.render(s.createElement(a.default,{data:o.goodsData}),document.getElementById("root"))},707:function(e,t,n){"use strict";n.r(t),n.d(t,"goodsData",(function(){return s}));var s=[{id:1,content:"фуа-гра",portionsAmount:10,mouseAmount:1,weight:"0,5",activeDescription:"Печень утки разварная с артишоками.",src:"cat-dt.png",status:"default"},{id:2,content:"рыбой",portionsAmount:40,mouseAmount:2,weight:"2",activeDescription:"Головы щучьи с чесноком да свежайшая сёмгушка.",src:"cat-dt.png",status:"default"},{id:3,content:"курой",portionsAmount:100,mouseAmount:5,weight:"5",activeDescription:"Филе из цыплят с трюфелями в бульоне.",src:"cat-dt.png",status:"disabled"}]},708:function(e,t,n){},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(142),r=n(710);t.default=({data:e})=>s.createElement("section",{className:"goods"},s.createElement("div",{className:"site-wrapper"},s.createElement("h1",{className:"goods__title"},"Ты сегодня покормил кота?"),s.createElement(r.default,{data:e})))},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(142),r=n(711),o=n(712),a=n(713);class i extends s.PureComponent{constructor(){super(...arguments),this.state={status:this.props.elem.status,hoverStatus:!1,src:null}}componentDidMount(){const{src:e}=this.props.elem;this.loadImage(e)}loadImage(e){Promise.resolve().then(()=>n(714)("./"+e)).then(e=>{this.setState({src:e.default})})}render(){const{content:e,portionsAmount:t,mouseAmount:n,weight:i,activeDescription:c}=this.props.elem,{status:l,hoverStatus:u,src:d}=this.state,p=r.default({goods__item:!0,"default-item":"default"===l,"active-item":"active"===l,"disable-item":"disabled"===l,"active-item-hover":"active"===l&&u}),m=e=>{if(e.preventDefault(),"disabled"===l)return!1;"default"===l?this.setState({status:"active"}):this.setState({status:"default"}),this.setState({hoverStatus:!1})};return s.createElement("li",{className:p},s.createElement("div",{className:"goods__inner-wrapper",onMouseEnter:()=>{this.setState({hoverStatus:!0})},onMouseLeave:()=>{this.setState({hoverStatus:!1})}},s.createElement("article",{className:"goods__article",onClick:m},s.createElement("div",{className:"goods__title-wrapper"},s.createElement("h2",{className:"goods__subtitle"},s.createElement("span",null,"Нямушка"),"с ",e),"active"===l&&u?s.createElement("p",{className:"goods__description goods__description--first"},"Котэ не одобряет?"):s.createElement("p",{className:"goods__description goods__description--first"},"Сказочное заморское яство"),s.createElement("p",{className:"goods__description"},s.createElement("span",null,t)," ",a.setEndingWords(t,o.PortionEnding)),s.createElement("p",{className:"goods__description goods__description__mouse"},1!==n&&s.createElement("span",null,n," "),a.setEndingWords(n,o.MouseEnding)," в подарок"),n>=5&&s.createElement("p",{className:"goods__description"},"заказчик доволен")),s.createElement("div",{className:"goods__image-wrapper"},d&&s.createElement("img",{className:"goods__image",src:d,width:370,height:361,alt:"Cat"})),s.createElement("span",{className:"goods__price"},i," ",s.createElement("span",{onClick:m},"кг"))),"disabled"===l?s.createElement("p",{className:"goods__article-description"},"Печалька, с ",e," закончился."):(()=>{let e;switch(l){case"active":e=s.createElement("p",{className:"goods__article-description"},c);break;default:e=s.createElement("p",{className:"goods__article-description"},"Чего сидишь? Порадуй котэ, ",s.createElement("span",{onClick:m},"купи."))}return e})()))}}t.default=({data:e})=>s.createElement("ul",{className:"goods__list"},e.length>0&&e.map(e=>s.createElement(i,{key:e.id,elem:e})))},712:function(e,t,n){"use strict";n.r(t),n.d(t,"MouseEnding",(function(){return s})),n.d(t,"PortionEnding",(function(){return r}));var s={NOM:"мышь",GEN:"мыши",PLU:"мышей"},r={NOM:"порция",GEN:"порции",PLU:"порций"}},713:function(e,t,n){"use strict";n.r(t),n.d(t,"setEndingWords",(function(){return s}));var s=function(e,t){return(e=Math.abs(e)).toString().indexOf(".")>-1?t.GEN:e%10==1&&e%100!=11?t.NOM:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?t.GEN:t.PLU}},714:function(e,t,n){var s={"./bg-dt.jpg":715,"./bg-gradient.png":716,"./cat-dt.png":717};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id=714},715:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bg-dt.f9305c385249cf7e527796ba281e9496.jpg"},716:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/bg-gradient.6d622ea2c503bf9dd2902b035d807640.png"},717:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cat-dt.03500d2b2892f27027513d5c9adc7409.png"}});