(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9d2cd70"],{"0a9c":function(t,a,e){},7743:function(t,a,e){"use strict";var s=e("0a9c"),r=e.n(s);r.a},"7cd5":function(t,a,e){"use strict";e.r(a);var s,r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-center-page"},[e("van-nav-bar",{attrs:{fixed:"",border:"",title:"查看名片","left-arrow":""},on:{"click-left":t.goBack}}),e("div",{staticClass:"user_info",attrs:{id:"modifyUserInfo"}},[e("div",{staticClass:"user_info_con"},[e("div",{staticClass:"clear user_info_detail"},[e("div",{staticClass:"avatar_wrap"},[e("div",{staticClass:"avatar"},[e("van-image",{attrs:{width:"70",height:"70",fit:"cover",src:t.card.head_img}})],1)]),e("div",{staticClass:"personal_wrap"},[e("p",{staticClass:"userName"},[e("span",[t._v(t._s(t.card.name))]),"1"===t.card.type?e("img",{staticClass:"level-icon",attrs:{src:t.publicPath+"img/level-2.png",alt:""}}):t._e(),e("span",[t._v(t._s(t.card.position))])]),e("p",{staticClass:"company"},[t._v(t._s(t.card.company))]),t.card.industry_names?e("div",{staticClass:"label"},[t._l(t.card.industry_names,(function(a,s){return e("van-tag",{key:s,class:["tag",t.getTagClass(s)],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(a))])})),t._l(t.formatAttrs(t.card.attrs),(function(a,s){return e("van-tag",{key:s,class:["tag","normal"],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(a))])}))],2):e("div",{staticClass:"label"},t._l(t.formatAttrs(t.card.attrs),(function(a,s){return e("van-tag",{key:s,class:["tag",t.getTagClass(s)],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(a))])})),1)])]),e("div",{staticClass:"user_info_other"},[e("p",{staticClass:"tel"},[e("van-icon",{attrs:{"class-prefix":"tj-icon",name:"contact"}}),t._v("\n            电话号码："+t._s(t.isSecret?"***********":t.card.mobile)+"\n          ")],1),e("p",{staticClass:"address"},[e("van-icon",{attrs:{"class-prefix":"tj-icon",name:"biaodiandidian"}}),t._v("\n            公司地址："+t._s(t.card.c_address)+"\n          ")],1),e("p",{staticClass:"email"},[e("van-icon",{attrs:{"class-prefix":"tj-icon",name:"youjian"}}),t._v("\n            电子邮箱："+t._s(t.isSecret?"*****@*****":t.card.email)+"\n          ")],1),e("p",{staticClass:"httpInfo"},[e("van-icon",{attrs:{"class-prefix":"tj-icon",name:"wangzhi"}}),t._v("\n            公司网址："+t._s(t.isSecret?"***********":t.card.company_url)+"\n          ")],1)])])]),e("van-cell-group",{staticClass:"cell-group"},[e("van-row",{staticClass:"row"},[e("van-col",{staticClass:"kv",attrs:{span:"8"}},[e("span",{staticClass:"value"},[t._v(t._s(t.card.integral))]),e("span",{staticClass:"key"},[t._v("积分")])]),e("van-col",{staticClass:"kv",attrs:{span:"8"}},[e("span",{staticClass:"value"},[t._v(t._s(t.card.demand_count||0))]),e("span",{staticClass:"key"},[t._v("需求发布")])]),e("van-col",{staticClass:"kv",attrs:{span:"8"}},[e("span",{staticClass:"value"},[t._v(t._s(t.card.solve_count||0))]),e("span",{staticClass:"key"},[t._v("需求解决")])])],1)],1),e("van-cell-group",{staticClass:"cell-group"},[e("van-cell",{attrs:{title:"个人简介",label:t.card.p_profile}}),e("van-cell",{attrs:{title:"公司简介",label:t.card.c_profile}})],1),e("van-row",{staticClass:"bottom-bar cell-group"},[e("van-button",{attrs:{square:"",block:""},on:{click:t.goBack}},[t._v("返回")]),t.isSecret?e("van-button",{attrs:{block:"",square:"",type:"danger"},on:{click:t.handleSubmit}},[t._v("交换名片")]):t.card.id!==t.userInfo.id?e("van-button",{attrs:{block:"",square:"",type:"danger",url:"tel:"+t.card.mobile}},[t._v("联系对方")]):t._e()],1)],1)},n=[],c=(e("8e6e"),e("ac6a"),e("456d"),e("28a5"),e("a481"),e("7514"),e("96cf"),e("3b8d")),i=e("bd86"),o=(e("bf24"),e("44bf")),l=(e("c625"),e("b650")),u=(e("4071"),e("a3e2")),d=(e("47d1"),e("9ffb")),f=(e("4bc8"),e("d1e1")),b=(e("3ec1"),e("7744")),p=(e("b342"),e("ad06")),m=(e("da02"),e("6b41")),v=(e("7f7f"),e("2a53"),e("34e9")),h=e("2f62"),_=e("a417"),g=e("2b26"),O=e("30eb"),j=e("db49");function k(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function y(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?k(Object(e),!0).forEach((function(a){Object(i["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var C={name:"user-center",components:(s={},Object(i["a"])(s,v["a"].name,v["a"]),Object(i["a"])(s,m["a"].name,m["a"]),Object(i["a"])(s,p["a"].name,p["a"]),Object(i["a"])(s,b["a"].name,b["a"]),Object(i["a"])(s,f["a"].name,f["a"]),Object(i["a"])(s,d["a"].name,d["a"]),Object(i["a"])(s,u["a"].name,u["a"]),Object(i["a"])(s,l["a"].name,l["a"]),Object(i["a"])(s,o["a"].name,o["a"]),s),data:function(){return{val:"",card:{},publicPath:"",demandReasonStatus:""}},computed:y({},Object(h["d"])(["from"]),{},Object(h["c"])(["userInfo"]),{isSecret:function(){return 0===this.card.is_exchange&&"1"!==this.demandReasonStatus}}),mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var a,e,s,r,n,c,i,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(g["l"])({key:"ExchangeCards",type:0}).then((function(t){o.val=t.value})),t.next=3,Object(_["f"])({from_user_id:this.userInfo.id,user_id:this.$route.params.id});case 3:if(a=t.sent,console.log(a,123465),e="".concat(a.name,"。点击查看房源详情"),s=j["b"]+"#/cards/"+a.id,setTimeout((function(){Object(O["b"])({title:"您的好友正在天集社，快去看看吧",desc:e,link:s})}),1e3),r=this.formatAttrs(a.attrs),this.card=y({},a,{attrs:r}),this.userInfo.id===this.$route.params.id&&(this.card.is_exchange=1),n=this.$route.query.demand_id,!n){t.next=19;break}return t.next=15,Object(g["i"])({id:n,uid:this.userInfo.id});case 15:c=t.sent,i={},i=this.userInfo.id===c.user_id?c.reason_data.find((function(t){return t.user_id===o.$route.params.id})):c.reason_data.find((function(t){return t.user_id===o.userInfo.id})),this.demandReasonStatus=i?i.status:"";case 19:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:y({},Object(h["b"])(["fetchUserInfo"]),{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},getTagClass:function(t){return 0===t?"first":1===t?"second":"normal"},handleSubmit:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchUserInfo(this.userInfo.id);case 2:if(1!=this.userInfo.is_black){t.next=5;break}return this.$dialog.alert({title:"温馨提示",message:"您没有此权限，请联系平台管理员\n（电话：15602908103）",confirmButtonText:"确认"}).then((function(){console.log("confirm dialog")})),t.abrupt("return");case 5:if("2"===this.userInfo.status){t.next=10;break}return this.$dialog.confirm({title:"温馨提示",message:"您需要注册后才能进行该操作哦",confirmButtonText:"马上注册",cancelButtonText:"稍后再说"}).then((function(){"1"===a.userInfo.is_subscribe?a.$router.push("/my-card"):console.log("未注册用户")})).catch((function(){console.log("cancel dialog")})),t.abrupt("return");case 10:if("1"===this.userInfo.is_subscribe){t.next=13;break}return console.log("未注册用户"),t.abrupt("return");case 13:if(!(this.userInfo.integral<5)){t.next=16;break}return this.$dialog.confirm({title:"温馨提示",message:"当前积分不足，无法交换名片，请充值后再申请",confirmButtonText:"马上充值",cancelButtonText:"稍后再说"}).then((function(){a.$router.push("/incharge")})).catch((function(){console.log("cancel dialog")})),t.abrupt("return");case 16:if(t.prev=16,1!=this.userInfo.is_vip){t.next=21;break}this.$dialog.alert({title:"温馨提示",message:"申请成功。请耐心等待对方通过",confirmButtonText:"确认"}),t.next=24;break;case 21:return t.next=23,Object(_["a"])({user_id:this.userInfo.id,from_user_id:this.$route.params.id});case 23:this.$dialog.alert({title:"温馨提示",message:"申请成功。扣除".concat(this.val,"积分 请耐心等待对方通过"),confirmButtonText:"确认"}).then((function(){a.goBack()}));case 24:t.next=29;break;case 26:t.prev=26,t.t0=t["catch"](16),this.$dialog.alert({title:"温馨提示",message:t.t0.message,confirmButtonText:"确认"}).then((function(){console.log("confirm dialog")}));case 29:case"end":return t.stop()}}),t,this,[[16,26]])})));function a(){return t.apply(this,arguments)}return a}(),formatAttrs:function(t){if(Array.isArray(t))return t;var a=t?t.split("/"):[];return a.filter((function(t){return!!t&&"undefined"!==t}))}})},x=C,w=(e("7743"),e("2877")),I=Object(w["a"])(x,r,n,!1,null,"0f528a4c",null);a["default"]=I.exports}}]);
//# sourceMappingURL=chunk-c9d2cd70.4.0.0.1587652231472.js.map