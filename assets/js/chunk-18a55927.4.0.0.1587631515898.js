(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a55927"],{7743:function(t,e,a){"use strict";var s=a("f01a"),r=a.n(s);r.a},"7cd5":function(t,e,a){"use strict";a.r(e);var s,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-center-page"},[a("van-nav-bar",{attrs:{fixed:"",border:"",title:"查看名片","left-arrow":""},on:{"click-left":t.goBack}}),a("div",{staticClass:"user_info",attrs:{id:"modifyUserInfo"}},[a("div",{staticClass:"user_info_con"},[a("div",{staticClass:"clear user_info_detail"},[a("div",{staticClass:"avatar_wrap"},[a("div",{staticClass:"avatar"},[a("van-image",{attrs:{width:"70",height:"70",fit:"cover",src:t.card.head_img}})],1)]),a("div",{staticClass:"personal_wrap"},[a("p",{staticClass:"userName"},[a("span",[t._v(t._s(t.card.name))]),"1"===t.card.type?a("img",{staticClass:"level-icon",attrs:{src:t.publicPath+"img/level-2.png",alt:""}}):t._e(),a("span",[t._v(t._s(t.card.position))])]),a("p",{staticClass:"company"},[t._v(t._s(t.card.company))]),t.card.industry_names?a("div",{staticClass:"label"},[t._l(t.card.industry_names,(function(e,s){return a("van-tag",{key:s,class:["tag",t.getTagClass(s)],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(e))])})),t._l(t.formatAttrs(t.card.attrs),(function(e,s){return a("van-tag",{key:s,class:["tag","normal"],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(e))])}))],2):a("div",{staticClass:"label"},t._l(t.formatAttrs(t.card.attrs),(function(e,s){return a("van-tag",{key:s,class:["tag",t.getTagClass(s)],attrs:{color:0===s?"#00c08b":"#ff6e1d"}},[t._v(t._s(e))])})),1)])]),a("div",{staticClass:"user_info_other"},[a("p",{staticClass:"tel"},[a("van-icon",{attrs:{"class-prefix":"tj-icon",name:"contact"}}),t._v("\n            电话号码："+t._s(t.isSecret?"***********":t.card.mobile)+"\n          ")],1),a("p",{staticClass:"address"},[a("van-icon",{attrs:{"class-prefix":"tj-icon",name:"biaodiandidian"}}),t._v("\n            公司地址："+t._s(t.card.c_address)+"\n          ")],1),a("p",{staticClass:"email"},[a("van-icon",{attrs:{"class-prefix":"tj-icon",name:"youjian"}}),t._v("\n            电子邮箱："+t._s(t.isSecret?"*****@*****":t.card.email)+"\n          ")],1),a("p",{staticClass:"httpInfo"},[a("van-icon",{attrs:{"class-prefix":"tj-icon",name:"wangzhi"}}),t._v("\n            公司网址："+t._s(t.isSecret?"***********":t.card.company_url)+"\n          ")],1)])])]),a("van-cell-group",{staticClass:"cell-group"},[a("van-row",{staticClass:"row"},[a("van-col",{staticClass:"kv",attrs:{span:"8"}},[a("span",{staticClass:"value"},[t._v(t._s(t.card.integral))]),a("span",{staticClass:"key"},[t._v("积分")])]),a("van-col",{staticClass:"kv",attrs:{span:"8"}},[a("span",{staticClass:"value"},[t._v(t._s(t.card.demand_count||0))]),a("span",{staticClass:"key"},[t._v("需求发布")])]),a("van-col",{staticClass:"kv",attrs:{span:"8"}},[a("span",{staticClass:"value"},[t._v(t._s(t.card.solve_count||0))]),a("span",{staticClass:"key"},[t._v("需求解决")])])],1)],1),a("van-cell-group",{staticClass:"cell-group"},[a("van-cell",{attrs:{title:"个人简介",label:t.card.p_profile}}),a("van-cell",{attrs:{title:"公司简介",label:t.card.c_profile}})],1),a("van-row",{staticClass:"bottom-bar cell-group"},[a("van-button",{attrs:{square:"",block:""},on:{click:t.goBack}},[t._v("返回")]),t.isSecret?a("van-button",{attrs:{block:"",square:"",type:"danger"},on:{click:t.handleSubmit}},[t._v("交换名片")]):t.card.id!==t.userInfo.id?a("van-button",{attrs:{block:"",square:"",type:"danger",url:"tel:"+t.card.mobile}},[t._v("联系对方")]):t._e()],1)],1)},n=[],c=(a("5ab2"),a("6d57"),a("e10e"),a("9a33"),a("f548"),a("e697"),a("b449"),a("17d6")),i=a("b081"),o=(a("fb7e"),a("f470")),l=(a("3b67"),a("b7d9")),u=(a("6949"),a("e78c")),d=(a("ef14"),a("6345")),f=(a("e2b7"),a("e1d4")),b=(a("eef9"),a("25c8")),p=(a("b124"),a("4de1")),m=(a("ecc9"),a("d1b4")),v=(a("cc57"),a("d044"),a("d046")),h=a("8876"),_=a("a417"),g=a("2b26"),O=a("30eb"),j=a("db49");function k(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?k(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var C={name:"user-center",components:(s={},Object(i["a"])(s,v["a"].name,v["a"]),Object(i["a"])(s,m["a"].name,m["a"]),Object(i["a"])(s,p["a"].name,p["a"]),Object(i["a"])(s,b["a"].name,b["a"]),Object(i["a"])(s,f["a"].name,f["a"]),Object(i["a"])(s,d["a"].name,d["a"]),Object(i["a"])(s,u["a"].name,u["a"]),Object(i["a"])(s,l["a"].name,l["a"]),Object(i["a"])(s,o["a"].name,o["a"]),s),data:function(){return{val:"",card:{},publicPath:"",demandReasonStatus:""}},computed:y({},Object(h["d"])(["from"]),{},Object(h["c"])(["userInfo"]),{isSecret:function(){return 0===this.card.is_exchange&&"1"!==this.demandReasonStatus}}),mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r,n,c,i,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return Object(g["l"])({key:"ExchangeCards",type:0}).then((function(t){o.val=t.value})),t.next=3,Object(_["f"])({from_user_id:this.userInfo.id,user_id:this.$route.params.id});case 3:if(e=t.sent,console.log(e,123465),a="".concat(e.name,"。点击查看房源详情"),s=j["b"]+"#/cards/"+e.id,setTimeout((function(){Object(O["b"])({title:"您的好友正在天集社，快去看看吧",desc:a,link:s})}),1e3),r=this.formatAttrs(e.attrs),this.card=y({},e,{attrs:r}),this.userInfo.id===this.$route.params.id&&(this.card.is_exchange=1),n=this.$route.query.demand_id,!n){t.next=19;break}return t.next=15,Object(g["i"])({id:n,uid:this.userInfo.id});case 15:c=t.sent,i={},i=this.userInfo.id===c.user_id?c.reason_data.find((function(t){return t.user_id===o.$route.params.id})):c.reason_data.find((function(t){return t.user_id===o.userInfo.id})),this.demandReasonStatus=i?i.status:"";case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:y({},Object(h["b"])(["fetchUserInfo"]),{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},getTagClass:function(t){return 0===t?"first":1===t?"second":"normal"},handleSubmit:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchUserInfo(this.userInfo.id);case 2:if(1!=this.userInfo.is_black){t.next=5;break}return this.$dialog.alert({title:"温馨提示",message:"您没有此权限，请联系平台管理员\n（电话：15602908103）",confirmButtonText:"确认"}).then((function(){console.log("confirm dialog")})),t.abrupt("return");case 5:if("2"===this.userInfo.status){t.next=10;break}return this.$dialog.confirm({title:"温馨提示",message:"您需要注册后才能进行该操作哦",confirmButtonText:"马上注册",cancelButtonText:"稍后再说"}).then((function(){"1"===e.userInfo.is_subscribe?e.$router.push("/my-card"):console.log("未注册用户")})).catch((function(){console.log("cancel dialog")})),t.abrupt("return");case 10:if("1"===this.userInfo.is_subscribe){t.next=13;break}return console.log("未注册用户"),t.abrupt("return");case 13:if(!(this.userInfo.integral<5)){t.next=16;break}return this.$dialog.confirm({title:"温馨提示",message:"当前积分不足，无法交换名片，请充值后再申请",confirmButtonText:"马上充值",cancelButtonText:"稍后再说"}).then((function(){e.$router.push("/incharge")})).catch((function(){console.log("cancel dialog")})),t.abrupt("return");case 16:if(t.prev=16,1!=this.userInfo.is_vip){t.next=21;break}this.$dialog.alert({title:"温馨提示",message:"申请成功。请耐心等待对方通过",confirmButtonText:"确认"}),t.next=24;break;case 21:return t.next=23,Object(_["a"])({user_id:this.userInfo.id,from_user_id:this.$route.params.id});case 23:this.$dialog.alert({title:"温馨提示",message:"申请成功。扣除".concat(this.val,"积分 请耐心等待对方通过"),confirmButtonText:"确认"}).then((function(){e.goBack()}));case 24:t.next=29;break;case 26:t.prev=26,t.t0=t["catch"](16),this.$dialog.alert({title:"温馨提示",message:t.t0.message,confirmButtonText:"确认"}).then((function(){console.log("confirm dialog")}));case 29:case"end":return t.stop()}}),t,this,[[16,26]])})));function e(){return t.apply(this,arguments)}return e}(),formatAttrs:function(t){if(Array.isArray(t))return t;var e=t?t.split("/"):[];return e.filter((function(t){return!!t&&"undefined"!==t}))}})},x=C,w=(a("7743"),a("e90a")),I=Object(w["a"])(x,r,n,!1,null,"0f528a4c",null);e["default"]=I.exports},f01a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-18a55927.4.0.0.1587631515898.js.map