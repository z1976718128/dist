(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-094b7560"],{"05fd":function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"yy",on:{click:t.hideYY}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"jt",staticStyle:{top:"35%"}},[a("img",{staticClass:"share_imgs",attrs:{src:t.posterImg,alt:"",crossOrigin:"anonymous"}}),t._m(0),a("div",{staticClass:"close",on:{click:t.close}},[a("img",{attrs:{src:s("220d"),alt:""}})])]),a("div",{ref:"posterHtml",staticClass:"HB_CLASS"},[a("div",{staticClass:"poster_head"},[a("img",{attrs:{src:t.userInfo.head_img,alt:""}}),a("div",{staticClass:"HB_IFON"},[a("h4",[t._v(t._s(t.userInfo.name))]),a("p",[t._v("给你分享一个好房源")])])]),a("div",{staticClass:"demand-content brt",staticStyle:{padding:"8px 15px",height:"auto"}},[a("p",{staticClass:"tjs_fx",staticStyle:{"text-align":"left"}},[t._v(t._s(t.details.title))]),a("div",{staticClass:"share_ewm",staticStyle:{"text-align":"center"}},[t.shaerImgs?a("img",{attrs:{width:"100%",height:"180",src:t.shaerImgs,alt:""}}):a("img",{attrs:{width:"100%",height:"180",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})])]),a("div",{staticClass:"lianx"},[a("div",{staticClass:"share_ewm"},[a("img",{attrs:{src:t.share_ewm,alt:""}})]),t._m(1),t._m(2)])]),a("van-nav-bar",{attrs:{fixed:"",border:"",title:"空间严选","left-arrow":""},on:{"click-left":t.goBack}}),a("div",{staticClass:"details_box"},[a("div",{staticClass:"details_head"},[a("van-swipe",{attrs:{autoplay:3e3,loop:""}},t._l(t.details.images,(function(e,s){return a("van-swipe-item",{key:s,on:{click:function(e){return t.showImg(s)}}},[a("van-image",{attrs:{width:"344",height:"173",src:e,fit:"cover"},scopedSlots:t._u([{key:"error",fn:function(){return[a("img",{attrs:{width:"344",height:"173",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})]},proxy:!0},{key:"loading",fn:function(){return[a("img",{attrs:{width:"344",height:"173",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})]},proxy:!0}],null,!0)})],1)})),1),a("p",{staticClass:"details_title "},[t._v(t._s(t.details.title))]),a("div",{staticClass:"details_mj"},[a("div",[a("p",[t._v("总面积")]),a("p",[t._v(t._s(t.details.rental_area))]),a("p",[t._v("平方米")])]),a("div",{staticClass:"nth"},[a("p",[t._v("租金")]),a("p",[t._v(t._s(t.details.rent))]),a("p",[t._v("元 / 平方米")])]),a("div",{staticClass:"nth"},[a("p",[t._v("区域")]),a("p",[t._v(t._s(t.details.area))])])])],1)]),a("div",{staticClass:"details_info"},[a("div",{staticClass:"details_info_title"},[t._v("基本信息")]),a("div",{staticClass:"details_info_box"},[a("div",[a("p",[a("span",[t._v("房源类型："),a("b",[t._v(t._s(t.details.structure))])])]),a("p",[a("span",[t._v("食堂："),a("b",[t._v(t._s(t.details.canteen))])])]),a("p",[a("span",[t._v("配套宿舍："),a("b",[t._v(t._s(t.details.dorm))])])]),a("p",[a("span",[t._v("配电量："),a("b",[t._v(t._s(t.details.power))])])]),a("p",[a("span",[t._v("适用行业："),a("b",[t._v(t._s(t.details.industry))])])])]),a("div",{staticClass:"details_info_box_last"},[a("p",[a("span",[t._v("所在楼层："),a("b",[t._v(t._s(t.details.floor))])])]),a("p",[a("span",[t._v("电梯："),a("b",[t._v(t._s(t.details.elevator))])])]),a("p",[a("span",[t._v("起租期："),a("b",[t._v(t._s(t.details.start_date))])])]),a("p",[a("span",[t._v("可否分租："),a("b",[t._v(t._s(t.details.sublease>0?"可分租":"不可分租"))])])])])])]),a("div",{staticClass:"details_info pdr"},[a("div",{staticClass:"details_info_title"},[t._v("空间概况")]),a("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.details.info)}})]),a("div",{staticClass:"details_footer"},[a("div",{on:{click:t.share}},[a("i",{staticClass:"iconfont iconfenxiang"}),t._v("分享赚佣金")]),a("van-button",{attrs:{round:"",type:"info"},on:{click:t.goHome}},[t._v("更多房源")]),a("van-button",{attrs:{type:"danger"},on:{click:t.clickWorkshop}},[t._v("联系房源")])],1),a("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[a("div",{staticClass:"tc",on:{click:function(t){t.stopPropagation()}}},[a("p",[a("i",{staticClass:"iconfont iconguanbi",on:{click:function(e){t.show=!1}}})]),a("p",[t._v("稍后将有房源工作人员与您联系, 请保持手机畅通")]),a("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:function(e){t.show=!1}}},[t._v("确定")]),a("p",{staticClass:"share_p",on:{click:t.share}},[t._v("分享赚佣金")])],1)])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"HB_TS"},[t._v("\r\t\t    长按上方图片发送给好友"),s("br"),t._v("成功邀请好友注册还有奖励哦！\r\t\t  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hb_text"},[t._v("长按识别二维码"),s("br"),t._v("马上查看")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share_logo"},[a("img",{attrs:{src:s("d4c5"),alt:""}})])}],o=(s("5ab2"),s("6d57"),s("e10e"),s("9634"),s("a8d3")),c=(s("f548"),s("b081")),r=(s("fb7e"),s("f470")),l=(s("59a6"),s("31eb")),d=(s("d8e3"),s("1285")),u=(s("196b"),s("6627")),v=(s("63a4"),s("d388"),s("4042")),h=(s("3b67"),s("b7d9")),_=(s("d044"),s("d046")),p=(s("eef9"),s("25c8")),m=(s("e2b7"),s("e1d4")),f=(s("ef14"),s("6345")),b=(s("cc57"),s("ecc9"),s("d1b4")),g=s("8876"),w=s("fa8b"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[t._v("11111")])])},j=[],C={data:function(){return{isShow:!0}},methods:{hide:function(){this.isShow=!1},show:function(){this.isShow=!0}}},y=C,k=s("e90a"),x=Object(k["a"])(y,O,j,!1,null,null,null),T=x.exports,I=s("e81a"),S=s.n(I),$=s("30eb"),P=s("db49");function E(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function H(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?E(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var V={components:(a={},Object(c["a"])(a,b["a"].name,b["a"]),Object(c["a"])(a,f["a"].name,f["a"]),Object(c["a"])(a,m["a"].name,m["a"]),Object(c["a"])(a,p["a"].name,p["a"]),Object(c["a"])(a,_["a"].name,_["a"]),Object(c["a"])(a,h["a"].name,h["a"]),Object(c["a"])(a,v["a"].name,v["a"]),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,d["a"].name,d["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,"buttons",T),a),data:function(){return{show:!1,details:[],house_id:null,dialogTableVisible:!1,posterImg:"",share_ewm:"",shaerImgs:null}},created:function(){var t=this,e=this.$route.params.id;this.house_id=e,Object(w["q"])({house_id:e}).then((function(e){t.details=e,t.shaerImgs=e.images[0];var s="".concat(t.details.title,"。点击查看房源详情"),a=P["b"]+"#/workshop/details/"+t.details.house_id;setTimeout((function(){Object($["b"])({title:"天集社",desc:s,link:a})}),1e3)})),Object(w["t"])({house_id:e}).then((function(e){t.share_ewm=e.url}))},methods:{goBack:function(){this.$router.back()},clickWorkshop:function(){var t=this;2==this.userInfo.status?(this.show=!0,Object(w["p"])({house_id:this.house_id}).then((function(t){console.log(t)}))):this.$dialog.alert({title:"温馨提示",message:"请先注册",confirmButtonText:"确认"}).then((function(e){t.$router.push("/my-card")}))},hideYY:function(){this.dialogTableVisible=!1},close:function(){this.dialogTableVisible=!1},share:function(){var t=this;if(2==this.userInfo.status){this.show=!1,window.pageYOffset=0,document.documentElement.scrollTop=0,document.body.scrollTop=0;var e=this.$refs.posterHtml;S()(e,{async:!0,useCORS:!0,allowTaint:!0,dpi:326,scale:2,taintTest:!0}).then((function(e){var s=e.toDataURL("image/png").replace("image/png","image/octet-stream");t.posterImg=s,""!==t.posterImg&&(t.dialogTableVisible=!0)}))}else this.$dialog.alert({title:"温馨提示",message:"请先注册",confirmButtonText:"确认"}).then((function(e){t.$router.push("/my-card")}))},showImg:function(t){Object(o["a"])({images:this.details.images,startPosition:t,lazyLoad:!0,onClose:function(){console.log("close image preview")}})},goHome:function(){this.$router.push("/workshop/index")}},computed:H({},Object(g["c"])(["userInfo"]))},B=V,D=(s("5ef9"),Object(k["a"])(B,i,n,!1,null,"ea52c2e6",null));e["default"]=D.exports},"5ef9":function(t,e,s){"use strict";var a=s("8ad8"),i=s.n(a);i.a},"8ad8":function(t,e,s){}}]);
//# sourceMappingURL=chunk-094b7560.4.0.0.1587631828459.js.map