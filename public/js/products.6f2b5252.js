(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{"0828":function(t,e,n){},"3fac":function(t,e,n){"use strict";var r=n("af27"),a=n.n(r);a.a},"8fa2":function(t,e,n){},"9d45":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"view_template",staticClass:"view_container"},[t._t("default")],2)},a=[],o=n("cffa"),i={data:function(){return{nav:this.$parent.$parent.$refs.navigation.$refs.nav}},computed:{currentRouteName:function(){return this.$route.name}},mounted:function(){"homepage"===this.currentRouteName?(o["a"].set(this.nav,{x:0,opacity:0}),o["a"].to(this.nav,{opacity:1,duration:.5})):(o["a"].set(this.nav,{x:"-100%",opacity:1}),o["a"].to(this.nav,{x:0,duration:.5}))},methods:{beforeRouteLeave:function(t,e){var n=this;return new Promise((function(t,e){"homepage"===n.currentRouteName?o["a"].to(n.nav,{opacity:0,duration:.5,onComplete:t}):o["a"].to(n.nav,{x:"-400px",duration:.5,onComplete:t})}))}}},u=i,s=(n("b372"),n("2877")),c=Object(s["a"])(u,r,a,!1,null,null,null);e["a"]=c.exports},a277:function(t,e,n){"use strict";var r=n("0828"),a=n.n(r);a.a},af27:function(t,e,n){},b372:function(t,e,n){"use strict";var r=n("8fa2"),a=n.n(r);a.a},e6dc:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-template",[n("div",{staticClass:"products",attrs:{id:"products_container"}},t._l(t.products,(function(e){return n("product-tile",{key:e._id,attrs:{product:e},on:{loaded:t.animation}})})),1)])},a=[],o=n("a34a"),i=n.n(o),u=n("d722"),s=n("cffa"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("router-link",{attrs:{to:{name:"product",params:{name:t.product.name},query:{name:t.product.name,description:t.product.description,price:t.product.price,imgs:t.product.img}}}},[n("div",{staticClass:"photo"},[n("img",{ref:"prodImg",attrs:{alt:"empty"}}),n("transition",[t.loaded?t._e():n("i",{staticClass:"icon fa-solid fa-gem"})])],1)]),n("p",{staticClass:"name"},[t._v(" "+t._s(t.product.name)+" ")]),n("p",{staticClass:"price"},[t._v(" "+t._s(t.product.price)+" PLN ")]),n("p",{staticClass:"addIcon",on:{click:function(e){return t.addToCart()}}},[t._v(" dodaj ")])],1)},d=[];function p(t,e,n,r,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){p(o,r,a,i,u,"next",t)}function u(t){p(o,r,a,i,u,"throw",t)}i(void 0)}))}}var l={props:{product:{type:Object,required:!0}},data:function(){return{error:null,loaded:!1}},computed:{productImg:function(){return"http://localhost:3000/"+this.product.img[0]}},mounted:function(){var t=this;s["a"].set(this.$refs.prodImg,{opacity:0}),this.$refs.prodImg.src=this.productImg,this.$refs.prodImg.alt=this.product.name,this.$refs.prodImg.onload=function(){t.loaded=!0,s["a"].to(t.$refs.prodImg,{opacity:1,delay:.5,duration:.5,ease:"easeInOut"}),t.$emit("loaded")}},methods:{addToCart:function(){var t=f(i.a.mark((function t(){var e;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].addToCart(this.product._id);case 2:if(e=t.sent,200===e.status){t.next=6;break}return console.log(e.data.message),t.abrupt("return",this.error=e.data.message);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},m=l,h=(n("3fac"),n("2877")),v=Object(h["a"])(m,c,d,!1,null,"2c76aabf",null),g=v.exports,w=n("9d45");function y(t,e,n,r,a,o,i){try{var u=t[o](i),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,a)}function x(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){y(o,r,a,i,u,"next",t)}function u(t){y(o,r,a,i,u,"throw",t)}i(void 0)}))}}var b={name:"Products",components:{ProductTile:g,ViewTemplate:w["a"]},data:function(){return{error:null,products:null,loaded:0}},beforeRouteEnter:function(){var t=x(i.a.mark((function t(e,n,r){var a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].listProducts();case 2:if(a=t.sent,200===a.status){t.next=5;break}return t.abrupt("return",this.error=a.data.message);case 5:r((function(t){t.products=a.data})),r();case 7:case"end":return t.stop()}}),t,this)})));function e(e,n,r){return t.apply(this,arguments)}return e}(),beforeRouteLeave:function(t,e,n){s["a"].fromTo(".product",{opacity:1},{x:"+100px",opacity:0,stagger:.03,duration:.1,ease:"easeInOut"}),this.$children[0].beforeRouteLeave(t,e).then((function(){n()})),n(!1)},methods:{animation:function(){this.loaded++,this.loaded===this.products.length&&s["a"].fromTo(".product",{x:"+=100",opacity:0},{x:0,opacity:1,stagger:.2,duration:.7,ease:"easeInOut"})}}},_=b,$=(n("a277"),Object(h["a"])(_,r,a,!1,null,"0b1b2352",null));e["default"]=$.exports}}]);