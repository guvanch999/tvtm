(window.webpackJsonp=window.webpackJsonp||[]).push([[24,16,17,18],{569:function(e,t,r){"use strict";r.r(t);var n=r(257),o={},l=r(87),component=Object(l.a)(o,(function(){var e=this._self._c;return e("div",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",height:"100%","background-color":"rgba(0,0,0,0.1)"}},[e(n.a,{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports},570:function(e,t,r){"use strict";r.r(t);r(53);var n={props:{color:{type:String,default:"#fa3434"},message:{type:String,default:"Network error, please try again!"}},mounted:function(){var e=this;setTimeout((function(){e.$emit("closeError")}),1500)}},o=r(87),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)("div",{staticStyle:{position:"fixed","z-index":"99999",width:"90%",left:"5%",color:"white",top:"10px",padding:"10px 12px","border-radius":"4px"},style:{"background-color":e.color}},[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports},573:function(e,t,r){var content=r(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("951d1426",content,!0,{sourceMap:!1})},574:function(e,t,r){var n=r(23)((function(i){return i[1]}));n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},e.exports=n},580:function(e,t,r){"use strict";r(13),r(14),r(11),r(6),r(20),r(12),r(21);var n=r(4),o=(r(573),r(25));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},593:function(e,t,r){"use strict";r.r(t);var n=r(130),o=r(117),l=r(93),c=r(580),d=r(267),h=r(219),v=(r(32),r(13),r(14),r(11),r(6),r(20),r(12),r(21),r(17)),f=r(4),m=(r(68),r(118)),w=r(569);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{ErrorComponent:r(570).default,LoadingComponent:w.default},data:function(){return{phone_number:null,password:null,isLoading:!1,errorMessage:null}},methods:O(O({},Object(m.b)({login:"login"})),{},{checkError:function(){return!(!this.password||this.password.length<3)&&this.phone_regex.test(this.phone_number)},loginHandler:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.checkError()){t.next=3;break}return alert("Invalid credentials"),t.abrupt("return");case 3:if(!e.isLoading){t.next=5;break}return t.abrupt("return");case 5:return e.isLoading=!0,t.next=8,e.login({phone_number:e.phone_number,password:e.password});case 8:if(r=t.sent,e.isLoading=!1,!r){t.next=15;break}return t.next=13,e.$router.push("/dashboard");case 13:t.next=16;break;case 15:e.errorMessage="Cannot login. Maybe your credentials is incorrect!";case 16:case"end":return t.stop()}}),t)})))()}}),computed:O({},Object(m.c)({phone_regex:"get_phone_regex"}))},_=r(87),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t(o.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[t(l.d,[e._v("Welcome")]),e._v(" "),t(c.a),e._v(" "),t(l.c,[t(h.a,{attrs:{dense:"",outlined:"",type:"text",label:"Phone number:",placeholder:"Phone number:",rules:[function(t){return e.phone_regex.test(t)||"Phone number is incorrect"}]},model:{value:e.phone_number,callback:function(t){e.phone_number=t},expression:"phone_number"}}),e._v(" "),t(h.a,{staticStyle:{"margin-top":"10px"},attrs:{dense:"",outlined:"",type:"password",label:"Password:",placeholder:"Password:",rules:[function(e){return e&&e.length>2||"Password must me at last 3 character"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),t(c.a),e._v(" "),t(l.a,[t(d.a),e._v(" "),t(n.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{small:"",depressed:""},on:{click:e.loginHandler}},[e._v("login")])],1),e._v(" "),e.isLoading?t("loading-component"):e._e(),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:r(569).default,ErrorComponent:r(570).default})},630:function(e,t,r){"use strict";r.r(t);var n={components:{LoginForm:r(593).default},layout:"login"},o=r(87),component=Object(o.a)(n,(function(){var e=this._self._c;return e("div",{staticStyle:{width:"100%","min-height":"100vh",position:"relative"}},[e("div",{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"30%"}},[e("login-form")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoginForm:r(593).default})}}]);