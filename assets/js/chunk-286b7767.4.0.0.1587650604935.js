(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-286b7767"],{"11b7":function(t,a,n){},"837a":function(t,a,n){"use strict";var i=n("11b7"),o=n.n(i);o.a},"86a5":function(t,a,n){"use strict";n.r(a);var i,o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"客户列表","left-arrow":""},on:{"click-left":t.goBack}}),n("van-tabs",{model:{value:t.activeTabIndex,callback:function(a){t.activeTabIndex=a},expression:"activeTabIndex"}},[n("van-tab",{attrs:{title:"意向客户("+t.list.length+")"}},t._l(t.list,(function(a,i){return n("van-row",{key:i,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("意向人："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("登记时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhoneMark(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1),n("van-tab",{attrs:{title:"访客("+t.VisitLog.length+")"}},t._l(t.VisitLog,(function(a,i){return n("van-row",{key:i,staticClass:"box",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{staticClass:"tab_content",attrs:{span:"22"}},[n("div",{staticClass:"tab_info"},[n("p",[n("i",{staticClass:"iconfont iconyixiangren"}),t._v("访客："+t._s(a.username)+"（邀请人："+t._s(a.inviter)+"）")]),n("p",[n("i",{staticClass:"iconfont iconcontact"}),t._v("联系电话："+t._s(a.phone))]),n("p",[n("i",{staticClass:"iconfont iconshijian"}),t._v("访问时间："+t._s(a.datetime))])]),n("van-row",{staticClass:"info_btn",attrs:{type:"flex"}},[0==a.is_contract?n("van-col",{staticClass:"lx",attrs:{span:"10"},on:{click:function(n){return t.callPhone(a)}}},[t._v("马上联系")]):n("van-col",{staticClass:"lx",staticStyle:{"background-color":"#7F7F7F"},attrs:{span:"10"},on:{click:function(n){return t.callPhoneTow(a.phone)}}},[t._v("已联系")])],1)],1)],1)})),1)],1)],1)},c=[],e=n("bd86"),s=(n("4bc8"),n("d1e1")),l=(n("47d1"),n("9ffb")),r=(n("558f"),n("0b33")),f=(n("8990"),n("5e46")),u=(n("7f7f"),n("da02"),n("6b41")),b=n("fa8b"),v={components:(i={},Object(e["a"])(i,u["a"].name,u["a"]),Object(e["a"])(i,f["a"].name,f["a"]),Object(e["a"])(i,r["a"].name,r["a"]),Object(e["a"])(i,l["a"].name,l["a"]),Object(e["a"])(i,s["a"].name,s["a"]),i),data:function(){return{activeTabIndex:0,list:[],VisitLog:[]}},created:function(){this.getData()},methods:{goBack:function(){this.$router.back()},callPhone:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(b["E"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneMark:function(t){var a=this;console.log(t),window.location.href="tel://"+t.phone,Object(b["A"])({record_id:t.record_id}).then((function(t){a.getData()}))},callPhoneTow:function(t){window.location.href="tel://"+t,this.getData()},getData:function(){var t=this,a=this.$route.params.id;Object(b["b"])({house_id:a}).then((function(a){console.log(a),t.list=a})),Object(b["c"])({house_id:a}).then((function(a){t.VisitLog=a}))}}},d=v,h=(n("837a"),n("2877")),_=Object(h["a"])(d,o,c,!1,null,"a278ab1e",null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-286b7767.4.0.0.1587650604935.js.map