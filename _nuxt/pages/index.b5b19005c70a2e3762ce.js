webpackJsonp([0],{"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("MR6W"),o=i("oml/"),a=!1;var r=function(t){a||i("7u5j")},s=i("ngHh")(n.a,o.a,!1,r,null,null);s.options.__file="pages/index.vue",e.default=s.exports},"0MJc":function(t,e,i){"use strict";var n=i("Z/mH"),o=!1;var a=function(t){o||i("P+uo")},r=i("ngHh")(null,n.a,!1,a,null,null);r.options.__file="components/AppLogo.vue",e.a=r.exports},"3b+4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.hide,expression:"hide"}],staticClass:"drop-down"},[i("div",{staticClass:"phone-show-menu",on:{click:t.handleMenuClick}},[i("span",[t._v(t._s(t.title))]),i("v-icon",{attrs:{name:"arrow-down-b"}})],1),i("ul",{staticClass:"phone-hide",class:{show:t.show}},t._l(t.items,function(e,n){return i("li",{key:n,staticClass:"nav-item link-item",on:{click:function(i){t.handleItemClick(e.title)}}},[i("nuxt-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.title))])],1)}))])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"40di":function(t,e,i){var n=i("P2Gp");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("bUva")("03635f0f",n,!1,{sourceMap:!1})},"6+7X":function(t,e,i){(t.exports=i("yKCJ")(!1)).push([t.i,".container-view{margin-top:28.272px;margin-top:1.767rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.container-view .welcome_feed{overflow:hidden;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.category-nav{background-color:#fff;padding:24px 32px;padding:1.5rem 2rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f6f6f6}.category-nav h5{margin:0;font-size:16px;font-weight:500}.category-nav .more{display:none}.category-nav .nav-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.category-nav .nav-list li.nav-item:hover{color:#007fff}.category-nav .nav-list li.nav-item:not(:last-child){margin-right:20px}.category-nav .nav-list .nav-item{font-size:14px;color:#90979c;padding:0!important;height:auto!important;line-height:normal!important}.category-nav .nav-list .nav-item .nuxt-link-exact-active{color:#007fff}.to-top-btn{position:fixed;right:32px;right:2rem;bottom:48px;bottom:3rem;z-index:1000;padding:0;width:53.28px;width:3.33rem;height:53.28px;height:3.33rem;line-height:1;color:#909090;background-color:#fff;border:1px solid #f1f1f1;border-radius:50%;-webkit-box-shadow:0 0 5px rgba(0,0,0,.05);box-shadow:0 0 5px rgba(0,0,0,.05);cursor:pointer;display:none;-webkit-transition:all .2s;transition:all .2s}.to-top-btn.show{display:block}@media (max-width:600px){.category-nav .more{display:block}.category-nav .nav-list{display:none}}",""])},"7u5j":function(t,e,i){var n=i("6+7X");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("bUva")("ca11c184",n,!1,{sourceMap:!1})},"9OHz":function(t,e,i){"use strict";var n=i("34v0"),o=i.n(n),a=i("d3Ie"),r=i("EcfS");e.a={name:"VDropdown",directives:{Clickoutside:a.a},data:function(){return{show:!1,title:"首页",items:[{name:"index",title:"首页"},{name:"books",title:"小册"},{name:"repos",title:"开源库"},{name:"events-all",title:"活动"}]}},computed:o()({},Object(r.mapState)({isPhone:function(t){return t.isPhone}})),methods:{handleMenuClick:function(){this.show=!this.show},handleItemClick:function(t){this.show=!1,this.title=t},hide:function(){this.show=!1}}}},BRmO:function(t,e,i){"use strict";var n=i("34v0"),o=i.n(n),a=i("rtpt"),r=i("EcfS");e.a={name:"VHeader",components:{VDropdown:a.a},data:function(){return{maxClientWidth:980}},computed:o()({},Object(r.mapState)({isPhone:function(t){return t.isPhone}})),mounted:function(){var t=this;document.body.onresize=function(){document.body.clientWidth>t.maxClientWidth?t.$store.commit("PCORPHONE",!1):t.$store.commit("PCORPHONE",!0)}}}},Fqdu:function(t,e,i){t.exports=i.p+"img/juejin.a7995ad.svg"},I242:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"v-header"},[e("div",{staticClass:"header-container"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-img",attrs:{src:i("Fqdu"),alt:"掘金"}})]),e("nav",{staticClass:"main-nav"},[e("ul",{staticClass:"nav-list"},[e("li",{staticClass:"main-nav-list"},[e("v-dropdown")],1),e("li",{staticClass:"nav-item search"},[e("v-input")],1),this._m(0),this._m(1)])])],1)])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item submit"},[e("img",{attrs:{src:i("ci7O")}}),e("span",[this._v("写文章")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item auth"},[e("span",{staticClass:"login"},[this._v("登录")]),e("span",{staticClass:"register"},[this._v("注册")])])}];n._withStripped=!0;var a={render:n,staticRenderFns:o};e.a=a},MR6W:function(t,e,i){"use strict";var n=i("34v0"),o=i.n(n),a=i("0MJc"),r=i("OwC8"),s=i("EcfS");e.a={components:{AppLogo:a.a,VHeader:r.a},data:function(){return{categories:[{router:{name:"index"},title:"推荐"},{router:{path:"/welcome/frontend"},title:"前端"},{router:{path:"/welcome/android"},title:"Android"},{router:{path:"/welcome/backend"},title:"后端"},{router:{path:"/welcome/ai"},title:"人工智能"},{router:{path:"/welcome/ios"},title:"iOS"},{router:{path:"/welcome/freebie"},title:"工具资源"},{router:{path:"/welcome/article"},title:"阅读"}],showTopBtn:!1}},head:function(){return{title:"首页",meta:[{hid:"home custom title",name:"home",content:"home custom title description"}]}},computed:o()({},Object(s.mapState)({counter:function(t){return t.counter}})),methods:{clickFn:function(){this.$store.commit("INCREMENT")},goTop:function(){document.documentElement.scrollTop=0}}}},Oaal:function(t,e,i){var n=i("sR8F");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("bUva")("6e5f6e4e",n,!1,{sourceMap:!1})},OwC8:function(t,e,i){"use strict";var n=i("BRmO"),o=i("I242"),a=!1;var r=function(t){a||i("Oaal")},s=i("ngHh")(n.a,o.a,!1,r,null,null);s.options.__file="components/home/header.vue",e.a=s.exports},"P+uo":function(t,e,i){var n=i("nz8y");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("bUva")("0e5572b2",n,!1,{sourceMap:!1})},P2Gp:function(t,e,i){(t.exports=i("yKCJ")(!1)).push([t.i,".drop-down .phone-show-menu[data-v-50843196]{display:none}.drop-down span[data-v-50843196]{margin-right:8px;margin-right:.5rem}.drop-down .phone-hide[data-v-50843196]{display:-webkit-box;display:-ms-flexbox;display:flex}.drop-down .phone-hide .nuxt-link-exact-active[data-v-50843196]{color:#007fff}@media (max-width:980px){.drop-down .phone-show-menu[data-v-50843196]{height:5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.33rem;color:#007fff;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 2rem}.drop-down .phone-hide[data-v-50843196]{display:none;background-color:#fff;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 1px 2px 0 rgba(0,0,0,.1);border:1px solid hsla(217,5%,71%,.45);border-radius:4px;font-size:1.2rem}.drop-down .phone-hide.show[data-v-50843196]{display:block}}",""])},"Z/mH":function(t,e,i){"use strict";var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),e("div",{staticClass:"Triangle Triangle--one"}),e("div",{staticClass:"Triangle Triangle--three"}),e("div",{staticClass:"Triangle Triangle--four"})])}]};e.a=o},ci7O:function(t,e,i){t.exports=i.p+"img/write.1edf0cf.svg"},d3Ie:function(t,e,i){"use strict";var n=i("3gTs"),o=i("ycWq"),a=[],r="@@clickoutsideContext";!n.default.prototype.$isServer&&Object(o.a)(document,"click",function(t){a.forEach(function(e){return e[r].documentHandler(t)})}),e.a={bind:function(t,e,i){var n=a.push(t)-1;t[r]={id:n,documentHandler:function(n){!i.context||t.contains(n.target)||i.context.popperElm&&i.context.popperElm.contains(n.target)||(e.expression&&t[r].methodName&&i.context[t[r].methodName]?i.context[t[r].methodName]():t[r].bindingFn&&t[r].bindingFn())},methodName:e.expression,bindingFn:e.value}},update:function(t,e){t[r].methodName=e.expression,t[r].bindingFn=e.value},unbind:function(t){for(var e=a.length,i=0;i<e;i++)if(a[i][r].id===t[r].id){a.splice(i,1);break}}}},nz8y:function(t,e,i){(t.exports=i("yKCJ")(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},"oml/":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-view welcome-view"},[i("div",{staticClass:"feed welcome_feed"},[i("nav",{staticClass:"category-nav"},[i("h5",[t._v("热门文章")]),i("div",{staticClass:"more"},[t._v("查看更多")]),i("ul",{staticClass:"nav-list"},t._l(t.categories,function(e,n){return i("li",{key:n,staticClass:"nav-item"},[i("nuxt-link",{attrs:{to:e.router}},[t._v(t._s(e.title))])],1)}))]),i("button",{staticClass:"to-top-btn",attrs:{title:"回到顶部"},on:{click:t.goTop}},[i("v-icon",{attrs:{name:"android-arrow-dropup",size:"16"}})],1),i("nuxt")],1)])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},rtpt:function(t,e,i){"use strict";var n=i("9OHz"),o=i("3b+4"),a=!1;var r=function(t){a||i("40di")},s=i("ngHh")(n.a,o.a,!1,r,"data-v-50843196",null);s.options.__file="components/home/dropdown.vue",e.a=s.exports},sR8F:function(t,e,i){(t.exports=i("yKCJ")(!1)).push([t.i,'.nav-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.nav-item,.nav-list{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.nav-item{margin:0;color:#71777c;padding:0 19.2px;padding:0 1.2rem;font-size:21.28px;font-size:1.33rem;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;cursor:pointer;font-weight:500}.nav-item:hover{color:#007fff}.nav-item:last-child{padding-right:0}.main-nav-list{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;font-weight:500}.nav-item.link-item{padding:0 20px;height:80px;height:5rem}.nav-item.search{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;cursor:auto}.nav-item.auth{color:#007fff;-webkit-box-flex:0;-ms-flex:0 0 auto 1;flex:0 0 auto 1}.nav-item.auth .login:after{content:"\\B7";margin:0 6.4px;margin:0 .4rem}.nav-item.submit{color:#007fff}.nav-item.submit:after{content:"|";position:absolute;top:20px;left:100%;color:hsla(0,0%,59%,.4)}@media (max-width:980px){.nav-item{height:4rem;line-height:4rem;font-size:1.33rem}.main-nav-list{display:block;position:absolute;left:0;top:0;background-color:#fff}.nav-item.add,.nav-item.search,.nav-item.submit{display:none}}.v-header{position:fixed;top:0;left:0;right:0;z-index:99;height:80px;height:5rem;background:#fff;color:#909090;border-bottom:1px solid #f1f1f1}.v-header .header-container{max-width:960px;height:100%;margin:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.v-header .main-nav{height:100%;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}@media (max-width:960px){.v-header .header-container{width:96%}}',""])},ycWq:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("GxZn"),o=(i.n(n),i("3gTs").default.prototype.$isServer),a=(o||Number(document.documentMode),!o&&document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)});!o&&document.removeEventListener}});