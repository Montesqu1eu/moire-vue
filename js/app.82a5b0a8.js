(function(){"use strict";var e={86:function(e,t,r){r.d(t,{C:function(){return o}});const o="https://vue-moire.skillbox.cc"},9489:function(e,t,r){var o={};r.r(o),r.d(o,{deleteCartProduct:function(){return Q},resetCart:function(){return X},syncCartProducts:function(){return J},updateCartProductAmount:function(){return $},updateCartProductsData:function(){return G},updateOrderInfo:function(){return Y},updateUserAccessKey:function(){return B}});var n={};r.r(n),r.d(n,{addProductToCart:function(){return ne},deleteCartProductItem:function(){return ce},loadCart:function(){return oe},loadOrderInfo:function(){return ie},updateCartProductAmountAction:function(){return ae}});var a=r(9242),c=r(3396);const i={class:"body-wrapper"};function s(e,t,r,o,n,a){const s=(0,c.up)("HeaderRegion"),u=(0,c.up)("router-view"),l=(0,c.up)("FooterRegion");return(0,c.wg)(),(0,c.iD)("div",i,[(0,c.Wm)(s),(0,c.Wm)(u),(0,c.Wm)(l)])}var u=r.p+"img/logo-moire.86b9e557.svg";const l={class:"header container"},d={class:"header__wrapper"},f=(0,c._)("span",{class:"header__info"},"Каталог",-1),p=(0,c._)("img",{alt:"Логотип интернет магазина Moire",height:"34",src:u,width:"116"},null,-1),m=(0,c._)("a",{class:"header__tel",href:"tel:8 800 600 90 09"}," 8 800 600 90 09 ",-1);function h(e,t,r,o,n,a){const i=(0,c.up)("router-link"),s=(0,c.up)("CartIndicator");return(0,c.wg)(),(0,c.iD)("header",l,[(0,c._)("div",d,[f,(0,c.Wm)(i,{to:{name:"main"},class:"header__logo"},{default:(0,c.w5)((()=>[p])),_:1}),m,(0,c.Wm)(s)])])}var g=r(7139);const _=(0,c._)("svg",{fill:"none",height:"24",viewBox:"0 0 19 24",width:"19",xmlns:"http://www.w3.org/2000/svg"},[(0,c._)("path",{"clip-rule":"evenodd",d:"M9.89472 0.751831C7.29407 0.751831 5.11623 2.70695 5.11623 5.2012V5.88602H4.09351C2.76256 5.88602 1.66495 6.92878 1.59679 8.25798L0.94622 20.9441C0.872931 22.3732 2.01193 23.5721 3.44294 23.5721H16.3465C17.7775 23.5721 18.9165 22.3732 18.8432 20.9441L18.1927 8.25798C18.1245 6.92878 17.0269 5.88602 15.6959 5.88602H14.6732V5.2012C14.6732 2.70695 12.4954 0.751831 9.89472 0.751831ZM14.6732 9.11431C14.8887 9.2697 15.0289 9.52287 15.0289 9.80881C15.0289 10.2814 14.6458 10.6645 14.1732 10.6645C13.7006 10.6645 13.3175 10.2814 13.3175 9.80881C13.3175 9.52287 13.4578 9.2697 13.6732 9.11431V6.88602H6.11623V9.11431C6.33169 9.2697 6.47193 9.52287 6.47193 9.80881C6.47193 10.2814 6.08882 10.6645 5.61623 10.6645C5.14365 10.6645 4.76054 10.2814 4.76054 9.80881C4.76054 9.52287 4.90078 9.2697 5.11623 9.11431V6.88602H4.09351C3.29494 6.88602 2.63638 7.51167 2.59548 8.30919L1.94491 20.9953C1.90093 21.8528 2.58434 22.5721 3.44294 22.5721H16.3465C17.2051 22.5721 17.8885 21.8528 17.8445 20.9953L17.194 8.3092C17.1531 7.51167 16.4945 6.88602 15.6959 6.88602H14.6732V9.11431ZM13.6732 5.88602V5.2012C13.6732 3.3331 12.02 1.75183 9.89472 1.75183C7.76949 1.75183 6.11623 3.3331 6.11623 5.2012V5.88602H13.6732Z",fill:"black","fill-rule":"evenodd"})],-1),v={"aria-label":"Количество товаров",class:"header__count"};function y(e,t,r,o,n,a){const i=(0,c.up)("router-link");return(0,c.wg)(),(0,c.j4)(i,{to:{name:"cart",params:{}},"aria-label":"Корзина с товарами",class:"header__cart"},{default:(0,c.w5)((()=>[_,(0,c._)("span",v,(0,g.zw)(e.$store.state.cartProducts.length),1)])),_:1})}var b={name:"CartIndicator"},C=r(89);const k=(0,C.Z)(b,[["render",y]]);var w=k,I={name:"HeaderRegion",components:{CartIndicator:w}};const P=(0,C.Z)(I,[["render",h]]);var A=P;const K={class:"footer container"},O={class:"footer__wrapper"},D={class:"footer__links"},j=(0,c.Uk)(" Каталог "),q=(0,c._)("li",null,[(0,c._)("a",{class:"footer__link",href:"tel:88006009009"}," 8 800 600 90 09 ")],-1),x=(0,c._)("li",null,[(0,c._)("a",{class:"footer__link",href:"mailto:hi@moire.com"}," hi@moire.com ")],-1),T=(0,c._)("li",null,[(0,c._)("span",{class:"footer__link"}," Распродажа ")],-1),H=(0,c._)("li",null,[(0,c._)("span",{class:"footer__link footer__link--medium"}," Заказать звонок ")],-1),z=(0,c.uE)('<ul class="footer__social social"><li class="social__item"><a aria-label="Вконтакте" class="social__link" href="#"><svg fill="currentColor" height="11" width="20"><use xlink:href="#icon-vk"></use></svg></a></li><li class="social__item"><a aria-label="Инстаграм" class="social__link" href="#"><svg fill="currentColor" height="17" width="17"><use xlink:href="#icon-insta"></use></svg></a></li><li class="social__item"><a aria-label="Facebook" class="social__link" href="#"><svg fill="currentColor" height="17" width="17"><use xlink:href="#icon-facebook"></use></svg></a></li><li class="social__item"><a aria-label="Twitter" class="social__link" href="#"><svg fill="currentColor" height="14" width="17"><use xlink:href="#icon-twitter"></use></svg></a></li><li class="social__item"><a aria-label="Telegram" class="social__link" href="#"><svg fill="currentColor" height="17" width="19"><use xlink:href="#icon-telegram"></use></svg></a></li></ul><p class="footer__desc"> Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. </p><ul class="footer__data"><li><a class="footer__link" href="#" rel="noopener" target="_blank" type="application/pdf"> Политика конфиденциальности </a></li><li><a class="footer__link" href="#" rel="noopener" target="_blank" type="application/pdf"> Публичная оферта </a></li></ul><span class="footer__copyright"> © 2020 Moire </span>',4);function M(e,t,r,o,n,a){const i=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("footer",K,[(0,c._)("div",O,[(0,c._)("ul",D,[(0,c._)("li",null,[(0,c.Wm)(i,{to:{name:"main"},class:"footer__link"},{default:(0,c.w5)((()=>[j])),_:1})]),q,x,T,H]),z])])}var E={name:"FooterRegion"};const F=(0,C.Z)(E,[["render",M]]);var S=F,V=r(65),Z={components:{FooterRegion:S,HeaderRegion:A},methods:{...(0,V.nv)(["loadCart"]),...(0,V.OI)(["updateUserAccessKey"])},created(){const e=localStorage.getItem("userAccessKey");e&&this.updateUserAccessKey(e),this.loadCart()}};const L=(0,C.Z)(Z,[["render",s]]);var N=L,R=r(5431);(0,R.z)("/moire/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var W=r(678),U=()=>({cartProducts:[],userAccessKey:null,cartProductsData:[],orderInfo:null});function B(e,t){e.userAccessKey=t}function $(e,{productId:t,quantity:r}){const o=e.cartProducts.find((e=>e.productId===t));o&&(o.quantity=r)}function G(e,t){e.cartProductsData=t}function J(e){e.cartProducts=e.cartProductsData.map((e=>({productId:e.product.id,quantity:e.quantity,colorId:e.color.color.id,sizeId:e.size.id,basketItemId:e.id})))}function Q(e,t){e.cartProducts=e.cartProducts.filter((e=>e.productId!==t))}function X(e){e.cartProducts=[],e.cartProductsData=[]}function Y(e,t){e.orderInfo=t}var ee=r(6265),te=r.n(ee),re=r(86);async function oe(e){await te().get(re.C+"/api/baskets",{params:{userAccessKey:e.state.userAccessKey}}).then((t=>{e.state.userAccessKey||(localStorage.setItem("userAccessKey",t.data.user.accessKey),e.commit("updateUserAccessKey",t.data.user.accessKey)),e.commit("updateCartProductsData",t.data.items),e.commit("syncCartProducts")}))}async function ne(e,{productId:t,colorId:r,sizeId:o,quantity:n}){return await te().post(re.C+"/api/baskets/products",{productId:t,colorId:r,sizeId:o,quantity:n},{params:{userAccessKey:e.state.userAccessKey}}).then((t=>{e.commit("updateCartProductsData",t.data.items),e.commit("syncCartProducts")}))}async function ae(e,{basketItemId:t,quantity:r}){if(e.commit("updateCartProductAmount",{basketItemId:t,quantity:r}),!(r<1))return await te().put(re.C+"/api/baskets/products",{basketItemId:t,quantity:r},{params:{userAccessKey:e.state.userAccessKey}}).then((t=>{e.commit("updateCartProductsData",t.data.items)})).catch((()=>{e.commit("syncCartProducts")}))}async function ce(e,t){e.state.cartProducts=e.state.cartProducts.filter((e=>e.basketItemId!==t)),await te()["delete"](re.C+"/api/baskets/products",{params:{userAccessKey:e.state.userAccessKey},data:{basketItemId:t}}).catch((t=>{e.commit("updateCartProductsData",t.data.items)}))}function ie(e,t){return new Promise(((r,o)=>{te().get(re.C+"/api/orders/"+t,{params:{userAccessKey:e.state.userAccessKey}}).then((t=>{r(t),e.commit("updateOrderInfo",t.data)})).catch((e=>o(e)))}))}var se=(0,V.MT)({state:U,mutations:o,actions:n,modules:{},getters:{cartDetailProducts(e){return e.cartProducts.map((t=>{const r=e.cartProductsData.find((e=>e.product.id===t.productId)).product,o=e.cartProductsData.find((e=>e.size.id===t.sizeId));return{...t,size:o.size,product:{...r,colors:r.colors.find((e=>e.color.id===t.colorId)),gallery:r.colors.find((e=>e.color.id===t.colorId)).gallery[0].file.url}}}))},cartTotalPrice(e,t){return t.cartDetailProducts.reduce(((e,t)=>t.product.price*t.quantity+e),0)}}});const ue=[{path:"/",name:"main",component:()=>r.e(443).then(r.bind(r,4357))},{path:"/cart",name:"cart",component:()=>r.e(443).then(r.bind(r,9903))},{path:"/order",name:"order",component:()=>r.e(443).then(r.bind(r,96))},{path:"/order/:id",name:"orderInfo",component:()=>r.e(443).then(r.bind(r,9845))},{path:"/product/:id",name:"product",component:()=>r.e(443).then(r.bind(r,3310))},{path:"/error",name:"error",component:()=>r.e(443).then(r.bind(r,5113))},{path:"/:pathMatch(.*)*",redirect:"error"}],le=(0,W.p7)({history:(0,W.r5)("/moire/"),routes:ue});le.beforeEach(((e,t,r)=>{"error"===e.name||"orderInfo"!==e.name||se.state.orderInfo&&se.state.orderInfo.id===e.params.id?r():se.dispatch("loadOrderInfo",e.params.id).then((()=>r())).catch((()=>{r({name:"error"})}))}));var de=le,fe=r(3910);(0,a.ri)(N).use(se).use(de).use(fe.Z).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var c=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],a=e[l][2];for(var i=!0,s=0;s<o.length;s++)(!1&a||c>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.2710e22a.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="diploma:";r.l=function(o,n,a,c){if(e[o])e[o].push(n);else{var i,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[n];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/moire/"}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=a);var c=r.p+r.u(t),i=new Error,s=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,n[1](i)}};r.l(c,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,c=o[0],i=o[1],s=o[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var l=s(r)}for(t&&t(o);u<c.length;u++)a=c[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},o=self["webpackChunkdiploma"]=self["webpackChunkdiploma"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(9489)}));o=r.O(o)})();
//# sourceMappingURL=app.82a5b0a8.js.map