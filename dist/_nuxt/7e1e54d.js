(window.webpackJsonp=window.webpackJsonp||[]).push([[2,14,16,17,19],{569:function(e,t,n){"use strict";n.r(t);var r=n(257),o={},l=n(87),component=Object(l.a)(o,(function(){var e=this._self._c;return e("div",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",height:"100%","background-color":"rgba(0,0,0,0.1)"}},[e(r.a,{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports},570:function(e,t,n){"use strict";n.r(t);n(53);var r={props:{color:{type:String,default:"#fa3434"},message:{type:String,default:"Network error, please try again!"}},mounted:function(){var e=this;setTimeout((function(){e.$emit("closeError")}),1500)}},o=n(87),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticStyle:{position:"fixed","z-index":"99999",width:"90%",left:"5%",color:"white",top:"10px",padding:"10px 12px","border-radius":"4px"},style:{"background-color":e.color}},[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports},575:function(e,t,n){n(5)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},576:function(e,t,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("5bec9846",content,!0,{sourceMap:!1})},577:function(e,t,n){var r=n(23)((function(i){return i[1]}));r.push([e.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),r.locals={},e.exports=r},581:function(e,t,n){"use strict";n(13),n(14),n(11),n(20),n(12),n(21);var r=n(83),o=n(4),l=(n(26),n(575),n(35),n(53),n(6),n(43),n(55),n(576),n(82)),c=n(102),d=n(28),h=n(269),v=n(25),f=n(7);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(f.a)(d.a,Object(h.a)({onVisible:["init"]}),v.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(e){return e%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,o=Math.floor(t/2),l=this.length-o+1+n;if(this.value>o&&this.value<l){var c=this.length,d=this.value-o+2,h=this.value+o-2-n,v=h+1===c-1?h+1:"...";return[1,d-1==2?2:"..."].concat(Object(r.a)(this.range(d,h)),[v,this.length])}if(this.value===o){var f=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,f)),["...",this.length])}if(this.value===l){var m=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(m,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(l,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){for(var n=[],i=e=e>0?e:1;i<=t;i++)n.push(i);return n},genIcon:function(e,t,n,r,label){return e("li",[e("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}}),[e(l.a,{props:{color:this.navigationTextColor}},[t])])])},genItem:function(e,i){var t=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return t.$emit("input",i)}}}),[i.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})},586:function(e,t,n){"use strict";n.r(t);var r=n(130),o=n(117),l=n(93),c=n(622),d=n(580),h=n(581),v=n(267),f=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),m=n(4),_=(n(68),n(118)),x=n(570),y=n(569);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={props:{defaultChoosed:{type:Object,default:null}},components:{LoadingComponent:y.default,ErrorComponent:x.default},data:function(){return{headers:[{text:"ID",value:"id"},{text:"Doly ady",value:"full_name"},{text:"Telefon belgisi",value:"phone_number"},{text:"Skidka:",value:"skidka",width:"200px"},{text:"Kardlar:",value:"cards"},{text:"Hereketler",value:"actions",align:"right",width:"10%"}],isLoading:!1,page:1,selected:[],errorMessage:null}},methods:O(O({},Object(_.b)({loadAllDillers:"dillers/loadAllDillers"})),{},{resetData:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.loadAllDillers({page:e.page});case 3:e.isLoading=!1,e.defaultChoosed&&e.selected.push(e.defaultChoosed);case 5:case"end":return t.stop()}}),t)})))()},closeDialog:function(){this.$emit("closeDialog")},selectHandler:function(){this.$emit("selectItems",this.selected[0])}}),computed:O(O({},Object(_.c)({dillers:"dillers/get_dillers_list",total:"dillers/get_total_count"})),{},{pageLength:function(){return Math.ceil(this.total/20)}}),mounted:function(){this.resetData()}},j=n(87),component=Object(j.a)(k,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","background-color":"white"}},[t(o.a,{staticStyle:{position:"relative",height:"100%"},attrs:{tile:""}},[t(l.d,[e._v("\n      Dillerler\n      "),t(v.a),e._v(" "),t(r.a,{staticStyle:{"background-color":"darkred",color:"white"},attrs:{small:"",depressed:""},on:{click:e.closeDialog}},[t("span",{staticClass:"mdi mdi-close mdi-18px"})])],1),e._v(" "),t(d.a),e._v(" "),t(l.c,{staticStyle:{height:"75%","overflow-y":"auto"}},[t(c.a,{attrs:{headers:e.headers,items:e.dillers,"hide-default-footer":"","disable-pagination":"","calculate-widths":"",loading:e.isLoading,"selectable-key":"id","show-select":"","single-select":""},scopedSlots:e._u([{key:"item.cards",fn:function(t){t.item;return[e._v("\n          0\n        ")]}},{key:"item.skidka",fn:function(n){var r=n.item;return[t("div",{staticClass:"table-edit-container"},[t("strong",{staticStyle:{"font-size":"18px","margin-left":"8px"}},[e._v(e._s(r.skidka))])])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),e.pageLength>1?t(h.a,{attrs:{length:e.pageLength,circle:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1),e._v(" "),t(d.a),e._v(" "),t(l.a,[t(v.a),e._v(" "),t(r.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(r.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{disabled:!e.selected.length,depressed:"",small:""},on:{click:e.selectHandler}},[e._v("save\n      ")])],1),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e(),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ErrorComponent:n(570).default,LoadingComponent:n(569).default})},597:function(e,t,n){"use strict";n.r(t);var r=n(130),o=n(117),l=n(93),c=n(580),d=n(267),h=n(219),v=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),f=n(4),m=(n(68),n(569)),_=n(598),x=n(118),y=n(570),w=n(586);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:{news:{type:Object,default:null}},components:{ChooseDiller:w.default,ErrorComponent:y.default,RichTextEditor:_.default,LoadingComponent:m.default},data:function(){return{isLoading:!1,text:null,title:null,type:null,errorMessage:null,chooseDillerDialog:!1,choosedDiller:null}},methods:k(k({},Object(x.b)({createNews:"news/createNews",updateNews:"news/updateNews"})),{},{resetData:function(){this.text=null,this.title=null,this.type=null,this.choosedDiller=null,this.news&&(this.title=this.news.title,this.text=this.news.text,this.type=this.news.type,this.choosedDiller=this.news.diller)},dillersSelected:function(e){this.choosedDiller=e,this.chooseDillerDialog=!1},closeDialog:function(){this.$emit("closeDialog")},saveHandler:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var n,body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:if(e.isLoading=!0,n=!1,body={title:e.title,text:e.text,type:e.type},e.choosedDiller&&(body.diller_id=e.choosedDiller.id),!e.news){t.next=12;break}return t.next=9,e.updateNews({news_id:e.news.id,data:body});case 9:n=t.sent,t.next=15;break;case 12:return t.next=14,e.createNews(body);case 14:n=t.sent;case 15:e.isLoading=!1,n?(e.$emit("resetList"),e.closeDialog()):e.errorMessage="Cannot create news. Please try again!!!";case 17:case"end":return t.stop()}}),t)})))()}}),mounted:function(){this.resetData()}},D=n(87),component=Object(D.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass",staticStyle:{width:"50%"}},[t(o.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[t(l.d,[e._v("\n        News form\n        "),t(d.a),e._v(" "),t("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:e.closeDialog}})],1),e._v(" "),t(c.a),e._v(" "),t(l.c,{staticStyle:{"max-height":"60vh","overflow-y":"auto"}},[t("label",[e._v("News title:")]),e._v(" "),t(h.a,{attrs:{outlined:"",dense:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),t("label",[e._v("News type:")]),e._v(" "),t(h.a,{attrs:{outlined:"",dense:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),e._v(" "),t("div",{staticClass:"select-with-component"},[t("div",[e._v("\n            Diller: "),t("strong",[e._v(e._s(e.choosedDiller?e.choosedDiller.full_name:"All"))])]),e._v(" "),t(r.a,{staticStyle:{color:"white","background-color":"#32BCA3"},attrs:{small:"",depressed:""},on:{click:function(t){e.chooseDillerDialog=!0}}},[e._v("\n            select\n          ")])],1),e._v(" "),t("label",[e._v("News content:")]),e._v(" "),t("rich-text-editor",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),t(c.a),e._v(" "),t(l.a,[t(d.a),e._v(" "),t(r.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(r.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{depressed:"",small:""},on:{click:e.saveHandler}},[e._v("save")])],1),e._v(" "),e.isLoading?t("loading-component"):e._e(),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e(),e._v(" "),e.chooseDillerDialog?t("choose-diller",{attrs:{"default-choosed":e.choosedDiller},on:{closeDilaog:function(t){e.chooseDillerDialog=!1},selectItems:e.dillersSelected}}):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default,ErrorComponent:n(570).default})},598:function(e,t,n){"use strict";n.r(t);var r=n(273),o={components:{TiptapVuetify:r.p},props:{value:{type:String,default:"\n<h1>Yay Headlines!</h1>\n<p>All these <strong>cool tags</strong> are working now.</p>"}},data:function(){return{extensions:[r.g,r.a,r.k,r.r,r.o,r.j,r.l,r.c,r.m,[r.f,{options:{levels:[1,2,3]}}],r.b,r.d,r.h,r.n,r.e,r.i]}}},l=n(87),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("tiptap-vuetify",{attrs:{value:e.value,extensions:e.extensions},on:{input:function(t){return e.$emit("input",arguments[0])}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);