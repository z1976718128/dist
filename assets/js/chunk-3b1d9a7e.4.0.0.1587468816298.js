(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1d9a7e"],{"1ad2":function(e,t,n){"use strict";n.r(t);var i,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"incharge-page"},[i("van-nav-bar",{attrs:{fixed:"",border:"",title:"需求记录","left-arrow":""},on:{"click-left":e.goBack}}),i("van-pull-refresh",{on:{refresh:e.onPublishedRefresh},model:{value:e.published.refreshing,callback:function(t){e.$set(e.published,"refreshing",t)},expression:"published.refreshing"}},[i("van-list",{directives:[{name:"show",rawName:"v-show",value:e.published.list.length>0,expression:"published.list.length > 0"}],staticClass:"cell-group",attrs:{finished:e.published.finished,"finished-text":"没有更多了"},on:{load:e.loadMorePublished},model:{value:e.published.loading,callback:function(t){e.$set(e.published,"loading",t)},expression:"published.loading"}},e._l(e.published.list,(function(t){return i("demand-item",{key:t.id,attrs:{demand:t},on:{click:function(n){return e.handleDemandClick(t.id)}}})})),1),0===e.published.list.length?i("div",{staticClass:"no-content"},[i("img",{attrs:{src:n("d919"),alt:""}}),i("p",[i("strong",[e._v("暂无需求")])]),i("p",[e._v("你还没发布过需求，快来发布吧~")])]):e._e()],1)],1)},r=[],a=(n("5ab2"),n("6d57"),n("e10e"),n("54d0")),c=(n("419a"),n("e980")),o=(n("f548"),n("ac9f")),u=(n("9d47"),n("bb63")),l=(n("be9b"),n("db43")),h=(n("d807"),n("0fee")),d=(n("9cf9"),n("fad3")),b=(n("c4a4"),n("f734")),p=(n("bc44"),n("6628")),f=(n("b587"),n("e513")),m=(n("a1a0"),n("0cb8")),g=(n("cc57"),n("f408"),n("b4bb")),v=n("8876"),O=n("2b26"),j=n("ea26");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"about",components:(i={},Object(o["a"])(i,g["a"].name,g["a"]),Object(o["a"])(i,m["a"].name,m["a"]),Object(o["a"])(i,f["a"].name,f["a"]),Object(o["a"])(i,p["a"].name,p["a"]),Object(o["a"])(i,b["a"].name,b["a"]),Object(o["a"])(i,d["a"].name,d["a"]),Object(o["a"])(i,h["a"].name,h["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,"DemandItem",j["a"]),i),data:function(){return{active:0,published:{list:[],page:1,limit:20,loading:!1,finished:!1,refreshing:!1},solved:{list:[],page:1,limit:20,loading:!1,finished:!1,refreshing:!1}}},computed:k({},Object(v["d"])(["from"]),{},Object(v["c"])(["userInfo"]),{tabName:function(){return this.$route.query.tab}}),mounted:function(){"publish"===this.tabName?this.active=0:"solve"===this.tabName&&(this.active=1),this.onPublishedRefresh(),this.onSolvedRefresh()},methods:{goBack:function(){this.from?this.$router.back():this.$router.replace("/demands")},onPublishedRefresh:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.published.page=1,e.next=3,this.fetchPublishedList();case 3:t=e.sent,this.published.list=t,this.published.refreshing=!1,console.log(this.published.list.length);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadMorePublished:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.published.page=this.published.page+1,e.next=3,this.fetchPublishedList();case 3:t=e.sent,this.published.list=[].concat(Object(a["a"])(this.published.list),Object(a["a"])(t)),this.published.loading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchPublishedList:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["k"])({page:this.published.page,limit:this.published.limit,user_id:this.userInfo.id});case 2:return t=e.sent,this.published.finished=t.length<this.published.limit,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onSolvedRefresh:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.solved.page=1,e.next=3,this.fetchSolvedList();case 3:t=e.sent,this.solved.list=t,this.solved.refreshing=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadMoreSolved:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.solved.page=this.solved.page+1,e.next=3,this.fetchSolvedList();case 3:t=e.sent,this.solved.list=[].concat(Object(a["a"])(this.solved.list),Object(a["a"])(t)),this.solved.loading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchSolvedList:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["j"])({page:this.solved.page,limit:this.solved.limit,solve_user_id:this.userInfo.id});case 2:return t=e.sent,this.solved.finished=t.length<this.solved.limit,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDemandClick:function(e){var t=this;"2"!==this.userInfo.status?this.$dialog.confirm({title:"温馨提示",message:"您需要注册后才能进行该操作哦",confirmButtonText:"马上注册",cancelButtonText:"稍后再说"}).then((function(){"1"===t.userInfo.is_subscribe?t.$router.push("/my-card"):console.log("未注册用户")})).catch((function(){console.log("cancel dialog")})):"1"===this.userInfo.is_subscribe?this.$router.push("/demands/".concat(e)):console.log("未注册用户")}}},y=x,R=(n("bc30"),n("623f")),P=Object(R["a"])(y,s,r,!1,null,"f6b71016",null);t["default"]=P.exports},"2c89":function(e,t,n){},bc30:function(e,t,n){"use strict";var i=n("2c89"),s=n.n(i);s.a},d919:function(e,t,n){e.exports=n.p+"assets/img/no-content.c8c0b04c.png"}}]);
//# sourceMappingURL=chunk-3b1d9a7e.4.0.0.1587468816298.js.map