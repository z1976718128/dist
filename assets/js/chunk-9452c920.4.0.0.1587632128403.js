(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9452c920"],{4921:function(t,a,s){"use strict";s.r(a);var e,n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"mainContent",staticClass:"agent"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"yy",on:{click:t.hideYY}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"jt",staticStyle:{top:"35%"}},[e("img",{staticClass:"share_imgs",attrs:{src:t.posterImg,alt:"",crossOrigin:"anonymous"}}),t._m(0),e("div",{staticClass:"close",on:{click:t.close}},[e("img",{attrs:{src:s("220d"),alt:""}})])]),e("div",{ref:"posterHtml",staticClass:"HB_CLASS"},[e("div",{staticClass:"poster_head"},[e("img",{attrs:{src:t.userInfo.head_img,alt:""}}),e("div",{staticClass:"HB_IFON"},[e("h4",[t._v(t._s(t.userInfo.name))]),e("p",[t._v("给你分享一个好平台")])])]),e("div",{staticClass:"demand-content brt",staticStyle:{padding:"8px 15px",height:"auto"}},[e("div",{staticClass:"share_ewm",staticStyle:{"text-align":"center"}},[e("img",{attrs:{height:"120vw",src:t.share_ewm,alt:""}})]),t._m(1)]),t._m(2)]),e("van-row",{staticClass:"agent_head",attrs:{type:"flex",justify:"space-between",align:"center "}},[e("van-col",{attrs:{span:"18",offset:"2"}},[t._v("你好，"+t._s(t.agentName)+"！")]),e("van-col",{attrs:{span:"6"}},[e("div",{staticClass:"yqm",on:{click:t.share}},[e("p",[e("i",{staticClass:"iconfont iconerweima"}),e("br"),e("span",[t._v("我的邀请码")])])])])],1),e("van-tabs",{on:{change:t.onTabChange},model:{value:t.activeTabIndex,callback:function(a){t.activeTabIndex=a},expression:"activeTabIndex"}},[e("van-tab",{attrs:{title:"意向客户"}},[t._l(t.Customers,(function(a,s){return e("van-row",{key:s,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[e("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[e("p",{staticClass:"info_title"},[t._v(t._s(a.remark))]),e("div",{staticClass:"tab_info"},[e("p",{staticClass:"info_title"},[t._v(t._s(a.title))]),e("p",[e("i",{staticClass:"iconfont iconyixiangren"}),t._v("意向人："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),e("p",[e("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),e("p",[e("i",{staticClass:"iconfont iconshijian"}),t._v("登记时间："+t._s(a.datetime))])]),e("van-row",{staticClass:"info_btn",attrs:{gutter:"20",type:"flex",justify:"space-around"}},[0==a.is_contract?e("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(s){return t.callPhone2(a)}}},[t._v("马上联系")]):e("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(s){return t.callPhoneTow(a.phone)}}},[t._v("已联系")]),e("van-col",{staticClass:"ck",attrs:{span:"10"},on:{click:function(s){return t.gotoWorkshop(a.house_id)}}},[t._v("查看房源")])],1)],1)],1)})),0==t.Customers.length?e("div",{staticClass:"no-content"},[e("img",{attrs:{src:s("d919"),alt:""}}),e("p",[e("strong",[t._v("暂无意向客户")])]),e("p",[t._v("暂无意向客户，快去看看吧~")])]):t._e()],2),e("van-tab",{attrs:{title:"委托找房"}},[t._l(t.data,(function(a,s){return e("van-row",{key:s,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[e("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[e("div",{staticClass:"tab_info wtzf"},[e("p",[e("i",{staticClass:"iconfont iconyixiangren"}),t._v("意向人："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),e("p",[e("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),e("p",[e("i",{staticClass:"iconfont iconbiaodiandidian"}),t._v("目标位置："+t._s(a.location))]),e("p",[e("i",{staticClass:"iconfont iconmubiaoyusuan"}),t._v("目标预算："+t._s(a.budget)+"元 / m²")]),e("p",[e("i",{staticClass:"iconfont iconmubiaomianji"}),t._v("目标面积："+t._s(a.area)+"m²")]),e("p",[e("i",{staticClass:"iconfont iconwodexuqiu"}),t._v("需求："+t._s(a.remark))]),e("p",[e("i",{staticClass:"iconfont iconshijian"}),t._v("登记时间："+t._s(a.datetime))])]),e("van-row",{staticClass:"info_btn",attrs:{gutter:"20",type:"flex",justify:"space-between"}},[0==a.is_contract?e("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(s){return t.callPhone(a)}}},[t._v("马上联系")]):e("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(s){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),0==t.data.length?e("div",{staticClass:"no-content"},[e("img",{attrs:{src:s("d919"),alt:""}}),e("p",[e("strong",[t._v("暂无委托找房")])]),e("p",[t._v("暂无委托找房，快去看看吧~")])]):t._e()],2),e("van-tab",{attrs:{title:"房源管理"}},[t._l(t.Houselist,(function(a,s){return e("van-row",{key:s,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[e("van-col",{staticClass:"tab_content",attrs:{span:"21"}},[e("p",{staticClass:"info_title"},[t._v(t._s(a.tile))]),e("div",{staticClass:"tab_info"},[e("p",{staticClass:"red"},[t._v("意向人数："+t._s(a.contract_num)+"人")]),e("p",{staticClass:"red"},[t._v("访客人数："+t._s(a.visit_num)+"人")])]),e("van-row",{staticClass:"info_btn",attrs:{gutter:"20",type:"flex",justify:"space-around"}},[e("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(s){return t.gotohouse(a.house_id)}}},[t._v("客户列表")]),e("van-col",{staticClass:"ck",attrs:{span:"10"},on:{click:function(s){return t.gotoWorkshop(a.house_id)}}},[t._v("查看房源")])],1)],1)],1)})),0==t.Houselist.length?e("div",{staticClass:"no-content"},[e("img",{attrs:{src:s("d919"),alt:""}}),e("p",[e("strong",[t._v("暂无房源")])]),e("p",[t._v("暂无房源，快去看看吧~")])]):t._e()],2)],1)],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"HB_TS"},[t._v("\n\t    长按上方图片发送给好友"),s("br"),t._v("成功邀请好友注册还有奖励哦！\n\t  ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"tjs_fx",staticStyle:{"text-align":"center"}},[t._v("\n\t      长按识别二维码马上注册"),s("br"),t._v("新注册用户可获新手奖励\n\t    ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lianx"},[e("div",{staticClass:"share_logo"},[e("img",{attrs:{src:s("d4c5"),alt:""}})]),e("div",{staticClass:"tjs_js"},[t._v("\n\t      数万家制造企业都在用的供应链对接平台，快来注册吧~\n\t    ")])])}],c=(s("5ab2"),s("6d57"),s("e10e"),s("f548"),s("b081")),r=(s("e2b7"),s("e1d4")),l=(s("ef14"),s("6345")),u=(s("44cb"),s("cc14")),f=(s("cc57"),s("90d2"),s("84df")),d=s("e81a"),v=s.n(d),_=s("8876"),p=s("fa8b"),h=s("2b26");s("a417");function b(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function g(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?b(Object(s),!0).forEach((function(a){Object(c["a"])(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var m=(n={data:function(){return{activeTabIndex:0,data:[],Houselist:[],UserList:[],Customers:[],posterImg:"",dialogTableVisible:!1,share_ewm:"",agentName:null}},components:(e={},Object(c["a"])(e,f["a"].name,f["a"]),Object(c["a"])(e,u["a"].name,u["a"]),Object(c["a"])(e,l["a"].name,l["a"]),Object(c["a"])(e,r["a"].name,r["a"]),e),created:function(){var t=this;Object(p["u"])().then((function(a){t.agentName=a.agent_name}))},mounted:function(){var t=this;this.fetchUserInfo(this.userInfo.id),Object(h["q"])({user_id:this.userInfo.id}).then((function(a){t.share_ewm=a.url}))}},Object(c["a"])(n,"mounted",(function(){this.getData();var t=0;switch(this.tabName){case"intention":t=0;break;case"entrust":t=1;break;case"housing":t=2;break;default:break}this.activeTabIndex=t})),Object(c["a"])(n,"methods",g({},Object(_["b"])(["fetchUserInfo"]),{onTabChange:function(t){var a="intention";switch(t){case 0:a="intention";break;case 1:a="entrust";break;case 2:a="housing";break;default:break}this.$router.replace({name:"agentList",query:{tab:a}})},customerList:function(){this.$router.push("/customerList")},callPhone:function(t){var a=this;console.log(t.phone,t.record_id),window.location.href="tel://"+t.phone,Object(p["i"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhone2:function(t){var a=this;console.log(t.phone,t.record_id),window.location.href="tel://"+t.phone,Object(p["v"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneTow:function(t){window.location.href="tel://"+t,this.getData()},gotohouse:function(t){this.$router.push("/customerList/".concat(t))},gotoWorkshop:function(t){console.log(t),this.$router.push("/workshop/details/".concat(t))},getData:function(){var t=this;Object(p["s"])().then((function(a){t.data=a})),Object(p["a"])().then((function(a){t.Houselist=a})),Object(p["f"])().then((function(a){t.Customers=a}))},hideYY:function(){this.dialogTableVisible=!1},close:function(){this.dialogTableVisible=!1},share:function(){var t=this,a=(this.userInfo.id,this.$refs.posterHtml);a.offsetWidth,a.offsetHeight;v()(a,{async:!0,useCORS:!0,allowTaint:!0,dpi:326,scale:2,taintTest:!0}).then((function(a){var s=a.toDataURL("image/png").replace("image/png","image/octet-stream");t.posterImg=s,""!==t.posterImg&&(t.dialogTableVisible=!0)}))}})),Object(c["a"])(n,"computed",g({},Object(_["c"])(["userInfo"]),{tabName:function(){return this.$route.query.tab||"intention"}})),n),C=m,w=(s("a5dd"),s("e90a")),y=Object(w["a"])(C,i,o,!1,null,"1175939e",null);a["default"]=y.exports},"9a8c":function(t,a,s){},a5dd:function(t,a,s){"use strict";var e=s("9a8c"),n=s.n(e);n.a},d919:function(t,a,s){t.exports=s.p+"assets/img/no-content.c8c0b04c.png"}}]);
//# sourceMappingURL=chunk-9452c920.4.0.0.1587632128403.js.map