(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9],{582:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(93),o=n(622),c=n(580),d=n(267),f=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),m=n(4),v=(n(68),n(569)),h=n(118),_=n(591);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={props:{isDialog:{type:Boolean,default:!1},diller:{type:Object,default:null}},components:{ClientForm:_.default,LoadingComponent:v.default},data:function(){return{isLoading:!1,page:1,headers:[{text:"Id",value:"id"},{text:"Card number",value:"cardnumber"},{text:"Name - Surname",value:"name"},{text:"Phone number",value:"telnumber"},{text:"Paket",value:"packet"},{text:"Srok",value:"srok"},{text:"Actions",value:"actions",width:"10%",align:"right"}],selectedClient:null,clientFormDialog:!1,deleteConfirmDialog:!1}},methods:k(k({},Object(h.b)({loadClients:"clients/loadAllClients",deleteClient:"clients/deleteClient"})),{},{resetList:function(){this.page=1,this.loadData()},closeDialog:function(){this.$emit("closeDialog")},loadData:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.loadClients({page:e.page,diller_id:null===(n=e.diller)||void 0===n?void 0:n.id});case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},goToDetail:function(e){this.$router.push("clients/"+e.id)},selectForEdit:function(e){this.selectedClient=e,this.clientFormDialog=!0},selectForDelete:function(e){this.selectedClient=e,this.deleteConfirmDialog=!0},closeClientFormDialog:function(){this.selectedClient=null,this.clientFormDialog=!1}}),computed:k({},Object(h.c)({clients:"clients/get_clients_list",total:"clients/get_total_count"})),mounted:function(){this.loadData()}},O=n(87),component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"}},[t(r.d,[e._v("\n    Cards\n    "),t(d.a),e._v(" "),t(l.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{depressed:"",small:""},on:{click:function(t){e.clientFormDialog=!0}}},[t("span",{staticClass:"mdi mdi-plus mdi-18px"})]),e._v(" "),e.isDialog?t(l.a,{staticStyle:{"background-color":"darkred",color:"white","margin-left":"10px"},attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[t("span",{staticClass:"mdi mdi-close mdi-18px"})]):e._e()],1),e._v(" "),t(c.a),e._v(" "),t(o.a,{attrs:{"hide-default-footer":"","disable-pagination":"",headers:e.headers,items:e.clients},scopedSlots:e._u([{key:"item.actions",fn:function(n){var l=n.item;return[t("span",{staticClass:"mdi mdi-eye mdi-18px icon-button-class",on:{click:function(t){return e.goToDetail(l)}}}),e._v(" "),t("span",{staticClass:"mdi mdi-pencil mdi-18px icon-button-class",on:{click:function(t){return e.selectForEdit(l)}}}),e._v(" "),t("span",{staticClass:"mdi mdi-delete mdi-18px icon-button-class",on:{click:function(t){return e.selectForDelete(l)}}})]}}])}),e._v(" "),e.clientFormDialog?t("client-form",{attrs:{client:e.selectedClient},on:{closeDialog:e.closeClientFormDialog,resetList:e.resetList}}):e._e(),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default})},583:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(117),o=n(93),c=n(580),d=n(267),f=n(17),m=(n(68),{components:{LoadingComponent:n(569).default},props:{message:{type:String,default:"Deleted record cant be restored!!"},isLoading:{type:Boolean,default:!1}},methods:{closeDialog:function(){this.$emit("closeDialog")},deleteRecordHandler:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$emit("deleteAccepted");case 1:case"end":return t.stop()}}),t)})))()}}}),v=n(87),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass",staticStyle:{width:"30%"}},[t(r.a,{staticStyle:{position:"relative"}},[t(o.d,{staticStyle:{"background-color":"red",color:"white"}},[e._v("\n        Pay attention!!!\n        "),t(d.a),e._v(" "),t("span",{staticClass:"mdi mdi-close icon-button-class",on:{click:e.closeDialog}})],1),e._v(" "),t(o.c,[t("div",{staticStyle:{display:"flex","min-height":"100px","align-items":"center",color:"red","justify-content":"center"}},[t("span",{staticClass:"mdi mdi-alert",staticStyle:{"font-size":"56px"}}),e._v(" "),t("label",{staticStyle:{"margin-left":"10px","font-size":"20px"}},[e._v(e._s(e.message))])])]),e._v(" "),t(c.a),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(l.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(l.a,{staticStyle:{color:"white","background-color":"red"},attrs:{depressed:"",small:""},on:{click:e.deleteRecordHandler}},[e._v("delete")])],1),e._v(" "),e.isLoading?t("LoadingComponent"):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default})},592:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(117),o=n(93),c=n(580),d=n(267),f=n(219),m=(n(32),n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),v=n(4),h=(n(68),n(569)),_=n(570),D=n(118);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={props:{diller:{type:Object}},components:{ErrorComponent:_.default,LoadingComponent:h.default},data:function(){return{errorMessage:null,isLoading:!1,dillerModel:{full_name:null,phone_number:null,password:null,skidka:null}}},methods:y(y({},Object(D.b)({createDiller:"dillers/createDiller",updateDiller:"dillers/updateDiller"})),{},{initData:function(){this.dillerModel.full_name=null,this.dillerModel.password=null,this.dillerModel.phone_number=null,this.dillerModel.skidka=null,this.diller&&(this.dillerModel.full_name=this.diller.full_name,this.dillerModel.phone_number=this.diller.phone_number,this.dillerModel.skidka=this.diller.skidka)},closeDialog:function(){this.$emit("closeDialog")},checkError:function(){return!(!this.diller&&(!this.dillerModel.password||this.dillerModel.password.length<3))&&(!!this.dillerModel.full_name&&this.phone_regex.test(this.dillerModel.phone_number))},saveHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:if(e.checkError()){t.next=5;break}return alert("Some field are incorrect"),t.abrupt("return");case 5:if(e.isLoading=!0,n=!1,!e.diller){t.next=15;break}return delete(body=Object.assign({},e.dillerModel)).password,t.next=12,e.updateDiller({diller_id:e.diller.id,data:body});case 12:n=t.sent,t.next=18;break;case 15:return t.next=17,e.createDiller(e.dillerModel);case 17:n=t.sent;case 18:e.isLoading=!1,n?(e.$emit("initData"),e.closeDialog()):e.errorMessage="Cannot handle request. Please try again";case 20:case"end":return t.stop()}}),t)})))()}}),computed:y({},Object(D.c)({phone_regex:"get_phone_regex"})),mounted:function(){this.initData()}},w=n(87),component=Object(w.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass"},[t(r.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[t(o.d,[e._v("\n        Diller form\n        "),t(d.a),e._v(" "),t("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:e.closeDialog}})],1),e._v(" "),t(c.a),e._v(" "),t(o.c,[t("label",[e._v("Doly ady:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:""},model:{value:e.dillerModel.full_name,callback:function(t){e.$set(e.dillerModel,"full_name",t)},expression:"dillerModel.full_name"}}),e._v(" "),t("label",[e._v("Telefon belgisi:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:"",rules:[function(t){return e.phone_regex.test(t)||"Phone number is incorrect"}]},model:{value:e.dillerModel.phone_number,callback:function(t){e.$set(e.dillerModel,"phone_number",t)},expression:"dillerModel.phone_number"}}),e._v(" "),e.diller?e._e():t("div",[t("label",[e._v("Paroly:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:"",type:"password",rules:[function(e){return e&&e.length>2||"Password must me at last 3 character"}]},model:{value:e.dillerModel.password,callback:function(t){e.$set(e.dillerModel,"password",t)},expression:"dillerModel.password"}})],1),e._v(" "),t("label",[e._v("Skidka:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:"",type:"number"},model:{value:e.dillerModel.skidka,callback:function(t){e.$set(e.dillerModel,"skidka",t)},expression:"dillerModel.skidka"}})],1),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(l.a,{attrs:{small:"",depressed:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(l.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{small:"",depressed:""},on:{click:e.saveHandler}},[e._v("save")])],1),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)],1),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default,ErrorComponent:n(570).default})},594:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(117),o=n(93),c=n(580),d=n(267),f=n(219),m=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),v=n(4),h=(n(68),n(569)),_=n(118),D=n(570);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={props:{diller:{type:Object}},components:{ErrorComponent:D.default,LoadingComponent:h.default},data:function(){return{isLoading:!1,password:null,confirm_password:null,errorMessage:null}},methods:y(y({},Object(_.b)({changePassword:"dillers/updateDiller"})),{},{closeDialog:function(){this.$emit("closeDialog")},checkError:function(){return!(!this.password||!this.confirm_password||this.password.length<3&&this.password!==this.confirm_password)},saveHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:if(e.checkError()){t.next=5;break}return alert("Some field is wrong!!!"),t.abrupt("return");case 5:return e.isLoading=!0,t.next=8,e.changePassword({diller_id:e.diller.id,data:{password:e.password}});case 8:n=t.sent,e.isLoading=!1,n?e.closeDialog():e.errorMessage="Cannot change password. Please try again";case 11:case"end":return t.stop()}}),t)})))()}})},w=n(87),component=Object(w.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass",staticStyle:{width:"30%"}},[t(r.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[t(o.d,[e._v("\n        Change password\n        "),t(d.a),e._v(" "),t("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:e.closeDialog}})],1),e._v(" "),t(c.a),e._v(" "),t(o.c,[t("label",[e._v("New password:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:"",rules:[function(e){return e&&e.length>2||"Password is weak"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),t("label",[e._v("Confirm password:")]),e._v(" "),t(f.a,{attrs:{dense:"",outlined:"",rules:[function(e){return e&&e.length>2||"Password is weak"}]},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1),e._v(" "),t(c.a),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(l.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(l.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{depressed:"",small:""},on:{click:e.saveHandler}},[e._v("save")])],1),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)],1),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default,ErrorComponent:n(570).default})},595:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(117),o=n(93),c=n(580),d=n(267),f=n(219),m=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),v=n(4),h=(n(68),n(569)),_=n(570),D=n(118);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={props:{diller:{type:Object,default:null}},components:{ErrorComponent:_.default,LoadingComponent:h.default},data:function(){return{isLoading:!1,balance:null,errorMessage:null}},methods:y(y({},Object(D.b)({updateBalance:"dillers/updateBalance"})),{},{closeDialog:function(){this.$emit("closeDialog")},saveBalanceHandler:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!0,t.next=5,e.updateBalance({diller_id:e.diller.id,summ:e.balance});case 5:n=t.sent,e.isLoading=!1,n?e.closeDialog():e.errorMessage="Cannot update balance. Please try again!!!";case 8:case"end":return t.stop()}}),t)})))()}}),mounted:function(){var e;this.balance=(null===(e=this.diller)||void 0===e||null===(e=e.balans)||void 0===e?void 0:e.summ)||0}},w=n(87),component=Object(w.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass",staticStyle:{width:"30%"}},[t(r.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[t(o.d,[e._v("Update balance\n        "),t(d.a),e._v(" "),t("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:e.closeDialog}})],1),e._v(" "),t(c.a),e._v(" "),t(o.c,[t("label",[e._v("Balance:")]),e._v(" "),t(f.a,{attrs:{type:"number",outlined:"",dense:""},model:{value:e.balance,callback:function(t){e.balance=t},expression:"balance"}})],1),e._v(" "),t(c.a),e._v(" "),t(o.a,[t(d.a),e._v(" "),t(l.a,{attrs:{depressed:"",small:""},on:{click:e.closeDialog}},[e._v("cancel")]),e._v(" "),t(l.a,{staticStyle:{"background-color":"#32BCA3",color:"white"},attrs:{depressed:"",small:""},on:{click:e.saveBalanceHandler}},[e._v("save")])],1),e._v(" "),e.isLoading?t("loading-component"):e._e()],1)],1),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LoadingComponent:n(569).default,ErrorComponent:n(570).default})},596:function(e,t,n){"use strict";n.r(t);var l=n(117),r=n(93),o=n(622),c=n(580),d=n(581),f=n(267),m=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),v=n(4),h=(n(68),n(118));function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={props:{diller:{type:Object,default:null}},data:function(){return{isLoading:!1,page:1,headers:[{text:"Id",value:"id"},{text:"Type",value:"type"},{text:"Action",value:"action"},{text:"Summa",value:"summ"}]}},methods:D(D({},Object(h.b)({loadBalanceHistory:"balansHistory/loadHistory"})),{},{loadData:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.loadBalanceHistory({diller_id:e.diller.id,page:e.page});case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},closeDialog:function(){this.$emit("closeDialog")}}),computed:D(D({},Object(h.c)({history_list:"balansHistory/get_history_list",total:"balansHistory/get_total_count"})),{},{page_length:function(){return Math.ceil(this.total/20)}}),mounted:function(){this.loadData()}},y=n(87),component=Object(y.a)(k,(function(){var e,t=this,n=t._self._c;return n("div",{staticClass:"popUpBg"},[n("div",{staticClass:"popUpCardClass",staticStyle:{width:"60%"}},[n(l.a,{staticStyle:{position:"relative"},attrs:{tile:""}},[n(r.d,[t._v("\n        Balance history: (Current balance:"+t._s(null===(e=t.diller)||void 0===e||null===(e=e.balans)||void 0===e?void 0:e.summ)+" TMT)\n        "),n(f.a),t._v(" "),n("span",{staticClass:"mdi mdi-close mdi-18px icon-button-class",on:{click:t.closeDialog}})],1),t._v(" "),n(c.a),t._v(" "),n(r.c,[n(o.a,{attrs:{headers:t.headers,items:t.history_list,loading:t.isLoading,"hide-default-footer":"","disable-pagination":""}}),t._v(" "),t.page_length>0?n(d.a,{attrs:{length:t.page_length},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},625:function(e,t,n){"use strict";n.r(t);var l=n(130),r=n(93),o=n(622),c=n(580),d=n(581),f=n(267),m=n(219),v=(n(13),n(14),n(11),n(6),n(20),n(12),n(21),n(17)),h=n(4),_=(n(68),n(118)),D=n(592),k=n(594),y=n(583),O=n(570),w=n(569),C=n(582),j=n(595);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var L={components:{BalanceHistory:n(596).default,ChangeBalansForm:j.default,ClientsList:C.default,LoadingComponent:w.default,ErrorComponent:O.default,DeleteConfirmDialog:y.default,ChangePasswordForm:k.default,DillerForm:D.default},data:function(){return{headers:[{text:"ID",value:"id"},{text:"Doly ady",value:"full_name"},{text:"Telefon belgisi",value:"phone_number"},{text:"Skidka:",value:"skidka",width:"200px"},{text:"Kardlar:",value:"client_count"},{text:"Balans",value:"balans",width:"15%"},{text:"Hereketler",value:"actions",align:"right",width:"10%"}],isLoading:!1,page:1,dillerFormDialog:!1,selectedDiller:null,changePasswordForm:!1,deleteConfirmDialog:!1,isDeleting:!1,errorMessage:null,selectedForSkidka:0,skidka:null,clientsListDialog:!1,balanceDialog:!1,balanceHistoryDialog:!1}},methods:P(P({},Object(_.b)({loadAllDillers:"dillers/loadAllDillers",removeDiller:"dillers/removeDiller",updateSkidka:"dillers/updateDiller"})),{},{initData:function(){this.page=1,this.resetData()},openBalanceHistoryDialog:function(e){this.selectedDiller=e,this.balanceHistoryDialog=!0},closeBalanceHistoryDialog:function(){this.selectedDiller=null,this.balanceHistoryDialog=!1},openBalanceDialog:function(e){this.selectedDiller=e,this.balanceDialog=!0},closeBalanceDialog:function(){this.selectedDiller=null,this.balanceDialog=!1},deleteDillerHandler:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isDeleting){t.next=2;break}return t.abrupt("return");case 2:return e.isDeleting=!0,t.next=5,e.removeDiller(e.selectedDiller.id);case 5:if(n=t.sent,e.isDeleting=!1,!n){t.next=13;break}return e.closeDeleteConfirmDialog(),t.next=11,e.resetData();case 11:t.next=14;break;case 13:e.errorMessage="Cannot delete diller data. Please try again!";case 14:case"end":return t.stop()}}),t)})))()},resetData:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.loadAllDillers({page:e.page});case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},cancelEditSkidka:function(){this.skidka=null,this.selectedForSkidka=0},openClientsListDialog:function(e){this.selectedDiller=e,this.clientsListDialog=!0},closeClientsListDialog:function(){this.selectedDiller=null,this.clientsListDialog=!1},saveSkidkaHandler:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoading){t.next=2;break}return t.abrupt("return");case 2:return e.isLoading=!0,t.next=5,e.updateSkidka({diller_id:e.selectedForSkidka,data:{skidka:e.skidka}});case 5:n=t.sent,e.isLoading=!1,n?e.cancelEditSkidka():e.errorMessage="Cannot handler request. Please try again!!!";case 8:case"end":return t.stop()}}),t)})))()},selectForEditSkidka:function(e){this.selectedForSkidka=e.id,this.skidka=e.skidka},closeDillerFormDialog:function(){this.selectedDiller=null,this.dillerFormDialog=!1},selectForEdit:function(e){this.selectedDiller=e,this.dillerFormDialog=!0},selectForEditPassword:function(e){this.selectedDiller=e,this.changePasswordForm=!0},closeChangePasswordDialog:function(){this.selectedDiller=null,this.changePasswordForm=!1},closeDeleteConfirmDialog:function(){this.selectedDiller=null,this.deleteConfirmDialog=!1},selectForDelete:function(e){this.selectedDiller=e,this.deleteConfirmDialog=!0}}),computed:P(P({},Object(_.c)({dillers:"dillers/get_dillers_list",total:"dillers/get_total_count"})),{},{pageLength:function(){return Math.ceil(this.total/20)}}),mounted:function(){this.resetData()}},S=n(87),component=Object(S.a)(L,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"}},[t(r.d,[e._v("\n    Dillerler\n    "),t(f.a),e._v(" "),t(l.a,{staticStyle:{color:"white","background-color":"#32BCA3"},attrs:{depressed:"",small:""},on:{click:function(t){e.dillerFormDialog=!0}}},[t("span",{staticClass:"mdi mdi-plus mdi-18px"})])],1),e._v(" "),t(c.a),e._v(" "),t(o.a,{attrs:{headers:e.headers,items:e.dillers,"hide-default-footer":"","disable-pagination":"","calculate-widths":"",loading:e.isLoading},scopedSlots:e._u([{key:"item.balans",fn:function(n){var l,r=n.item;return[t("div",{staticStyle:{"font-size":"18px","justify-content":"space-between",display:"flex","align-items":"center","border-right":"1px solid black"}},[t("strong",[e._v(e._s((null===(l=r.balans)||void 0===l?void 0:l.summ)||0)+" TMT")]),e._v(" "),t("div",[t("span",{staticClass:"mdi mdi-pencil mdi-18px icon-button-class",on:{click:function(t){return e.openBalanceDialog(r)}}}),e._v(" "),t("span",{staticClass:"mdi mdi-history mdi-18px icon-button-class",on:{click:function(t){return e.openBalanceHistoryDialog(r)}}})])])]}},{key:"item.client_count",fn:function(n){var l=n.item;return[t("div",{staticClass:"icon-button-class",staticStyle:{"font-size":"16px"},on:{click:function(t){return e.openClientsListDialog(l)}}},[e._v("\n        Cards: "),t("strong",[e._v(e._s(l.client_count))])])]}},{key:"item.actions",fn:function(n){var l=n.item;return[t("span",{staticClass:"mdi mdi-shield-edit-outline mdi-18px icon-button-class",on:{click:function(t){return e.selectForEditPassword(l)}}}),e._v(" "),t("span",{staticClass:"mdi mdi-pencil mdi-18px icon-button-class",on:{click:function(t){return e.selectForEdit(l)}}}),e._v(" "),t("span",{staticClass:"mdi mdi-delete mdi-18px icon-button-class",on:{click:function(t){return e.selectForDelete(l)}}})]}},{key:"item.skidka",fn:function(n){var l=n.item;return[e.selectedForSkidka===l.id?t("div",{staticClass:"table-edit-container"},[t("div",[t(m.a,{attrs:{dense:"",outlined:"","hide-details":"","single-line":"",type:"number"},model:{value:e.skidka,callback:function(t){e.skidka=t},expression:"skidka"}})],1),e._v(" "),t("span",{staticClass:"mdi mdi-check icon-button-class",on:{click:e.saveSkidkaHandler}}),e._v(" "),t("span",{staticClass:"mdi mdi-close icon-button-class",on:{click:e.cancelEditSkidka}})]):t("div",{staticClass:"table-edit-container"},[t("strong",{staticStyle:{"font-size":"18px","margin-left":"8px"}},[e._v(e._s(l.skidka))]),e._v(" "),t("span",{staticClass:"mdi mdi-pencil icon-button-class",on:{click:function(t){return e.selectForEditSkidka(l)}}})])]}}])}),e._v(" "),e.pageLength>1?t(d.a,{attrs:{length:e.pageLength,circle:""},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}):e._e(),e._v(" "),e.dillerFormDialog?t("diller-form",{attrs:{diller:e.selectedDiller},on:{closeDialog:e.closeDillerFormDialog,initData:e.initData}}):e._e(),e._v(" "),e.changePasswordForm?t("change-password-form",{attrs:{diller:e.selectedDiller},on:{closeDialog:e.closeChangePasswordDialog}}):e._e(),e._v(" "),e.deleteConfirmDialog?t("delete-confirm-dialog",{attrs:{"is-loading":e.isDeleting},on:{closeDialog:e.closeDeleteConfirmDialog,deleteAccepted:e.deleteDillerHandler}}):e._e(),e._v(" "),e.errorMessage?t("error-component",{attrs:{message:e.errorMessage},on:{closeError:function(t){e.errorMessage=null}}}):e._e(),e._v(" "),e.isLoading?t("loading-component"):e._e(),e._v(" "),e.clientsListDialog?t("div",{staticClass:"popUpBg"},[t("div",{staticClass:"popUpCardClass",staticStyle:{width:"90%","background-color":"white"}},[t("clients-list",{attrs:{"is-dialog":!0,diller:e.selectedDiller},on:{closeDialog:e.closeClientsListDialog}})],1)]):e._e(),e._v(" "),e.balanceDialog?t("change-balans-form",{attrs:{diller:e.selectedDiller},on:{closeDialog:e.closeBalanceDialog}}):e._e(),e._v(" "),e.balanceHistoryDialog?t("balance-history",{attrs:{diller:e.selectedDiller},on:{closeDialog:e.closeBalanceHistoryDialog}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DillerForm:n(592).default,DeleteConfirmDialog:n(583).default,ErrorComponent:n(570).default,LoadingComponent:n(569).default,ClientsList:n(582).default})}}]);