(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57429012"],{"5e3c":function(e,t,n){},"99a8":function(e,t,n){"use strict";var r=n("5e3c"),a=n.n(r);a.a},c14f:function(e,t,n){"use strict";n.r(t);var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"incharge-page"},[n("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分明细","left-arrow":""},on:{"click-left":e.goBack}}),n("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},[n("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.loadMore},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(t){return n("van-cell",{key:t.id},[n("div",{attrs:{slot:"title"},slot:"title"},[n("van-col",{attrs:{span:"12"}},[e._v(e._s(e.getTypeName(t.type,t)))]),n("van-col",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{span:"12"}},[e._v(e._s(t.n_integral))])],1),n("div",{attrs:{slot:"label"},slot:"label"},[n("van-col",{attrs:{span:"12"}},[e._v(e._s(e.moment.unix(t.add_time).format("YY-MM-DD HH-mm")))]),n("van-col",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{span:"12"}},[e._v("积分余额："+e._s(parseInt(t.p_integral)+parseInt(t.n_integral)))])],1)])})),1)],1)],1)},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("75fc")),c=(n("96cf"),n("3b8d")),o=(n("a481"),n("bd86")),u=(n("c625"),n("b650")),l=(n("da02"),n("6b41")),f=(n("4391"),n("58e6")),p=(n("3ec1"),n("7744")),d=(n("93b0"),n("2bdd")),h=(n("47d1"),n("9ffb")),b=(n("7f7f"),n("4bc8"),n("d1e1")),m=n("c1df"),g=n.n(m),v=n("2f62"),O=n("a417");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"scores",components:(r={},Object(o["a"])(r,b["a"].name,b["a"]),Object(o["a"])(r,h["a"].name,h["a"]),Object(o["a"])(r,d["a"].name,d["a"]),Object(o["a"])(r,p["a"].name,p["a"]),Object(o["a"])(r,f["a"].name,f["a"]),Object(o["a"])(r,l["a"].name,l["a"]),Object(o["a"])(r,u["a"].name,u["a"]),r),data:function(){return{moment:g.a,list:[],page:0,limit:20,loading:!1,finished:!1,refreshing:!1}},computed:y({},Object(v["d"])(["from"]),{},Object(v["c"])(["userInfo"])),methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},onRefresh:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page=1,e.next=3,this.onLoad();case 3:t=e.sent,this.list=t,this.refreshing=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadMore:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.page=this.page+1,e.next=3,this.onLoad();case 3:t=e.sent,this.list=[].concat(Object(s["a"])(this.list),Object(s["a"])(t)),this.loading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onLoad:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["k"])({user_id:this.userInfo.id,page:this.page,limit:this.limit});case 2:return t=e.sent,this.finished=t.length<this.limit,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTypeName:function(e,t){switch(e){case"0":return"积分申请";case"1":return"定向申请";case"2":return"需求申请";case"3":return"用户注册";case"4":return"交换名片";case"5":return"个人认证通过积分";case"7":return t.title;default:return"未知操作"}}}},x=w,_=(n("99a8"),n("2877")),k=Object(_["a"])(x,a,i,!1,null,"a9efacbe",null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-57429012.4.0.0.1587652231472.js.map