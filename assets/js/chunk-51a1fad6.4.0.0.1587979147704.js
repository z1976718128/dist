(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51a1fad6"],{"05fd":function(t,s,e){"use strict";e.r(s);var a,i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"details"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"yy",on:{click:t.hideYY}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.dialogTableVisible,expression:"dialogTableVisible"}],staticClass:"jt",staticStyle:{top:"38%"}},[a("img",{staticClass:"share_imgs",attrs:{src:t.posterImg,alt:"",crossOrigin:"anonymous"}}),t._m(0),a("div",{staticClass:"close",on:{click:t.close}},[a("img",{attrs:{src:e("220d"),alt:""}})])]),a("div",{ref:"posterHtml",staticClass:"HB_CLASS"},[a("div",{staticClass:"poster_head"},[a("img",{attrs:{src:t.userInfo.head_img,alt:""}}),a("div",{staticClass:"HB_IFON"},[a("h4",[t._v(t._s(t.userInfo.name))]),a("p",[t._v("给你分享一个好房源")])])]),a("div",{staticClass:"demand-content brt",staticStyle:{padding:"8px 15px",height:"auto"}},[a("p",{staticClass:"tjs_fx",staticStyle:{"text-align":"left"}},[t._v(t._s(t.details.title))]),a("div",{staticClass:"share_ewm",staticStyle:{"text-align":"center"}},[t.shaerImgs?a("img",{attrs:{width:"100%",height:"160",src:t.shaerImgs,alt:""}}):a("img",{attrs:{width:"100%",height:"160",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})]),a("div",{staticClass:"details_mj"},[a("div",[a("p",[t._v("总面积")]),a("p",[t._v(t._s(t.details.rental_area))]),a("p",[t._v("平方米")])]),a("div",{staticClass:"s"}),a("div",[a("p",[t._v("租金")]),a("p",[t._v(t._s(t.details.rent))]),a("p",[t._v("元 / 平方米")])]),a("div",{staticClass:"s"}),a("div",[a("p",[t._v("区域")]),a("p",[t._v(t._s(t.details.area))])])])]),a("div",{staticClass:"lianx"},[a("div",{staticClass:"share_ewm"},[a("img",{attrs:{src:t.share_ewm,alt:""}})]),t._m(1),t._m(2)])]),a("van-nav-bar",{attrs:{fixed:"",border:"",title:"找厂房","left-arrow":""},on:{"click-left":t.goBack}}),a("div",{staticClass:"details_box"},[a("div",{staticClass:"details_head"},[a("van-swipe",{attrs:{autoplay:3e3,loop:""}},t._l(t.details.images,(function(s,e){return a("van-swipe-item",{key:e,on:{click:function(s){return t.showImg(e)}}},[a("van-image",{attrs:{width:"100%",height:"173",src:s,fit:"cover"},scopedSlots:t._u([{key:"error",fn:function(){return[a("img",{attrs:{width:"100%",height:"173",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})]},proxy:!0},{key:"loading",fn:function(){return[a("img",{attrs:{width:"100%",height:"173",src:"http://demo.oramage.com/demo/tianji-vue-v3/img/loding2.jpg",alt:""}})]},proxy:!0}],null,!0)})],1)})),1),a("p",{staticClass:"details_title "},[t._v(t._s(t.details.title))]),a("div",{staticClass:"details_mj"},[a("div",[a("p",[t._v("总面积")]),a("p",[t._v(t._s(t.details.rental_area))]),a("p",[t._v("平方米")])]),a("div",{staticClass:"s"}),a("div",[a("p",[t._v("租金")]),a("p",[t._v(t._s(t.details.rent))]),a("p",[t._v("元 / 平方米")])]),a("div",{staticClass:"s"}),a("div",[a("p",[t._v("区域")]),a("p",[t._v(t._s(t.details.area))])])])],1)]),a("div",{staticClass:"details_info"},[a("div",{staticClass:"details_info_title"},[t._v("基本信息")]),a("div",{staticClass:"details_info_box"},[a("div",{staticStyle:{width:"50%"}},[a("p",[a("span",[t._v("房源类型："),a("b",[t._v(t._s(t.details.structure))])])]),a("p",[a("span",[t._v("食堂："),a("b",[t._v(t._s(t.details.canteen))])])]),a("p",[a("span",[t._v("配套宿舍："),a("b",[t._v(t._s(t.details.dorm))])])]),a("p",[a("span",[t._v("配电量："),a("b",[t._v(t._s(t.details.power))])])]),a("p",[a("span",[t._v("适用行业："),a("b",[t._v(t._s(t.details.industry))])])])]),a("div",{staticClass:"details_info_box_last"},[a("p",[a("span",[t._v("园区面积："),a("b",[t._v(t._s(t.details.park_area))])])]),a("p",[a("span",[t._v("所在楼层："),a("b",[t._v(t._s(t.details.floor))])])]),a("p",[a("span",[t._v("电梯："),a("b",[t._v(t._s(t.details.elevator))])])]),a("p",[a("span",[t._v("起租期："),a("b",[t._v(t._s(t.details.start_date))])])]),a("p",[a("span",[t._v("可否分租："),a("b",[t._v(t._s(t.details.sublease>0?"可分租":"不可分租"))])])])])])]),a("div",{staticClass:"details_info pdr"},[a("div",{staticClass:"details_info_title"},[t._v("空间概况")]),a("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.details.info)}})]),a("div",{staticClass:"details_footer"},[a("div",{on:{click:t.share}},[a("i",{staticClass:"iconfont iconfenxiang"}),t._v("分享赚佣金")]),a("van-button",{attrs:{round:"",type:"info"},on:{click:t.goHome}},[t._v("更多房源")]),a("van-button",{attrs:{type:"danger"},on:{click:t.clickWorkshop}},[t._v("联系房源")])],1),a("van-overlay",{attrs:{show:t.show},on:{click:function(s){t.show=!1}}},[a("div",{staticClass:"tc",on:{click:function(t){t.stopPropagation()}}},[a("p",[a("i",{staticClass:"iconfont iconguanbi",on:{click:function(s){t.show=!1}}})]),a("p",[t._v("稍后将有房源工作人员与您联系, 请保持手机畅通")]),a("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:function(s){t.show=!1}}},[t._v("确定")]),a("p",{staticClass:"share_p",on:{click:t.share}},[t._v("分享赚佣金")])],1)])],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"HB_TS"},[t._v("\n\t\t\t长按上方图片发送给好友"),e("br"),t._v("成功邀请好友注册还有奖励哦！\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hb_text"},[t._v("长按识别二维码"),e("br"),t._v("马上查看")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"share_logo"},[a("img",{attrs:{src:e("d4c5"),alt:""}})])}],o=(e("5ab2"),e("6d57"),e("e10e"),e("313d"),e("9d4a")),c=(e("f548"),e("ac9f")),l=(e("3ed2"),e("644f")),r=(e("895c"),e("a66e")),d=(e("97fc"),e("b2e5")),v=(e("2d83"),e("bcfd")),_=(e("05f6"),e("b610"),e("9586")),u=(e("9d47"),e("bb63")),h=(e("7ea6"),e("45ba")),p=(e("9cf9"),e("fad3")),m=(e("b587"),e("e513")),f=(e("bc44"),e("6628")),b=(e("cc57"),e("be9b"),e("db43")),g=e("8876"),w=e("fa8b"),j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[t._v("11111")])])},O=[],C={data:function(){return{isShow:!0}},methods:{hide:function(){this.isShow=!1},show:function(){this.isShow=!0}}},y=C,k=e("623f"),x=Object(k["a"])(y,j,O,!1,null,null,null),S=x.exports,T=e("e81a"),I=e.n(T),$=e("30eb"),P=e("db49");function E(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function H(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?E(Object(e),!0).forEach((function(s){Object(c["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var V={components:(a={},Object(c["a"])(a,b["a"].name,b["a"]),Object(c["a"])(a,f["a"].name,f["a"]),Object(c["a"])(a,m["a"].name,m["a"]),Object(c["a"])(a,p["a"].name,p["a"]),Object(c["a"])(a,h["a"].name,h["a"]),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,_["a"].name,_["a"]),Object(c["a"])(a,v["a"].name,v["a"]),Object(c["a"])(a,d["a"].name,d["a"]),Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,"buttons",S),a),data:function(){return{show:!1,details:[],house_id:null,dialogTableVisible:!1,posterImg:"",share_ewm:"",shaerImgs:null}},created:function(){var t=this,s=this.$route.params.id;this.house_id=s,Object(w["u"])({house_id:s}).then((function(s){t.details=s,t.shaerImgs=s.images[0];var e="".concat(t.details.title,"。点击查看房源详情"),a=P["b"]+"?#/workshop/details/"+t.details.house_id;setTimeout((function(){Object($["b"])({title:"天集社",desc:e,link:a})}),1e3)})),Object(w["x"])({house_id:s}).then((function(s){console.log(s.url),t.share_ewm=s.url}))},methods:{goBack:function(){this.$router.back()},clickWorkshop:function(){var t=this;2==this.userInfo.status?(this.show=!0,Object(w["t"])({house_id:this.house_id}).then((function(t){console.log(t)}))):this.$dialog.alert({title:"温馨提示",message:"请先注册",confirmButtonText:"确认"}).then((function(s){t.$router.push("/my-card")}))},hideYY:function(){this.dialogTableVisible=!1},close:function(){this.dialogTableVisible=!1},share:function(){var t=this;if(2==this.userInfo.status){this.show=!1,window.pageYOffset=0,document.documentElement.scrollTop=0,document.body.scrollTop=0;var s=this.$refs.posterHtml;I()(s,{async:!0,useCORS:!0,allowTaint:!0,dpi:326,scale:2,taintTest:!0}).then((function(s){var e=s.toDataURL("image/png").replace("image/png","image/octet-stream");t.posterImg=e,""!==t.posterImg&&(t.dialogTableVisible=!0)}))}else this.$dialog.alert({title:"温馨提示",message:"请先注册",confirmButtonText:"确认"}).then((function(s){t.$router.push("/my-card")}))},showImg:function(t){Object(o["a"])({images:this.details.images,startPosition:t,lazyLoad:!0,onClose:function(){console.log("close image preview")}})},goHome:function(){this.$router.push("/workshop/index")}},computed:H({},Object(g["c"])(["userInfo"]))},B=V,D=(e("815e"),Object(k["a"])(B,i,n,!1,null,"27e01874",null));s["default"]=D.exports},5261:function(t,s,e){},"815e":function(t,s,e){"use strict";var a=e("5261"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-51a1fad6.4.0.0.1587979147704.js.map