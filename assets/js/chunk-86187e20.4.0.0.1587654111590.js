(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86187e20"],{4917:function(e,t,a){"use strict";var n=a("cb7c"),r=a("9def"),i=a("0390"),s=a("5f1b");a("214f")("match",1,(function(e,t,a,c){return[function(a){var n=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=c(a,e,this);if(t.done)return t.value;var o=n(e),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var d,p=[],v=0;while(null!==(d=s(o,u))){var _=String(d[0]);p[v]=_,""===_&&(o.lastIndex=i(u,r(o.lastIndex),l)),v++}return 0===v?null:p}]}))},af19:function(e,t,a){},d451:function(e,t,a){"use strict";a.r(t);var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buy"},[a("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分充值","left-arrow":""},on:{"click-left":e.goBack}}),a("div",{staticClass:"buy_cent"},[a("p",{staticClass:"buy_title"},[e._v("订单信息")]),a("div",{staticClass:"buy_info"},[1==e.id?a("p",[a("span",[e._v("商品名称：")]),a("span",[e._v("开通VIP")])]):a("p",[a("span",[e._v("商品名称：")]),a("span",[e._v("积分充值")])]),a("p",[a("span",[e._v("订单编号：")]),a("span",[e._v(e._s(e.order_sn))])]),e._m(0),a("p",[a("span",[e._v("支付金额：")]),a("span",[e._v("￥"+e._s(e.price))])])])]),a("div",{staticClass:"payment"},[a("p",{staticClass:"buy_title"},[e._v("支付方式")]),a("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:e.apy}},[e._v("微信支付")])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("span",[e._v("商家名称：")]),a("span",[e._v("天集社")])])}],s=(a("a481"),a("4917"),a("bd86")),c=(a("9eda"),a("565f")),o=(a("c625"),a("b650")),u=(a("2a53"),a("34e9")),l=(a("3ec1"),a("7744")),d=(a("4bc8"),a("d1e1")),p=(a("47d1"),a("9ffb")),v=(a("7f7f"),a("da02"),a("6b41")),_=(a("18a0"),a("fa8b")),f=(a("a417"),{components:(n={},Object(s["a"])(n,v["a"].name,v["a"]),Object(s["a"])(n,p["a"].name,p["a"]),Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,o["a"].name,o["a"]),Object(s["a"])(n,c["a"].name,c["a"]),n),data:function(){return{value:"1600",order_sn:null,id:null,price:null,type:null}},created:function(){this.id=this.$route.query.odId,this.type=this.$route.query.type,this.price=this.$route.query.price,this.order_sn=this.$route.query.order_sn},methods:{goBack:function(){this.$router.back()},apy:function(){var e=this,t=navigator.userAgent.toLowerCase();"micromessenger"==t.match(/MicroMessenger/i)&&/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)?Object(_["k"])({order_sn:this.order_sn,id:this.id,type:this.type}).then((function(t){var a=JSON.parse(t.order_str),n=e;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg?(n.$dialog.alert({title:"温馨提示",message:"支付成功"}),n.$router.replace("/integral/index")):("get_brand_wcpay_request:cancel"==e.err_msg||n.$dialog.alert({title:"温馨提示",message:"支付失败"}),n.$router.replace("/integral/recharge"))}))})):this.$dialog.alert({title:"温馨提示",message:"请用手机进入平台支付"})}}}),g=f,b=(a("f659"),a("2877")),h=Object(b["a"])(g,r,i,!1,null,"cc9cddcc",null);t["default"]=h.exports},f659:function(e,t,a){"use strict";var n=a("af19"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-86187e20.4.0.0.1587654111590.js.map