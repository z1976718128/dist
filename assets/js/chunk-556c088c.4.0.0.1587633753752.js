(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-556c088c"],{"16a7":function(e,a,t){},"9e76":function(e,a,t){"use strict";var n=t("69b3"),r=t("eafa"),i=t("e754"),s=t("7108");t("0aed")("match",1,(function(e,a,t,c){return[function(t){var n=e(this),r=void 0==t?void 0:t[a];return void 0!==r?r.call(t,n):new RegExp(t)[a](String(n))},function(e){var a=c(t,e,this);if(a.done)return a.value;var o=n(e),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var p,d=[],v=0;while(null!==(p=s(o,u))){var _=String(p[0]);d[v]=_,""===_&&(o.lastIndex=i(u,r(o.lastIndex),l)),v++}return 0===v?null:d}]}))},bfac:function(e,a,t){"use strict";var n=t("16a7"),r=t.n(n);r.a},d451:function(e,a,t){"use strict";t.r(a);var n,r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"buy"},[t("van-nav-bar",{attrs:{fixed:"",border:"",title:"积分充值","left-arrow":""},on:{"click-left":e.goBack}}),t("div",{staticClass:"buy_cent"},[t("p",{staticClass:"buy_title"},[e._v("订单信息")]),t("div",{staticClass:"buy_info"},[1==e.id?t("p",[t("span",[e._v("商品名称：")]),t("span",[e._v("开通VIP")])]):t("p",[t("span",[e._v("商品名称：")]),t("span",[e._v("积分充值")])]),t("p",[t("span",[e._v("订单编号：")]),t("span",[e._v(e._s(e.order_sn))])]),e._m(0),t("p",[t("span",[e._v("支付金额：")]),t("span",[e._v("￥"+e._s(e.price))])])])]),t("div",{staticClass:"payment"},[t("p",{staticClass:"buy_title"},[e._v("支付方式")]),t("van-button",{attrs:{type:"warning",size:"large",block:""},on:{click:e.apy}},[e._v("微信支付")])],1)],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[t("span",[e._v("商家名称：")]),t("span",[e._v("天集社")])])}],s=(t("f548"),t("9e76"),t("ac9f")),c=(t("03fd"),t("7c28")),o=(t("9d47"),t("bb63")),u=(t("7ea6"),t("45ba")),l=(t("9cf9"),t("fad3")),p=(t("b587"),t("e513")),d=(t("bc44"),t("6628")),v=(t("cc57"),t("be9b"),t("db43")),_=(t("00ca"),t("fa8b")),b=(t("a417"),{components:(n={},Object(s["a"])(n,v["a"].name,v["a"]),Object(s["a"])(n,d["a"].name,d["a"]),Object(s["a"])(n,p["a"].name,p["a"]),Object(s["a"])(n,l["a"].name,l["a"]),Object(s["a"])(n,u["a"].name,u["a"]),Object(s["a"])(n,o["a"].name,o["a"]),Object(s["a"])(n,c["a"].name,c["a"]),n),data:function(){return{value:"1600",order_sn:null,id:null,price:null,type:null}},created:function(){this.id=this.$route.query.odId,this.type=this.$route.query.type,this.price=this.$route.query.price,this.order_sn=this.$route.query.order_sn},methods:{goBack:function(){this.$router.back()},apy:function(){var e=this,a=navigator.userAgent.toLowerCase();"micromessenger"==a.match(/MicroMessenger/i)&&/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)?Object(_["k"])({order_sn:this.order_sn,id:this.id,type:this.type}).then((function(a){var t=JSON.parse(a.order_str),n=e;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg?(n.$dialog.alert({title:"温馨提示",message:"支付成功"}),n.$router.replace("/integral/index")):("get_brand_wcpay_request:cancel"==e.err_msg||n.$dialog.alert({title:"温馨提示",message:"支付失败"}),n.$router.replace("/integral/recharge"))}))})):this.$dialog.alert({title:"温馨提示",message:"请用手机进入平台支付"})}}}),g=b,f=(t("bfac"),t("623f")),h=Object(f["a"])(g,r,i,!1,null,"26c51b66",null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-556c088c.4.0.0.1587633753752.js.map