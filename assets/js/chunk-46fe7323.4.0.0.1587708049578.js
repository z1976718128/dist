(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46fe7323"],{"113e":function(e,t,a){},"9e76":function(e,t,a){"use strict";var n=a("69b3"),r=a("eafa"),i=a("e754"),s=a("7108");a("0aed")("match",1,(function(e,t,a,c){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=c(a,e,this);if(t.done)return t.value;var o=n(e),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var d,p=[],v=0;while(null!==(d=s(o,u))){var _=String(d[0]);p[v]=_,""===_&&(o.lastIndex=i(u,r(o.lastIndex),l)),v++}return 0===v?null:p}]}))},bfac:function(e,t,a){"use strict";var n=a("113e"),r=a.n(n);r.a},d451:function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buy"},[a("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分充值","left-arrow":""},on:{"click-left":e.goBack}}),a("div",{staticClass:"buy_cent"},[a("p",{staticClass:"buy_title"},[e._v("订单信息")]),a("div",{staticClass:"buy_info"},[1==e.id?a("p",[a("span",[e._v("商品名称：")]),a("span",[e._v("开通VIP")])]):a("p",[a("span",[e._v("商品名称：")]),a("span",[e._v("积分充值")])]),a("p",[a("span",[e._v("订单编号：")]),a("span",[e._v(e._s(e.order_sn))])]),e._m(0),a("p",[a("span",[e._v("支付金额：")]),a("span",[e._v("￥"+e._s(e.price))])])])]),a("div",{staticClass:"payment"},[a("p",{staticClass:"buy_title"},[e._v("支付方式")]),a("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:e.apy}},[e._v("微信支付")])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("商家名称：")]),a("span",[e._v("天集社")])])}],s=(a("f548"),a("9e76"),a("b081")),c=(a("7bd2"),a("1f1c")),o=(a("3b67"),a("b7d9")),u=(a("d044"),a("d046")),l=(a("eef9"),a("25c8")),d=(a("e2b7"),a("e1d4")),p=(a("ef14"),a("6345")),v=(a("cc57"),a("ecc9"),a("d1b4")),_=(a("00ca"),a("fa8b")),g=(a("a417"),{components:(n={},Object(s["a"])(n,v["a"].name,v["a"]),Object(s["a"])(n,p["a"].name,p["a"]),Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,o["a"].name,o["a"]),Object(s["a"])(n,c["a"].name,c["a"]),n),data:function(){return{value:"1600",order_sn:null,id:null,price:null,type:null}},created:function(){this.id=this.$route.query.odId,this.type=this.$route.query.type,this.price=this.$route.query.price,this.order_sn=this.$route.query.order_sn},methods:{goBack:function(){this.$router.back()},apy:function(){var e=this,t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)&&/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)?Object(_["g"])({order_sn:this.order_sn,id:this.id,type:this.type}).then((function(t){var a=JSON.parse(t.order_str),n=e;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg?(n.$dialog.alert({title:"温馨提示",message:"支付成功"}),n.$router.replace("/integral/index")):("get_brand_wcpay_request:cancel"==e.err_msg||n.$dialog.alert({title:"温馨提示",message:"支付失败"}),n.$router.replace("/integral/recharge"))}))})):this.$dialog.alert({title:"温馨提示",message:"请用手机进入平台支付"})}}}),b=g,f=(a("bfac"),a("e90a")),h=Object(f["a"])(b,r,i,!1,null,"26c51b66",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-46fe7323.4.0.0.1587708049578.js.map