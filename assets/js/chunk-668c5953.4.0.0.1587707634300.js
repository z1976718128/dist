(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-668c5953"],{"1a3e":function(t,a,n){},"86a5":function(t,a,n){"use strict";n.r(a);var c,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"客户列表","left-arrow":""},on:{"click-left":t.goBack}}),n("van-tabs",{model:{value:t.activeTabIndex,callback:function(a){t.activeTabIndex=a},expression:"activeTabIndex"}},[n("van-tab",{attrs:{title:"意向客户("+t.list.length+")"}},t._l(t.list,(function(a,c){return n("van-row",{key:c,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("意向人："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("登记时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhoneMark(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1),n("van-tab",{attrs:{title:"访客("+t.VisitLog.length+")"}},t._l(t.VisitLog,(function(a,c){return n("van-row",{key:c,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("访客："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("访问时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhone(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1)],1)],1)},o=[],e=n("b081"),s=(n("e2b7"),n("e1d4")),l=(n("ef14"),n("6345")),r=(n("44cb"),n("cc14")),u=(n("90d2"),n("84df")),f=(n("cc57"),n("ecc9"),n("d1b4")),v=n("fa8b"),d={components:(c={},Object(e["a"])(c,f["a"].name,f["a"]),Object(e["a"])(c,u["a"].name,u["a"]),Object(e["a"])(c,r["a"].name,r["a"]),Object(e["a"])(c,l["a"].name,l["a"]),Object(e["a"])(c,s["a"].name,s["a"]),c),data:function(){return{activeTabIndex:0,list:[],VisitLog:[]}},created:function(){this.getData()},methods:{goBack:function(){this.$router.back()},callPhone:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(v["x"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneMark:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(v["v"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneTow:function(t){window.location.href="tel://"+t,this.getData()},getData:function(){var t=this,a=this.$route.params.id;Object(v["b"])({house_id:a}).then((function(a){console.log(a),t.list=a})),Object(v["c"])({house_id:a}).then((function(a){t.VisitLog=a}))}}},b=d,h=(n("a8c2"),n("e90a")),_=Object(h["a"])(b,i,o,!1,null,"5a47a4c1",null);a["default"]=_.exports},a8c2:function(t,a,n){"use strict";var c=n("1a3e"),i=n.n(c);i.a}}]);
//# sourceMappingURL=chunk-668c5953.4.0.0.1587707634300.js.map