(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9387658e"],{"86a5":function(t,a,n){"use strict";n.r(a);var c,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"客户列表","left-arrow":""},on:{"click-left":t.goBack}}),n("van-tabs",{model:{value:t.activeTabIndex,callback:function(a){t.activeTabIndex=a},expression:"activeTabIndex"}},[n("van-tab",{attrs:{title:"意向客户("+t.list.length+")"}},t._l(t.list,(function(a,c){return n("van-row",{key:c,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("意向人："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("登记时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhoneMark(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1),n("van-tab",{attrs:{title:"访客("+t.VisitLog.length+")"}},t._l(t.VisitLog,(function(a,c){return n("van-row",{key:c,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("访客："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("访问时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhone(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1)],1)],1)},o=[],e=n("ac9f"),s=(n("b587"),n("e513")),l=(n("bc44"),n("6628")),r=(n("a1a0"),n("0cb8")),f=(n("f408"),n("b4bb")),u=(n("cc57"),n("be9b"),n("db43")),b=n("fa8b"),v={components:(c={},Object(e["a"])(c,u["a"].name,u["a"]),Object(e["a"])(c,f["a"].name,f["a"]),Object(e["a"])(c,r["a"].name,r["a"]),Object(e["a"])(c,l["a"].name,l["a"]),Object(e["a"])(c,s["a"].name,s["a"]),c),data:function(){return{activeTabIndex:0,list:[],VisitLog:[]}},created:function(){this.getData()},methods:{goBack:function(){this.$router.back()},callPhone:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(b["D"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneMark:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(b["A"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneTow:function(t){window.location.href="tel://"+t,this.getData()},getData:function(){var t=this,a=this.$route.params.id;Object(b["b"])({house_id:a}).then((function(a){console.log(a),t.list=a})),Object(b["c"])({house_id:a}).then((function(a){t.VisitLog=a}))}}},d=v,h=(n("a8c2"),n("623f")),_=Object(h["a"])(d,i,o,!1,null,"5a47a4c1",null);a["default"]=_.exports},a8c2:function(t,a,n){"use strict";var c=n("bf04"),i=n.n(c);i.a},bf04:function(t,a,n){}}]);
//# sourceMappingURL=chunk-9387658e.4.0.0.1587550259503.js.map