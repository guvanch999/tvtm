(window.webpackJsonp=window.webpackJsonp||[]).push([[1,15,18,19],{572:function(e,t,n){"use strict";n.r(t);var r=n(258),l={},o=n(87),component=Object(o.a)(l,(function(){var e=this._self._c;return e("div",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",height:"100%","background-color":"rgba(0,0,0,0.1)"}},[e(r.a,{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports},573:function(e,t,n){"use strict";n.r(t);n(53);var r={props:{color:{type:String,default:"#fa3434"},message:{type:String,default:"Network error, please try again!"}},mounted:function(){var e=this;setTimeout((function(){e.$emit("closeError")}),1500)}},l=n(87),component=Object(l.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticStyle:{position:"fixed","z-index":"99999",width:"90%",left:"5%",color:"white",top:"10px",padding:"10px 12px","border-radius":"4px"},style:{"background-color":e.color}},[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports},575:function(e,t,n){n(5)({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991})},576:function(e,t,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("5bec9846",content,!0,{sourceMap:!1})},577:function(e,t,n){var r=n(23)((function(i){return i[1]}));r.push([e.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;justify-content:center;list-style-type:none;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{opacity:.6;pointer-events:none}.v-pagination__item{background:transparent;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{align-items:center;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;height:32px;justify-content:center;margin:.3rem 10px;-webkit-text-decoration:none;text-decoration:none;width:32px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{align-items:flex-end;display:inline-flex;height:32px;justify-content:center;margin:.3rem;width:32px}",""]),r.locals={},e.exports=r},584:function(e,t,n){"use strict";n(12),n(14),n(13),n(20),n(15),n(21);var r=n(83),l=n(4),o=(n(26),n(575),n(35),n(53),n(6),n(41),n(54),n(576),n(82)),c=n(102),d=n(28),v=n(270),h=n(25),f=n(7);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=Object(f.a)(d.a,Object(v.a)({onVisible:["init"]}),h.a).extend({name:"v-pagination",directives:{Resize:c.a},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:function(e){return e%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];var t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);var n=t%2==0?1:0,l=Math.floor(t/2),o=this.length-l+1+n;if(this.value>l&&this.value<o){var c=this.length,d=this.value-l+2,v=this.value+l-2-n,h=v+1===c-1?v+1:"...";return[1,d-1==2?2:"..."].concat(Object(r.a)(this.range(d,v)),[h,this.length])}if(this.value===l){var f=this.value+l-1-n;return[].concat(Object(r.a)(this.range(1,f)),["...",this.length])}if(this.value===o){var m=this.value-l+1;return[1,"..."].concat(Object(r.a)(this.range(m,this.length)))}return[].concat(Object(r.a)(this.range(1,l)),["..."],Object(r.a)(this.range(o,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return e.selected=e.value}),100)},onResize:function(){var e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next:function(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(e,t){for(var n=[],i=e=e>0?e:1;i<=t;i++)n.push(i);return n},genIcon:function(e,t,n,r,label){return e("li",[e("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}}),[e(o.a,{props:{color:this.navigationTextColor}},[t])])])},genItem:function(e,i){var t=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,l=r?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(l,i)},on:{click:function(){return t.$emit("input",i)}}}),[i.toString()])},genItems:function(e){var t=this;return this.items.map((function(i,n){return e("li",{key:n},[isNaN(Number(i))?e("span",{class:"v-pagination__more"},[i.toString()]):t.genItem(e,i)])}))},genList:function(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render:function(e){var t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})},591:function(e,t,n){"use strict";n.r(t);var r=n(130),l=n(117),o=n(93),c=n(638),d=n(583),v=n(584),h=n(268),f=(n(12),n(14),n(13),n(6),n(20),n(15),n(21),n(11)),m=n(4),_=(n(55),n(118)),x=n(573),y=n(572);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={props:{defaultChoosed:{type:Object,default:null}},components:{LoadingComponent:y.default,ErrorComponent:x.default},data:function(){return{headers:[{text:"ID",value:"id"},{text:"Doly ady",value:"full_name"},{text:"Telefon belgisi",value:"phone_number"},{text:"Skidka:",value:"skidka",width:"200px"},{text:"Kardlar:",value:"cards"},{text:"Hereketler",value:"actions",align:"right",width:"10%"}],isLoading:!1,page:1,selected:[],errorMessage:null}},watch:{page:function(){this.loadMore()}},methods:O(O({},Object(_.b)({loadAllDillers:"dillers/loadAllDillers"})),{},{initData:function(){this.defaultChoosed&&this.selected.push(this.defaultChoosed)},resetData:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.page=1,t.next=3,e.loadMore();case 3:e.initData();case 4:case"end":return t.stop()}}),t)})))()},loadMore:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.loadAllDillers({page:e.page});case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},closeDialog:function(){this.$emit("closeDialog")},selectHandler:function(){this.$emit("selectItems",this.selected[0])}}),computed:O(O({},Object(_.c)({dillers:"dillers/get_dillers_list",total:"dillers/get_total_count"})),{},{pageLength:function(){return Math.ceil(this.total/20)}}),mounted:function(){this.resetData()}},j=n(87),component=Object(j.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%","background-color":"white"}},[t(l.a,{staticStyle:{position:"relative",height:"100%"},attrs:{tile:""}},[t(o.d,[e._v("\n      Dillerler\n      "),t(h.a),e._v(" "),t(r.a,{staticStyle:{"background-color":"darkred",color:"white"},attrs:{small:"",depressed:""},on:{click:e.closeDialog}},[t("span",{staticClass:"mdi mdi-close mdi-18px"})])],1),e._v(" "),t(d.a),e._v(" "),t(o.c,{staticStyle:{height:"75%","overflow-y":"auto"}},[t(c.a,{attrs:{headers:e.headers,items:e.dillers,"hide-default-footer":"","disable-pagination":"","calculate-widths":"",loading:e.isLoading,"selectable-key":"id","show-select":"","single-select":""},scopedSlots:e._u([{key:"item.cards",fn:function(t){t.item;return[e._v("\n          0\n        ")]}},{key:"item.skidka",fn:function(n){var r=n.item;return[t("div",{staticClass:"table-edit-container"},[t("strong",{staticStyle:{"font-size":"18px","margin-left":"8px"}},[e._v(e._s(r.skidka))])])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),e.pageLength>1?t(v.a,{attrs:{length:e.pageLength,circle:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e()],1),e._v(" "),t(d.a),e._v(" "),t(o.a,[t(h.a),e._v(" "),t(r.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(r.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{disabled:!e.selected.length,depressed:"",small:""},on:{click:e.selectHandler}},[e._v("save\n      ")])],1),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e(),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ErrorComponent:n(573).default,LoadingComponent:n(572).default})},599:function(e,t,n){"use strict";n.r(t);var r=n(130),l=n(117),o=n(93),c=n(359),d=n(583),v=n(358),h=n(268),f=n(220),m=(n(39),n(12),n(14),n(13),n(20),n(21),n(11)),_=n(10),x=n(4),y=(n(55),n(31),n(6),n(15),n(572)),k=n(573),O=n(591),w=n(118);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={props:{client:{type:Object,default:null}},components:{ChooseDiller:O.default,ErrorComponent:k.default,LoadingComponent:y.default},data:function(){var e=this;return{isLoading:!1,errorMessage:null,selectedDiller:null,chooseDillerDialog:!1,clientModel:{cardnumber:null,name:null,surname:null,telnumber:null,adress:null,packet:null,srok:null,resiver:null},requiredRules:[function(e){return e&&e.length>0||"Field is required"}],srokRules:[function(e){return e&&e>0&&e<13||"Srok must be between 1-12"}],phoneNumberRules:[function(t){return e.phone_regex.test(t)||"Phone number is not match!!!"}]}},methods:D(D({},Object(w.b)({updateClient:"clients/updateClientDetail",createClient:"clients/creteClient"})),{},{resetChanges:function(){if(this.clientModel={cardnumber:null,name:null,surname:null,telnumber:null,adress:null,packet:null,srok:null,resiver:null},this.client)for(var e in this.clientModel)this.clientModel[e]=this.client[e]},closeDialog:function(){this.$emit("closeDialog")},closeChooseDillerDialog:function(){this.chooseDillerDialog=!1},dillerSelected:function(e){this.selectedDiller=e,this.chooseDillerDialog=!1},checkError:function(){var e=this,t=!1,n=null,r=function(r){var l=[];switch(r){case"telnumber":l=e.phoneNumberRules;break;case"srok":l=e.srokRules;break;default:l=e.requiredRules}if(l.forEach((function(l){var o=l(e.clientModel[r]);!0!==o&&(n=o,t=!0)})),t)return alert(n),{v:t}};for(var l in this.clientModel){var o=r(l);if("object"===Object(_.a)(o))return o.v}return t},saveHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.checkError()){t.next=2;break}return t.abrupt("return");case 2:if(!e.isLoading){t.next=4;break}return t.abrupt("return");case 4:if(e.selectedDiller){t.next=7;break}return alert("Choose a diller"),t.abrupt("return");case 7:if(e.isLoading=!0,n=!1,(body=D({},e.clientModel)).diller_id=e.selectedDiller.id,!e.client){t.next=17;break}return t.next=14,e.updateClient({client_id:e.client.id,data:body});case 14:n=t.sent,t.next=20;break;case 17:return t.next=19,e.createClient(body);case 19:n=t.sent;case 20:e.isLoading=!1,n?(e.$emit("resetList"),e.closeDialog()):e.errorMessage="Cannot handler request. Please check internet connection and try again.";case 22:case"end":return t.stop()}}),t)})))()}}),computed:D(D({},Object(w.c)({phone_regex:"get_phone_regex"})),{},{errorMessages:function(){return["Field is required"]}}),mounted:function(){this.resetChanges()}},C=n(87),component=Object(C.a)(M,(function(){var e,t=this,n=t._self._c;return n("div",{staticClass:"popUpBg"},[n("div",{staticClass:"popUpCardClass",staticStyle:{width:"50%"}},[n(l.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[n(o.d,[t._v("\n        Client form\n        "),n(h.a),t._v(" "),n("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:t.closeDialog}})],1),t._v(" "),n(d.a),t._v(" "),n(o.c,{staticStyle:{"max-height":"60vh","overflow-y":"auto"}},[n(v.a,[n(c.a,[n("label",[t._v("Card number:")]),t._v(" "),n(f.a,{attrs:{rules:t.requiredRules,outlined:"",dense:""},model:{value:t.clientModel.cardnumber,callback:function(e){t.$set(t.clientModel,"cardnumber",e)},expression:"clientModel.cardnumber"}})],1),t._v(" "),n(c.a,[n("label",[t._v("Phone number:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.phoneNumberRules},model:{value:t.clientModel.telnumber,callback:function(e){t.$set(t.clientModel,"telnumber",e)},expression:"clientModel.telnumber"}})],1)],1),t._v(" "),n(v.a,[n(c.a,[n("label",[t._v("Name:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.requiredRules},model:{value:t.clientModel.name,callback:function(e){t.$set(t.clientModel,"name",e)},expression:"clientModel.name"}})],1),t._v(" "),n(c.a,[n("label",[t._v("Surname:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.requiredRules},model:{value:t.clientModel.surname,callback:function(e){t.$set(t.clientModel,"surname",e)},expression:"clientModel.surname"}})],1)],1),t._v(" "),n(v.a,[n(c.a,[n("label",[t._v("Address:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.requiredRules},model:{value:t.clientModel.adress,callback:function(e){t.$set(t.clientModel,"adress",e)},expression:"clientModel.adress"}})],1),t._v(" "),n(c.a,[n("label",[t._v("Resiver:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.requiredRules},model:{value:t.clientModel.resiver,callback:function(e){t.$set(t.clientModel,"resiver",e)},expression:"clientModel.resiver"}})],1)],1),t._v(" "),n(v.a,[n(c.a,[n("label",[t._v("Paket:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",rules:t.requiredRules},model:{value:t.clientModel.packet,callback:function(e){t.$set(t.clientModel,"packet",e)},expression:"clientModel.packet"}})],1),t._v(" "),n(c.a,[n("label",[t._v("Srok:")]),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",type:"number",rules:t.srokRules},model:{value:t.clientModel.srok,callback:function(e){t.$set(t.clientModel,"srok",e)},expression:"clientModel.srok"}})],1)],1),t._v(" "),n("div",{staticClass:"select-with-component"},[n("div",[t._v("\n            Diller: "),n("strong",[t._v(t._s((null===(e=t.selectedDiller)||void 0===e?void 0:e.full_name)||"Select diller"))])]),t._v(" "),n(r.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{depressed:"",small:""},on:{click:function(e){t.chooseDillerDialog=!0}}},[t._v("\n            select\n          ")])],1)],1),t._v(" "),n(d.a),t._v(" "),n(o.a,[n(h.a),t._v(" "),n(r.a,{attrs:{small:"",depressed:""},on:{click:t.closeDialog}},[t._v("cancel")]),t._v(" "),n(r.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{small:"",depressed:""},on:{click:t.saveHandler}},[t._v("save")])],1),t._v(" "),t.isLoading?n("loading-component"):t._e(),t._v(" "),t.chooseDillerDialog?n("choose-diller",{attrs:{"default-choosed":t.selectedDiller},on:{closeDialog:t.closeChooseDillerDialog,selectItems:t.dillerSelected}}):t._e()],1)],1),t._v(" "),t.errorMessage?n("error-component",{attrs:{message:t.errorMessage},on:{closeError:function(e){t.errorMessage=null}}}):t._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(572).default,ErrorComponent:n(573).default})}}]);