(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab8d1678"],{7689:function(e,t,r){"use strict";var n=r("e83a"),a=r.n(n);a.a},"81e2":function(e,t,r){"use strict";r.r(t);var n,a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"incharge-page"},[r("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分充值","left-arrow":""},on:{"click-left":e.goBack}}),r("div",{staticClass:"score-box"},[r("div",[e._v("当前可用积分")]),r("div",{staticClass:"score"},[e._v(e._s(e.userInfo.integral))])]),e._m(0),r("van-row",{staticClass:"bottom-bar cell-group"},[r("van-button",{attrs:{square:"",block:""},on:{click:e.goBack}},[e._v("取消")]),r("van-button",{attrs:{block:"",square:"",type:"danger"},on:{click:e.handleSubmit}},[e._v("申请")])],1)],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"intro cell-group"},[r("h2",[e._v("积分免费申请规则")]),r("p",[e._v("1、点击申请后等待后台审核,审核通过后可获得50积分;")]),r("p",[e._v("2、管理员将根据平台使用频率和需求发布、需求解决数量作为审核依据;")]),r("p",[e._v("3、如有疑问，可联系平台工作人员：范秘书，15602908103（微信同号）")]),r("p",[e._v("4、本规则最终解释权归平台所有。")])])}],o=(r("5ab2"),r("6d57"),r("e10e"),r("419a"),r("e980")),i=(r("f548"),r("ac9f")),s=(r("9d47"),r("bb63")),u=(r("be9b"),r("db43")),b=(r("bc44"),r("6628")),l=(r("cc57"),r("b587"),r("e513")),f=r("8876"),p=r("a417");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"about",components:(n={},Object(i["a"])(n,l["a"].name,l["a"]),Object(i["a"])(n,b["a"].name,b["a"]),Object(i["a"])(n,u["a"].name,u["a"]),Object(i["a"])(n,s["a"].name,s["a"]),n),data:function(){return{loading:!1}},computed:v({},Object(f["d"])(["from"]),{},Object(f["c"])(["userInfo"])),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},handleSubmit:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.prev=3,e.next=6,Object(p["o"])(this.userInfo.id);case 6:this.loading=!1,this.$dialog.alert({title:"温馨提示",message:"申请成功，我们将尽快审核",confirmButtonText:"确认"}).then((function(){t.goBack()})),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](3),this.loading=!1,console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(){return e.apply(this,arguments)}return t}()}},g=h,O=(r("7689"),r("623f")),m=Object(O["a"])(g,a,c,!1,null,"271c4e19",null);t["default"]=m.exports},e83a:function(e,t,r){}}]);
//# sourceMappingURL=chunk-ab8d1678.4.0.0.1587640598464.js.map